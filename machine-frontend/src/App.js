import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', JSON.parse(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setPrediction(response.data);
    } catch (error) {
      console.error('There was an error making the prediction request!', error);
    }
  };

  return (
    <div>
      <h1>ML Model Prediction</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={data}
          onChange={handleChange}
          rows="10"
          cols="50"
          placeholder='Enter JSON data'
        ></textarea>
        <br />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
