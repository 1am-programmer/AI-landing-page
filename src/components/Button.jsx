import Buttonsvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center transition-colors hover:text-color-1 h-11 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"}  ${className || ""}`;

  const spanClasses = "relative Z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {Buttonsvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {Buttonsvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
