import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import logo_negro_eugenio from './assets/logo_negro_eugenio.png'
import family_w_dog from './assets/family_with_dog.jpg'
import './App.css'

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch mt-12 mx-4 md:mx-12">
      <div className="bg-gray-100 rounded-3xl p-6 md:mr-12 mb-6 md:mb-0">
        <div className="px-4 md:px-16">
          <h1>
            <img
              src={logo_creditplan}
              alt="logo"
              className="w-40 md:w-56 mt-8"
            />
          </h1>
          <p className="inline-block text-xs font-medium text-green-950 mt-4 py-0.5 bg-green-200 px-2">
            Offerta a tempo limitato
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-800">
            Chiedi subito fino a 70.000€ con la tua Cessione del Quinto!
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Risparmia tempo con noi.
          </p>
          <p className="text-lg text-gray-600 mt-1">
            100% digitale. 100% umano.
          </p>
          <p className="text-2xl font-medium text-gray-800 mt-8">
            Come vuoi procedere?
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-4">
              {/* Box per Eugenio */}
              <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 flex flex-col items-start justify-center px-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-base font-medium text-left">
                    Parla con <img src={logo_negro_eugenio} alt="Logo Eugenio" className="inline w-24 align-middle" />
                  </h3>
                  <div className="bg-gray-200 p-1 rounded-full">
                    <FaArrowRight className="text-gray-600" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-left">
                  Conversazione in diretta per risolvere i tuoi dubbi.
                </p>
              </div>
              {/* Box per agente */}
              <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 flex flex-col items-start justify-center px-4">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-base font-medium text-left">
                    Parla con un agente
                  </h3>
                  <div className="bg-gray-200 p-1 rounded-full">
                    <FaArrowRight className="text-gray-600" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-left">
                  Prenota subito per un'assistenza personalizzata.
                </p>
              </div>
            </div>
            {/* Box per descrizione cessione del quinto */}
            <div className="relative bg-white w-full md:w-48 h-44 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 p-4 flex flex-col justify-start">
              <h3 className="text-base font-medium text-left mb-2">
                Come funziona la cessione del quinto?
              </h3>
              <p className="text-xs text-gray-500 text-left">
                Scopri il processo e i benefici in pochi semplici passaggi.
              </p>
              <div className="absolute right-4 bottom-4 bg-gray-200 p-1 rounded-full">
                <FaArrowRight className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={family_w_dog}
        alt="family with dog"
        className="w-full md:w-96 rounded-3xl"
      />
    </div>
  )
}

export default App;