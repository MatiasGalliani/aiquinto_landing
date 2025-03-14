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

  // Agrega los nuevos estados al inicio del componente FormScreen, junto a los demás:
  const [nome, setNome] = useState("")
  const [cognome, setCognome] = useState("")
  const [mail, setMail] = useState("")
  const [telefono, setTelefono] = useState("")
  // Estado para aceptar la Privacy Policy
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  // Dentro del componente FormScreen, agrega el nuevo estado junto a los demás:
  const [contractDropdownOpen, setContractDropdownOpen] = useState(false);

  // Dentro del componente FormScreen, agrega el estado para controlar el dropdown de provincia:
  const [provinceDropdownOpen, setProvinceDropdownOpen] = useState(false);

  // NUEVOS estados para el flujo "Dipendente"
  const [amountRequested, setAmountRequested] = useState("")
  const [netSalary, setNetSalary] = useState("")

  // Check viewport width to set isMobile (adjust the px threshold as needed)
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const secondaryOptionsMapping = {
    "Pubblico": ["Ospedale", "Comune", "Medico convenzionato", "Altro"],
    "Statale": ["Carabinieri", "Guardia di finanza", "Vigili del Fuoco", "Esercito", "Marina Militare", "Aeronautica", "Polizia", "Scuole", "Università", "Altro"],
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
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-700 border-t-transparent"></div>
      </div>
    )
  }

  // Step 1: Selección entre Pensionato y Dipendente
  if (step === 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        <div className="flex items-center w-full max-w-xl mb-8">
          <div>
            <button onClick={onClose}>
              <IoIosArrowBack size={32} className="text-black mr-4" />
            </button>
          </div>
          <div className="flex justify-center">
            <h2 className="text-3xl font-semibold">
              Qual è la tua situazione lavorativa?
            </h2>
          </div>
          <div>{/* Espacio vacío */}</div>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-xl">
          <div
            className="flex items-center bg-white border border-gray-300 hover:border-gray-600 cursor-pointer rounded-2xl p-6 transition"
            onClick={() => setSelectedOption("pensionato")}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition 
                ${selectedOption === "pensionato" ? "bg-blue-700 border-blue-700" : "bg-white border-gray-300"}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedOption("pensionato")
              }}
            ></div>
            <span className="text-xl font-semibold">Pensionato</span>
          </div>
          <div
            className="flex items-center bg-white border border-gray-300 hover:border-gray-600 cursor-pointer rounded-2xl p-6 transition"
            onClick={() => setSelectedOption("dipendente")}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition 
                ${selectedOption === "dipendente" ? "bg-blue-700 border-blue-700" : "bg-white border-gray-300"}`}
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
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 text-xl rounded-2xl"
            onClick={() => setStep(2)}
          >
            Avanti
          </button>
        )}
      </div>
    )
  }

  // STEP 2:
  // Para Pensionato: pantalla existente
  // Para Dipendente: NUEVA pantalla preliminar con inputs de importo e stipendio
  if (step === 2) {
    if (selectedOption === "pensionato") {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
          <div className="flex items-center w-full max-w-xl mb-8">
            <button onClick={() => setStep(1)} className="mr-4">
              <IoIosArrowBack size={32} className="text-black" />
            </button>
            <h2 className="text-3xl font-semibold">
              Scelta: Pensionato
            </h2>
          </div>
          <p className="text-lg mb-8">[Qui andrà la parte successiva del form per Pensionato...]</p>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 text-sm rounded-2xl border border-gray-300"
            onClick={() => console.log("Avanzando per Pensionato...")}
          >
            Avanti
          </button>
        </div>
      )
    } else if (selectedOption === "dipendente") {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
          {/* Botón para volver */}
          <div className="flex items-center w-full max-w-xl mb-8">
            <button onClick={() => setStep(1)} className="mr-4">
              <IoIosArrowBack size={32} className="text-black" />
            </button>
            <h2 className="text-3xl font-semibold">
              Inserisci i tuoi dati iniziali
            </h2>
          </div>
          <div className="w-full max-w-md space-y-4">
            <div className="flex flex-col">
              <label className="text-base sm:text-xl font-semibold mb-2">
                L'importo richiesto?*
              </label>
              <input
                type="text"
                value={amountRequested}
                onChange={(e) => setAmountRequested(e.target.value)}
                className="border p-3 sm:p-4 rounded-2xl text-base sm:text-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base sm:text-xl font-semibold mb-2">
                Stipendio netto mensile?*
              </label>
              <input
                type="text"
                value={netSalary}
                onChange={(e) => setNetSalary(e.target.value)}
                className="border p-3 sm:p-4 rounded-2xl text-base sm:text-lg"
              />
            </div>
          </div>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-xl rounded-2xl mt-8"
            onClick={() => setStep(3)}
          >
            Avanti
          </button>
        </div>
      )
    }
  }

  // STEP 3:
  // Per "Dipendente": Schermata "Che tipo di dipendente sei"
  if (step === 3 && selectedOption === "dipendente") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        {/* Cabecera unificada */}
        <div className="flex items-center w-full max-w-xl mb-8">
          <button onClick={() => setStep(2)} className="mr-4">
            <IoIosArrowBack size={32} className="text-black" />
          </button>
          <h2 className="text-3xl font-semibold">Che tipo di dipendente sei</h2>
        </div>
        {/* Desplegable principal */}
        <div className="w-full max-w-md mb-4">
          <div
            onClick={() => {
              setDropdownOpen(!dropdownOpen)
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
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
          onClick={() => {
            if (
              depType === "Pubblico" ||
              depType === "Statale" ||
              depType === "Parapubblico"
            ) {
              setStep(4)
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

  // STEP 4:
  // Para "Dipendente": Campos adicionales se mostrano se il tipo de dipendente es Pubblico, Statale o Parapubblico.
  if (
    step === 4 &&
    selectedOption === "dipendente" &&
    (depType === "Pubblico" || depType === "Statale" || depType === "Parapubblico")
  ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 rounded-2xl">
        <div className="flex items-center w-full max-w-xl mb-8">
          <button onClick={() => setStep(3)} className="mr-4">
            <IoIosArrowBack size={32} className="text-black" />
          </button>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Informazioni Aggiuntive
          </h2>
        </div>
        <div className="w-full max-w-md space-y-4">
          {/* Tipologia di contratto */}
          <div className="w-full max-w-md mb-4">
            <label className="text-base sm:text-xl font-semibold mb-2 block">
              Tipologia di contratto?*
            </label>
            <div
              onClick={() => setContractDropdownOpen(!contractDropdownOpen)}
              className="border p-4 rounded-2xl cursor-pointer flex justify-between items-center"
            >
              <span className="text-xl font-semibold">
                {contractType
                  ? contractType === "determinato"
                    ? "Tempo Determinato"
                    : contractType === "indeterminato"
                      ? "Tempo Indeterminato"
                      : "Altro"
                  : "Seleziona"}
              </span>
              <IoIosArrowDown className={`transition-transform duration-300 ${contractDropdownOpen ? "rotate-90" : ""}`} />
            </div>
            {contractDropdownOpen && (
              <div className="mt-2 border border-gray-300 rounded-lg shadow-lg">
                {[
                  { value: "", label: "Seleziona" },
                  { value: "determinato", label: "Tempo Determinato" },
                  { value: "indeterminato", label: "Tempo Indeterminato" },
                  { value: "altro", label: "Altro" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setContractType(option.value)
                      setContractDropdownOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Anno di nascita */}
          <div className="flex flex-col">
            <label className="text-base sm:text-xl font-semibold mb-2">
              Anno di nascita?*
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="border p-3 sm:p-4 rounded-2xl text-base sm:text-lg"
            />
          </div>
          {/* Provincia */}
          <div className="w-full max-w-md mb-4">
            <label className="text-base sm:text-xl font-semibold mb-2 block">
              Provincia*
            </label>
            <div
              onClick={() => setProvinceDropdownOpen(!provinceDropdownOpen)}
              className="border p-4 rounded-2xl cursor-pointer flex justify-between items-center"
            >
              <span className="text-xl font-semibold">
                {province ? province : "Seleziona"}
              </span>
              <IoIosArrowDown className={`transition-transform duration-300 ${provinceDropdownOpen ? "rotate-90" : ""}`} />
            </div>
            {provinceDropdownOpen && (
              <div className="mt-2 border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {[
                  { value: "", label: "Seleziona" },
                  { value: "AG", label: "Agrigento" },
                  { value: "AL", label: "Alessandria" },
                  { value: "AN", label: "Ancona" },
                  { value: "AO", label: "Aosta" },
                  { value: "AR", label: "Arezzo" },
                  { value: "AP", label: "Ascoli Piceno" },
                  { value: "AT", label: "Asti" },
                  { value: "AV", label: "Avellino" },
                  { value: "BA", label: "Bari" },
                  { value: "BT", label: "Barletta-Andria-Trani" },
                  { value: "BL", label: "Belluno" },
                  { value: "BN", label: "Benevento" },
                  { value: "BG", label: "Bergamo" },
                  { value: "BI", label: "Biella" },
                  { value: "BO", label: "Bologna" },
                  { value: "BZ", label: "Bolzano" },
                  { value: "BS", label: "Brescia" },
                  { value: "BR", label: "Brindisi" },
                  { value: "CA", label: "Cagliari" },
                  { value: "CL", label: "Caltanissetta" },
                  { value: "CB", label: "Campobasso" },
                  { value: "CI", label: "Carbonia-Iglesias" },
                  { value: "CE", label: "Caserta" },
                  { value: "CT", label: "Catania" },
                  { value: "CZ", label: "Catanzaro" },
                  { value: "CH", label: "Chieti" },
                  { value: "CO", label: "Como" },
                  { value: "CS", label: "Cosenza" },
                  { value: "CR", label: "Cremona" },
                  { value: "KR", label: "Crotone" },
                  { value: "CN", label: "Cuneo" },
                  { value: "EN", label: "Enna" },
                  { value: "FM", label: "Fermo" },
                  { value: "FE", label: "Ferrara" },
                  { value: "FI", label: "Firenze" },
                  { value: "FG", label: "Foggia" },
                  { value: "FC", label: "Forlì-Cesena" },
                  { value: "FR", label: "Frosinone" },
                  { value: "GE", label: "Genova" },
                  { value: "GO", label: "Gorizia" },
                  { value: "GR", label: "Grosseto" },
                  { value: "IM", label: "Imperia" },
                  { value: "IS", label: "Isernia" },
                  { value: "SP", label: "La Spezia" },
                  { value: "LT", label: "Latina" },
                  { value: "LE", label: "Lecce" },
                  { value: "LC", label: "Lecco" },
                  { value: "LO", label: "Lodi" },
                  { value: "LU", label: "Lucca" },
                  { value: "MC", label: "Macerata" },
                  { value: "MN", label: "Mantova" },
                  { value: "MS", label: "Massa-Carrara" },
                  { value: "MT", label: "Matera" },
                  { value: "ME", label: "Messina" },
                  { value: "MI", label: "Milano" },
                  { value: "MO", label: "Modena" },
                  { value: "MB", label: "Monza-Brianza" },
                  { value: "NA", label: "Napoli" },
                  { value: "NO", label: "Novara" },
                  { value: "NU", label: "Nuoro" },
                  { value: "OR", label: "Olbia-Tempio" },
                  { value: "PD", label: "Padova" },
                  { value: "PA", label: "Palermo" },
                  { value: "PR", label: "Parma" },
                  { value: "PV", label: "Pavia" },
                  { value: "PG", label: "Perugia" },
                  { value: "PU", label: "Pesaro e Urbino" },
                  { value: "PE", label: "Pescara" },
                  { value: "PC", label: "Piacenza" },
                  { value: "PI", label: "Pisa" },
                  { value: "PT", label: "Pistoia" },
                  { value: "PN", label: "Pordenone" },
                  { value: "PZ", label: "Potenza" },
                  { value: "PO", label: "Prato" },
                  { value: "RG", label: "Ragusa" },
                  { value: "RA", label: "Ravenna" },
                  { value: "RC", label: "Reggio Calabria" },
                  { value: "RE", label: "Reggio Emilia" },
                  { value: "RI", label: "Rieti" },
                  { value: "RN", label: "Rimini" },
                  { value: "RM", label: "Roma" },
                  { value: "RO", label: "Rovigo" },
                  { value: "SA", label: "Salerno" },
                  { value: "SS", label: "Sassari" },
                  { value: "SV", label: "Savona" },
                  { value: "SI", label: "Siena" },
                  { value: "SR", label: "Siracusa" },
                  { value: "SO", label: "Sondrio" },
                  { value: "TA", label: "Taranto" },
                  { value: "TE", label: "Teramo" },
                  { value: "TR", label: "Terni" },
                  { value: "TO", label: "Torino" },
                  { value: "TP", label: "Trapani" },
                  { value: "TN", label: "Trento" },
                  { value: "TV", label: "Treviso" },
                  { value: "TS", label: "Trieste" },
                  { value: "UD", label: "Udine" },
                  { value: "VA", label: "Varese" },
                  { value: "VE", label: "Venezia" },
                  { value: "VB", label: "Verbano-Cusio-Ossola" },
                  { value: "VC", label: "Vercelli" },
                  { value: "VR", label: "Verona" },
                  { value: "VV", label: "Vibo Valentia" },
                  { value: "VI", label: "Vicenza" },
                  { value: "VT", label: "Viterbo" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setProvince(option.value)
                      setProvinceDropdownOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 text-lg rounded-2xl border border-gray-300 w-full max-w-md"
          onClick={() => setStep(5)}
        >
          Avanti
        </button>
      </div>
    )
  }

  // Después del bloque del step === 3, agrega la siguiente condición para el step 4:
  if (step === 4) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        <div className="flex items-center w-full max-w-xl mb-8">
          <button onClick={() => setStep(3)} className="mr-4">
            <IoIosArrowBack size={32} className="text-black" />
          </button>
          <h2 className="text-3xl font-semibold">Informazioni Contatto</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="text"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="email"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="tel"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
        </div>
        <button
          className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
          onClick={() =>
            console.log("Informazioni Contatto", { nome, cognome, mail, telefono })
          }
        >
          Invia
        </button>
      </div>
    )
  }

  // STEP 5: Último paso para "Dipendente": Informazioni Contatto con Privacy Policy
  if (step === 5 && selectedOption === "dipendente") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
        {/* Botón para volver al step precedente */}
        <div className="flex items-center w-full max-w-xl mb-8">
          <button onClick={() => setStep(4)} className="mr-4">
            <IoIosArrowBack size={32} className="text-black" />
          </button>
          <h2 className="text-3xl font-semibold">Informazioni Contatto</h2>
        </div>
        {/* Campos de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="text"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="email"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
          <input
            type="tel"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border p-4 rounded-2xl text-xl focus:ring-2 focus:ring-blue-700 transition duration-200 ease-in-out"
          />
        </div>
        {/* Checkbox de Privacy Policy centradas y con texto compacto */}
        <div className="mt-4 space-y-2 max-w-md mx-auto text-center">
          <div className="flex items-start mt-6">
            <input
              type="checkbox"
              id="privacy1"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mr-2 mt-1"
            />
            <label htmlFor="privacy1" className="text-sm text-gray-800 leading-snug">
              Dichiaro di aver preso visione dell'Informativa ai sensi del Decreto Legislativo 196/2003 e del Regolamento (UE) 2016/679 (GDPR).
            </label>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy2"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mr-2 mt-1"
            />
            <label htmlFor="privacy2" className="text-sm text-gray-800 leading-snug">
              Do il consenso a Creditplan al trattamento dei miei dati personali per contattarmi via email o telefono, valutare il mio profilo creditizio e creare un preventivo personalizzato. *Con l'invio della richiesta, dichiaro di aver preso visione dell'informativa sulla privacy.
            </label>
          </div>
        </div>
        <button
          className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
          onClick={() =>
            console.log("Informazioni Contatto", { nome, cognome, mail, telefono, privacyAccepted })
          }
        >
          Invia la Tua Richiesta
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 rounded-2xl">
      {/* Contenedor flex para la flecha y el título */}
      <div className="flex items-center w-full max-w-xl mb-8">
        <button onClick={() => setStep(1)} className="mr-4">
          <IoIosArrowBack size={32} className="text-black" />
        </button>
        <h2 className="text-3xl font-semibold">
          Scelta: {selectedOption === "pensionato" ? "Pensionato" : "Dipendente"}
        </h2>
      </div>
      <p className="text-lg mb-8">[Aquí iría la seguente parte del formulario...]</p>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 text-sm rounded-2xl border border-gray-300"
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

// Nuevo componente ContactPage
function ContactPage() {
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
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
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
        className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-lg rounded-2xl border border-gray-300"
        onClick={() =>
          console.log("Informazioni Contatto", { nome, cognome, mail, telefono })
        }
      >
        Invia
      </button>
    </div>
  )
}

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showFormScreen, setShowFormScreen] = useState(false)
  const [showContactPage, setShowContactPage] = useState(false)
  const [showContactFields, setShowContactFields] = useState(false)

  // Si se activa el formulario, renderizamos FormScreen
  if (showFormScreen) {
    return <FormScreen onClose={() => setShowFormScreen(false)} />
  }

  // Nueva ruta para la página de contacto
  if (showContactPage) {
    return <ContactPage />
  }

  return (
    <div className="flex flex-col min-h-screen">
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
                  className="flex-1 cursor-pointer bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-xl text-center"
                >
                  Inizia Ora
                </div>
                <div
                  onClick={() => setShowContactFields(true)}
                  className="flex-1 cursor-pointer bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-2xl text-xl text-center border border-gray-400"
                >
                  Richiedi di Essere Contattato
                </div>
              </div>
            </div>
          ) : (
            // Nueva sección con 4 inputs en grid de 2 columnas
            <div className="w-full sm:w-[90%] md:w-[1000px] mx-auto bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Inserisci i tuoi dati per essere contattato
              </h2>
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
            </div>
          )}

          {/* Wave */}
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
