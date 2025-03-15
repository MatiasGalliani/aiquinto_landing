import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import family_w_dog from './assets/family_with_dog.png'
import savingSvg from './assets/saving.svg'
import './App.css'
import aiQuintoLogo from './assets/ai_quinto_logo.png'
import { Helmet } from "react-helmet-async";
import ThankYouPage from './ThankYouPage'
import FormScreen from './FormScreen'

function HeroWave() {
  return (
    <div className="relative h-40 overflow-hidden">
      <svg className="absolute block top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#1e40af" // updated to blue-800
          fillOpacity="0.8"
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
      <svg className="absolute block top-4 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0099ff"
          fillOpacity="0.6"
          d="M0,200 C480,100 960,300 1440,200 L1440,320 L0,320 Z"
        />
      </svg>
      <svg className="absolute block top-8 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#d1d5db"
          fillOpacity="0.8"
          d="M0,240 C480,80 960,240 1440,240 L1440,320 L0,320 Z"
        />
      </svg>
      <svg className="absolute block top-12 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#d1d5db"
          fillOpacity="1"
          d="M0,260 C480,150 960,370 1440,260 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  )
}

function Wave() {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,256L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

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
        "Con Creditplan puoi ottenere la liquidità necessaria in pocos días gracias ai nostri partner bancari specializzati."
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
        "Offriamo tempi rapidi di erogazione. Collaboriamo con partner bancari convenzionati INPS, garantendo sicurezza e affidabilità. Abbiamo un team dedicato di professionisti a tua disposizione. Nessuna spesa aggiuntiva la consulenza è gratuita. Tassi altamente competitivi."
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

// Nuevo componente ContactPage
function ContactPage({ onBack }) {
  const [loading, setLoading] = useState(true)
  const [nome, setNome] = useState("")
  const [cognome, setCognome] = useState("")
  const [mail, setMail] = useState("")
  const [telefono, setTelefono] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white rounded-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-700 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
      <div className="flex items-center mb-8 w-full">
        <button onClick={onBack} className="mr-4">
          <FaArrowLeft className="text-2xl text-black" />
        </button>
        <h2 className="flex-1 text-3xl font-semibold text-center">
          Inserisci i tuoi dati per essere contattato
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[38.5rem]">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-4 rounded-2xl text-xl w-full"
        />
        <input
          type="text"
          placeholder="Cognome"
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
          className="border p-4 rounded-2xl text-xl w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="border p-4 rounded-2xl text-xl w-full"
        />
        <input
          type="tel"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="border p-4 rounded-2xl text-xl w-full"
        />
      </div>
      <button
        className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
        onClick={() =>
          console.log("Informazioni Contatto", { nome, cognome, mail, telefono })
        }
      >
        Invia Richiesta
      </button>
    </div>
  )
}

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showFormScreen, setShowFormScreen] = useState(false)
  const [showContactPage, setShowContactPage] = useState(false)
  const [showContactFields, setShowContactFields] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [submissionLoading, setSubmissionLoading] = useState(false)

  // Función de callback para envío de formulario
  const onFormSubmit = () => {
    // Muestra un spinner de envío
    setSubmissionLoading(true)
    setTimeout(() => {
      setSubmissionLoading(false)
      // Cierra el formulario y muestra la Thank You page
      setShowFormScreen(false)
      setShowThankYou(true)
    }, 2000) // Ajusta el tiempo según tu necesidad
  }

  if (showThankYou) {
    // Renderizamos la Thank You page
    return <ThankYouPage />
  }

  if (submissionLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white rounded-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-700 border-t-transparent"></div>
      </div>
    )
  }

  if (showFormScreen) {
    // Se pasa el callback onFormSubmit a FormScreen
    return <FormScreen onClose={() => setShowFormScreen(false)} onFormSubmit={onFormSubmit} />
  }

  if (showContactPage) {
    return <ContactPage onBack={() => setShowContactPage(false)} />
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Cessione del Quinto - Prestiti per Dipendenti e Pensionati",
    "description": "Ottieni un prestito sicuro con la cessione del quinto per dipendenti pubblici e pensionati con tassi agevolati e rate fisse.",
    "provider": {
      "@type": "FinancialService",
      "name": "Creditplan",
      "url": "https://aiquinto.it",
      "logo": "https://aiquinto.it/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "IT",
        "availableLanguage": ["Italian", "English"]
      }
    },
    "offers": {
      "@type": "LoanOrCredit",
      "name": "Cessione del Quinto Creditplan",
      "loanType": "Cessione del Quinto",
      "interestRate": "3.5",
      "loanTerm": "120 mesi",
      "amount": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "5000-75000"
      },
      "eligibleCustomerType": ["Pensionati", "Dipendenti Pubblici", "Dipendenti Privati"],
      "provider": {
        "@type": "FinancialService",
        "name": "Creditplan"
      },
      "termsOfService": "https://aiquinto.it/termini"
    },
    "review": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cessione del Quinto - Creditplan</title>
        <meta name="description" content="Ottieni un prestito sicuro con la cessione del quinto per dipendenti pubblici e pensionati con tassi agevolati." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="flex-grow">
        {/* Sección Hero con fondo celeste y olas */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 w-full pt-4">
          <div className="flex flex-col md:flex-row justify-center items-stretch mx-4 md:mx-12 gap-6">
            <div className="p-6 md:mr-12 mb-6 md:mb-0">
              <div className="px-4 md:px-16">
                <h1 className="flex items-center space-x-2 mt-8">
                  <img
                    src={aiQuintoLogo}
                    alt="AI Quinto Logo"
                    className="w-32 sm:w-40 md:w-56 px-2 py-0 bg-blue-800 rounded-full"
                  />
                  <span className="text-center text-base sm:text-xl font-medium">by</span>
                  <img
                    src={logo_creditplan}
                    alt="Creditplan Logo"
                    className="w-40 sm:w-48 md:w-72"
                  />
                </h1>
                <p className="inline-block text-xs font-medium text-green-950 mt-4 py-0.5 bg-green-200 px-2 border border-green-500 rounded-lg">
                  Offerta a tempo limitato
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-800">
                  Richiedi subito fino a 75.000 € per la tua Cessione del Quinto
                </h2>
                <p className="text-lg text-gray-900 mt-4">
                  Risparmia tempo e denaro con AIquinto.it by Creditplan.
                </p>
                <p className="text-2xl font-medium text-gray-800 mt-5">
                  Richiedi la Cessione del Quinto in pochi click.
                </p>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex flex-col space-y-4">
                    {/* Box para iniciar el formulario */}
                    <div
                      className="relative bg-blue-800 w-full sm:w-[90%] md:w-[1000px] h-16 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex items-center justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-md"
                      onClick={() => setShowFormScreen(true)}
                    >
                      <span className="text-xl md:text-2xl font-medium text-white mr-2">
                        Inizia Ora
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <FaArrowRight className="text-sm text-black" />
                      </div>
                    </div>
                    <p className="flex justify-center text-lg text-gray-500">
                      Oppure
                    </p>
                    {/* Box para enlace de agente */}
                    <div>
                      <div className="relative bg-white w-full sm:w-[90%] md:w-[1000px] h-16 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex items-center justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-md"
                        onClick={() => setShowContactPage(true)}
                      >
                        <span className="text-xl md:text-2xl font-medium text-black mr-2">
                          Richiedi di Essere Contattato
                        </span>
                        <div className="w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center">
                          <FaArrowRight className="text-sm text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={family_w_dog}
              alt="family with dog"
              className="w-full md:w-96 h-full object-cover rounded-3xl"
            />
          </div>
          <HeroWave />
        </div>
        {/* Resto de la página */}
        <div className="bg-white">
          {/* Sección de Ilustración */}
          <div className="my-24 w-full max-w-4xl mx-auto px-4 flex justify-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <h5 className="font-medium text-4xl mb-2">
                  Il servizio 100% digitale 100% umano.
                </h5>
                <p className="text-gray-700 font-normal text-xl">
                  Gestito dalla nostra Intelligenza Artificiale e dagli esperti a te dedicati.
                </p>
              </div>
              <div>
                <img
                  src={savingSvg}
                  alt="Ilustración de ahorro"
                  className="max-w-sm"
                />
              </div>
            </div>
          </div>

          {/* Sección Reactiva */}
          <div className="my-32 text-center bg-gradient-to-r from-blue-100 to-blue-300 p-8 mx-4 md:mx-auto shadow-md">
            <p className="text-4xl font-semibold">
              Scopri subito quanto puoi ottenere!
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Calcola in pochi click il tuo finanziamento su misura: semplice, veloce e senza impegno.
            </p>
            <button className="bg-blue-700 text-white px-8 py-2 rounded-2xl mt-8 border border-gray-400 hover shadow-md transition-transform duration-300 hover:scale-110">
              Inizia Ora
            </button>
          </div>

          {/* Sección FAQ */}
          <FAQ />

          {/* New clickable buttons section placed above the Wave */}
          {!showContactFields ? (
            // Sección de botones clicables
            <div className="w-full sm:w-[90%] md:w-[1000px] mx-auto bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Richiedi subito la tua
                <br />
                Cessione del Quinto!
              </h2>
              <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-4">
                <div
                  onClick={() => setShowFormScreen(true)}
                  className="flex-1 cursor-pointer bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-xl text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Inizia Ora
                </div>
                <div
                  onClick={() => setShowContactFields(true)}
                  className="flex-1 cursor-pointer bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-2xl text-xl text-center border border-gray-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Richiedi di Essere Contattato
                </div>
              </div>
            </div>
          ) : (
            // Nueva sección con 4 inputs en grid de 2 columnas
            <div className="w-full sm:w-[90%] md:w-[1000px] mx-auto bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-8">
                <button
                  onClick={() => setShowContactFields(false)}
                  className="mr-4"
                >
                  <FaArrowLeft className="text-2xl text-black" />
                </button>
                <h2 className="flex-1 text-3xl font-semibold text-center">
                  Inserisci i tuoi dati per essere contattato
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="border p-4 rounded-2xl text-xl w-full"
                />
                <input
                  type="text"
                  placeholder="Cognome"
                  className="border p-4 rounded-2xl text-xl w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-4 rounded-2xl text-xl w-full"
                />
                <input
                  type="tel"
                  placeholder="Telefono"
                  className="border p-4 rounded-2xl text-xl w-full"
                />
              </div>
              <button
                className="mt-8 block mx-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
                onClick={() => console.log("Invia richiesta")}
              >
                Invia Richiesta
              </button>
            </div>
          )}

          {/* Wave */}
          <Wave />
        </div>
      </main>

      <Footer />

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
            <div className="flex flex-col items-start">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Creditplan Italia Network di Mediazione Creditizia SRL
                </h3>
                <p className="text-sm">
                  Iscr. OAM n.M30<br />
                  P.IVA 06197620963<br />
                  REA MB-1856950
                </p>
              </div>
              <a
                href="https://www.organismo-am.it/b/0/06197620963/F311BEF5-24B7-4A32-AB79-567598386DBC/g.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <img
                  src="https://www.organismo-am.it/b/0/c3f18c274847902265f07537ce366a8eJO5NMdSW1LRcd_pl_8_eq_/1.png"
                  alt="Iscrizione OAM"
                  className="w-24"
                />
              </a>
            </div>
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
            <a
              href="https://creditplan.it/dove-siamo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group inline-block transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  Trova il tuo consulente Creditplan
                  <FaArrowRight className="ml-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </h3>
              </div>
            </a>
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
          Copyright © 2025 – Creditplan Italia Network di mediazione creditizia srl. All Rights Reserved.
          <br />
          Designed &amp; developed by Matias Galliani :)
        </p>
      </div>
    </footer>
  )
}

export default App;
