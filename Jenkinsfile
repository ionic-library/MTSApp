pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps{
                checkout scm
            }
        }
        stage("Prepare Environment"){
            steps {
                sh 'npm install'
            }
        }
    }
}
