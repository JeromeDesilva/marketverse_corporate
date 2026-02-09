pipeline {
    agent any

    environment {
        PATH = "/home/saro/.nvm/versions/node/v16.20.2/bin:$PATH"
        CI = "true"
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
    }
}
