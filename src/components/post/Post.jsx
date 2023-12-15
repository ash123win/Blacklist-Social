import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import { useState } from "react";


export default function Post({post}) {
 const [like,setLike] = useState(post.like)
 const [isLiked,setIsLike] = useState(false)

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1) 
  setIsLike(!isLiked)
}



  return (
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=""/>
                   <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username} </span>
                   <span className="postDate" >{post.date}</span>   
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
              </div>          
             </div> 
             <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post?.photo} alt=""/>
             </div>
            <div className="postBottom"></div>
            <div className="postBottomLeft"></div>
            <img className="LikeIcon" src="assets/facebook-like.png.jpg" onClick={likeHandler} alt=""/>
            <img className="LikeIcon" src="assets/heart-icon.png.jpg"  onClick={likeHandler} alt=""/>
            <span className="postlikeCounter">{like}people liked it</span>
            <div className="postBottomRight"></div>
            <span className="postCommentText">{post.comment} comments</span>

    </div>                 
                 
    </div>
  )
}
