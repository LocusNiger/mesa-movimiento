import logo from "../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <img src={logo} alt="logo" className=" w-40 h-12 " />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2 hover:cursor-pointer">
              <IoLocationSharp className="text-xl text-[#002933]" />
              <p
                className="mt-4 text-center text-sm text-[#002933] lg:mt-0 lg:text-right hover:underline hover:underline-offset-2"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/f7gBWTwvk3fZfEnaA",
                    "_blank"
                  )
                }
              >
                General López 3055
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillTelephoneFill className="text-lg text-[#002933]" />
              <p className="mt-4 text-center text-sm text-[#002933] lg:mt-0 lg:text-right">
                +54 342 4844200
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <GrMail className="text-xl text-[#002933]" />
              <p className="mt-4 text-center text-sm text-[#002933] lg:mt-0 lg:text-right">
                MAIL
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
