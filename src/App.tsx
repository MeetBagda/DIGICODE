import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      {/* Your existing content or just the check component */}
      <h1 className="text-6xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">
        My Awesome App
      </h1>
       <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl text-white max-w-lg mx-auto my-10">
      <h2 className="text-4xl font-extrabold mb-4 text-center">
        Tailwind CSS Check
      </h2>
      <p className="text-lg text-center mb-6">
        If you see this text styled, Tailwind CSS is working!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Primary Button
        </button>
        <Button >Click me</Button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Danger Button
        </button>
      </div>

      <div className="mt-8 p-4 bg-white rounded-md text-gray-800 border-l-4 border-yellow-500">
        <p className="font-semibold text-lg">
          <span className="text-yellow-600 mr-2">⭐</span>
          Styled Div Example
        </p>
        <p className="text-sm mt-1">
          This box has a background, padding, rounded corners, and a border.
        </p>
      </div>

      <p className="mt-8 text-sm text-center text-white/80">
        Font-family should be sans-serif, and colors should be evident.
      </p>
    </div>
    </div>
  )
}

export default App
