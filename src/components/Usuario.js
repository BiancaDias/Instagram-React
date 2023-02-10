import { useState } from "react";
export default function Usuario() { 
    const nomeUsuario = "Usuario";
    const fotoUsuario = "https://cdn-icons-png.flaticon.com/512/17/17004.png";
    
    return (
        <DadosUsuario nome = {nomeUsuario} foto = {fotoUsuario}/>
    );
}
//O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
//peguei as informações padrões como props
function DadosUsuario(props){
    const [nome, setNome] = useState(props.nome);
    function editarNome(){
        const NovoNome = prompt("Digite seu nome de usuário:");
        setNome(NovoNome === null || NovoNome === "" ? nome : NovoNome);
    }

    const [foto, setFoto] = useState(props.foto);

    function editarFoto(){
        const novaFoto = prompt("Insira o link da nova foto de perfil");
        setFoto(novaFoto === null || novaFoto === "" ? foto : novaFoto);
    }

    return(
        <div class="usuario">
            <img data-test = "profile-image" onClick={editarFoto} src= {foto}alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test = "name">{nome}</strong>
                    <ion-icon data-test = "edit-name" onClick={editarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}
