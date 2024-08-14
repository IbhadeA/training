import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MpRandomJokes = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        setJoke(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching joke');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="second-page">
      <h1>Random Joke</h1>
      <p><strong>{joke.setup}</strong></p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default MpRandomJokes;
