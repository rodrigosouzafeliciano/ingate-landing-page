export default function SecaoFaq() {
  return (
    <section className="bg-white px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-ingate-dark text-3xl font-black leading-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="accordion-item relative overflow-hidden rounded-xl border border-ingate-medium bg-white">
            <input className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" name="faq-accordion-1" type="checkbox" />
            <div className="accordion-header flex items-center justify-between p-6">
              <h3 className="text-lg font-bold text-ingate-black">O InGate realiza os serviços de guincho?</h3>
              <div className="text-primary shrink-0 relative w-6 h-6 flex items-center justify-center">
                <span className="material-symbols-outlined icon-plus text-2xl absolute">add</span>
                <span className="material-symbols-outlined icon-minus text-2xl absolute">remove</span>
              </div>
            </div>
            <div className="accordion-content px-6 pb-6 pt-0">
              <p className="text-ingate-gray text-base leading-relaxed">
                Não, o InGate é uma plataforma tecnológica que conecta seguradoras a prestadores de serviço.
              </p>
            </div>
          </div>
          <div className="accordion-item relative overflow-hidden rounded-xl border border-ingate-medium bg-white">
            <input className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" name="faq-accordion-2" type="checkbox" />
            <div className="accordion-header flex items-center justify-between p-6">
              <h3 className="text-lg font-bold text-ingate-black">Como posso me cadastrar como prestador?</h3>
              <div className="text-primary shrink-0 relative w-6 h-6 flex items-center justify-center">
                <span className="material-symbols-outlined icon-plus text-2xl absolute">add</span>
                <span className="material-symbols-outlined icon-minus text-2xl absolute">remove</span>
              </div>
            </div>
            <div className="accordion-content px-6 pb-6 pt-0">
              <p className="text-ingate-gray text-base leading-relaxed">
                O cadastro é feito diretamente pelo nosso aplicativo disponível na Google Play.
              </p>
            </div>
          </div>
          <div className="accordion-item relative overflow-hidden rounded-xl border border-ingate-medium bg-white">
            <input className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" name="faq-accordion-3" type="checkbox" />
            <div className="accordion-header flex items-center justify-between p-6">
              <h3 className="text-lg font-bold text-ingate-black">Quais os requisitos para seguradoras parceiras?</h3>
              <div className="text-primary shrink-0 relative w-6 h-6 flex items-center justify-center">
                <span className="material-symbols-outlined icon-plus text-2xl absolute">add</span>
                <span className="material-symbols-outlined icon-minus text-2xl absolute">remove</span>
              </div>
            </div>
            <div className="accordion-content px-6 pb-6 pt-0">
              <p className="text-ingate-gray text-base leading-relaxed">
                Empresas interessadas devem entrar em contato através do nosso canal de suporte para integração via API ou plataforma Web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
