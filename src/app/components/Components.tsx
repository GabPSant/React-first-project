import './componentes.css'; // Representa o arquivo de estilizaçãi para a página
import Image from 'next/image';
import icone from "../../../public/react-icon.png";
import dance from "../../../public/dance.gif"
/*
    Componente de Quadrado:
        1. Crie um componente chamado Quadrado que renderize um elemento <div> com uma cor de fundo,
        2. largura e altura fixas para representar um quadrado.
*/

function Paragrafo(texto:string){
    return <p style={{fontWeight: "550"}}>{texto}</p>;
}

function Header(texto: string, id?: string, classes?: string){
    return (
        <header id= {id} className= {classes}>
            <h1>{texto}</h1>
        </header>
    );
}

export function Quadrado(){
    return (
        <section>
            {Paragrafo("Quadrado (ele gira!)")}
            <div className="quadrado"></div>
        </section>
    );
}

export function Titulo():JSX.Element{
    // <></> - funciona como elemento 'pai' no react, não vai aparecer no console do navegador
    return <>{Header("Página React (testes e prática): Bem vindo!","titulo")}</>;
}

export function Botao(){
    return(
        <section>
            <button>Alterar Design</button>
        </section>
    )
}

export function ListaItens(){
    return(
        <section>
            {Paragrafo("Lista de Frutas")}
            <ul>
                <li>
                    <span>Maças</span>
                </li>

                <li>
                    <span>Uvas</span>
                </li>

                <li>
                    <span>Mangas</span>
                </li>
            </ul>
        </section>
    );
}

export function Imagem(){
    return (
        <section>
            {Paragrafo("Icone do React (clique na imagem e você será mandado para o site ofical do React)")}
            <a href="https://pt-br.legacy.reactjs.org/" target='_blanck'>
                <Image src={icone}
                width={500}
                height={200}
                alt="Icone do React"/>
            </a>
        </section>
    );
}

export function Rodape(texto1:string, texto2:string){
    return (
        <footer style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h2>{texto1}</h2>
            <p>{texto2}</p>
            <Image src={dance}
            width={400}
            height={400}
            alt='Gif de um garoto dançando'
            />
        </footer>
    );
}