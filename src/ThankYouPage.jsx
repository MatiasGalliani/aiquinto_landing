import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import aiQuintoLogo from './assets/ai_quinto_logo.png';
import logo_creditplan from './assets/LOGO-CREDITPLAN.png';
import { Footer } from './App';

function ThankYouPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-blue-200">
      <Helmet>
        <title>Grazie - Richiesta Inviata</title>
        <meta name="description" content="La tua richiesta è stata inviata con successo. Ti contatteremo al più presto." />
      </Helmet>
      
      {/* Contenedor principal que centra el contenido */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl p-10 max-w-md text-center mt-36 mb-48">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <img 
              src={aiQuintoLogo} 
              alt="AI Quinto Logo" 
              className="w-32 h-auto bg-blue-700 rounded-xl p-1" 
            />
            <img 
              src={logo_creditplan} 
              alt="Creditplan Logo" 
              className="w-32 h-auto" 
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grazie!</h1>
          <p className="text-lg text-gray-700 mb-6">
            La tua richiesta è stata inviata con successo. €ugenio IA di Creditplan ti scriverà subito su WhatsApp per fissare una videochiamata con un nostro esperto.
          </p>
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
            onClick={() => window.location.href = "/"}
          >
            Torna alla Home
          </button>
          <p className="mt-6 text-sm text-gray-500 m-0">
            Siamo qui per supportarti nel tuo percorso finanziario.
          </p>
        </div>
      </div>

      {/* Footer fijo al final */}
      <Footer />
    </div>
  );
}

export default ThankYouPage;
