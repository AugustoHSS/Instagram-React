export default function Stories(){
    const stories = [
        {imgStory:"assets/img/9gag.svg",usuario:"9gag"},
        {imgStory:"assets/img/meowed.svg",usuario:"meowed"},
        {imgStory:"assets/img/barked.svg",usuario:"barked"},
        {imgStory:"assets/img/nathanwpylestrangeplanet.svg",usuario:"nathanwpylestrangeplanet"},
        {imgStory:"assets/img/wawawicomics.svg",usuario:"wawawicomics"},
        {imgStory:"assets/img/respondeai.svg",usuario:"respondeai"},
        {imgStory:"assets/img/filomoderna.svg",usuario:"filomoderna"},
        {imgStory:"assets/img/memeriagourmet.svg",usuario:"memeriagourmet"},
    ];

    return(
        <div class="stories">
            {stories.map(({imgStory,usuario}) => <Story imgStory={imgStory} usuario={usuario}/>)}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

    )

}

function Story({imgStory,usuario}) {
    return(
    <div class="story">
        <div class="imagem">
            <img src={imgStory} />
        </div>
        <div class="usuario">
            {usuario}
        </div>
    </div>
    )
}