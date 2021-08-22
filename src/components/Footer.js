import { FaGithub, FaPhoneAlt, FaMailBulk, FaLinkedin} from "react-icons/fa";

import './styles/Style.css';

function Footer() {
    return (
      <footer id="footer">
      <div class="container my-class">
      <div>
          <a class= "col" href="tel:9199359082"> <FaPhoneAlt size={70} /> </a>
          <a class= "col" href="mailto:sigorahv@gmail.com"> <FaMailBulk size={70} /> </a>
          <a class= "col" href="https://www.linkedin.com/in/hamlet-valladares-1946631a8/"><FaLinkedin size={70} /></a>
          <a class= "col"href="https://github.com/UNCValladaresHamlet"> <FaGithub  size={70}/> </a>
        </div>

        <div>
          &copy; Copyright. All Rights Reserved
        </div>

      </div>
    </footer>
    );
  }

  export default Footer;