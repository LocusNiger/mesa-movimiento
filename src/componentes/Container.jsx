import Accordion from "./Accordion";
import { Titulos } from "./Titulos";

const Container = () => {
  return (
    <>
      <Titulos />;
      <section className="flex flex-col gap-4 justify-center items-center mb-8">
        <h1 className="text-4xl mb-4 font-bold py-4 underline underline-offset-4 text-[#002933]">
          Trámites administrativos
        </h1>
        <Accordion
          title="Solicitud de bonificación de título"
          content="Nota dirigida a Secretaria/o Administrativa/o, fotocopia del título original legalizada. Firmada por el/la interesada con aclaración y número de DNI."
        />
        <Accordion
          title="Solicitud de reconocimiento y bonificación por antigüedad"
          content="Nota dirigida a Secretaria/o Administrativa/o, fotocopia original de los servicios prestados en otras dependencias legalizada. Firmada por el/la interesada con aclaración y número de DNI."
        />
        <Accordion
          title="Trámite de Jubilación Ordinaria"
          content="Nota dirigida a Secretaria/o Administrativa/o, fotocopia original de la Resolución de la Caja de Jubilaciones de la provincia. Firmada por el/la interesada con aclaración y número de DNI."
        />
        <Accordion
          title="Licencias sin goce de haberes"
          content="Nota dirigida a Secretaria/o Administrativa/o. Firmada por el/la interesada con aclaración y número de DNI. Previa comunicación con la Dir. Gral de RRHH y Programación de Sueldos."
        />
        <Accordion
          title="Trámite por fallecimiento de agente activo"
          content="Nota dirigida a Secretaria/o Administrativa/o. Firmada por el/la familiar que realiza el pedido con aclaración y número de DNI. Previa comunicación con la Dir. Gral de RRHH y Programación de Sueldos."
        />
        <Accordion
          title="Oficios y Cédulas"
          content="Oficios o cédulas originales, dirigidas correctamente a la institución, firmada con aclaración y DNI. Cabe aclarar que no puede ser dirigida a un agente particular."
        />
        <Accordion
          title="Cambio de beneficiario de subsidio"
          content="Nota con membrete dirigida a Secretaria/o Administrativa/o. Firmada por el/la senador/ra que realiza el pedido con aclaración."
        />
        <Accordion
          title="Alta y baja de agentes"
          content="Nota con membrete dirigida a Secretaria/o Administrativa/o. Firmada por el/la senador/ra que realiza el pedido con aclaración."
        />
      </section>
    </>
  );
};

export default Container;
