import { brainwave } from "../assets";

const Header = () => {
  return (
    <div className="fixed z-50 top-0 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm   ">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block W-[12rem] xl:mr-8 ">
          <img src={brainwave} alt="brainwave" height={40} width={190} />
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent   ">
          <div className="relative flex items-center flex-col z-2 justify-center m-auto lg:flex-row ">
            1,2,3
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
