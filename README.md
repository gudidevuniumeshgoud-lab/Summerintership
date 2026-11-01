# 🚀 Automated CI/CD Pipeline for Containerized Student Management System.

## 📌 Project Overview

This project demonstrates a complete **DevOps workflow from code development to automated deployment** using a full-stack Student Management System.

The main objective of this project is to implement modern DevOps practices including:

- Version Control using Git & GitHub
- Application Containerization using Docker
- Multi-container management using Docker Compose
- Continuous Integration and Continuous Deployment (CI/CD) using Jenkins
- Automated build and deployment pipeline
- Cloud database integration using MongoDB Atlas


The application is a MERN-based Student Management System used as a real-world application to demonstrate DevOps automation.

---

# 🎯 Project Objective

Traditional software deployment involves:

```
Developer writes code

        ↓

Manual dependency installation

        ↓

Manual build

        ↓

Manual deployment

        ↓

Environment issues
```

Problems:

- Time consuming deployment
- Manual errors
- Different environments behave differently
- Difficult collaboration


This project solves these issues using:

```
Developer

    ↓

GitHub

    ↓

Jenkins CI/CD Pipeline

    ↓

Docker Build

    ↓

Container Deployment

    ↓

Running Application
```

---

# 🏗 System Architecture


```
                    User

                     |

                     ↓

              React Frontend

              (Container)

                     |

                     ↓

              Express Backend

              (Container)

                     |

                     ↓

              MongoDB Atlas

              (Cloud Database)

```

---

# ⚙️ Technology Stack

## Frontend

- React.js
- Vite
- Axios
- CSS


## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication


## Database

- MongoDB Atlas


## DevOps Tools

- Git
- GitHub
- Docker
- Docker Compose
- Jenkins
- GitHub Webhook

---

# 📂 Project Structure


```
student-management-ci-cd


│

├── backend/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── middleware/

│   ├── server.js

│   ├── Dockerfile

│   └── .env


│

├── frontend/

│   ├── src/

│   ├── components/

│   ├── pages/

│   ├── Dockerfile


│

├── docker-compose.yml


├── Jenkinsfile


└── README.md

```

---

# ✨ Application Features

## Authentication

- Secure user login
- JWT based authentication
- Protected routes


## Student Management

- Add students
- View student records
- Update student information
- Delete students


## Dashboard

- Student statistics
- Analytics charts
- Recent student records


---

# 🐳 Docker Implementation

Docker is used to containerize the frontend and backend applications.

## Why Docker?

Docker solves:

> "Application works on my machine but not on another machine"


Docker packages:

- Application code
- Dependencies
- Runtime environment


into a portable container.

---

## Backend Dockerfile


```dockerfile
FROM node:22-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 5000


CMD ["npm","run","dev"]
```

---

## Frontend Dockerfile


```dockerfile
FROM node:22-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 5173


CMD ["npm","run","dev","--","--host"]
```

---

# 🐳 Docker Compose Workflow


Docker Compose manages multiple containers.


```
docker-compose.yml


        |

        |


 ---------------------

 |                   |

Frontend          Backend

Container         Container


                     |

                     ↓

              MongoDB Atlas

```

Run complete application:

```bash
docker compose up -d
```

Stop application:

```bash
docker compose down
```


Check containers:


```bash
docker ps
```

---

# 🔄 CI/CD Pipeline Using Jenkins


Jenkins automates the complete software delivery process.


Pipeline workflow:


```

Developer


    ↓


git push


    ↓


GitHub Repository


    ↓


GitHub Webhook


    ↓


Jenkins Pipeline


    ↓


Checkout Code


    ↓


Install Dependencies


    ↓


Build Application


    ↓


Create Docker Images


    ↓


Deploy Containers


    ↓


Application Running

```

---

# Jenkins Pipeline Stages


## Stage 1: Checkout Code

Jenkins pulls latest code from GitHub.


```
GitHub → Jenkins Workspace
```


---


## Stage 2: Backend Installation


Installs backend dependencies.


```bash
npm install
```


---


## Stage 3: Frontend Installation


Installs frontend dependencies.


```bash
npm install
```


---


## Stage 4: Frontend Build


Creates production build.


```bash
npm run build
```


---


## Stage 5: Docker Build


Creates Docker images.


```bash
docker compose build
```


---


## Stage 6: Deployment


Deploys latest containers.


```bash
docker compose up -d
```


---

# 🌐 Database Configuration


MongoDB Atlas is used as the cloud database.


Environment variables:


```
PORT=5000


MONGO_URI=mongodb+srv://cluster-url


JWT_SECRET=secret_key

```

Sensitive information is stored securely using environment variables.

---

# 🚀 Running Project Locally


## 1. Clone Repository


```bash
git clone <repository-url>
```


Move into project:


```bash
cd student-management-ci-cd
```


---

## 2. Create Backend Environment File


Create:


```
backend/.env
```


Add:


```
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret

```


---

## 3. Start Using Docker


```bash
docker compose up --build
```


Application:


Frontend:


```
http://localhost:5173
```


Backend:


```
http://localhost:5000
```


---

# 📌 DevOps Workflow Summary


```
Code

 ↓

Git Commit

 ↓

GitHub Push

 ↓

Jenkins Trigger

 ↓

Build

 ↓

Docker Image

 ↓

Container Deployment

 ↓

Application Running

```

---

# Challenges Faced


## Environment Compatibility

Problem:

Different machines require different setup.


Solution:

Docker containerization.


---


## Manual Deployment


Problem:

Deploying manually takes time.


Solution:

Automated Jenkins CI/CD pipeline.


---


## Configuration Management


Problem:

Handling sensitive data.


Solution:

Environment variables.

---

# Future Enhancements


- Deploy Jenkins pipeline on AWS EC2

- Add Kubernetes orchestration

- Add automated testing stage

- Add Docker image registry

- Add monitoring using Prometheus and Grafana


---

# Learning Outcomes


Through this project, I learned:


- Complete software development lifecycle

- Git and GitHub workflow

- Docker containerization

- Multi-container application management

- Jenkins pipeline creation

- CI/CD automation

- Deployment strategies


---

# Conclusion


This project successfully demonstrates a complete DevOps workflow by automating the process from source code management to containerized deployment.


It bridges the gap between development and operations using modern DevOps tools and practices.
trail

