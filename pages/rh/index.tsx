import Link from "next/link";
import Container from "../../components/layout/Container";

const RecursosHumanos = () => {
  return (
    <Container>
      <div>
        <h2 className="text-5xl my-12">Recursos Humanos</h2>
        <div className="flex justify-around">
          <Link href="/rh/personal">
            <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Explorador de personal
            </a>
          </Link>
          <Link href="/rh/assistance">
            <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Explorador de asistencia
            </a>
          </Link>
          <Link href="/rh/justifications">
            <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Justificaciones
            </a>
          </Link>
          <Link href="/rh/config">
            <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Configuracion
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default RecursosHumanos;
