import {BsFillHouseFill, BsJournalAlbum} from "react-icons/bs";
import {FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from "react-icons/fa";
import {BiPulse} from "react-icons/bi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaRadio } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { RiAlbumFill } from "react-icons/ri";
import { MdPodcasts } from "react-icons/md";



const MenuList = [
    {

    id : 1,
    icon: <BsFillHouseFill />,
    name: "Home",
},
 {
    id : 2,
    icon: <IoSearchCircleSharp />,
    name: "Discover",
},
 {
    id : 3,
    icon: <FaRadio />,
    name: "Radio",
},
 {
    id : 4,
    icon: <IoPerson />,
    name: "Artist",
},
 {
    id : 5,
    icon: <RiAlbumFill />,
    name: "Albums",
},
 {
    id : 6,
    icon: <MdPodcasts />,
    name: "Podcasts",
},
];

export default MenuList;
