pipeline {

    agent any

    environment {
        SCANNER_HOME = tool 'SonarScanner'
        DOCKER_IMAGE = "admantbhuvi/product-hunt-frontend"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking source code'
                checkout scm
            }
        }


        stage('SonarQube Scan') {
            steps {

                echo 'Running SonarQube Scan'

                withSonarQubeEnv('SonarQube') {

                    sh """
                    ${SCANNER_HOME}/bin/sonar-scanner
                    """

                }
            }
        }


        stage('Build Docker Image') {

            steps {

                echo 'Building Docker Image'

                sh """
                docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} .
                """

            }
        }


        stage('Trivy Image Scan') {

            steps {

                echo 'Scanning Docker Image'

                sh """
                trivy image --no-progress --severity HIGH,CRITICAL ${DOCKER_IMAGE}:${IMAGE_TAG}
                """

            }
        }


        stage('Docker Login & Push') {

            steps {

                echo 'Login and Push Docker Image'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {


                    sh """

                    echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin


                    docker push ${DOCKER_IMAGE}:${IMAGE_TAG}


                    """

                }

            }
        }


        stage('Update Kubernetes Manifest') {

            steps {

                echo 'Updating Kubernetes deployment file'


                sh """

                sed -i 's|image: .*|image: ${DOCKER_IMAGE}:${IMAGE_TAG}|g' k8s/deployment.yaml


                """

            }
        }



        stage('Commit & Push Manifest') {

            steps {


                withCredentials([
                    usernamePassword(
                        credentialsId: 'github-token',
                        usernameVariable: 'GIT_USER',
                        passwordVariable: 'GIT_TOKEN'
                    )
                ]) {


                    sh """

                    git config user.email "bhuvnesh2189@gmail.com"

                    git config user.name "Bhuvanesh"


                    git add k8s/deployment.yaml


                    git commit -m "Update image version ${IMAGE_TAG}" || true


                    git push https://\$GIT_USER:\$GIT_TOKEN@github.com/bhuvi2189/product-hunt-devsecops.git HEAD:main


                    """

                }

            }
        }

    }


    post {


        always {

            echo 'Pipeline Finished'

        }


        success {

            echo 'Pipeline Executed Successfully'

        }


        failure {

            echo 'Pipeline Failed'

        }

    }

}
