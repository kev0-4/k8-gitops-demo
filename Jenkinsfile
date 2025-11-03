pipeline {
    agent {
        docker {
            image 'bitnami/kubectl:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        KUBE_CONFIG_DATA = credentials('kubeconfig-cred')  // Secret text credential
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Setup Kubeconfig') {
            steps {
                script {
                    sh '''
                    echo "$KUBE_CONFIG_DATA" > kubeconfig
                    export KUBECONFIG=$PWD/kubeconfig
                    kubectl config current-context
                    '''
                }
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    if (env.GIT_BRANCH == 'origin/dev') {
                        echo "🚀 Deploying to Dev Environment..."
                        sh '''
                        export KUBECONFIG=$PWD/kubeconfig
                        kubectl apply -f pooling-app/ --namespace=dev
                        '''
                    } else if (env.GIT_BRANCH == 'origin/prod') {
                        echo "🚀 Deploying to Prod Environment..."
                        sh '''
                        export KUBECONFIG=$PWD/kubeconfig
                        kubectl apply -f pooling-app/ --namespace=prod
                        '''
                    } else {
                        echo "⚠️ Branch not recognized for deployment. Skipping."
                    }
                }
            }
        }
    }
}
