import './App.css'

function App() {
  // Define the albertEnter function
  function albertChange(e) {
    alert(`user has selected ${e.target.value}`);
  }

  // Render a button element and pass albertEnter as the onMouseEnter event handler
  return (
    <>
      <h1>Currency Converter</h1>
      {/* <button onMouseEnter={albertEnter}>
        Click me
      </button> PLEASE NOTE THAT FOR ONCHANGE THIS BUTTON CODE ISN'T ACTUALLY NEEDED*/}
      <select onChange={albertChange}>
        <option value="USD">USD</option>
        <option value="SGD">SGD</option>
        <option value="MYR">MYR</option>
      </select>
    </>
  )
}

export default App;
