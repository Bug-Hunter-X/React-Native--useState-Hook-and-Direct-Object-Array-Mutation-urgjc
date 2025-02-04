To fix this, create a copy of the object or array using the spread syntax and then make the changes.

```javascript
// Correct way to update state
const [count, setCount] = useState({value: 0});

const increment = () => {
  setCount(prevCount => ({...prevCount, value: prevCount.value + 1})); // Creates a new object
};

//Alternative with functional update:
const [items, setItems] = useState([]);
const addItem = () => {
    setItems(prevItems => [...prevItems, { id: Date.now(), value: 'New Item'}]);
}
```

This ensures that a new object/array is created each time, prompting React to re-render the component and update the UI.