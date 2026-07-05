pipeline {

agent any


environment {

    MONGO_URI = credentials("MONGO_URI")

    JWT_SECRET = credentials("JWT_SECRET")

}

    tools {
        nodejs "node22"
    }


    stages {


        stage("Checkout Code") {

            steps {

                echo "Downloading code from GitHub"

                checkout scm

            }

        }


        stage("Backend Install") {

            steps {

                echo "Installing Backend Dependencies"

                dir("backend") {

                    bat "npm install"

                }

            }

        }


        stage("Frontend Install") {

            steps {

                echo "Installing Frontend Dependencies"

                dir("frontend") {

                    bat "npm install"

                }

            }

        }


        stage("Frontend Build") {

            steps {

                echo "Building React Production Build"

                dir("frontend") {

                    bat "npm run build"

                }

            }

        }
        stage("Create Environment File") {

    steps {

        echo "Creating backend environment file"

        writeFile file: "backend/.env",
        text: """
PORT=5000
MONGO_URI=${env.MONGO_URI}
JWT_SECRET=${env.JWT_SECRET}
"""

    }

}


        stage("Docker Build") {

            steps {

                echo "Building Docker Images"

                bat "docker compose build"

            }

        }


        stage("Docker Deploy") {

            steps {

                echo "Stopping Old Containers"

                bat "docker compose down"


                echo "Starting New Containers"

                bat "docker compose up -d"

            }

        }

    }


    post {


        success {

            echo "CI/CD Pipeline Completed Successfully"

        }


        failure {

            echo "CI/CD Pipeline Failed"

        }

    }

}