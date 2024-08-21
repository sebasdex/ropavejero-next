import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialMedia() {
  return (
    <article>
      <h2 className="text-xl font-semibold uppercase">
        Nuestras redes sociales
      </h2>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <FacebookIcon className=" w-8 h-8" />
        <p>Síguenos en Facebook</p>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <XIcon className=" w-8 h-8" />
        <p>Síguenos en X</p>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <InstagramIcon className=" w-8 h-8" />
        <p>Síguenos en Instagram</p>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <YouTubeIcon className=" w-8 h-8" />
        <p>Suscríbete en Youtube</p>
      </div>
    </article>
  );
}

export default SocialMedia;
