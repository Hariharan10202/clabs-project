import { MdKeyboardArrowLeft } from "react-icons/md";

interface headerProps {
  label: string;
}

const Header = ({ label }: headerProps) => {
  return (
    <div className="bg-[#39aebc] p-5">
      <div className="flex items-center gap-5">
        <MdKeyboardArrowLeft
          className="cursor-pointer"
          color="white"
          size={26}
        />
        <h1 className="text-white font-medium">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
