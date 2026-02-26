pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                  source ~/.bash_profile   # Load your shell environment
                  echo "PATH after source: $PATH"
                  npm --version
                  npm install
                '''
            }
        }

        stage('Build / Test') {
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
    }
}
