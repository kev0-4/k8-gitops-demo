pipeline {
    agent any

    environment {
        KUBE_CONFIG_DATA = credentials('kubeconfig-cred')  // secret text content
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
                    // Write kubeconfig content to a file Jenkins can use
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
                    // Decide where to deploy based on branch
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
