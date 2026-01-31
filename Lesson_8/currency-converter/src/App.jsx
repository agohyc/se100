import './App.css'
import CurrencyDropdown from './currencyDropdown.jsx'

function App() {

  return (
    <>
      <h1>Currency Converter</h1>
      <span>I want to convert</span>
      <CurrencyDropdown />
      <span> to </span>
      <CurrencyDropdown />
    </>
  )
}

export default App;
