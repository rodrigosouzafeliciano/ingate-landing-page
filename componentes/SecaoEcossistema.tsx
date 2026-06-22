export default function SecaoEcossistema() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-ingate-dark text-3xl font-black leading-tight sm:text-4xl mb-4">
            Ecossistema InGates
          </h2>
          <p className="text-ingate-gray text-lg">Soluções integradas sob medida para o seu negócio.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Plataforma Web */}
          <div className="group flex flex-col rounded-2xl bg-ingate-light p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="material-symbols-outlined text-ingate-dark text-3xl">shield</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-ingate-dark">Plataforma Web para Seguradoras</h3>
            <p className="mb-8 text-ingate-dark/80 text-lg leading-relaxed">
              Gestão centralizada de chamados, monitoramento em tempo real e relatórios de eficiência.
            </p>
            <ul className="space-y-4 mt-auto">
              <li className="flex items-start gap-3 text-ingate-dark">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span>Criação de propostas de resgate detalhadas</span>
              </li>
              <li className="flex items-start gap-3 text-ingate-dark">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span>Módulo de faturamento com exportação de relatórios</span>
              </li>
              <li className="flex items-start gap-3 text-ingate-dark">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span>Histórico detalhado e sistema de avaliação de prestadores</span>
              </li>
            </ul>
          </div>
          
          {/* App Mobile */}
          <div className="group flex flex-col rounded-2xl bg-ingate-dark p-8 shadow-sm transition-shadow hover:shadow-md relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ingate-medium/20 blur-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">App Mobile para Prestadores</h3>
              <p className="mb-8 text-ingate-light text-lg leading-relaxed">
                Recepção de ocorrências com detalhes precisos, navegação integrada e confirmação de serviços de forma ágil.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-start gap-3 text-ingate-light">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Notificações push imediatas para novos chamados</span>
                </li>
                <li className="flex items-start gap-3 text-ingate-light">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Chat integrado para comunicação direta e ágil com a seguradora</span>
                </li>
                <li className="flex items-start gap-3 text-ingate-light">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Módulo &apos;Meus Guinchos&apos; para gestão da própria frota e propostas</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
