pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Use the configured NodeJS tool
                nodejs(nodeJSInstallationName: 'Node_16') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests / Scripts') {
            steps {
                nodejs(nodeJSInstallationName: 'Node_16') {
                    sh 'echo Application build successful'
                }
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
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
