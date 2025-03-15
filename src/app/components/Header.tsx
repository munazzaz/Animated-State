import Logo from "@/../public/Logo.png";
import Image from "next/image";
import DownArrow from "@/../public/angle-down.png"

const Header = () => {
  return (
    <div className="z-[4000] px-8 w-full bg-transparent -mb-[10rem] sticky top-0 ">
    <div className="relative z-[1000]">
      <Image className="w-[93.03px] pt-[34px]" src={Logo} alt="StateLogo" />
    </div>
    </div>
  );
};

export default Header;


<Image className="w-[28.2px] pt-[34px]" src={DownArrow} alt="Down Arrow" />