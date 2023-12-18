import React from 'react';
import './App.css'
import { ref, set,push } from 'firebase/database';

import database from './firebase';

function App() {


  function sendData(){
    let data={
      name:"ravi raj",
      age:23
    }

    const newRecordRef = push(ref(database));

  // Set the data to the new child location
  set(newRecordRef, data)
    .then(() => {
      console.log('Data added to the database successfully.');
    })
    .catch((error) => {
      console.error('Error adding data to the database:', error.message);
    });
  }

return <div className="App">
    <h1>React-Firebase connection</h1>
    <button onClick={sendData}>Send Data</button>
  </div>
}

export default App;