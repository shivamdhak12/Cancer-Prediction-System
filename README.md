# Cancer Prediction System

A Machine Learning-based web application that predicts cancer risk using patient health and lifestyle factors. The system uses a Random Forest Classifier and provides real-time predictions through a Flask web application.

## Features

* Cancer risk prediction using Machine Learning
* Random Forest Classifier for high accuracy
* Real-time prediction through Flask API
* Interactive and responsive user interface
* Risk score calculation and health recommendations

## Tech Stack

* Python
* Pandas
* NumPy
* Scikit-learn
* Flask
* HTML
* CSS
* JavaScript
* Pickle

## Machine Learning Workflow

### 1. Data Collection

* Used the Cancer Dataset containing patient health and lifestyle information.
* Features include Age, Gender, BMI, Smoking, Genetic Risk, Physical Activity, Alcohol Intake, and Cancer History.

### 2. Data Preprocessing

* Loaded the dataset using Pandas.
* Checked for missing values and duplicates.
* Removed duplicate records to improve data quality.
* Separated features and target variables.

### 3. Exploratory Data Analysis (EDA)

* Analyzed dataset structure and feature distributions.
* Examined relationships between health factors and cancer diagnosis.
* Identified important predictive features.

### 4. Feature Engineering

* Selected relevant features for model training.
* Maintained proper feature ordering for deployment consistency.

### 5. Model Training

* Split data into training and testing sets.
* Trained a Random Forest Classifier on the training data.
* Tuned model parameters for better performance.

### 6. Model Evaluation

* Evaluated the model using:

  * Accuracy Score
  * Classification Report
  * Confusion Matrix
* Verified model performance on unseen test data.

### 7. Model Serialization

* Saved the trained model using Pickle.
* Stored feature column names for deployment.

### 8. Backend Development

* Developed REST APIs using Flask.
* Loaded the trained model and processed user inputs.
* Generated predictions and risk scores.

### 9. Frontend Development

* Built a responsive user interface using HTML, CSS, and JavaScript.
* Collected patient information through forms.
* Displayed prediction results dynamically.

### 10. Deployment Workflow

User Input → Frontend → Flask API → Random Forest Model → Prediction → Risk Score → Result Display

## Project Structure

Cancer-Prediction-System/

├── app2.py

├── cancer_model.pkl

├── model_columns.pkl

├── requirements.txt

├── README.md

├── templates2/

│ └── index2.html

├── static2/

│ ├── style2.css

│ └── script2.js

└── The_Cancer_data_1500_V2.csv

## Installation

pip install -r requirements.txt

## Run the Application

python app2.py

Open:

http://127.0.0.1:5000

## Future Improvements

* Hyperparameter Tuning
* Model Explainability using SHAP
* User Authentication
* Cloud Deployment
* Advanced Data Visualization

## Author

Shivam Singh Dhakrey
B.Tech CSE, MANIT Bhopal
