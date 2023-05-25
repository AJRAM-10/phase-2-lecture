// Import our Animal component so we can access it in this file
import Animal from "./Animal"

// Define a component (function) that takes in a prop of animals and (ideally) destructure to grab that value
const AnimalList = ({ animals, searchTerm, setSelectedAnimal }) => {

    // Take our searchTerm prop from App.js and filter out our animal data
    const filteredAnimals = animals.filter((animal) => {
        // i want to compare animal.name to searchTerm (added in the option to search for species too)
        return animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.species.toLowerCase().includes(searchTerm.toLowerCase())
    })

    // Map over our array of (now filtered!) data and render one Animal component for each animal object
    //   passing in the appropriate data for each animal
    // Day 3 - Passed in the state setter (from App.js) to each individual animal
    const renderAnimals = filteredAnimals.map(animal => {
        return (
            <Animal 
                key={animal.id} 
                species={animal.species} 
                name={animal.name}
                animal={animal}
                setSelectedAnimal={setSelectedAnimal}
            />
        )
    })

    return (
        <div className="animal-list">
            {/* 
                Tell React we want to render our array of individual Animal components -
                React is smart enough to know to display the components themselves and ignore the array
            */}
            {renderAnimals}
        </div>
    )
}

export default AnimalList;