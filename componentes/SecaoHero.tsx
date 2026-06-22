export default function SecaoHero() {
  return (
    <section className="bg-ingate-dark relative overflow-hidden px-4 pt-16 pb-24 sm:px-10 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg aria-hidden="true" className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
          <path className="flow-line-animate" d="M -100 300 C 200 100 600 500 1000 300 C 1300 150 1540 300 1540 300" stroke="#EE7718" strokeWidth="2"></path>
          <path className="flow-line-animate" d="M -100 450 C 300 550 800 200 1200 400" stroke="#B6CED2" strokeWidth="2" style={{ animationDelay: "-5s" }}></path>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center rounded-full bg-ingate-medium/20 px-3 py-1 text-sm font-medium text-ingate-light backdrop-blur-sm border border-ingate-medium/30 mb-6">
              <span className="mr-1.5 flex h-2 w-2 rounded-full bg-primary pulse-dot"></span>
              O futuro do resgate veicular
            </div>
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl mb-6">
              A conexão inteligente entre Seguradoras e Especialistas em Guincho
            </h1>
            <p className="text-ingate-light text-lg font-normal leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
              Centralize solicitações, visualize percursos no mapa e converse em tempo real. A InGates é a plataforma definitiva para a gestão e intermediação tecnológica de resgates veiculares.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.ingates.app&hl=pt_BR" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5">
                <span aria-hidden="true" className="material-symbols-outlined mr-2 text-xl">play_arrow</span>
                Disponível na Google Play
              </a>
              <button className="flex cursor-pointer items-center justify-center rounded-lg bg-white/10 backdrop-blur-md px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/20 border border-white/20">
                Acesso Seguradoras
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute top-6 left-0 w-full h-1 bg-linear-to-r from-primary/40 via-ingate-medium/20 to-white/5 hidden lg:block z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="relative flex flex-col items-center group">
                <div className="z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(238,119,23,0.4)] mb-6 transition-transform group-hover:scale-110">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">map</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full hover:bg-white/10 transition-all hover:shadow-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] text-white/60 tracking-wider uppercase font-bold">Monitoramento</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Rastreamento</h3>
                  <p className="text-ingate-light/70 text-sm leading-snug">Visibilidade total de cada unidade em tempo real.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center group">
                <div className="z-20 w-12 h-12 rounded-full bg-ingate-medium flex items-center justify-center text-white shadow-[0_0_20px_rgba(85,143,152,0.4)] mb-6 transition-transform group-hover:scale-110">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">speed</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full hover:bg-white/10 transition-all hover:shadow-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-[10px] text-primary tracking-wider uppercase font-bold">Previsão</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-lg">Tempo Estimado</h3>
                    <span className="text-primary text-sm font-mono font-bold">12 min</span>
                  </div>
                  <p className="text-ingate-light/70 text-sm leading-snug">Cálculo inteligente de tempo de chegada.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center group">
                <div className="z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(238,119,23,0.4)] mb-6 transition-transform group-hover:scale-110">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl animate-spin" style={{ animationDuration: "4s" }}>sync</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full hover:bg-white/10 transition-all hover:shadow-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-[10px] text-white/60 tracking-wider uppercase font-bold">Integração</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Sincronização</h3>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3 max-w-[100px] mx-auto">
                    <div className="h-full bg-primary rounded-full w-2/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center group">
                <div className="z-20 w-12 h-12 rounded-full bg-ingate-medium flex items-center justify-center text-white shadow-[0_0_20px_rgba(85,143,152,0.4)] mb-6 transition-transform group-hover:scale-110">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full hover:bg-white/10 transition-all hover:shadow-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span aria-hidden="true" className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    <span className="text-[10px] text-white/60 tracking-wider uppercase font-bold">Finalização</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Ocorrência confirmada</h3>
                  <p className="text-ingate-light/70 text-sm leading-snug">Protocolos digitais e validação instantânea.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
