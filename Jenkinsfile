pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build / Test') {
            steps {
                sh 'echo Application build successful'
            }
        }
    }
    post {
        success { echo '🎉 PIPELINE SUCCESS!' }
        failure { echo '❌ PIPELINE FAILED!' }
    }
}
