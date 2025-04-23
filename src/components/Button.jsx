import { Link } from "react-router-dom";

const Button = ({ className, href, onClick, children }) => {
  const btnClasses = `${className} relative inline-flex items-center justify-center py-3 px-5 overflow-hidden font-semibold rounded-lg border-2 border-n-15  hover:bg-n-15 hover:text-n-8 focus:ring-4 focus:outline-none focus:ring-black-200`;

  const renderButton = () => (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <Link to={href} className={btnClasses}>
      {children}
    </Link>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
