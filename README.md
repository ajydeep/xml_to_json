# DataBridge: XML to JSON Converter with AWS S3

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![AWS S3](https://img.shields.io/badge/AWS-S3-orange)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

A cloud-ready service that converts XML files to JSON and stores them securely in AWS S3 with temporary access URLs.

## ✨ Features

- **File Conversion**: Transform XML to JSON while preserving structure
- **Secure Storage**: Private S3 bucket with pre-signed URLs (5-min expiry)
- **REST API**: Simple endpoints for integration
- **Error Handling**: Comprehensive validation and logging

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- AWS account with S3 access
- Git

### Installation
```bash
git clone https://github.com/ajydeep/xml_to_json.git
cd xml_to_json
npm install
```

### Configuration
1. Create `.env` file:
```ini
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1 (your s3 deployment region)
S3_BUCKET_NAME=your-bucket-name
PORT=3000
```

2. Start the server:
```bash
node app.js
```

##  API Documentation

### POST `/api/upload`
- **Content-Type**: `multipart/form-data`
- **Field**: `xmlFile` (XML file upload)
- **Success Response**:
```json
{
  "success": true,
  "downloadUrl": "https://your-bucket.s3.amazonaws.com/temp-url",
  "jsonPreview": {"sample": "data"}
}
```

##  Project Structure
```
xml_to_json/
├── public/           # Frontend assets
├── controllers/      # Business logic
├── services/         # AWS and XML services
├── routes/           # API endpoints
├── config/           # Multer and other configs
└── app.js            # Main application
```



##  Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

