import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import logo_negro_eugenio from './assets/logo_negro_eugenio.png'
import family_w_dog from './assets/family_with_dog.jpg'
import savingSvg from './assets/saving.svg'
import './App.css'
import ChatWidget from './components/ChatWidget';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const faqs = [
    {
      question: "Cos'è la Cessione del Quinto?",
      answer:
        "La Cessione del Quinto è un prestito personale con una rata mensile che non supera il quinto (20%) del tuo stipendio netto o della tua pensione, trattenuta direttamente in busta paga o sulla pensione."
    },
    {
      question: "Quanto tempo serve per ottenere il prestito?",
      answer:
        "Con Creditplan puoi ottenere la liquidità necessaria in pochi giorni grazie ai nostri partner bancari specializzati."
    },
    {
      question: "Quali requisiti devo avere per richiedere la Cessione del Quinto?",
      answer:
        "Puoi richiedere la Cessione del Quinto se sei un lavoratore dipendente (pubblico o privato) con contratto a tempo indeterminato o un pensionato. Non è richiesto alcun garante."
    },
    {
      question: "Esiste un limite massimo di età per la Cessione del Quinto?",
      answer:
        "Sì, i pensionati possono ottenere il prestito fino a 89 anni alla scadenza del finanziamento."
    },
    {
      question: "Cosa succede se non raggiungo i requisiti per rinnovare una Cessione del Quinto già in corso?",
      answer:
        "In caso di mancato raggiungimento dei termini per il rinnovo, possiamo valutare insieme la Delegazione di Pagamento, una seconda trattenuta sullo stipendio che permette di ottenere ulteriore liquidità."
    },
    {
      question: "Perché dovrei scegliere Creditplan?",
      answer:
        "Offriamo tempi rapidi di erogazione. Collaboriamo con partner bancari convenzionati INPS, garantendo sicurezza e affidabilità. Abbiamo un team dedicato di professionisti a tua disposizione. Nessuna spesa aggiuntiva né consulenza gratuita. Tassi altamente competitivi."
    },
    {
      question: "Posso richiedere il prestito se sono stato segnalato come cattivo pagatore?",
      answer:
        "Sì, la Cessione del Quinto è accessibile anche in caso di segnalazioni o protesti, in quanto non si basa sulla tua storia creditizia, ma sul tuo stipendio o pensione."
    },
    {
      question: "È possibile estinguere anticipatamente la Cessione del Quinto?",
      answer:
        "Sì, puoi estinguere anticipatamente il prestito in qualsiasi momento beneficiando della riduzione degli interessi residui."
    },
    {
      question: "Quanto costa la consulenza iniziale con Creditplan?",
      answer:
        "La consulenza iniziale con i nostri esperti è completamente gratuita e senza impegno."
    }
  ]

  return (
    <div id="faq" className="scroll-mt-20 my-16 w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Domande Frequenti</h2>
      {faqs.map((faq, index) => {
        const isActive = index === activeIndex
        return (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <FaArrowRight
                className={`transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-40" : "max-h-0"}`}
            >
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row justify-center items-stretch mt-3 md:mt-12 mx-4 md:mx-12 gap-6">
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
                Chiedi subito fino a 75.000€ con la tua Cessione del Quinto!
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Risparmia tempo e denaro
              </p>
              <p className="text-lg text-gray-600 mt-1">
                Migliori tassi di mercato!
              </p>
              <p className="text-2xl font-medium text-gray-800 mt-8">
                Come vuoi procedere?
              </p>
              <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-4">
                  {/* Box para Eugenio */}
                  <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex flex-col items-start justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out">
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
                  {/* Box para agente */}
                  <div className="relative bg-white w-full md:w-64 h-20 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex flex-col items-start justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out">
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
                {/* Box para descripción cessione del quinto */}
                <a href="#faq" className="block">
                  <div className="relative bg-white w-full md:w-48 h-44 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl p-4 flex flex-col justify-start transform hover:scale-110 transition-transform duration-300 ease-in-out">
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
                </a>
              </div>
            </div>
          </div>
          <img
            src={family_w_dog}
            alt="family with dog"
            className="w-full md:w-96 h-full object-cover rounded-3xl"
          />
        </div>
        {/* Sección de ilustración con texto e imagen juntos centrados */}
        <div className="my-24 w-full max-w-4xl mx-auto px-4 flex justify-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Bloque de texto sin margen extra */}
            <div className="text-center md:text-left">
              <h5 className="font-medium text-4xl mb-2">
                100% digitale. 100% umano.
              </h5>
              <p className="text-gray-700 font-normal text-xl">
                Sappiamo che il tuo tempo vale oro. Affida a noi tutto il lavoro, tu goditi la tranquillità.
              </p>
            </div>
            {/* Imagen de ahorro justo al lado */}
            <div>
              <img
                src={savingSvg}
                alt="Ilustración de ahorro"
                className="max-w-sm"
              />
            </div>
          </div>
        </div>
        {/* Nuevo párrafo debajo de la sección de ilustración con efecto reactivo */}
        <div className="my-32 text-center bg-gray-100 p-8 mx-4 md:mx-auto rounded-3xl max-w-4xl transition-transform duration-300 hover:scale-105">
          <p className="text-4xl font-semibold">
            Scopri subito quanto puoi ottenere!
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Calcola in pochi clic il tuo finanziamento su misura: semplice, veloce e senza impegno.
          </p>
          <button className="bg-white text-black px-8 py-2 rounded-2xl mt-8 border border-gray-400 hover:border-gray-700">
            Parla con un consulente gratis
          </button>
        </div>

        {/* Insertamos el FAQ debajo */}
        <FAQ />

      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <ChatWidget />
      </div>
    </div>
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
