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
                echo 'Installing Dependencies'
                sh npm i
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh ionic build
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                npm run test-ci
            }
        }
    }
}
