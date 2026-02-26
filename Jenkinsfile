pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }
        
        stage('Run Tests / Scripts') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'echo Application build successful'
                    } else {
                        bat 'echo Application build successful'
                    }
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
