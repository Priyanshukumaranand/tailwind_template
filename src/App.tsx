import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <h1 className="text-5xl font-extrabold text-white shadow-lg">Welcome to Tailwind Template</h1>
      <p className="mt-4 text-xl text-gray-100 shadow-sm">
      Tailwind CSS is successfully integrated and ready to use!
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
      Explore More
      </button>
    </div>
    </>
  )
}

export default App
