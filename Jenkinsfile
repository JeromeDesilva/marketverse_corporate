pipeline {
    agent any

    environment {
        PATH = "/home/saro/.nvm/versions/node/v16.20.2/bin:$PATH"
        CI = "true"
        DOCKER_IMAGE = "marketverse-corporate:latest" // Docker image name
    }

    stages {
        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'Dev', url: 'https://github.com/JeromeDesilva/marketverse_corporate.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker run -d -p 4028:4028 --name marketverse_app ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        always {
            echo "Cleaning up old Docker containers"
            sh "docker rm -f marketverse_app || true"
        }
    }
}
