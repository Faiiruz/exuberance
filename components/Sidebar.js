import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <div
      className={`${
        open ? "w-68" : "w-20"
      }  h-screen bg-[#172882] duration-300 relative`}
    >
      <div className="p-4 text-white">
        <BsArrowLeftShort
          className={`text-3xl bg-black rounded-full absolute -right-3 top-9 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center justify-center mb-7">
          <Image src="/image/OIG1.png" width={100} height={100} />
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                router.pathname === "/" ? "bg-white text-black" : ""
              }`}
            >
              <RxDashboard />
              <span className={`flex-1 ${!open && "hidden"}`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/email-phishing"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                router.pathname === "/email-phishing"
                  ? "bg-white text-black"
                  : ""
              }`}
            >
              <MdOutlineMarkunreadMailbox />
              <span className={`flex-1 ${!open && "hidden"}`}>
                Gmail Phishing Detector
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/url-phishing"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                router.pathname === "/url-phishing" ? "bg-white text-black" : ""
              }`}
            >
              <TbWorldSearch />
              <span className={`flex-1 ${!open && "hidden"}`}>
                URL Phising Detector
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
