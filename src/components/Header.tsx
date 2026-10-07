import Image from "next/image";
import NavLink from "./NavLInks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });

  return (
  <header className="mx-auto max-w-7xl px-4 py-4 w-full">
  <div className="grid grid-cols-3 items-center w-full">
    
    <div></div>

  
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>
    </div>

  
    <div className="flex justify-end gap-2">
      <button className="btn">সাইন ইন</button>
      <button className="btn bg-red-500 text-white">সাইন আপ</button>
    </div>

  </div>
    <NavLink></NavLink>
</header>
  );
};

export default Header;
