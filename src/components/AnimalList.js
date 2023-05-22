// Import our Animal component so we can access it in this file
import Animal from "./Animal"

// Define a component (function) that takes in a prop of animals and (ideally) destructure to grab that value
const AnimalList = ({ animals }) => {

    // Map over our array of data and render one Animal component for each animal object
    //   passing in the appropriate data for each animal
    const renderAnimals = animals.map(animal => {
        return <Animal key={animal.name} species={animal.species} name={animal.name} />
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