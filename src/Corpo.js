import Posts from "./Posts"
import Stories from "./Stories"
import SideBar from "./SideBar"


function Esquerda(){
    return(
    <div class="esquerda">
        <Stories />
        <Posts />
    </div>

    )

}

export default function Corpo(){
    return(
    <div class="corpo">
        <Esquerda />
        <SideBar />
    </div>
    )

}