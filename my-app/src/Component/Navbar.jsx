import { BiUserCircle } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BiHome } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#home">
            <BiHome className="react-icon" />
          </a>
        </li>
        <li>
          <a href="#about">
            <BiUserCircle className="react-icon" />
          </a>
        </li>
        <li>
          <a href="#knowledge">
            <BiBookAlt className="react-icon" />
          </a>
        </li>
        <li>
          <a href="#projects">
            <MdOutlineWorkOutline className="react-icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <FiMessageSquare className="react-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
