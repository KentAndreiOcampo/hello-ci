pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Install') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}