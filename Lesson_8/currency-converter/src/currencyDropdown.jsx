import './currencyStyling.css'

export default function CurrencyDropdown() {
  return (
    <select name="currency" className="currency-dropdown">
      <option value="usd">USD</option>
      <option value="jpy">JPY</option>
      <option value="sgd">SGD</option>
      <option value="myr">MYR</option>
    </select>
  )
}
