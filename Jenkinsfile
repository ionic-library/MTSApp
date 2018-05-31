pipeline {
    agent any

    stages {
        stage("Checkout") {
            checkout scm
        }
        stage("Prepare Environment"){
            echo 'Installing Dependencies'
            sh npm i
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
