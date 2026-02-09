pipeline {
    agent any
    tools { nodejs "NodeJS_16" } // Node version configured in Jenkins
    stages {
        stage('Checkout') {
            steps {
                git branch: 'Dev', url: 'https://github.com/JeromeDesilva/marketverse_corporate.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Preview / Serve') {
            steps {
                sh 'npm run serve' // This runs `vite preview` on localhost
            }
        }
    }
}
