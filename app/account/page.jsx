'use client'
import React, { useEffect } from 'react'

function page() {
    useEffect(() => {
        getUser()
    }, [])
    

    const getUser = async () => {
        try {
            const response = await fetch('/api/user')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <h1>actions</h1>
    </div>
  )
}

export default page
