from flask import Flask, render_template, request, jsonify
import pandas as pd
import pickle
import os

app = Flask(
    __name__,
    template_folder="templates2",
    static_folder="static2"
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, "cancer_model.pkl"), "rb") as f:
    model = pickle.load(f)

with open(os.path.join(BASE_DIR, "model_columns.pkl"), "rb") as f:
    model_columns = pickle.load(f)


@app.route("/")
def home():
    return render_template("index2.html")


@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        input_data = pd.DataFrame([{
            "Age": int(data["Age"]),
            "Gender": int(data["Gender"]),
            "BMI": float(data["BMI"]),
            "Smoking": int(data["Smoking"]),
            "GeneticRisk": int(data["GeneticRisk"]),
            "PhysicalActivity": float(data["PhysicalActivity"]),
            "AlcoholIntake": float(data["AlcoholIntake"]),
            "CancerHistory": int(data["CancerHistory"])
        }])

        input_data = input_data[model_columns]

        prediction = model.predict(input_data)[0]

        probability = model.predict_proba(input_data)[0][1]

        risk = round(probability * 100, 2)

        if prediction == 1:
            result = "Cancer Detected"
            recommendation = "Please consult a healthcare professional."
        else:
            result = "No Cancer"
            recommendation = "Maintain a healthy lifestyle."

        return jsonify({
            "prediction": result,
            "risk_percentage": risk,
            "recommendation": recommendation
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })


if __name__ == "__main__":
    app.run(debug=True)