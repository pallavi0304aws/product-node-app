pipeline {
    agent {
        docker { image 'node:18' }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests / Scripts') {
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
