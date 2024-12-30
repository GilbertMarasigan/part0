import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    console.log('event: ', event)
    const newNameObject = {
      name: newName
    }
    setPersons(persons.concat(newNameObject))
  }

  const handleNameChange = (event) => {
    console.log('event.target.value: ', event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.name}>{person.name}</div>)}
      </div>
    </div>
  )
}

export default App