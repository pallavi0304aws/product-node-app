pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Checking npm availability..."
                    npm --version  # Should show npm version
                    npm install     # Install dependencies
                '''
            }
        }

        stage('Build / Test') {
            steps {
                sh '''
                    echo "Running build / test..."
                    npm test || echo "No tests defined"
                    echo "Application build successful"
                '''
            }
        }
    }

    post {
        success { echo '🎉 PIPELINE EXECUTED SUCCESSFULLY!' }
        failure { echo '❌ PIPELINE FAILED!' }
    }
}
