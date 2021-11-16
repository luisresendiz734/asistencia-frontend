import Link from "next/link";
import Image from "next/image";
import Container from "../layout/Container";

// Images
import rhimg from "../../public/RecursosHumanos.jpg";
import cmimg from "../../public/Compras.jpg";
import inimg from "../../public/Inventarios.jpg";
import veimg from "../../public/Ventas.jpg";
import flimg from "../../public/FlotillaAutos.jpg";

const Home = () => {
  return (
    <Container>
      <img
        src="https://i.ibb.co/gWYRv8K/logo-cihem.png"
        alt="CIHEM"
        className="w-1/2 mx-auto my-8"
      />
      <div className="flex justify-between mt-12">
        <div className="flex flex-col items-center w-1/5 mx-8">
          <Link href="/rh">
            <a className="bg-transparent hover:bg-blue-500 mb-4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Recursos Humanos
            </a>
          </Link>
          <Image src={rhimg} alt="Recursos Humanos" />
        </div>
        <div className="flex flex-col items-center w-1/5 mx-8">
          <Link href="/compras">
            <a className="bg-transparent hover:bg-blue-500 mb-4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Compras
            </a>
          </Link>
          <Image src={cmimg} alt="Recursos Humanos" />
        </div>
        <div className="flex flex-col items-center w-1/5 mx-8">
          <Link href="/inventarios">
            <a className="bg-transparent hover:bg-blue-500 mb-4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Inventarios
            </a>
          </Link>
          <Image src={inimg} alt="Recursos Humanos" />
        </div>
        <div className="flex flex-col items-center w-1/5 mx-8">
          <Link href="/ventas">
            <a className="bg-transparent hover:bg-blue-500 mb-4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Ventas
            </a>
          </Link>
          <Image src={veimg} alt="Recursos Humanos" />
        </div>
        <div className="flex flex-col items-center w-1/5 mx-8">
          <Link href="/flotillas">
            <a className="bg-transparent hover:bg-blue-500 mb-4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Flotillas de autos
            </a>
          </Link>
          <Image src={flimg} alt="Recursos Humanos" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
