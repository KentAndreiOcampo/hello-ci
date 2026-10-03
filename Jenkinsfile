pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        SELENIUM_HOST = 'selenium'
        APP_URL = 'http://jenkins:3000'
        BUILD_ID = 'dontKillMe'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('UI Test') {
            steps {
                sh '''
                    nohup node src/app.js > app.log 2>&1 &
                    sleep 3
                    npx jest tests/e2e/home.test.js --reporters=default --reporters=jest-junit
                '''
            }
        }
    }

    post {
        always {
            junit 'junit.xml'
            sh 'pkill -f "node src/app.js" || true'
        }
    }
}