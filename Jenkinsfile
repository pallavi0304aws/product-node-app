pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                // Optional: If Jenkins doesn’t auto-checkout
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install node_modules
                sh 'npm install'
            }
        }

        stage('Build / Test') {
            steps {
                // You can add more commands like npm test or npm run build
                sh 'echo Application build successful'
                // For example: sh 'npm test'
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
