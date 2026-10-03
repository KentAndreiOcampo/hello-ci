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

        stage('Check Jest') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ls jest jest-circus'
                sh 'ls -la node_modules/jest-circus/build/'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}