import './index.scss'
import profileImg from "../../assets/oneImg.jpg"

import { BsFacebook } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { RiLayoutMasonryFill, RiMessengerFill } from 'react-icons/ri';
import { IoMdNotifications } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <BsFacebook />
        <div className="searchBar">
          <GoSearch />
          <input type="text" placeholder='Search Facebook' />
        </div>
      </div>
      <div className="middle">
        <span className='active'><AiFillHome /></span>
        <span><MdOutlineOndemandVideo /></span>
        <span><AiOutlineShop /></span>
        <span><HiUserGroup /></span>
        <span><RiLayoutMasonryFill /></span>
      </div>
      <div className="right">
        <span><RiMessengerFill /></span>
        <span><IoMdNotifications /></span>
        <img src={profileImg} alt="" />
      </div>
    </div>
  )
}

export default Navbar
