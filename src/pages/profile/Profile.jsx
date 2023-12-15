import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">

       
        <img className="profileCoverImg" 
        src="assets/Posts/Red3.jpg" alt=""/>

        <img className="profileUserImg" 
        src="assets/Posts/Red1.jpeg" alt=""/>
       
       
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Raymond Reddington</h4>
            <span className="profileInfoDesc">Value loyalty above all else</span>
        </div>
         </div>
        <div className="profileRightBottom">
        <Feed/>
    <Rightbar profile/>

        </div>
    </div>
    </div>
   </>
  )
}
