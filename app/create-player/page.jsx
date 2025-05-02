import React from 'react'

const page = () =>{

    const createPlayer = async () => {
        try {
            const myHeaders = new Headers()
            myHeaders.append('Content-Type','application/json')
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({})
            }
            const response = await fetch('/api/player',requestOptions)
            if(!response.ok){
                throw new Error(`Https error! status: ${response.status}`)
            }
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Create Player</h1>
      
    </div>
  )
}

export default page
