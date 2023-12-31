import "./share.css"
import { PermMedia } from "@mui/icons-material"
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';


export default function Share() {
  return (

    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="/assets/Profile/1.jpg" alt=""/>
        <input
          placeholder="What's on your mind Redd?"
          className="shareInput"

          />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
              <PermMedia htmlColor="tomato"  className="shareIcon"/>
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon"/>
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod"  className="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton">Share</button>
      </div>
    </div>
       
    </div>
  )
}
