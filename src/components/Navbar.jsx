import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/ndinayo-logo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      "mailto:ndinayoerics@gmail.com?subject=Portfolio Inquiry&body=Please include your email address in the message so I can respond to you.%0D%0A%0D%0AYour Message:",
      "_blank"
    );
  };

  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={50} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="#"
          onClick={handleEmailClick}
          aria-label="Email"
          className="hover:text-blue-500 transition-colors"
        >
          <FaEnvelope />
        </a>

        <a 
          href="https://wa.me/250788702255"
          target='_blank'
          rel='noreferrer'
          aria-label="WhatsApp"
          className="hover:text-blue-500 transition-colors"
        >
          <FaWhatsapp />
        </a>

        <a 
          href="https://github.com/ndinayo/"
          target='_blank'
          rel='noreferrer'
          aria-label="GitHub"
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.instagram.com/ndinayoeric/"
          target='_blank'
          rel='noreferrer'
          aria-label="Instagram"
          className="hover:text-blue-500 transition-colors"
        >
          <FaInstagram /> 
        </a>

        <a 
          href="https://x.com/ndinayo_eric/"
          target='_blank'
          rel='noreferrer'
          aria-label="Twitter"
          className="hover:text-blue-500 transition-colors"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;