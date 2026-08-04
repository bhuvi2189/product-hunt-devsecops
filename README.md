# 🚀 Product Hunt Frontend - End-to-End DevSecOps Project

## 📌 Project Overview

This project demonstrates an **end-to-end DevSecOps CI/CD pipeline** for deploying a React-based Product Hunt Frontend application using modern DevOps and GitOps practices.

The complete pipeline automates:

- Source Code Management using GitHub
- Continuous Integration using Jenkins
- Code Quality Analysis using SonarQube
- Container Security Scanning using Trivy
- Docker Image Build & Push to Docker Hub
- GitOps Deployment using ArgoCD
- Kubernetes Deployment using Kind
- Monitoring using Prometheus & Grafana

---

# 🏗️ Architecture

```
Developer
     │
     ▼
 GitHub Repository
     │
     ▼
 Jenkins Pipeline
     │
     ├────────► SonarQube Scan
     │
     ├────────► Trivy Security Scan
     │
     ├────────► Docker Build
     │
     ├────────► Docker Push (Docker Hub)
     │
     └────────► Update Kubernetes Manifest
                      │
                      ▼
                  GitHub Repo
                      │
                      ▼
                   ArgoCD
                      │
                      ▼
                 Kubernetes (Kind)
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     Product Hunt App      Prometheus
                                   │
                                   ▼
                               Grafana
```

---

# 🛠 Tech Stack

| Category | Tools |
|----------|-------|
| SCM | Git, GitHub |
| CI | Jenkins |
| Code Analysis | SonarQube |
| Security | Trivy |
| Containerization | Docker |
| Registry | Docker Hub |
| Orchestration | Kubernetes (Kind) |
| GitOps | ArgoCD |
| Monitoring | Prometheus |
| Visualization | Grafana |
| Application | React.js |

---

# 📁 Project Structure

```
.
├── Jenkinsfile
├── Dockerfile
├── package.json
├── src/
├── public/
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── README.md
```

---

# ⚙ CI/CD Pipeline Workflow

### 1. Checkout Source Code

Jenkins fetches the latest code from GitHub.

---

### 2. SonarQube Analysis

- Static Code Analysis
- Code Quality Check
- Bug Detection
- Vulnerability Detection

---

### 3. Build Docker Image

```
docker build
```

---

### 4. Trivy Security Scan

Scans Docker Image for

- High Vulnerabilities
- Critical Vulnerabilities

---

### 5. Push Image to Docker Hub

```
docker push
```

---

### 6. Update Kubernetes Manifest

Automatically updates

```
k8s/deployment.yaml
```

with the latest Docker image tag.

---

### 7. Push Updated Manifest

Jenkins commits and pushes the updated Kubernetes manifest to GitHub.

---

### 8. ArgoCD GitOps Deployment

ArgoCD automatically detects repository changes and synchronizes the Kubernetes cluster.

---

### 9. Kubernetes Deployment

Application gets deployed automatically.

---

### 10. Monitoring

Prometheus collects metrics.

Grafana visualizes:

- CPU Usage
- Memory Usage
- Network Usage
- Node Metrics
- Kubernetes Metrics

---

# 🚀 Tools Used

- Jenkins
- SonarQube
- Docker
- Docker Hub
- Kubernetes
- Kind
- ArgoCD
- Prometheus
- Grafana
- GitHub

---

# 📊 Monitoring

## Prometheus

Used for:

- Cluster Metrics
- Node Metrics
- Application Metrics

---

## Grafana

Dashboards:

- Node Exporter Dashboard
- Kubernetes Monitoring Dashboard

---

# 🔒 Security

✔ SonarQube Code Analysis

✔ Trivy Image Scan

✔ Docker Best Practices

✔ GitOps Deployment

---

# 📸 Screenshots

Add screenshots for:

- Jenkins Pipeline
- SonarQube Dashboard
- Trivy Scan
- Docker Hub Repository
- Kubernetes Pods
- ArgoCD Dashboard
- Product Hunt Application
- Prometheus Dashboard
- Grafana Dashboard

---

# ▶ How to Run

## Clone Repository

```bash
git clone https://github.com/bhuvi2189/product-hunt-devsecops.git
```

---

## Build Docker Image

```bash
docker build -t admantbhuvi/product-hunt-frontend .
```

---

## Run Docker Container

```bash
docker run -p 3000:3000 admantbhuvi/product-hunt-frontend
```

---

## Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

# 📈 Features

- Automated CI/CD Pipeline
- Static Code Analysis
- Security Scanning
- Dockerized Application
- GitOps Deployment
- Kubernetes Deployment
- Automatic Image Versioning
- Monitoring & Visualization

---

# 👨‍💻 Author

**Bhuvanesh**

GitHub:
https://github.com/bhuvi2189

LinkedIn:
(Add your LinkedIn URL)

Portfolio:
(Add your Portfolio URL)

---

# ⭐ Future Improvements

- Email Notifications
- Slack Notifications
- Alertmanager Alerts
- TLS/HTTPS
- Terraform Infrastructure
- Helm Charts
- Horizontal Pod Autoscaler (HPA)
- Application Metrics Dashboard

---

# 📄 License

This project is created for learning and demonstration purposes.
