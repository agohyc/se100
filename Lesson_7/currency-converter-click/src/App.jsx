import './App.css'

function App() {
  // Define the handleClick function
  function handleClick() {
    alert('Button was clicked!');
  }

  // Render a button element and pass handleClick as the onClick handler
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default App;
