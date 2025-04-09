import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

function InfoContact() {
  return (
    <article className="bg-white border border-black rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold uppercase mb-6 tracking-wide relative">
        Contacto directo
        <span className="block w-8 h-1 bg-black mt-2" />
      </h2>

      <ul className="space-y-5 text-gray-800 text-sm">
        <li className="flex gap-3 items-start">
          <LocationOnIcon className="text-black mt-0.5" />
          <div>
            <p className="font-semibold">Dirección</p>
            <p>Av. Ropa Vintage 101, Barrio Estilo, Ciudad Moda</p>
          </div>
        </li>

        <li className="flex gap-3 items-start">
          <PhoneAndroidIcon className="text-black mt-0.5" />
          <div>
            <p className="font-semibold">Teléfono</p>
            <p>+56 912 345 678</p>
          </div>
        </li>

        <li className="flex gap-3 items-start">
          <AccessTimeIcon className="text-black mt-0.5" />
          <div>
            <p className="font-semibold">Horario</p>
            <p>Lunes a Sábado — 10:00 a 20:00 hrs</p>
          </div>
        </li>

        <li className="flex gap-3 items-start">
          <EmailIcon className="text-black mt-0.5" />
          <div>
            <p className="font-semibold">Correo</p>
            <p>hola@ropavejero.com</p>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default InfoContact;
