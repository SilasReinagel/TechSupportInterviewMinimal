import { useState, useEffect } from 'react'

function App() {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch('http://localhost:3055/')
        if (response.ok) {
          setIsConnected(true)
        } else {
          setIsConnected(false)
        }
      } catch (error) {
        setIsConnected(false)
      }
    }

    checkConnection()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex items-center space-x-4">
        <div className={`w-4 h-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-xl">
          {isConnected ? 'Setup Correctly' : 'Cannot Reach Backend'}
        </span>
      </div>
    </div>
  )
}

export default App
