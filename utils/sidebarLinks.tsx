import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/beyondinfinity9988/",
    icon: <VscGithubInverted />,
  },
  {
    path: "mailto:mishravishal2123&gmail.com",
    icon: <HiOutlineAtSymbol />,
  },
  {
    path: "https://www.linkedin.com/in/vishal-mishra-769384257/",
    icon: <FaLinkedin />,
  },
];