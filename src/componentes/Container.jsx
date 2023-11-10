import { Administrativos } from "./Administrativos";
import Legislativos from "./Legislativos";
import { Titulos } from "./Titulos";

const Container = () => {
  return (
    <>
      <Titulos />;
      <Administrativos />
      <Legislativos />
    </>
  );
};

export default Container;
