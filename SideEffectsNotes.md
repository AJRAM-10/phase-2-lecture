# useEffect() Hook

- `useEffect()` runs upon the first render, and potentially with every re-render after, based on the rules set inside the dependency array.
- Takes in two arguments:
  - A `callback function` defining the logic to be executed as a side effect (aka the 'effect' we want to use!)
  - A `dependency array` that defines _when_ the side effect should occur. This argument is technically optional, however, not including it will change the effect.
- `useEffect()` is essentially telling React that the component still needs to do something else _after_ the component has rendered.

------


## useEffect() Without a Dependency Array

```js
useEffect(() => {
    // Do something here
})
```

- In this example, we're only passing 1 argument to `useEffect` - the `callback function`.
- The dependency array was _not_ included
- This means that on every render or re-render, this side effect will also execute

------

### useEffect() With an EMPTY Dependency Array

```js
useEffect(() => {
    // Do something here
}, [])
```

- Here we are passing two arguments - both the `callback function` _and_ a `dependency array`
- The `dependency array` is _empty_
- This means that our effect will fire off once, ONLY on the initial render

------

### useEffect() With a Dependency Array

```js
useEffect(() => {
    // Do something here
}, [data])
```

- In this example, the dependency array is holding a piece of data. This data can be either a prop or a state variable
- This means that the side effect will run once upon the components initial render, then re-run when the value of the provided data changes