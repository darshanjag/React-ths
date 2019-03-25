import react,{Component}from "react";
class video_list_item extends Component{
render(){
    return(
        <div>
            <img>{props.search.thumbnails.default}</img>
        </div>
    )
}
}
