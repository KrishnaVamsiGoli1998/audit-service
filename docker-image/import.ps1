# Import script for Audit Service
Write-Host "Importing Audit Service Docker image..."
docker load -i audit-service.tar
Write-Host "Audit Service image imported successfully!"