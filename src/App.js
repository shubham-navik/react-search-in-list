import React, { useState } from 'react';
import names from './Name'; // Assuming './Name' contains your array of names

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectGender, setSelectGender] = useState('all');
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = names.filter(name => {
      if (selectGender !== 'all' && selectGender !== name.gender) {
        return false;
      }
      return name.name.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResult(results);
  }

  const handleClick = (gender) => {
    setSelectGender(gender);
    setSearchTerm('');
  }

  return (
    <div className="App">
      <h1>hello </h1>
      <button onClick={() => handleClick('all')}>All</button>
      <button onClick={() => handleClick('male')}>Boys</button>
      <button onClick={() => handleClick('female')}>Girls</button>
      <input type='text' value={searchTerm} onChange={handleChange} />
      
      <ul>
        {searchResult.map((name, index) => (
          <li key={index}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
