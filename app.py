from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
model = joblib.load('model.joblib')

@app.route('/')
def home():
    return "Welcome to the Machine Learning Model Deployment API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input JSON data
        data = request.get_json()

        # Convert the JSON data to a DataFrame
        df = pd.DataFrame(data)

        # Perform prediction using the loaded model
        predictions = model.predict(df)

        # Return the predictions as a JSON response
        return jsonify(predictions.tolist())
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
