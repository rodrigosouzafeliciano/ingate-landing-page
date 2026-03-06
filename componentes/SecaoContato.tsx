"use client";

export default function SecaoContato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Demonstração solicitada com sucesso! (Simulação)");
  };
  return (
    <section className="bg-ingate-dark px-4 py-20 sm:px-10" id="solicitar-demonstracao">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="flex flex-col gap-6 text-left">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold w-fit border border-white/20 tracking-wide uppercase">
              Solicitar Demonstração
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4 sm:gap-6">
                <span className="material-symbols-outlined text-white text-4xl sm:text-5xl lg:text-[50px] shrink-0" style={{ fontVariationSettings: '"FILL" 1, "wght" 700' }}>send</span>
                <h2 className="text-white text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Sua seguradora pronta <br className="hidden sm:block" /> para o futuro
                </h2>
              </div>
            </div>
            <p className="text-ingate-light text-xl font-normal leading-relaxed max-w-xl">
              Preencha o formulário e nossa equipe entrará em contato para apresentar a solução completa.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-ingate-black mb-2" htmlFor="nome">Nome do Responsável</label>
                <input className="w-full rounded-lg border border-ingate-light bg-white px-4 py-3 text-ingate-black focus:border-primary focus:ring-primary focus:outline-none transition-colors" id="nome" placeholder="Digite seu nome completo" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold text-ingate-black mb-2" htmlFor="email">E-mail Corporativo</label>
                <input className="w-full rounded-lg border border-ingate-light bg-white px-4 py-3 text-ingate-black focus:border-primary focus:ring-primary focus:outline-none transition-colors" id="email" placeholder="seu@email.com.br" type="email" />
              </div>
              <div>
                <label className="block text-sm font-bold text-ingate-black mb-2" htmlFor="seguradora">Nome da Seguradora</label>
                <input className="w-full rounded-lg border border-ingate-light bg-white px-4 py-3 text-ingate-black focus:border-primary focus:ring-primary focus:outline-none transition-colors" id="seguradora" placeholder="Nome da sua empresa" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold text-ingate-black mb-2" htmlFor="mensagem">Mensagem</label>
                <textarea className="w-full rounded-lg border border-ingate-light bg-white px-4 py-3 text-ingate-black focus:border-primary focus:ring-primary focus:outline-none transition-colors" id="mensagem" placeholder="Como podemos ajudar?" rows={4}></textarea>
              </div>
              <button className="w-full flex cursor-pointer items-center justify-center rounded-lg bg-[#EE7718] px-6 py-4 text-lg font-bold text-white transition-all hover:bg-[#EE7718]/90 hover:shadow-lg mt-4" type="submit">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
