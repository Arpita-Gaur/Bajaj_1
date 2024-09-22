import React, { useState } from 'react';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
    const [inputData, setInputData] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/bfhl`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: JSON.parse(inputData), file_b64: null }),
            });
            const result = await response.json();
            setResponseData(result);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        setSelectedFilter(checked
            ? [...selectedFilter, value]
            : selectedFilter.filter(f => f !== value));
    };

    return (
        <div className="App">
            <h1>JSON Data Input</h1>
            <textarea
                rows="5"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter valid JSON"
            />
            <button onClick={handleSubmit}>Submit</button>

            <div>
                <h2>Select Data to Display:</h2>
                <label>
                    <input type="checkbox" value="Alphabets" onChange={handleFilterChange} /> Alphabets
                </label>
                <label>
                    <input type="checkbox" value="Numbers" onChange={handleFilterChange} /> Numbers
                </label>
                <label>
                    <input type="checkbox" value="Highest lowercase alphabet" onChange={handleFilterChange} /> Highest lowercase alphabet
                </label>
            </div>

            <ResponseDisplay data={responseData} selectedFilter={selectedFilter} />
        </div>
    );
}

export default App;
