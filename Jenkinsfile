pipeline {

    agent any


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

                echo "Building React Application"

                dir("frontend") {

                    bat "npm run build"

                }

            }

        }



        stage("Docker Build") {

            steps {

                echo "Building Docker Images"

                bat "docker compose build"

            }

        }

    }



    post {

        success {

            echo "CI Pipeline Completed Successfully"

        }


        failure {

            echo "CI Pipeline Failed"

        }

    }

}