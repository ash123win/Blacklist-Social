import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

const HomeRightbar = () => {
  return(
    <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/OIP.jpeg" alt=""/>
            <span className="birthdayText">
              <b>Mr Kaplin</b> and <b>1 other friend</b> have a birthday today.
            </span>
          </div>
          <img className="rightbarAd" src="assets/ad.png.jpg" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
          </ul>


    </>
  );
};
const ProfileRightbar = () =>{
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoitem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Classified!</span>
        </div>
        <div className="rightbarInfoitem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Classified!</span>
        </div>
        <div className="rightbarInfoitem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Classified!</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/Posts/Red2.jpeg" alt="" className="rightbarFollowingImg"/>
           <span className="rightbarFollowingName">Agness Keen</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Profile/1.jpg" alt="" className="rightbarFollowingImg"/>
           <span className="rightbarFollowingName">Elizabeth keen</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Profile/2.jpg" alt="" className="rightbarFollowingImg"/>
           <span className="rightbarFollowingName">Dembe zuma</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Profile/3.jpg" alt="" className="rightbarFollowingImg"/>
           <span className="rightbarFollowingName">Harold cooper</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Profile/4.jpg" alt="" className="rightbarFollowingImg"/>
           <span className="rightbarFollowingName">Glen Jelly Bean</span>
        </div>

      </div>
    </>
  )
}

  return (
    <div className="rightbar">
         <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
         </div>
    </div>
  );
}
