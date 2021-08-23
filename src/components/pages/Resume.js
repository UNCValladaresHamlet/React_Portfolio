import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaDatabase, FaNpm, FaBootstrap, FaGit, FaGithub} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io"

export default function Blog() {
  return (
    <div class="container my-class">
            <h1>Programming Languages & Tools</h1>
                  <ul class="list-inline">
                    <li class="list-inline-item"> <FaHtml5 size={70} /> </li>
                    <li class="list-inline-item"> <FaCss3Alt size={70}/> </li>
                    <li class="list-inline-item"> <IoLogoJavascript size={70}/> </li>
                    <li class="list-inline-item"> <FaReact size={70}/> </li>
                    <li class="list-inline-item"> <FaNode size={70}/> </li>
                    <li class="list-inline-item"> <FaDatabase size={70}/> </li>
                    <li class="list-inline-item"> <FaNpm size={70}/> </li>
                    <li class="list-inline-item"> <FaBootstrap size={70}/> </li>
                    <li class="list-inline-item"> <FaGit size={70}/> </li>
                    <li class="list-inline-item"> <FaGithub size={70}/> </li>
                  </ul>
    </div>
    
  );
}
