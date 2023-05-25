import { useState } from 'react'

function FormTwo({ handleAddAnimal }) {
    // Create an empty object to represent our new Animal object
    const initialFormValues = {
        species: "",
        name: ""
    }
    // Set our state with that empty object template
    const [formData, setFormData] = useState(initialFormValues)

    // A more versatile handler function to update our state object
    function handleInputChange(e) {
        // name => name="some name" from your input
        // value => value={yourState} from the input, the value is whatever we type in
        // we're just destructuring it here to make it a little cleaner
        const { name, value } = e.target

        // Call our state setter
        // spread out the existing form data (clone it, basically)
        // [name]: value => looks through the state object for the correct key to update, 
        //                  then updates it with the new value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        // First, we need to prevent the default form behavior
        e.preventDefault()

        // We need to update our list of animals (hint: UPDATE STATE!)

        // OPTIMISTIC RENDERING - rendering our plain JS object before saving it
        // handleAddAnimal(formData)
        
        // PESSIMISTIC RENDERING
        // we want to wait for our backend 
        // to return the official new object (complete with an id!) 
        // before we trigger the re-render (aka set state)
        fetch("http://localhost:3000/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(newAnimal => handleAddAnimal(newAnimal)) // setting our state, to trigger a re-render!

        // Clear our form!
        setFormData(initialFormValues)
    }

    return (
        // Make sure to attach an onSubmit event listener to the opening form tag
        <form onSubmit={handleSubmit}> 
            <label htmlFor="species">Species</label>
            <input 
                type="text"
                id="species"
                name="species" // give it a name so we can use that when setting state
                onChange={handleInputChange} // give it a handler function to set state
                value={formData.species} // "control" our form, the value is tied to state!
            />
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
            />
            <input type="submit" value="Create Animal" />
        </form>
    )
}

export default FormTwo;