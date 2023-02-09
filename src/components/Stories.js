export default function Stories() {

    const stories = [
        { imagem: "assets/img/9gag.svg", alt: "9gag", usuario: "9gag" },
        { imagem: "assets/img/meowed.svg", alt: "meowed", usuario: "meowed" },
        { imagem: "assets/img/barked.svg", alt: "barked", usuario: "barked" },
        { imagem: "assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", usuario: "nathanwpylestrangeplanet" },
        { imagem: "assets/img/wawawicomics.svg", alt: "wawawicomics", usuario: "wawawicomics" },
        { imagem: "assets/img/respondeai.svg", alt: "respondeai", usuario: "respondeai" },
        { imagem: "assets/img/filomoderna.svg", alt: "filomoderna", usuario: "filomoderna" },
        { imagem: "assets/img/memeriagourmet.svg", alt: "memeriagourmet", usuario: "memeriagourmet" }
    ]
    return (
        <div class="stories">

            {stories.map((s) => <StorieIndividual imagem={s.imagem} alt={s.alt} usuario={s.usuario} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function StorieIndividual(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}