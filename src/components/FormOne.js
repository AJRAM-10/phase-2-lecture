import { useState } from "react";

function FormOne({ setAnimals }) {
    // Set individual pieces of state that correspond to our Animal's properties
    const [species, setSpecies] = useState("")
    const [name, setName] = useState("")

    // Create handler functions to update each piece of state
    function handleSpecies(e) {
        setSpecies(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    // Remember our form needs a submit function!
    function handleSubmit(e) {
        // First, we need to prevent the default form behavior
        e.preventDefault()

        // We need to update our list of animals (hint: UPDATE STATE!)

        // OPTIMISTIC RENDERING
        // setAnimals(animals => [...animals, { species, name }])

        // PESSIMISTIC RENDERING
        // Make a POST request
        // Get back our data (complete with id!)
        // THEN set the state with our data to re-render the component
        fetch("http://localhost:3000/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                species: species, 
                name: name
            })
        })
            .then(resp => resp.json())
            .then(banana => setAnimals(animals => [...animals, banana]))
            .catch(error => console.log(error))

        // Clear our form
        setSpecies("")
        setName("")
    }

    return (
        // Make sure to attach an onSubmit event listener to the opening form tag
        <form onSubmit={handleSubmit}>
            <label htmlFor="species">Species</label>
            <input 
                type="text"
                id="species"
                name="species" // give it a name so we can use that when setting state
                onChange={handleSpecies} // give it a handler function to set state
                value={species} // "control" our form, the value is tied to state!
            />
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                id="name"
                name="name"
                onChange={handleName}
                value={name}
            />
            <input type="submit" value="Create Animal" />
        </form>
    )
}

export default FormOne;