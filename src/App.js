import React from 'react';
import GroceryList from './GroceryList';

function App() {
  return(
    <>
    <GroceryList />
    <input type="text"/>
    <button>Add Item</button>
    <button>Clear Completed Item</button>
    <div>0 left to do</div>
  </>
  )
}

export default App;
