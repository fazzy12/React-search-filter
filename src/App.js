import './App.css';
import DATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {

  // Create a state variable called "search" and a function to update it
  const [search, setSearch] = useState('');
  
  // Render the input field and set the value of search to the input text
  return (
    <div className="App">
      <input type="text" className="input-text" placeholder="serach..." onChange={event => { setSearch(event.target.value); }} />

      {/* Filter the DATA array based on the search text and render a div element for each item */}

      {DATA.filter((val) => {
        if (search === '') {
          return val;
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return <div className='user' key={key}>
          <p>{val.first_name}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
