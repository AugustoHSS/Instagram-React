export default function Posts(){
    const posts = [
        {usuario:"meowed", urlImagemUsuario:"assets/img/meowed.svg", conteudo:"assets/img/gato-telefone.svg", curtidasImg:"assets/img/respondeai.svg",  curtidoPor:"respondeai", numCurtidas:"101.523"},
        {usuario:"barked", urlImagemUsuario:"assets/img/barked.svg", conteudo:"assets/img/dog.svg", curtidasImg:"assets/img/adorable_animals.svg", curtidoPor:"adorable_animals", numCurtidas:"99.159"},
    ];

    return (
        <div class="posts">
            {posts.map(({usuario,urlImagemUsuario,conteudo,curtidasImg,curtidoPor,numCurtidas})=>
            <Post usuario={usuario} urlImagemUsuario={urlImagemUsuario} conteudo={conteudo} curtidasImg={curtidasImg} curtidoPor={curtidoPor} numCurtidas={numCurtidas}/>)}
        </div>    


    )

}

function Post({usuario, urlImagemUsuario, conteudo, curtidasImg, curtidoPor, numCurtidas}){
    return(
<div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={urlImagemUsuario} />
              {usuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={conteudo}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={curtidasImg} />
              <div class="texto">
                Curtido por <strong>{curtidoPor}</strong> e <strong>outras {numCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

    )
}