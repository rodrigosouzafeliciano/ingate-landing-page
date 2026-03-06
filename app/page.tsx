import Cabecalho from "@/componentes/Cabecalho";
import SecaoHero from "@/componentes/SecaoHero";
import SecaoMissao from "@/componentes/SecaoMissao";
import SecaoEcossistema from "@/componentes/SecaoEcossistema";
import SecaoDepoimentos from "@/componentes/SecaoDepoimentos";
import SecaoFaq from "@/componentes/SecaoFaq";
import SecaoContato from "@/componentes/SecaoContato";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />
      <main>
        <SecaoHero />
        <SecaoMissao />
        <SecaoEcossistema />
        <SecaoDepoimentos />
        <SecaoFaq />
        <SecaoContato />
      </main>
      <Rodape />
    </div>
  );
}
