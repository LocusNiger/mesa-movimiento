export const Titulos = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 pt-4 lg:flex lg:flex-col lg:items-center">
        <h1 className="text-xl text-center md:text-3xl mb-4 font-bold ">
          Dirección General de Mesa de Movimiento
        </h1>
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl w-auto ">
            ¿Sabías que todo trámite o presentación administrativa o legislativa
            <span className="font-extrabold text-[#002933] transition-all">
              {" "}
              inicia en nuestra oficina?
            </span>
          </h2>

          <p className="mt-4 text-lg text-center md:text-center md:text-[22px]">
            Sí… te brindamos, a través de esta página, todo lo que tenes que
            saber para que tu presentación sea la correcta!
          </p>
        </div>
      </div>
    </section>
  );
};
