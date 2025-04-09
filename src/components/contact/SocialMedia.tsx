import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialMedia() {
  const redes = [
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      handle: "/ropavejero.oficial",
      url: "https://facebook.com",
    },
    {
      icon: <XIcon />,
      label: "X (Twitter)",
      handle: "@ropavejero_cl",
      url: "https://x.com",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      handle: "@ropavejero.style",
      url: "https://instagram.com",
    },
    {
      icon: <YouTubeIcon />,
      label: "YouTube",
      handle: "/RopavejeroTV",
      url: "https://youtube.com",
    },
  ];

  return (
    <div className="bg-white border border-black rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold uppercase mb-6 tracking-wide">
        Síguenos en redes
        <span className="block w-8 h-1 bg-black mt-2" />
      </h2>

      <ul className="space-y-4 text-sm">
        {redes.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-black group-hover:text-gray-700 text-lg transition">{item.icon}</span>
              <div>
                <p className="font-semibold group-hover:text-black transition-colors">{item.label}</p>
                <p className="text-gray-600">{item.handle}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
