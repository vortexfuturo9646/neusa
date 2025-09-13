import React from 'react';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg2.png)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center flex-1 px-4 py-6">
        {/* Central Card */}
        <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-white/10 mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            {/* Profile Image Circle */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-white/30 mb-4 flex-shrink-0 shadow-xl">
              <img 
                src="http://vortexfuturo.com.br/wp-content/uploads/2025/09/mae-neusa.png.png" 
                alt="Mãe Neusa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Status */}
            <div className="flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Mãe Neusa está online</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-6">
            <div className="mb-4">
              <h2 className="text-yellow-400 text-lg font-semibold mb-4 flex items-center justify-center">
                ⚠️ Aviso espiritual:
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-4">
                O portal que se abriu para você fecha em poucas horas. Se você não desbloquear essa revelação agora, pode perder o momento certo de agir.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full">
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base flex items-center justify-center gap-3 animate-pulse"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=554499372336&text=Quero%20receber%20minha%20revelação', '_blank')}
            >
              💬 Receber minha revelação
            </button>
            
            {/* Message below button */}
            <p className="text-center text-white/80 text-sm mt-4 italic">
              Sua revelação te aguarda no WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-white/10 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-3 text-xs">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Contato</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Afiliados</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Termos de Uso</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-white/60 text-xs mb-2">
            © 2025 Vortex Futuro.
          </div>
          <div className="text-center text-white/60 text-xs mb-2">
            Todos os direitos reservados.
          </div>
          
          {/* Legal Text */}
          <div className="text-center text-white/50 text-xs leading-relaxed max-w-2xl mx-auto">
            <p className="mb-1">
              Todo o conteúdo deste site incluindo textos, imagens, logotipos, gráficos, elementos visuais e funcionalidades é protegido por leis de direitos autorais aplicáveis.
            </p>
            <p>
              A reprodução, distribuição ou qualquer uso não autorizado deste material é expressamente proibida e pode resultar em medidas legais conforme a legislação vigente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;