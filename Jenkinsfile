pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        SELENIUM_HOST = 'selenium'
        APP_URL = 'http://jenkins:3000'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                sh 'node src/app.js &'
                sleep 5
            }
        }

        stage('UI Test') {
            steps {
                sh 'npx jest tests/e2e/home.test.js --reporters=default --reporters=jest-junit'
            }
        }
    }

    post {
        always {
            junit 'junit.xml'
        }
    }
}