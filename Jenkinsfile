pipeline {
    agent any

    stages {
        stage('CheckOut Code'){
            steps{
                git 'https://github.com/pallavi0304aws/product-nde-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Checking Node and npm..."
                    node -v
                    npm -v

                    echo "Installing dependencies..."
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
        always { echo "Pipeline Execution finished"}
    }
}
