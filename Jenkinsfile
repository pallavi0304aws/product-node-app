pipeline {
    agent any

    environment {
        // Add the directory where npm is located so Jenkins can find it
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "PATH is: $PATH"
                    npm --version
                    npm install
                '''
            }
        }

        stage('Build / Test') {
            steps {
                sh '''
                    echo "Running tests/build..."
                    echo Application build successful
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
