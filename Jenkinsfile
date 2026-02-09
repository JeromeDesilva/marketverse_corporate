pipeline {
    agent any
    environment {
        PATH = "/home/saro/.nvm/versions/node/v16.20.2/bin:$PATH"
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
            steps { sh 'npm install' }
        }
        stage('Build') {
            steps { sh 'npm run build' }
        }
        stage('Preview') {
            steps { sh 'npm run serve -- --port 4028' }
        }
    }
}
