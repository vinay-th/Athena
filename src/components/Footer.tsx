import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
const links = [
  {
    href: 'https://github.com/vinay-th',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/vinay-thakor/',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://www.instagram.com/vinay_thakor._/',
    icon: <FaInstagram />,
  },
  {
    href: 'https://x.com/code_with_vinay',
    icon: <FaTwitter />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex:row">
        <p className="text-center text-sm md:text-left">
          &copy; Vinay 2024. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-blue-50"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
