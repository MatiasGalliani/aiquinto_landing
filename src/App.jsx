import React from 'react'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import family_w_dog from './assets/family_with_dog.jpg'
import './App.css'

function App() {
  return (
    <div className="flex justify-between items-start mt-12 mx-12">
      <div className=" bg-gray-100 rounded-3xl p-6 mr-12">
        <h1>
          <img src={logo_creditplan} alt="logo" className="w-56 mt-8 ml-8" />
        </h1>
        <h2 className="w-3/4 text-5xl font-semibold mt-12 ml-8 text-gray-800">
          Chiedi subito fino a 70.000€ con la tua Cessione del Quinto!
        </h2>
      </div>
      <img src={family_w_dog} alt="family with dog" className="w-96 rounded-3xl" />
    </div>
  )
}

export default App;