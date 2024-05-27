# tests/test_api.py
import unittest
from app import app
import json

class BasicTests(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_home(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.decode('utf-8'), "Welcome to the Machine Learning Model Deployment API!")

    def test_predict(self):
        sample_data = [
            {"sepal length (cm)": 5.1, "sepal width (cm)": 3.5, "petal length (cm)": 1.4, "petal width (cm)": 0.2},
            {"sepal length (cm)": 7.0, "sepal width (cm)": 3.2, "petal length (cm)": 4.7, "petal width (cm)": 1.4},
            {"sepal length (cm)": 6.3, "sepal width (cm)": 3.3, "petal length (cm)": 6.0, "petal width (cm)": 2.5}
        ]
        response = self.app.post('/predict', data=json.dumps(sample_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, list)

if __name__ == "__main__":
    unittest.main()
