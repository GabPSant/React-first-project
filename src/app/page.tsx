import Gallery from "./Gallery";
import {Quadrado, Titulo, Botao, ListaItens, Imagem, Rodape} from "./components/Components";

export default function Home(){
  return (
    <>
      <Titulo />
      <main>
        <Quadrado />
        <Botao />
        <ListaItens />
        <Imagem />
      </main>
      {Rodape("Esse é o fim dessa página","Obrigado por ver até o final, até mais!")}
    </>
  );
}