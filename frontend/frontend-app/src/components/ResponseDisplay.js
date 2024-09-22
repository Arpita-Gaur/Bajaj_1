import React, { useEffect, useState } from 'react';

const ResponseDisplay = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bfhl');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log('Fetched data:', result); // Log the fetched data
                setData(result.data || []); // Update state
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data.length > 0 ? (
                <div>{data.join(', ')}</div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default ResponseDisplay;
