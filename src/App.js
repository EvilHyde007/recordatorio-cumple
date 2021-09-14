import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople]= useState (data);
  
  return (
    <main>
      <section className="container">
        <div>
        <h3>{people.length} Birthday today</h3>
        <List people={people}/>                 
        </div>
        <button onClick={()=>setPeople([])}> Clear All</button>
      </section>
    </main>
  )
};

export default App;
