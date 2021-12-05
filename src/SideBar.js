export default function SideBar(){
    
    const sugestao = [
        {imgUsuario:"assets/img/bad.vibes.memes.svg", usuario:"bad.vibes.memes", razao:"Segue você"},
        {imgUsuario:"assets/img/chibirdart.svg", usuario:"chibirdart", razao:"Segue você"},
        {imgUsuario:"assets/img/razoesparaacreditar.svg", usuario:"razoesparaacreditar", razao:"Novo no Instagram"},
        {imgUsuario:"assets/img/adorable_animals.svg", usuario:"adorable_animals", razao:"Segue você"},
        {imgUsuario:"assets/img/smallcutecats.svg", usuario:"smallcutecats", razao:"Segue você"},
    ];
    
    return (
        <div class="sidebar">
            <Usuario imgUsuario="assets/img/catanacomics.svg" usuario="catanacomics" nome ="catana"/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map(({imgUsuario,usuario,razao}) => <Sugestao imgUsuario={imgUsuario} usuario={usuario} razao={razao}/> )}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
        
    )

}

function Usuario({imgUsuario,usuario,nome}){
    return(
    <div class="usuario">
        <img src={imgUsuario} />
        <div class="texto">
            <strong>{usuario}</strong>
            {nome}
        </div>
    </div>

    )
}

function Sugestao({imgUsuario,usuario,razao}){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={imgUsuario} />
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}