# Audit Service

System activity logging microservice for the Scalable Microservices Application.

## Features

- Log system activities for auditing purposes
- Secure storage of audit logs
- Searchable audit history

## Prerequisites

- Docker Desktop
- Node.js (for development)
- Kubernetes (optional, for k8s deployment)

## Quick Start

### Using Pre-built Docker Image

1. Import the Docker image:

   ```
   cd docker-image
   .\import.ps1
   ```

2. Start the service:
   ```
   cd ..
   docker-compose up -d
   ```

### Building from Source

1. Build and start the service:
   ```
   docker-compose up -d --build
   ```

### Kubernetes Deployment

1. Apply the Kubernetes configuration:

   ```
   kubectl apply -f k8s-deployment.yaml
   ```

2. Check the deployment status:
   ```
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

## API Endpoints

- `GET /audit-logs` - Get all audit logs
- `GET /audit-logs/:id` - Get a specific audit log
- `POST /audit-logs` - Create a new audit log
- `GET /audit-logs/search` - Search audit logs

## Environment Variables

Create a `.env` file with the following variables:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_NAME=your_db_name
```

## Development

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

## Docker Commands

- Build the image:

  ```
  docker build -t audit-service .
  ```

- Run the container:

  ```
  docker run -p 4004:4004 --env-file .env audit-service
  ```

- Save the image:

  ```
  docker save audit-service:latest -o audit-service.tar
  ```

- Load the image:
  ```
  docker load -i audit-service.tar
  ```
