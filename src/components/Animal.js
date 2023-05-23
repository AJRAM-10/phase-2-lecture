// Define a component (just a function remember!) that takes in props of species and name

import { useState } from "react";

// destructure the values we want to access
function Animal({ species, name }) {
    const [ count, setCount ] = useState(0)
    const [ isPet, setIsPet ] = useState(false)
    const [ timesFed, setTimesFed ] = useState(5)

    console.log(useState())

    // Create a function to toggle state!
    function handleClick() {
        // setCount(prevCount => prevCount + 1)
        setIsPet(!isPet)

        // Longer version still perfectly fine!
        // if (isPet == true) {
        //   setIsPet(false)
        // } else {
        //   setIsPet(true)
        // }
    }

    function handleFeed() {
        setTimesFed(prevTimesFed => prevTimesFed - 1)
    }

    // const species = props.species
    // const name = props.name

    // destructuring our props object
    // const { species, name } = props

    // Replaced our JSX ternary with this function to render code conditionally
    function renderButtonOrNothing() {
        if (timesFed > 0) {
            return <button onClick={handleFeed}>Feed me!</button>
        } else {
            return "Fed enough!"
        }
    }

    // Return our JSX with data filled in!
    // Remember <> </> is called a React Fragment - in this case we don't actually need it because we have one top level div on line 15
    //   but if you wanted just the <h1> and <p> without the parent div, you would use fragments
    return (
        <>
            <div className="animal">
                {/* Wrap your JS values in curly brackets to interpolate within JSX */}
                <h1>{species}</h1>
                <p>{name}</p>

                <span>{timesFed} treats remaining</span>

                {/* Ternary for our toggle below */}
                {/* <p>{ isPet ? "Been Pet" : "Pet me!" }</p> */}

                {renderButtonOrNothing()}
            </div>
        </>
    )
}

export default Animal;