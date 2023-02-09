export default function Sugestoes() {
    const sugestoes = [
        {imagem:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", nome: "bad.vibes.memes", motivo: "Segue você" },
        {imagem:"assets/img/chibirdart.svg" ,alt: "chibirdart",nome: "chibirdart", motivo: "Segue você" },
        {imagem: "assets/img/razoesparaacreditar.svg",alt:"razoesparaacreditar"  ,nome: "razoesparaacreditar", motivo: "Novo no Instagram" },
        {imagem: "assets/img/adorable_animals.svg",alt: "adorable_animals",nome: "adorable_animals", motivo: "Segue você" },
        {imagem:"assets/img/smallcutecats.svg", alt:"smallcutecats",nome: "smallcutecats", motivo: "Segue você" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao imagem={s.imagem} alt={s.alt} nome={s.nome} motivo={s.motivo} />)}

        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={props.alt} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.motivo}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}