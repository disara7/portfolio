import React from 'react'
import './nav.css'
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#experience"><HiMiniCheckBadge /></a>
      <a href="#services"><IoBookmarks /></a>
      <a href="#contact"><IoMail /></a>
    </nav>
  )
}

export default Nav