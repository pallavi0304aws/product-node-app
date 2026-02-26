
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Test Script') {
            steps {
                sh 'echo Application build successful'
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
