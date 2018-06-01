pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps{
                checkout scm
            }
        }
        stage("Unit Tests") {
            steps {
                sh 'npm run test-ci'
            }
        }
    }
}
