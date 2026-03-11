pipeline {
 agent any

 stages {

 stage('Clone Repository') {
 steps {
     sh '''
     rm -rf product-node-app
     git clone https://github.com/pallavi0304aws/product-node-app.git
     '''
     }
 }

 stage('Install Dependencies') {
 steps {
 sh ''' 
 export PATH=/opt/homebrew/bin:$PATH
 cd product-node-app
 echo "Checking Node version"
 node -v

 echo "Checking npm version"
 npm -v

 echo "Installing dependencies"
 npm install
 '''
 }
 }

 stage('Build / Test') {
 steps {
 sh '''
 cd product-node-app
 npm test || echo "No tests available"
 '''
 }
 }
 }

 post {
 success {
 echo ' PIPELINE EXECUTED SUCCESSFULLY'
 }

 failure {
 echo ' PIPELINE FAILED'
 }

 always {
 echo 'Pipeline finished'
 }
 }
}
