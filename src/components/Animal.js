// Define a component (just a function remember!) that takes in props of species and name
//   destructure the values we want to access
function Animal({ species, name }) {
    // const species = props.species
    // const name = props.name

    // destructuring our props object
    // const { species, name } = props

    // Return our JSX with data filled in!
    // Remember <> </> is called a React Fragment - in this case we don't actually need it because we have one top level div on line 15
    //   but if you wanted just the <h1> and <p> without the parent div, you would use fragments
    return (
        <>
            <div className="animal">
                {/* Wrap your JS values in curly brackets to interpolate within JSX */}
                <h1>{species}</h1>
                <p>{name}</p>
            </div>
        </>
    )
}

export default Animal;