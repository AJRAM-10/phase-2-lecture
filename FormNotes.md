# Making an Input Controlled

To keep track of each input's value, you need:

1. State for the input that will manage the input's value
2. An `onChange` listener attached to the input to monitor the user's behavior and update state as the user interacts with the input field
3. A `value` attribute on the input that corresponds to a key in state

And for the `form` element itself, you need an `onSubmit` listener to finally submit the data. 

## Form Setup

There are generally two ways to set up our form.

1. For each input element in the form, create a new state variable:

```js
const [species, setSpecies] = useState("")
const [name, setName] = useState("")
```

2. More common (and IMO cleaner) approach, although slightly more complex - create a state object with key/value pairs associated with each form field:

```js
const [formData, setFormData] = useState({
    species: "",
    name: ""
})
```