import Link from "next/link";
import Container from "../layout/Container";

const Home = () => {
  return (
    <Container>
      <img
        src="https://i.ibb.co/gWYRv8K/logo-cihem.png"
        alt="CIHEM"
        className="w-1/2 mx-auto my-8"
      />
      <div className="flex justify-between mt-12">
        <Link href="/rh">
          <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Recursos Humanos
          </a>
        </Link>
        <Link href="/compras">
          <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Compras
          </a>
        </Link>
        <Link href="/inventarios">
          <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Inventarios
          </a>
        </Link>
        <Link href="/ventas">
          <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Ventas
          </a>
        </Link>
        <Link href="/flotillas">
          <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Flotillas de autos
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
