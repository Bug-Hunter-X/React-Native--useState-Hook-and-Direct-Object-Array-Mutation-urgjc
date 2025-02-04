This error occurs when using the useState hook in React Native and setting the state to an object or array.  If you directly mutate the state object or array within a function, React won't re-render the component because the state reference remains the same.

```javascript
// Incorrect way to update state
const [count, setCount] = useState({value: 0});

const increment = () => {
  count.value++; // Direct mutation
  setCount(count); // React doesn't detect the change
};
```