```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This useEffect hook will only run once after the initial render
    // Add any side effects here, such as API calls.
    console.log('Component mounted');
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```