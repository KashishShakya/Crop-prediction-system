# 🌾 Crop Recommendation System

A machine learning-powered web application that recommends the most suitable crop based on soil and environmental conditions. Users provide soil nutrient levels and weather parameters, and the system predicts the best crop to cultivate.

## 🚀 Features

- Predict crop based on:
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Temperature
  - Humidity
  - pH
  - Rainfall
- Machine Learning-based prediction using Random Forest.
- Responsive React frontend.
- Flask REST API backend.
- Real-time prediction results.
- JSON-based communication between frontend and backend.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Python
- Flask
- Flask-CORS
- NumPy

### Machine Learning
- Pandas
- Scikit-learn
- Random Forest Classifier
- Pickle

---

## 📂 Project Structure

```text
crop-recommendation-system/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
│
├── model_training/
│   ├── train_model.py
│   └── Crop_recommendation.csv
│
└── README.md
```

---

## 🧠 Model Training

The model is trained using the Crop Recommendation Dataset.

### Features

| Feature | Description |
|----------|------------|
| N | Nitrogen Content |
| P | Phosphorus Content |
| K | Potassium Content |
| Temperature | Temperature (°C) |
| Humidity | Relative Humidity (%) |
| pH | Soil pH Value |
| Rainfall | Rainfall (mm) |

### Algorithm Used

- Random Forest Classifier

### Training Workflow

1. Load dataset using Pandas.
2. Split dataset into training and testing sets.
3. Train Random Forest model.
4. Evaluate model accuracy.
5. Serialize model using Pickle.
6. Serve model through Flask API.

---

## 🔌 API Endpoint

### Predict Crop

**POST** `/predict`

### Request Body

```json
{
  "nitrogen": 90,
  "phosphorus": 42,
  "potassium": 43,
  "temperature": 21.0,
  "humidity": 82.0,
  "ph": 6.5,
  "rainfall": 203.0
}
```

### Response

```json
{
  "prediction": "rice"
}
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/crop-recommendation-system.git
cd crop-recommendation-system
```

### 2. Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate environment:

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install flask flask-cors numpy pandas scikit-learn
```

Run backend:

```bash
python app.py
```

Server starts at:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start React app:

```bash
npm start
```

Application runs at:

```text
http://localhost:3000
```

---

## 📸 Application Workflow

1. User enters soil nutrient values and weather conditions.
2. React frontend sends data to Flask API.
3. Flask loads the trained Random Forest model.
4. Model predicts the most suitable crop.
5. Prediction is returned as JSON.
6. React displays the recommended crop.

---

## 🔍 Sample Prediction

| Input Parameter | Value |
|---------------|-------|
| Nitrogen | 36 |
| Phosphorus | 58 |
| Potassium | 25 |
| Temperature | 28.66 |
| Humidity | 59.31 |
| pH | 8.39 |
| Rainfall | 36.92 |

### Output

```text
Predicted Crop: chickpea
```

---

## 🎯 Future Enhancements

- Weather API integration
- Fertilizer recommendation system
- Crop yield prediction
- Deployment using Docker
- Cloud hosting (AWS, Render, Railway)
- User authentication and prediction history

---

## 👨‍💻 Author

**Kashish**

Machine Learning | Full Stack Development | React.js | Python
