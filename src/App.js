import './App.css';

// Import our components so we can access them in this file!
import AnimalList from './components/AnimalList';
import PeopleList from './components/PeopleList';

import { useState } from 'react'

// Import our data
import { animals, people } from './data'

function App() {
  // const [ stateVariable, stateVariableSetter ] = useState(initialValue)
  const [ count, setCount ] = useState(0)
  const [ searchTerm, setSearchTerm ] = useState("")

  console.log(useState("Morgan"))

  function handleClick() {
    // we want to set our count state here
    setCount(prevCount => prevCount + 1)
  }

  function handleSearch(e) {
    // Take in the value from our input and use it to set the state for our searchTerm
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">

      {/* 
        Creating our search input - using onChange as our event listener to trigger our handleSearch function
      */}
      <input 
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />

      {/* Render our AnimalList component, passing our data in as a prop called animals */}
      {/* Day 2 - now we're passing our searchTerm in as well so we can filter our data! */}
      <AnimalList animals={animals} searchTerm={searchTerm} />
      
      {/* 
        Second Demo, uncomment line 20 if you want to see it in action.
        I didn't comment each step of this process, so feel free to add your own comments
        to make sure you understand this flow!
      */}
      {/* <PeopleList people={people} /> */}

      {/* Day 2 - Uncomment this chunk below if you want to mess with the count state */}
      {/* <div className="counter">
        <span>{count}</span>
        <button onClick={handleClick}>Click me!</button>
      </div> */}

    </div>
  );
}

export default App;