import React from "react";

function page() {
  return (
    <main className=" p-8 flex flex-col gap-8 max-w-4xl mx-auto">
      <section>
        <h1 className="text-2xl font-extrabold mb-4">Sobre nosotros</h1>
        <p>
          En Ropavejero, somos más que una simple tienda de ropa; somos una
          familia apasionada por la moda, comprometida con ofrecer productos de
          calidad que se adapten a tu estilo de vida. Desde nuestros inicios en
          2012, nos hemos enfocado en crear una experiencia de compra única y
          accesible para todos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuestra historia</h2>
        <p>
          Ropavejero comenzó con una visión simple: hacer que la moda de alta
          calidad sea accesible para todos. Fundada en México, nació de la
          necesidad de ofrecer una alternativa a las grandes cadenas
          comerciales, centrada en la atención personalizada y en productos
          cuidadosamente seleccionados. Lo que empezó como un pequeño negocio ha
          crecido, gracias al apoyo de nuestra comunidad, convirtiéndose en un
          destino en línea para quienes buscan ropa que combine estilo, confort
          y durabilidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuestra misión</h2>
        <p>
          Nuestra misión es ofrecer ropa de calidad que refleje las últimas
          tendencias, sin dejar de lado los clásicos atemporales. Nos esforzamos
          por ser una tienda que entiende las necesidades de sus clientes y que
          trabaja incansablemente para superar sus expectativas. Queremos que
          cada prenda que compres en [Nombre de la Tienda] te haga sentir seguro
          y auténtico, porque creemos que la moda es una extensión de tu
          personalidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuestra visión</h2>
        <p>
          En Ropavejero, aspiramos a ser reconocidos como una marca líder en el
          sector de la moda, no solo por la calidad de nuestros productos, sino
          también por nuestro compromiso con la sostenibilidad y el comercio
          justo. Nos visualizamos como un puente entre las tendencias globales y
          las necesidades locales, siempre con un enfoque ético y responsable.
          Nuestra visión es crecer junto a nuestros clientes, convirtiéndonos en
          su primera opción al buscar prendas que les hagan sentir únicos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuestros valores</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Calidad:</strong> Cada prenda en nuestra tienda es
            seleccionada con un alto estándar de calidad, asegurando que te
            acompañe por mucho tiempo.
          </li>
          <li>
            <strong>Servicio al Cliente:</strong> La satisfacción del cliente es
            nuestra prioridad. Nos esforzamos por ofrecer un servicio
            personalizado y atento en cada interacción.
          </li>
          <li>
            <strong>Sostenibilidad:</strong> Creemos en un futuro donde la moda
            no dañe el planeta. Nos comprometemos a ofrecer productos que
            respeten el medio ambiente y a reducir nuestro impacto ecológico.
          </li>
          <li>
            <strong>Innovación:</strong> Nos mantenemos a la vanguardia de las
            tendencias y tecnologías para ofrecerte lo mejor en moda y en
            experiencia de compra.
          </li>
          <li>
            <strong>Compromiso Local:</strong> Valoramos y apoyamos a nuestra
            comunidad. Trabajamos con proveedores locales y nos esforzamos por
            contribuir al desarrollo económico de nuestra región.
          </li>
        </ul>
      </section>

      <footer className="mt-8">
        <p className="text-center">
          Gracias por formar parte de la familia Ropavejero. Esperamos seguir
          creciendo juntos y acompañarte en cada paso de tu camino estilístico.
          ¡Bienvenido a una nueva forma de vivir la moda!
        </p>
      </footer>
    </main>
  );
}

export default page;
