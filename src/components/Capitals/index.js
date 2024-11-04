import React, {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
// Write your code here
const Capitals = () => {
  const [selectedCapitalId, setSelectedCapitalId] = useState(
    countryAndCapitalsList[0].id,
  )

  const handleChange = event => {
    setSelectedCapitalId(event.target.value)
  }

  const selectedCapital = countryAndCapitalsList.find(
    capital => capital.id === selectedCapitalId,
  )

  return (
    <div className="capitals-app-container">
      <h1 className="heading">Countries and Capitals</h1>
      <div className="dropdown-container">
        <select
          className="dropdown"
          value={selectedCapitalId}
          onChange={handleChange}
        >
          {countryAndCapitalsList.map(capital => (
            <option key={capital.id} value={capital.id}>
              {capital.capitalDisplayText}
            </option>
          ))}
        </select>
      </div>
      <p className="country-display">is capital of which country</p>
      <h2 className="country-name">{selectedCapital.country}</h2>
    </div>
  )
}

export default Capitals
