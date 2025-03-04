
import { RiHome4Line } from "react-icons/ri";
import { FiHash } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {IoMdNotificationsOutline} from "react-icons/io";
const sidebarLinks = [
  {
    text: "",
    path: "/",
    icon: FaTwitter,
    class: "twitter",
  },
  {
    text: "Home",
    path: "/home",
    icon: RiHome4Line,
    class: "home",
  },
  {
    text: "Explore",
    path: "/explore",
    icon: FiHash,
    class: "explore",
  },
  {
    text: "Notification",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
    class: "notification",
  },
  {
    text: "Message",
    path: "/messages",
    icon: FiMail,
    class: "message",
  },
  {
    text: "Bookmark",
    path: "/bookmarks",
    icon: BsBookmark,
    class: "bookmark",
  },

  {
    text: "Profile",
    path: "/profile/",
    icon: CgProfile,
    class: "profile",
  },
  {
    text: "Tweet",
    path: "/tweet",
    icon: "",
    class: "tweet",
  },
];

export default sidebarLinks;
