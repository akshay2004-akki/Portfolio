import git from '../assets/github.svg'
import tweet from '../assets/twitter.svg'
import insta from '../assets/instagram.svg'

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <img src={git} alt="github" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon">
            <img src={tweet} alt="twitter" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon">
            <img src={insta} alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Akshay Anand. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;