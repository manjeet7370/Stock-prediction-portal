# 📈 Stock Prediction Portal

A full-stack Machine Learning-powered web application that predicts stock market trends using historical stock data. The platform combines a React frontend, Django REST backend, JWT authentication, and a trained Keras model to provide users with secure access to stock analytics and prediction insights.

## 🚀 Features

- User Registration & Login
- JWT-Based Authentication
- Protected Routes
- Stock Market Trend Prediction
- Historical Data Analysis
- Interactive Dashboard
- RESTful API Integration
- Responsive User Interface
- Machine Learning-Based Forecasting

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Axios
- React Router

### Backend
- Django
- Django REST Framework
- JWT Authentication

### Database
- SQLite3

### Machine Learning
- Python
- NumPy
- Pandas
- Keras

### Deployment
- Gunicorn

## 📂 Project Structure

```text
Stock-Prediction-Portal/
│
├── backend-drf/
│   ├── accounts/
│   ├── api/
│   ├── stock_prediction_main/
│   ├── stock_prediction_model.keras
│   ├── requirements.txt
│   └── manage.py
│
├── frontend-react/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── AuthProvider.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── PublicRoute.jsx
│   │   └── axiosInstance.js
│
└── README.md
```

## 🔄 Workflow

1. User registers or logs into the platform.
2. JWT tokens are generated for secure authentication.
3. Historical stock data is processed using NumPy and Pandas.
4. Trained Keras models generate stock predictions.
5. Django REST APIs serve prediction results.
6. React dashboard visualizes stock trends and predictions.

## 🔐 Authentication

The application uses JWT Authentication to provide:

- Secure User Login
- Token-Based Authorization
- Protected API Endpoints
- Secure Route Access

## 📊 Machine Learning Pipeline

- Data Collection
- Data Cleaning
- Feature Engineering
- Data Preprocessing
- Model Training
- Prediction Generation
- Result Visualization

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/manjeet7370/stock-prediction-portal.git
cd stock-prediction-portal
```

### Backend Setup

```bash
cd backend-drf

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend-react

npm install

npm start
```

## 🎯 Future Improvements

- Real-Time Stock Data Integration
- Portfolio Tracking
- Watchlist Functionality
- Advanced Prediction Models
- News Sentiment Analysis
- Live Market Alerts

## 👨‍💻 Author

**Manjeet Kumar**

B.Tech Mathematics & Computing  
Indian Institute of Information Technology, Bhagalpur

---

⭐ If you found this project useful, consider giving it a star.
