import Accordion from "./Accordion";

const Legislativos = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center mb-8 px-4 md:px-0">
      <h1 className="text-4xl text-center mb-4 font-bold md:py-4 underline underline-offset-4 text-[#002933]">
        Trámites Legislativos
      </h1>
      <Accordion
        title="Nota Oficial"
        content="Toda Nota Oficial debe ser presentada en hoja membretada, con sello oficial, firma original y aclaración."
      />
      <Accordion
        title="Nota Particular"
        content="Toda Nota Particular debe cumplir con los siguientes requisitos que debemos verificar a la hora de recibirla: a quien va dirigida la nota (Presidente/a de la Cámara, cualquier Senador/ra cualquier área que forme parte de la institución), controlar si adjuntan o no documentación anexa, firma original con la aclaración, número de DNI y hojas enumeradas."
      />
    </section>
  );
};

export default Legislativos;
