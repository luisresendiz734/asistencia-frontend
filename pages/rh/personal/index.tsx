import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../../../components/layout/Container";

interface IUser {
  id: string;
  profile: string;
  firstName: string;
  lastName: string;
  civilState: string;
  age: number;
  children: string;
  house: number;
  phone: string;
  email: string;
  password: string;
  curp: string;
  rfc: string;
  nss: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  nationality: string;
  education: string;
  profesion: string;
  position: string;
  department: string;
  salary: number;
  schedule: string;
  directBoss: string;
}

const PersonalExplorer = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const USERS_URL = "http://localhost:4000/users";
      try {
        const res = await fetch(USERS_URL);
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {}
    };

    getAllUsers();
  }, []);

  return (
    <Container>
      <div>
        <h2 className="text-4xl my-12">Explorador de personal</h2>
        <Link href="/rh/personal/register">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Registrar nuevo usuario
          </a>
        </Link>
        <div className="my-8 w-full">
          <table className="min-w-full divide-y divide-gray-200 rounded">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Foto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefono
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length > 0 &&
                users.map((u) => (
                  <tr key={u.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{u.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={u.profile}
                        className="w-7 rounded-full"
                        alt={`${u.firstName} ${u.lastName}`}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{`${u.firstName} ${u.lastName}`}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{u.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{u.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{u.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default PersonalExplorer;
