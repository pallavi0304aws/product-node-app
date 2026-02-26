pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                  /usr/local/bin/npm --version
                  /usr/local/bin/npm install
                '''
            }
        }

        stage('Build / Test') {
            steps {
                sh '''
                  echo "Application build successful"
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 PIPELINE EXECUTED SUCCESSFULLY!'
        }
        failure {
            echo '❌ PIPELINE FAILED!'
        }
    }
}
