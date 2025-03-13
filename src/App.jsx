import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import logo_creditplan from './assets/LOGO-CREDITPLAN.png'
import family_w_dog from './assets/family_with_dog.png'
import savingSvg from './assets/saving.svg'
import './App.css'
import ChatWidget from './components/ChatWidget'
import aiQuintoLogo from './assets/ai_quinto_logo.png'

function FormScreen({ onClose }) {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null) // "pensionato" o "dipendente"
  const [depType, setDepType] = useState(null) // Opción del dropdown principal
  const [dropdownOpen, setDropdownOpen] = useState(false) // Controla el desplegable principal

  // NUEVOS estados para el dropdown secundario
  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState(false)
  const [secondarySelection, setSecondarySelection] = useState(null)

  // NUEVOS estados para la pagina adicional de "Pubblico"
  const [contractType, setContractType] = useState("")
  const [birthDate, setBirthDate] = useState("1968-05-23")
  const [province, setProvince] = useState("")
  // New state to determine if the device is mobile
  const [isMobile, setIsMobile] = useState(false)

  // Check viewport width to set isMobile (adjust the px threshold as needed)
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const secondaryOptionsMapping = {
    "Pubblico": ["Ospedale", "Comune", "Medico convenzionato", "Altro"],
    "Statale": ["Carabinieri", "Guardia di finanza", "Altro"],
    "Parapubblico": ["Poste Italiane", "Gruppo FFSS", "Gruppo ANAS", "Altro"],
    "Privato": ["SPA", "SRL", "Cooperativa", "Ditta Individuale"]
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white rounded-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-700 border-t-transparent"></div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        {/* Contenedor flex para la flecha y el título */}
        <div className="grid grid-cols-3 items-center w-full max-w-5xl mb-8">
          <div>
            <button onClick={onClose}>
              <IoIosArrowBack size={32} className="text-black" />
            </button>
          </div>
          <div className="flex justify-center">
            <h2 className="text-xl font-semibold">
              Qual è la tua situazione lavorativa?
            </h2>
          </div>
          <div>{/* Espacio vacío para equilibrar la cuadrícula */}</div>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-xl">
          {/* Opción Pensionato */}
          <div
            className="flex items-center bg-white border border-gray-300 hover:border-gray-600 cursor-pointer rounded-2xl p-6 transition"
            onClick={() => setSelectedOption("pensionato")}
          >
            <div 
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition 
                ${selectedOption === "pensionato" ? "bg-red-700 border-red-700" : "bg-white border-gray-300"}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedOption("pensionato")
              }}
            ></div>
            <span className="text-xl font-semibold">Pensionato</span>
          </div>
          {/* Opción Dipendente */}
          <div
            className="flex items-center bg-white border border-gray-300 hover:border-gray-600 cursor-pointer rounded-2xl p-6 transition"
            onClick={() => setSelectedOption("dipendente")}
          >
            <div 
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition 
                ${selectedOption === "dipendente" ? "bg-red-700 border-red-700" : "bg-white border-gray-300"}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedOption("dipendente")
              }}
            ></div>
            <span className="text-xl font-semibold">Dipendente</span>
          </div>
        </div>
        {selectedOption && (
          <button
            className="mt-8 bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-xl rounded-2xl"
            onClick={() => setStep(2)}
          >
            Avanti
          </button>
        )}
      </div>
    )
  }

  // Paso 2 para el formulario de Pensionato y Dipendente
  if (step === 2) {
    if (selectedOption === "pensionato") {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
          <div className="flex items-center w-full max-w-xl mb-8">
            <button onClick={() => setStep(1)} className="mr-4">
              <IoIosArrowBack size={32} className="text-blue-600" />
            </button>
            <h2 className="text-3xl font-semibold">
              Scelta: Pensionato
            </h2>
          </div>
          <p className="text-lg mb-8">[Aquí iría la siguiente parte del formulario per Pensionato...]</p>
          <button
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 text-sm rounded-2xl border border-gray-300"
            onClick={() => console.log("Avanzando a la siguiente parte...")}
          >
            Avanti
          </button>
        </div>
      )
    } else if (selectedOption === "dipendente") {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
          {/* Encabezado con botón para volver */}
          <div className="grid grid-cols-3 items-center w-full max-w-5xl mb-8">
            <div>
              <button onClick={() => setStep(1)}>
                <IoIosArrowBack size={32} className="text-black" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">
                Che tipo di dipendente sei
              </span>
            </div>
            <div>{/* Espacio para equilibrar la cuadrícula */}</div>
          </div>
          {/* Desplegable principal */}
          <div className="w-full max-w-md mb-4">
            <div 
              onClick={() => { 
                setDropdownOpen(!dropdownOpen)
                // Si se abre el principal se cierra el secundario
                setSecondaryDropdownOpen(false)
              }}
              className="border p-4 rounded-2xl cursor-pointer flex justify-between items-center"
            >
              <span className="text-xl font-semibold">
                {depType ? depType : "Seleziona tipo di dipendente"}
              </span>
              <IoIosArrowDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-90" : ""}`} />
            </div>
            {dropdownOpen && (
              <div className="mt-2 border border-gray-300 rounded-lg shadow-lg">
                {["Pubblico", "Statale", "Parapubblico", "Privato"].map(option => (
                  <button 
                    key={option}
                    onClick={() => {
                      setDepType(option)
                      setDropdownOpen(false)
                      // Al seleccionar la opción principal, se reinicia la opción secundaria
                      setSecondarySelection(null)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Desplegable secundario: se muestra si ya se seleccionó una opción principal */}
          {depType && (
            <div className="w-full max-w-md mb-4">
              <div 
                onClick={() => setSecondaryDropdownOpen(!secondaryDropdownOpen)}
                className="border p-4 rounded-2xl cursor-pointer flex justify-between items-center"
              >
                <span className="text-xl font-semibold">
                  {secondarySelection ? secondarySelection : "Seleziona il sottotipo"}
                </span>
                <IoIosArrowDown className={`transition-transform duration-300 ${secondaryDropdownOpen ? "rotate-90" : ""}`} />
              </div>
              {secondaryDropdownOpen && (
                <div className="mt-2 border border-gray-300 rounded-lg shadow-lg">
                  {secondaryOptionsMapping[depType].map(subOption => (
                    <button
                      key={subOption}
                      onClick={() => {
                        setSecondarySelection(subOption)
                        setSecondaryDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {subOption}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <button
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
            onClick={() => {
              if (
                depType === "Pubblico" ||
                depType === "Statale" ||
                depType === "Parapubblico"
              ) {
                setStep(3)
              } else {
                console.log("Dipendente data submitted", { depType, secondarySelection })
              }
            }}
          >
            Avanti
          </button>
        </div>
      )
    }
  }

  // Paso 3: Campos adicionales para "Pubblico", "Statale" o "Parapubblico"
  if (
    step === 3 &&
    selectedOption === "dipendente" &&
    (depType === "Pubblico" || depType === "Statale" || depType === "Parapubblico")
  ) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        <div className="flex items-center w-full max-w-xl mb-8">
          <button onClick={() => setStep(2)} className="mr-4">
            <IoIosArrowBack size={32} className="text-black" />
          </button>
          <h2 className="text-3xl font-semibold">
            Informazioni Aggiuntive
          </h2>
        </div>
        <div className="w-full max-w-md space-y-4">
          {/* Tipologia di contratto */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-2">
              Tipologia di contratto?*
            </label>
            <select
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
              className="border p-4 rounded-2xl"
            >
              <option value="">Seleziona</option>
              <option value="determinato">Tempo Determinato</option>
              <option value="indeterminato">Tempo Indeterminato</option>
              <option value="altro">Altro</option>
            </select>
          </div>
          {/* Anno di nascita */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-2">
              Anno di nascita?*
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="border p-4 rounded-2xl"
              readOnly={!isMobile}
            />
          </div>
          {/* Provincia */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-2">
              Provincia*
            </label>
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="border p-4 rounded-2xl"
            >
              <option value="">Seleziona</option>
              <option value="AG">Agrigento</option>
              <option value="AL">Alessandria</option>
              <option value="AN">Ancona</option>
              <option value="AO">Aosta</option>
              <option value="AR">Arezzo</option>
              <option value="AP">Ascoli Piceno</option>
              <option value="AT">Asti</option>
              <option value="AV">Avellino</option>
              <option value="BA">Bari</option>
              <option value="BT">Barletta-Andria-Trani</option>
              <option value="BL">Belluno</option>
              <option value="BN">Benevento</option>
              <option value="BG">Bergamo</option>
              <option value="BI">Biella</option>
              <option value="BO">Bologna</option>
              <option value="BZ">Bolzano</option>
              <option value="BS">Brescia</option>
              <option value="BR">Brindisi</option>
              <option value="CA">Cagliari</option>
              <option value="CL">Caltanissetta</option>
              <option value="CB">Campobasso</option>
              <option value="CI">Carbonia-Iglesias</option>
              <option value="CE">Caserta</option>
              <option value="CT">Catania</option>
              <option value="CZ">Catanzaro</option>
              <option value="CH">Chieti</option>
              <option value="CO">Como</option>
              <option value="CS">Cosenza</option>
              <option value="CR">Cremona</option>
              <option value="KR">Crotone</option>
              <option value="CN">Cuneo</option>
              <option value="EN">Enna</option>
              <option value="FM">Fermo</option>
              <option value="FE">Ferrara</option>
              <option value="FI">Firenze</option>
              <option value="FG">Foggia</option>
              <option value="FC">Forlì-Cesena</option>
              <option value="FR">Frosinone</option>
              <option value="GE">Genova</option>
              <option value="GO">Gorizia</option>
              <option value="GR">Grosseto</option>
              <option value="IM">Imperia</option>
              <option value="IS">Isernia</option>
              <option value="SP">La Spezia</option>
              <option value="LT">Latina</option>
              <option value="LE">Lecce</option>
              <option value="LC">Lecco</option>
              <option value="LO">Lodi</option>
              <option value="LU">Lucca</option>
              <option value="MC">Macerata</option>
              <option value="MN">Mantova</option>
              <option value="MS">Massa-Carrara</option>
              <option value="MT">Matera</option>
              <option value="ME">Messina</option>
              <option value="MI">Milano</option>
              <option value="MO">Modena</option>
              <option value="MB">Monza-Brianza</option>
              <option value="NA">Napoli</option>
              <option value="NO">Novara</option>
              <option value="NU">Nuoro</option>
              <option value="OR">Olbia-Tempio</option>
              <option value="PD">Padova</option>
              <option value="PA">Palermo</option>
              <option value="PR">Parma</option>
              <option value="PV">Pavia</option>
              <option value="PG">Perugia</option>
              <option value="PU">Pesaro e Urbino</option>
              <option value="PE">Pescara</option>
              <option value="PC">Piacenza</option>
              <option value="PI">Pisa</option>
              <option value="PT">Pistoia</option>
              <option value="PN">Pordenone</option>
              <option value="PZ">Potenza</option>
              <option value="PO">Prato</option>
              <option value="RG">Ragusa</option>
              <option value="RA">Ravenna</option>
              <option value="RC">Reggio Calabria</option>
              <option value="RE">Reggio Emilia</option>
              <option value="RI">Rieti</option>
              <option value="RN">Rimini</option>
              <option value="RM">Roma</option>
              <option value="RO">Rovigo</option>
              <option value="SA">Salerno</option>
              <option value="SS">Sassari</option>
              <option value="SV">Savona</option>
              <option value="SI">Siena</option>
              <option value="SR">Siracusa</option>
              <option value="SO">Sondrio</option>
              <option value="TA">Taranto</option>
              <option value="TE">Teramo</option>
              <option value="TR">Terni</option>
              <option value="TO">Torino</option>
              <option value="TP">Trapani</option>
              <option value="TN">Trento</option>
              <option value="TV">Treviso</option>
              <option value="TS">Trieste</option>
              <option value="UD">Udine</option>
              <option value="VA">Varese</option>
              <option value="VE">Venezia</option>
              <option value="VB">Verbano-Cusio-Ossola</option>
              <option value="VC">Vercelli</option>
              <option value="VR">Verona</option>
              <option value="VV">Vibo Valentia</option>
              <option value="VI">Vicenza</option>
              <option value="VT">Viterbo</option>
            </select>
          </div>
        </div>
        <button
          className="mt-8 bg-red-700 hover:bg-red-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
          onClick={() =>
            console.log("Dipendente additional data", { contractType, birthDate, province })
          }
        >
          Avanti
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
      {/* Contenedor flex para la flecha y el título */}
      <div className="flex items-center w-full max-w-xl mb-8">
        <button onClick={() => setStep(1)} className="mr-4">
          <IoIosArrowBack size={32} className="text-blue-600" />
        </button>
        <h2 className="text-3xl font-semibold">
          Scelta: {selectedOption === "pensionato" ? "Pensionato" : "Dipendente"}
        </h2>
      </div>
      <p className="text-lg mb-8">[Aquí iría la seguente parte del formulario...]</p>
      <button
        className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 text-sm rounded-2xl border border-gray-300"
        onClick={() => console.log("Avanzando a la siguiente parte...")}
      >
        Avanti
      </button>
    </div>
  )
}

function HeroWave() {
  return (
    <div className="relative h-40 overflow-hidden">
      <svg className="absolute block top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0099ff"
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
  // Estado para controlar la apertura del ChatWidget
  const [chatOpen, setChatOpen] = useState(false)
  // Nuevo estado para activar la pantalla del formulario
  const [showFormScreen, setShowFormScreen] = useState(false)

  // Si se activa el formulario, renderizamos FormScreen
  if (showFormScreen) {
    return <FormScreen onClose={() => setShowFormScreen(false)} />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Sección Hero con fondo celeste y olas */}
        <div className="bg-blue-100 w-full pt-4">
          <div className="flex flex-col md:flex-row justify-center items-stretch mx-4 md:mx-12 gap-6">
            <div className="p-6 md:mr-12 mb-6 md:mb-0">
              <div className="px-4 md:px-16">
                <h1 className="flex items-center space-x-4">
                  <img
                    src={aiQuintoLogo}
                    alt="AI Quinto Logo"
                    className="w-40 md:w-56 mt-8"
                  />
                  <span className="text-xl font-medium mt-8">by</span>
                  <img
                    src={logo_creditplan}
                    alt="Creditplan Logo"
                    className="w-40 md:w-56 mt-8"
                  />
                </h1>
                <p className="inline-block text-xs font-medium text-green-950 mt-4 py-0.5 bg-green-200 px-2 border border-green-500 rounded-lg">
                  Offerta a tempo limitato
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-800">
                  Richiedi subito fino a 75.000 € per la tua Cessione del Quinto
                </h2>
                <p className="text-lg text-gray-900 mt-4">
                  Risparmia tempo e denaro con AI QUINTO® by Creditplan.
                </p>
                <p className="text-2xl font-medium text-gray-800 mt-5">
                  Richiedi la Cessione del Quinto in pochi click.
                </p>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex flex-col space-y-4">
                    {/* Box para iniciar el formulario */}
                    <div
                      className="relative bg-red-700 w-full sm:w-[90%] md:w-[1000px] h-16 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex items-center justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-md"
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
                    <a
                      href="https://calendar.creditplan.it/cqsagents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative bg-white w-full sm:w-[90%] md:w-[1000px] h-16 cursor-pointer border border-gray-400 hover:border-gray-700 rounded-2xl flex items-center justify-center px-4 transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
                        <span className="text-xl md:text-2xl font-medium text-black mr-2">
                          Richiedi di Essere Contattato
                        </span>
                        <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                          <FaArrowRight className="text-sm text-white" />
                        </div>
                      </div>
                    </a>
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
          {/* Diseño creativo con olas que separan la sección Hero */}
          <HeroWave />
        </div>

        {/* Resto de la página con fondo blanco */}
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
          <div className="my-32 text-center bg-blue-100 p-8 mx-4 md:mx-auto shadow-md">
            <p className="text-4xl font-semibold">
              Scopri subito quanto puoi ottenere!
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Calcola in pochi click il tuo finanziamento su misura: semplice, veloce e senza impegno.
            </p>
            <button className="bg-white text-black px-8 py-2 rounded-2xl mt-8 border border-gray-400 hover:border-gray-700 shadow-md transition-transform duration-300 hover:scale-105">
              Inizia Ora
            </button>
          </div>

          {/* Sección FAQ */}
          <FAQ />

          {/* Componente Wave para el efecto de ola final */}
          <Wave />
        </div>
      </main>

      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <ChatWidget open={chatOpen} setOpen={setChatOpen} />
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
              href="https://calendar.creditplan.it"
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
