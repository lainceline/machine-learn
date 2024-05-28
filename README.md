# Machine Learning API Project

This repository contains a machine learning API project built with Flask.

## Overview

This project provides an API for making predictions using a trained machine learning model. The model is trained on the Iris dataset and can predict the species of iris flowers based on their sepal and petal measurements.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lainceline/machine-learn.git
   cd machine-learn
   ```

2. Set up a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Training the Model

To train the machine learning model, run the following command:
```bash
python model.py
```

This script trains a RandomForestClassifier on the Iris dataset and saves the trained model to a file named `model.joblib`.

## Running the Flask API

To start the Flask API, run the following command:
```bash
python app.py
```

The API will be accessible at `http://127.0.0.1:5000/`.

## API Endpoints

- `GET /`: Welcome message
- `POST /predict`: Make a prediction

### Example Request

To make a prediction, send a POST request to `http://127.0.0.1:5000/predict` with the following JSON data:
```json
[
  {"sepal length (cm)": 5.1, "sepal width (cm)": 3.5, "petal length (cm)": 1.4, "petal width (cm)": 0.2}
]
```

### Example Response

The API will return a JSON response with the predicted species:
```json
[0, 1, 2]
```

## Running Tests

1. Ensure you are in the virtual environment.

2. Run the tests using `unittest`:
   ```bash
   python -m unittest discover -s tests
   ```

## Directory Structure

- `model.py`: Script for training and saving the machine learning model.
- `app.py`: Flask application providing the API.
- `requirements.txt`: Python dependencies.
- `tests/`: Directory containing unit tests.

## License

This project is licensed under the MIT License.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:
- Fork the repository
- Create a new branch (`git checkout -b feature-branch`)
- Make your changes
- Commit your changes (`git commit -m 'Add new feature'`)
- Push to the branch (`git push origin feature-branch`)
- Create a new Pull Request

## Contact

For any questions or inquiries, please contact sarahmyers180@gmail.com.

Happy coding!
