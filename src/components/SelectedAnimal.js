function SelectedAnimal({ animal }) {
    const { species, name } = animal

    const animalCard = (
        <div>
            {/* Wrap your JS values in curly brackets to interpolate within JSX */}
            <h1>{species}</h1>
            <p>{name}</p>
        </div>
    )

    return (
        <div className="selected-animal">
            {/* IF we have the animal, display it! Otherwise display some message */}
            { animal.species ? animalCard : 'Please select an animal to display!' }
        </div>
    )
}

export default SelectedAnimal