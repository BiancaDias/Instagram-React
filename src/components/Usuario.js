import { useState } from "react";
export default function Usuario() { 
    
    const [nome, setNome] = useState("catanacomics");
    function editarNome(){
        const NovoNome = prompt("Digite seu nome de usuário:");
        setNome(NovoNome === null || NovoNome === "" ? nome : NovoNome);
    }

    const [foto, setFoto] = useState("assets/img/catanacomics.svg");

    function editarFoto(){
        const novaFoto = prompt("Insira o link da nova foto de perfil");
        setFoto(novaFoto === null || novaFoto === "" ? "assets/img/catanacomics.svg" : novaFoto);
    }
    return (
        <div class="usuario">
            <img data-test = "profile-image" onClick={editarFoto} src= {foto}alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test = "name">{nome}</strong>
                    <ion-icon data-test = "edit-name" onClick={editarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


