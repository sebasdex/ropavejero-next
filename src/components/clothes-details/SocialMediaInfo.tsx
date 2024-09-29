import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";

function SocialMediaInfo() {
  return (
    <div className="flex gap-4">
      <Link href={"https://www.facebook.com"} target="_blank" rel="noreferrer">
        <FacebookRoundedIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
      </Link>
      <Link href={"https://www.instagram.com"} target="_blank" rel="noreferrer">
        <InstagramIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
      </Link>
      <Link href={"https://www.x.com"} target="_blank" rel="noreferrer">
        <XIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
      </Link>
      <Link href={"https://www.pinterest.com"} target="_blank" rel="noreferrer">
        <PinterestIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
      </Link>
    </div>
  );
}

export default SocialMediaInfo;
