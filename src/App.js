import './App.css';
import DATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('')  
  return (
    <div className="App">
      <input type="text" className="input-text" placeholder="serach..." onChange={event =>{setSearch(event.target.value)}}/>
      {DATA.filter((val)=>{
        if (search === ''){
          return val
        }else if (val.first_name.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }).map((val, key)=>{
        return <div className='user' key={key}>
        <p>{val.first_name}</p>
        </div>
      })}
    </div>
  );
}

export default App;
