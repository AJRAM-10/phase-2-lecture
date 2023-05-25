import './App.css';

// Import our components so we can access them in this file!
import AnimalList from './components/AnimalList';
import PeopleList from './components/PeopleList';
import SelectedAnimal from './components/SelectedAnimal';
import Navbar from './components/Navbar';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

import { useEffect, useState } from 'react'

// Import our data
// import { animals, people } from './data'
import FlexDemo from './components/FlexDemo';

function App() {
  // const [ stateVariable, stateVariableSetter ] = useState(initialValue)
  const [ count, setCount ] = useState(0)
  const [ searchTerm, setSearchTerm ] = useState("")
  // Day 3 - Create state to store the animal we click
  const [ selectedAnimal, setSelectedAnimal ] = useState({})
  const [ animals, setAnimals ] = useState([])

  // On page load, fetch our data and set our state with that data
  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then(resp => resp.json())
      .then(animals => setAnimals(animals))
  }, [])

  function handleClick() {
    // we want to set our count state here
    setCount(prevCount => prevCount + 1)
  }

  function handleSearch(e) {
    // Take in the value from our input and use it to set the state for our searchTerm
    setSearchTerm(e.target.value)
  }

  // Handler function to add animals to our animal state array
  function handleAddAnimal(newAnimal) {
    setAnimals([...animals, newAnimal])
  }

  return (
    <div className="App">
      {/* Create Navbar and pass in our search function as a prop */}
      <Navbar handleSearch={handleSearch} />

      {/* 
        Creating our search input - using onChange as our event listener to trigger our handleSearch function
      */}

      {/* Render our AnimalList component, passing our data in as a prop called animals */}
      {/* Day 2 - now we're passing our searchTerm in as well so we can filter our data! */}
      <div className="main-content">
        <AnimalList 
          animals={animals} 
          searchTerm={searchTerm}
          setSelectedAnimal={setSelectedAnimal}
        />
        
        {/* Day 3 - created SelectedAnimal and passed in our selectedAnimal from state */}
        <SelectedAnimal animal={selectedAnimal} />
      </div>

      <div className="form-container">
        <h3>Create an Animal</h3>
        {/* 
            Remember to pass our setter function or our custom handler as a prop
            so we can update the state and re-render after submitting the form
        */}
        {/* <FormOne 
          animals={animals}
          setAnimals={setAnimals}
        /> */}
        <FormTwo handleAddAnimal={handleAddAnimal} />
      </div>

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