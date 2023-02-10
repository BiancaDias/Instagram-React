import { useState } from "react";

export default function Posts() {

    const ArrayDePosts = [
        { imgUsuario: "assets/img/meowed.svg", usuario: "meowed", imgPost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", imgCurtidoPor: "assets/img/respondeai.svg", nomeCurtidoPor: "respondeai", numCurtidas: "101.523" },
        { imgUsuario: "assets/img/barked.svg", usuario: "barked", imgPost: "assets/img/dog.svg", altPost: "dog", imgCurtidoPor: "assets/img/adorable_animals.svg", nomeCurtidoPor: "adorable_animals", numCurtidas: "99.159" },
        { imgUsuario: "assets/img/charlie.jpg", usuario: "Peanuts", imgPost: "assets/img/tirinha1.jpg", altPost: "tirinha-Peanuts", imgCurtidoPor: "assets/img/sabado-qualquer.jpg", nomeCurtidoPor: "umsabadoqualquer", numCurtidas: "98.105" }
    ]
    return (

        <div class="posts">
            {ArrayDePosts.map((p) => <PostIndividual imgUsuario={p.imgUsuario} usuario={p.usuario} imgPost = {p.imgPost} altPost = {p.altPost} imgCurtidoPor = {p.imgCurtidoPor} nomeCurtidoPor = {p.nomeCurtidoPor} numCurtidas= {p.numCurtidas} />)}
        </div>
    )
}

function PostIndividual(props) {
    const numeroDeCurtidas = props.numCurtidas.replace(".","");
    let NovoNumeroDeCurtidas = Number(numeroDeCurtidas)
    const [salvar, setSalvar] = useState("bookmark-outline");
    const [cor, setCor] = useState("null");
    const [curtida, setCurtida] = useState("heart-outline");
    const [quantCurtidas, setQuantCurtidas]= useState(props.numCurtidas)
    function salvarPost() {
        setSalvar(salvar === "bookmark-outline" ? "bookmark" : "bookmark-outline");
    }
  
    function curtir() {
        setCurtida(curtida === "heart-outline" ? "heart" : "heart-outline");
        if(curtida === "heart-outline"){
            setCor("vermelho");
            ++NovoNumeroDeCurtidas
            setQuantCurtidas(formataCurtidas(NovoNumeroDeCurtidas));
        }
        else{
            setCor("null");
            setQuantCurtidas(formataCurtidas(NovoNumeroDeCurtidas));
        }  
    }
    function curtirImg(){
        if(curtida === "heart-outline"){
            setCurtida("heart");
            setCor("vermelho");
            ++NovoNumeroDeCurtidas
            setQuantCurtidas(formataCurtidas(NovoNumeroDeCurtidas));
        }
    }

    function formataCurtidas(valor) {
        return valor.toLocaleString('pt-BR');
    }

    return (
        <div data-test="post"  class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} alt={props.usuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtirImg} data-test="post-image" src={props.imgPost} alt={props.altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={cor} onClick={curtir} data-test="like-post" name={curtida}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} data-test="save-post" name={salvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtidoPor} alt={props.nomeCurtidoPor} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtidoPor}</strong> e <strong>outras <span data-test="likes-number" >{quantCurtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}

