pipeline {
    agent any

    environment {
        // Uses the Jenkins credential you created
        KUBE_CONFIG = credentials('kubeconfig-cred')
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Setup kubeconfig') {
            steps {
                script {
                    // Write kubeconfig to a file
                    writeFile file: 'kubeconfig', text: "${KUBE_CONFIG}"
                    env.KUBECONFIG = "${WORKSPACE}/kubeconfig"

                    // Verify cluster connection
                    sh 'kubectl config current-context'
                }
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
                        echo "🚀 Deploying to Dev environment..."
                        sh 'kubectl apply -f pooling-app/ -n dev'
                    } else if (env.BRANCH_NAME == 'prod') {
                        echo "🚀 Deploying to Prod environment..."
                        sh 'kubectl apply -f pooling-app/ -n prod'
                    } else {
                        echo "⚠️ Branch not configured for deployment."
                    }
                }
            }
        }
    }
}
