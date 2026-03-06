export default function SecaoDepoimentos() {
  return (
    <section className="bg-ingate-light/10 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-ingate-dark text-3xl font-black leading-tight sm:text-4xl">
            O que dizem os nossos parceiros
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
            <span className="material-symbols-outlined text-[#EE7718] text-4xl mb-6">format_quote</span>
            <p className="mb-8 text-ingate-gray text-lg leading-relaxed grow">
              A InGate transformou a nossa operação. O módulo de &apos;Meus Guinchos&apos; e o chat direto com a seguradora facilitaram muito o nosso dia a dia na estrada.
            </p>
            <div>
              <p className="font-bold text-ingate-black text-lg">Carlos Silva</p>
              <p className="text-ingate-medium">Guincho Express</p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
            <span className="material-symbols-outlined text-[#EE7718] text-4xl mb-6">format_quote</span>
            <p className="mb-8 text-ingate-gray text-lg leading-relaxed grow">
              Ter um painel web com o histórico detalhado e o módulo de faturamento deu-nos o controlo financeiro e operacional que precisávamos na gestão de resgates.
            </p>
            <div>
              <p className="font-bold text-ingate-black text-lg">Ana Rocha</p>
              <p className="text-ingate-medium">Gerente de Operações Seguradora X</p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
            <span className="material-symbols-outlined text-[#EE7718] text-4xl mb-6">format_quote</span>
            <p className="mb-8 text-ingate-gray text-lg leading-relaxed grow">
              A agilidade de receber as propostas no telemóvel e aceitar com um toque é o grande diferencial. Tecnologia limpa e que realmente funciona.
            </p>
            <div>
              <p className="font-bold text-ingate-black text-lg">Roberto Lima</p>
              <p className="text-ingate-medium">Logística 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
