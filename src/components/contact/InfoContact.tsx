import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmailIcon from "@mui/icons-material/Email";

function InfoContact() {
  return (
    <article>
      <h2 className="text-xl font-semibold uppercase">
        ¿Tienes preguntas o necesitas ayuda?
      </h2>
      <p className="text-gray-700 mt-4">
        No dudes en ponerte en contacto con nosotros. Estamos aquí para
        ayudarte.
      </p>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <HomeIcon className=" w-8 h-8" />
        <span>
          <p>Dirección</p>
          <p>Enrique Segoviano #4234</p>
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <PhoneIcon className=" w-8 h-8" />
        <span>
          <p>Teléfono</p>
          <p>+56 999 999 999</p>
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <AccessAlarmIcon className=" w-8 h-8" />
        <span>
          <p>Horario</p>
          <p>Lunes a Viernes de 9:00 a 17:00</p>
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4 border-t border-gray-400 pt-4">
        <EmailIcon className=" w-8 h-8" />
        <span>
          <p>Correo electrónico</p>
          <p>contacto@ropavejero.com</p>
        </span>
      </div>
    </article>
  );
}

export default InfoContact;
