import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="pt-4 header flex flex-wrap items-center justify-center md:px-16">
      <img src={logo} alt="logo" className="logo w-64 h-24 " />
    </header>
  );
}

export default Header;
