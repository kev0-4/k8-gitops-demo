# k8-gitops-demo


pipeline {
    agent any

    environment {
        KUBECONFIG = credentials('kubeconfig-cred')  // Jenkins credential ID for your kubeconfig
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    if (env.GIT_BRANCH == 'origin/dev') {
                        echo "Deploying to Dev Environment..."
                        sh '''
                        kubectl apply -f pooling-app/ --namespace=dev
                        '''
                    } else if (env.GIT_BRANCH == 'origin/prod') {
                        echo "Deploying to Prod Environment..."
                        sh '''
                        kubectl apply -f pooling-app/ --namespace=prod
                        '''
                    } else {
                        echo "Branch not recognized for deployment."
                    }
                }
            }
        }
    }
}
