import React, { useEffect, useState } from 'react'

function App() {
  const [newPuppy, setNewPuppy] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setNewPuppy(data.message)
        setIsLoaded(true)
      })
  }, [])
  if (!isLoaded) return <p>Loading...</p>
  return (
    <div>
      <img src={newPuppy} alt="A Random Dog"></img>
    </div>
  )
}
export default App
