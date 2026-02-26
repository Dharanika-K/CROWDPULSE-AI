pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE = 'yourdockerhubusername/crowdpulse-ai'
        DOCKER_TAG = "${env.BUILD_ID}"
        EC2_USER = 'ubuntu'
        EC2_HOST = 'your-ec2-public-ip'
        SSH_CREDENTIALS_ID = 'ec2-ssh-key'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the application...'
                // In a real scenario, you might run tests or build artifacts here.
                // Since we are using a multi-stage Dockerfile, the build happens during docker build.
                sh 'echo "Application build step (handled by Docker multi-stage build)"'
            }
        }

        stage('Create & Push Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
                
                echo 'Pushing Docker image to Docker Hub...'
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS_ID) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2 instance...'
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                            docker pull ${DOCKER_IMAGE}:latest
                            docker stop crowdpulse-app || true
                            docker rm crowdpulse-app || true
                            docker run -d --name crowdpulse-app -p 8000:8000 -e MONGO_URI=mongodb://localhost:27017/ ${DOCKER_IMAGE}:latest
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
