import { useAuth } from "../../context/auth";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <header className="shadow">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a>
              <h1 className="font-bold text-xl">CIHEM</h1>
            </a>
          </Link>
          {user && (
            <div className="flex items-center">
              <div className="mr-4 flex items-center">
                <img
                  src={user.profile}
                  alt={user.firstName}
                  className="w-7 rounded-full mr-2"
                />
                <p>{user.email}</p>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 rounded"
                onClick={logout}
              >
                Cerrar sesion
              </button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
