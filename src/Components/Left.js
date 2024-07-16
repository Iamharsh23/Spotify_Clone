import React, { useEffect } from "react";
import "../Styles/leftmenu.css"

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import{ BiSearchAlt } from "react-icons/bi"
import Menu from "./Menu";
import MenuList  from "./MenuList";

function Left(){


  return (
   <div class= "leftmenu">
    <div class="logocontainer">
      <i>
        <FaSpotify />
      </i>
      <h2>Spotify</h2>
      <i>
        <FaEllipsisH/>
      </i>
    </div>
  <div class="Searchbox">
    <input type="text" placeholder="Search..."/>
      <i class = "SearchIcon">
        <BiSearchAlt/>
      </i>
  </div>

  <Menu title="Menu" menuObject={MenuList}/>
  </div>
  )
  
}; 

export default Left;
