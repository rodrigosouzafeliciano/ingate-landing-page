import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="bg-ingate-black pt-16 pb-8 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 mb-12 border-b border-gray-800 pb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="h-8 w-auto" fill="none" viewBox="0 0 92 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1082 9.61715C10.1082 9.61715 9.89962 20.8857 10.1882 24.32C10.3025 25.68 11.4311 26.1114 12.6396 26.0114C13.4825 25.9429 14.2568 25.5686 14.3396 24.3114C14.6082 20.24 13.2568 15.1057 16.1453 11.6686C18.6396 8.59143 24.1768 9.06001 26.1225 12.4943C27.2539 14.5514 26.9282 16.8286 26.9768 19.2171C26.9768 19.9143 26.9768 21.3171 26.9768 21.3171L26.9682 23.9971L22.9768 23.9857V20.96C22.9768 20.96 22.9768 19.12 22.9768 18.2114C22.9768 16.3114 23.0482 15.0857 22.2625 14.4114C21.2025 13.5229 19.3053 13.8829 18.8482 15.2543C18.3539 17.0486 18.6968 19.2229 18.6768 21.1172C18.8368 24.0514 18.5025 26.4086 16.5111 28.42C13.6825 31.3629 8.43677 30.18 6.79962 26.5543C6.09391 25.2457 5.89962 23.8543 5.81962 22.3914C5.66248 19.52 5.89677 9.62001 5.89677 9.62001H10.1111L10.1082 9.61715Z" fill="#EAE3D3"></path>
                <path d="M7.9997 8.53139C9.0948 8.53139 9.98256 7.64363 9.98256 6.54853C9.98256 5.45343 9.0948 4.56567 7.9997 4.56567C6.9046 4.56567 6.01685 5.45343 6.01685 6.54853C6.01685 7.64363 6.9046 8.53139 7.9997 8.53139Z" fill="#EAE3D3"></path>
                <path d="M47.0397 14.3515L46.9854 17.6801L46.9682 19.1258C46.8997 20.4515 46.6654 20.6287 46.4739 20.8772C43.7197 24.4801 38.3425 25.4115 34.2825 23.6972C26.9768 20.8601 26.2511 10.5601 32.5111 6.15153C37.2368 2.94581 46.1968 4.58867 47.0082 10.9458C47.0425 11.2201 47.0739 11.9372 47.0739 11.9372L42.7882 11.9487C42.7882 11.9487 42.6025 10.5572 42.0054 9.9401C39.4454 7.28867 33.9797 8.33153 33.0854 12.3744C32.8197 13.5744 32.6768 14.7772 32.8539 16.0258C33.4482 21.5144 41.3511 22.7144 42.9339 18.4601C43.1139 17.8658 43.1282 17.2944 43.1282 17.2944H38.0025V14.3544H47.0339L47.0397 14.3515Z" fill="#EE7718"></path>
                <path d="M76.5195 17.7885C76.7852 20.8342 79.6652 22.4313 82.1852 21.1628C82.9138 20.7971 83.2252 19.8599 83.2252 19.8599H86.8052C86.1138 24.3571 79.9452 25.6171 76.3509 23.5485C72.6852 21.3771 71.8224 15.0399 74.5252 12.1028C79.7224 6.4542 88.4766 10.6456 87.0938 17.7913H76.5224L76.5195 17.7885ZM83.3767 15.7799C82.9595 11.4228 77.2138 11.7799 76.8052 15.7799H83.3767Z" fill="#EE7718"></path>
                <path d="M61.3657 23.9829H58.22C58.22 23.9829 58.1828 22.7915 58.22 21.48C57.4028 21.42 58.1428 22.0743 56.2628 23.4429C50.4742 26.9972 45.5228 19.9572 50.78 16.2C51.4428 15.7258 52.5971 15.5943 53.2942 15.5743C54.7085 15.5315 57.4542 15.5743 57.4542 15.5743C57.4542 13.8458 57.1543 12.9286 55.1628 12.9286H50.0828V9.82861H55.9485C59.2657 9.82861 61.3628 12.3086 61.3628 15.1658V23.9829H61.3657ZM57.46 17.5743C55.0371 17.5743 52.1628 17.0715 52.2228 19.3686C52.3057 22.6572 57.7914 23.5143 57.46 17.5743Z" fill="#EE7718"></path>
                <path d="M68.8312 23.9914C67.9941 23.9971 66.8426 24.0114 65.6655 22.9171C64.4883 21.8228 64.4883 19.7085 64.4883 19.7085L64.5141 12.9228H62.4426V9.86282H64.5798V6.1571H68.2826L68.2512 9.86282H72.3655V12.9714L68.2055 12.9885L68.1883 16.6714V19.4314C68.1883 20.2885 68.8826 20.9828 69.7398 20.9828H72.3655V23.9914C72.3655 23.9914 69.7141 23.9857 68.8283 23.9914" fill="#EE7718"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A conexão inteligente que transforma o resgate veicular através da tecnologia.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Políticas</h4>
            <Link className="text-gray-400 hover:text-white transition-colors text-sm w-fit" href="#">Termos de Serviço</Link>
            <Link className="text-gray-400 hover:text-white transition-colors text-sm w-fit" href="#">Política de Privacidade</Link>
            <Link className="text-gray-400 hover:text-white transition-colors text-sm w-fit" href="#">Uso de Dados</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Contato</h4>
            <a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 w-fit" href="mailto:contato@ingate.com">
              <span className="material-symbols-outlined text-lg">mail</span>
              contato@ingate.com
            </a>
            <Link className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 w-fit" href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              Suporte ao Usuário
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 InGate. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">Plataforma tecnológica de intermediação. A InGate não é fornecedora direta de serviços de guincho.</p>
        </div>
      </div>
    </footer>
  );
}
