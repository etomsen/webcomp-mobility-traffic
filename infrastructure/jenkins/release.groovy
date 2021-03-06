pipeline {
    agent {
        dockerfile {
            filename 'infrastructure/docker/dockerfile'
            additionalBuildArgs '--build-arg JENKINS_USER_ID=$(id -u jenkins) --build-arg JENKINS_GROUP_ID=$(id -g jenkins)'
        }
    }

    options {
        ansiColor('xterm')
    }

    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Version (without a leading "v")', trim: true)
    }

    environment {
        GIT_REPOSITORY = "git@github.com:noi-techpark/webcomp-mobility-traffic.git"
        GIT_BRANCH = "development"

        CLIENT_SECRET = credentials("it.bz.opendatahub.webcomponents.mobility-traffic")
        CLIENT_ID = "it.bz.opendatahub.webcomponents.mobility-traffic"
        TOKEN_URL = "https://auth.opendatahub.bz.it/auth/realms/noi/protocol/openid-connect/token"
    }

    stages {
        stage('Clean') {
            steps {
                sh 'rm -rf dist build cdn/noi'
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Configure') {
            steps {
                sh """
                    rm -rf .env
                    echo 'CLIENT_SECRET=$CLIENT_SECRET' >> .env
                    echo 'CLIENT_ID=$CLIENT_ID' >> .env
                    echo 'TOKEN_URL=$TOKEN_URL' >> .env
                """
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build:cdn'
            }
        }
        stage('Update wcs-manifest.json') {
            steps {
                sh """
                    ls cdn/noi/ | jq -R -s -c 'split("\\n")[:-1]' | jq '.' > files-list.json
                    jq '.dist.files = input' wcs-manifest.json files-list.json > wcs-manifest-tmp.json
                    mv wcs-manifest-tmp.json wcs-manifest.json
                    rm -f files-list.json
                """
            }
        }
        stage('Git Tag') {
            steps {
                sshagent (credentials: ['jenkins_github_ssh_key']) {
                    sh """
                        git config --global user.email "info@opendatahub.bz.it"
                        git config --global user.name "Jenkins"
                        git remote set-url origin ${GIT_REPOSITORY}
                        git add cdn/noi/*
                        git add -A
                        git commit --allow-empty -m "Version ${VERSION}"
                        git tag --delete v${VERSION} || true
                        git push origin :${VERSION} || true
                        git tag -a v${VERSION} -m "Version ${VERSION}"
                        mkdir -p ~/.ssh
                        ssh-keyscan -H github.com >> ~/.ssh/known_hosts
                        git push origin HEAD:${GIT_BRANCH}
                        git push origin v${VERSION}
                    """
                }
            }
        }
    }
}
