import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from './App';

// Mock axios
jest.mock('axios');

// Cleanup after each test
afterEach(cleanup);

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/ML Model Prediction/i);
  expect(linkElement).toBeInTheDocument();
});

test('handles input and submission', async () => {
  axios.post.mockResolvedValue({ data: [0, 1, 2] });

  render(<App />);

  const textarea = screen.getByPlaceholderText('Enter JSON data');
  const button = screen.getByText('Predict');

  fireEvent.change(textarea, { target: { value: '[{"sepal length (cm)": 5.1, "sepal width (cm)": 3.5, "petal length (cm)": 1.4, "petal width (cm)": 0.2}]' } });
  fireEvent.click(button);

  const prediction = await screen.findByText(/Prediction:/i);
  expect(prediction).toBeInTheDocument();

  // Deserialize the JSON response and compare directly
  const predictionData = JSON.parse(prediction.nextSibling.textContent);
  expect(predictionData).toEqual([0, 1, 2]);
});
