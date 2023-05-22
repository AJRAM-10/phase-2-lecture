import './App.css';

// Import our components so we can access them in this file!
import AnimalList from './components/AnimalList';
import PeopleList from './components/PeopleList';

// Import our data
import { animals, people } from './data'

function App() {
  return (
    <div className="App">
      {/* Render our AnimalList component, passing our data in as a prop called animals */}
      <AnimalList animals={animals} />
      
      {/* 
        Second Demo, uncomment line 20 if you want to see it in action.
        I didn't comment each step of this process, so feel free to add your own comments
        to make sure you understand this flow!
      */}
      {/* <PeopleList people={people} /> */}
    </div>
  );
}

export default App;