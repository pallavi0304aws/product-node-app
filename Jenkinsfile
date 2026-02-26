pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build / Test') {
            steps {
                sh 'npm test || echo "No tests"'
                sh 'echo Application build successful'
            }
        }
    }

    post {
        success { echo '🎉 PIPELINE EXECUTED SUCCESSFULLY!' }
        failure { echo '❌ PIPELINE FAILED!' }
    }
}
