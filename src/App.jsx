import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import logo_negro_eugenio from './assets/logo_negro_eugenio.png'
import family_w_dog from './assets/family_with_dog.jpg'
import savingSvg from './assets/saving.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-stretch mt-3 md:mt-12 mx-4 md:mx-12">
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
                <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 flex flex-col items-start justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="text-base font-medium text-left">
                      Parla con{" "}
                      <img
                        src={logo_negro_eugenio}
                        alt="Logo Eugenio"
                        className="inline w-24 align-middle"
                      />
                    </h3>
                    <div className="bg-gray-100 p-1 rounded-full">
                      <FaArrowRight className="text-xs text-gray-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-left">
                    Conversazione in diretta per risolvere i tuoi dubbi.
                  </p>
                </div>
                {/* Box per agente */}
                <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 flex flex-col items-start justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="text-base font-medium text-left">
                      Parla con un agente
                    </h3>
                    <div className="bg-gray-100 p-1 rounded-full">
                      <FaArrowRight className="text-xs text-gray-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-left">
                    Prenota subito per un'assistenza personalizzata.
                  </p>
                </div>
              </div>
              {/* Box per descrizione cessione del quinto */}
              <div className="relative bg-white w-full md:w-48 h-44 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl transition-colors duration-200 p-4 flex flex-col justify-start transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <h3 className="text-base font-medium text-left mb-2">
                  Come funziona la cessione del quinto?
                </h3>
                <p className="text-xs text-gray-500 text-left">
                  Scopri il processo e i benefici in pochi semplici passaggi.
                </p>
                <div className="absolute right-4 bottom-4 bg-gray-100 p-1 rounded-full">
                  <FaArrowRight className="text-xs text-gray-600" />
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
      {/* Sección de ilustración "saving.svg" con título y párrafo responsivos */}
      <div className="my-24 flex flex-col md:flex-row justify-center items-center px-4 max-w-4xl mx-auto">
        {/* Contenedor para título y párrafo */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h5 className="font-medium text-4xl mb-2">
            100% digitale. 100% umano.
          </h5>
          <p className="text-gray-700 font-normal text-xl w-3/4 mx-auto md:mx-0">
            Sappiamo che il tuo tempo vale oro. Affida a noi tutto il lavoro, tu goditi la tranquillità.
          </p>
        </div>
        {/* Ilustración */}
        <img
          src={savingSvg}
          alt="Ilustración de ahorro"
          className="order-2 md:order-1 w-full max-w-sm"
        />
      </div>
      <Footer />
    </>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Informazioni Aziendali */}
          <div>
            <img
              src={logo_creditplan}
              alt="Logo Creditplan"
              className="w-32 mb-2"
            />
            <h3 className="text-lg font-bold mb-2">
              Creditplan Italia Network di Mediazione Creditizia SRL
            </h3>
            <p className="text-sm">
              Iscr. OAM n.M30<br />
              P.IVA 06197620963<br />
              REA MB-1856950
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contatti</h3>
            <p className="text-sm">
              Via Giacomo Tosi, 3<br />
              20900 Monza (MB)<br />
              Via Mazzini, 20<br />
              20123 Milano (MI)
            </p>
            <p className="text-sm mt-2">
              Tel: +39 039 2020978 (centralino unico)<br />
              Tel: +39 039 33050330
            </p>
            <p className="text-sm mt-2">
              Email:{" "}
              <a href="mailto:info@creditplan.it" className="underline">
                info@creditplan.it
              </a>
              <br />
              <a href="mailto:creditplan@pec.it" className="underline">
                creditplan@pec.it
              </a>
            </p>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-lg font-bold mb-2">Trova il tuo consulente Creditplan</h3>
            <h4 className="text-lg font-bold mb-2 mt-4">Link Utili</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/trasparenza" className="underline">
                  Trasparenza
                </a>
              </li>
              <li>
                <a href="/reclami" className="underline">
                  Reclami
                </a>
              </li>
              <li>
                <a href="/guida-ai-mutui" className="underline">
                  Guida ai mutui
                </a>
              </li>
              <li>
                <a href="/privacy" className="underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/faq" className="underline">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://creditplanservices.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  creditplanservices.it
                </a>
              </li>
              <li>
                <a
                  href="https://creditplanre.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  creditplanre.it
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-center">
          Copyright © 2025 – Creditplan Italia Network di mediazione
          creditizia srl. All Rights Reserved.<br />
          Designed &amp; developed by Matias Galliani :)
        </p>
      </div>
    </footer>
  )
}

export default App