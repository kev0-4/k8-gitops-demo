import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">Kubernetes Info</div>
          <div className="nav-links">
            <a href="https://kubernetes.io/docs/home/" target="_blank" rel="noreferrer">Docs</a>
            <a href="https://kubernetes.io/docs/concepts/" target="_blank" rel="noreferrer">Concepts</a>
            <a href="https://kubernetes.io/docs/tutorials/" target="_blank" rel="noreferrer">Tutorials</a>
            <a href="https://github.com/kubernetes/kubernetes" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://kubernetes.io/blog/" target="_blank" rel="noreferrer">Blog</a>
            <a href="https://kubernetes.io/docs/reference/kubectl/cheatsheet/" target="_blank" rel="noreferrer">kubectl Cheat Sheet</a>
            <a href="https://kubernetes.slack.com/" target="_blank" rel="noreferrer">Slack</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1>What is Kubernetes?</h1>
        <p className="subtitle">
        Kubernetes (often abbreviated as K8s) is an open‑source platform for automating deployment,
        scaling, and management of containerized applications. It helps you run applications reliably
        in production across clusters of machines.
        </p>

        <div className="section">
          <h2>Why use Kubernetes?</h2>
          <ul>
            <li><strong>Self‑healing</strong>: Restarts failed containers and reschedules them on healthy nodes.</li>
            <li><strong>Scalability</strong>: Scales apps up and down automatically based on demand.</li>
            <li><strong>Service discovery & load balancing</strong>: Exposes apps and balances traffic.</li>
            <li><strong>Declarative configuration</strong>: Desired state defined in YAML; K8s reconciles reality to it.</li>
            <li><strong>Portability</strong>: Runs on cloud, on‑prem, and local environments.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Core building blocks</h2>
          <ul>
            <li><strong>Pod</strong>: Smallest deployable unit; one or more containers that share networking and storage.</li>
            <li><strong>Deployment</strong>: Manages replica Pods and rolling updates.</li>
            <li><strong>Service</strong>: Stable networking endpoint to reach a set of Pods.</li>
            <li><strong>ConfigMap/Secret</strong>: Externalize configuration and sensitive values.</li>
            <li><strong>Ingress</strong>: HTTP(S) routing into Services from outside the cluster.</li>
            <li><strong>Node</strong>: Worker machine that runs Pods; a cluster is made of many nodes.</li>
          </ul>
        </div>

        <div className="section">
          <h2>How it works (at a glance)</h2>
          <ol>
            <li>You describe desired state (e.g., a Deployment with 3 replicas) in YAML.</li>
            <li>The control plane schedules Pods onto available nodes.</li>
            <li>Controllers constantly reconcile actual state to match desired state.</li>
          </ol>
        </div>

        <div className="section">
          <h2>Kubernetes Pooling (Node Pools)</h2>
          <p>
            In many managed Kubernetes offerings, <strong>node pools</strong> (sometimes referred to informally as
            <em> pooling</em>) are groups of worker nodes with similar configuration (machine size, OS, labels).
            Pools let you run different kinds of workloads on appropriately sized nodes and scale them independently.
          </p>
          <ul>
            <li><strong>Workload separation</strong>: e.g., GPU pool for ML, general pool for web apps.</li>
            <li><strong>Independent scaling</strong>: scale a pool up/down without affecting others.</li>
            <li><strong>Scheduling control</strong>: use node labels/taints to route Pods to the right pool.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Learn more</h2>
          <ul className="resource-list">
            <li><a href="https://kubernetes.io/docs/home/" target="_blank" rel="noreferrer">Kubernetes Docs</a></li>
            <li><a href="https://kubernetes.io/docs/concepts/" target="_blank" rel="noreferrer">Concepts</a></li>
            <li><a href="https://kubernetes.io/docs/tutorials/" target="_blank" rel="noreferrer">Tutorials</a></li>
            <li><a href="https://kubernetes.io/docs/reference/kubectl/cheatsheet/" target="_blank" rel="noreferrer">kubectl Cheat Sheet</a></li>
            <li><a href="https://github.com/kubernetes/kubernetes" target="_blank" rel="noreferrer">Kubernetes on GitHub</a></li>
            <li><a href="https://kubernetes.io/blog/" target="_blank" rel="noreferrer">Kubernetes Blog</a></li>
            <li><a href="https://kubernetes.slack.com/" target="_blank" rel="noreferrer">Kubernetes Slack</a></li>
          </ul>
        </div>

        <p className="footer-tip">
          Tip: Try minikube or kind to run a local Kubernetes cluster.
        </p>
      </div>
    </>
  )
}

export default App
