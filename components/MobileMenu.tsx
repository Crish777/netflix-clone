import { FC } from "react";


interface MobileMenuProps {
  visible?: boolean;
  labelsNavbar: string[];
}

const MobileMenu: FC<MobileMenuProps> = ({visible, labelsNavbar}) => {
  if(!visible){
    return null;
  }
  return (
    <div className="bg-black w-56 absolute left-0 top-8 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
      {labelsNavbar.map((label, index) => (
        <div className="px-3 text-center text-white hover:underline" key={index+label}>{label}</div>
      ))}
        
      </div>
    </div>
  )
}

export default MobileMenu