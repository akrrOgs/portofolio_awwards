import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a href={img.url} target="_blank" className="icon">
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Abraham Renzha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
