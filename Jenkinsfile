pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker build -t finance-tracker-frontend:latest .'
      }
    }
  }
}
