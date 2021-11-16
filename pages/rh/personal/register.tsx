import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../../../components/layout/Container";
import AuthRoute from "../../../components/login/AuthRoute";

const Register = () => {
  const [profile, setProfile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [civilState, setCivilState] = useState("");
  const [age, setAge] = useState(0);
  const [children, setChildren] = useState("");
  const [house, setHouse] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [curp, setCurp] = useState("");
  const [rfc, setRfc] = useState("");
  const [nss, setNss] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [education, setEducation] = useState("Preparatoria");
  const [profesion, setProfesion] = useState("");
  const [position, setPosition] = useState(
    "Quimica Maestra/Jefe de laboratorio/Quimico Auxiliar/Medico Validador"
  );
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);
  const [schedule, setSchedule] = useState("");
  const [directBoss, setDirectBoss] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = {
      profile,
      firstName,
      lastName,
      civilState,
      age,
      children,
      house,
      phone,
      email,
      password,
      curp,
      rfc,
      nss,
      birthDate,
      birthPlace,
      address,
      nationality,
      education,
      profesion,
      position,
      department,
      salary,
      schedule,
      directBoss,
    };

    const REGISTER_URL = "http://localhost:4000/workers/register";

    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data: { ...user } }),
      });
      const data = await res.json();
      if (data.auth) {
        router.replace("/rh/personal");
      }
    } catch (error) {}
  };

  return (
    <AuthRoute>
      <Container>
        <div>
          <h3 className="text-4xl my-12">Registrar nuevo trabajador</h3>

          <form onSubmit={handleSubmit}>
            <section className="border rounded p-8 mb-8">
              <h4 className="text-2xl mb-8">Datos de personal</h4>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Profile picture
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Apellidos
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Estado Civil
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={civilState}
                  onChange={(e) => setCivilState(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Edad
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={age === 0 ? "" : age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Hijos
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Numero de casa
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={house === 0 ? "" : house}
                  onChange={(e) => setHouse(Number(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Numero de celular
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Correo electronico
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Contrasena
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id=""
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  CURP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={curp}
                  onChange={(e) => setCurp(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  RFC
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={rfc}
                  onChange={(e) => setRfc(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  NSS
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={nss}
                  onChange={(e) => setNss(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Fecha de nacimiento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Lugar de nacimiento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
              </div>
            </section>

            <section className="border rounded p-8 mb-8">
              <h4 className="text-2xl mb-8">Datos de informacion academica</h4>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Direccion
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Nacionalidad
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Nivel de educacion
                </label>
                <select
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  name="educacion"
                  id="educacion"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  <option value="Preparatoria">Preparatoria</option>
                  <option value="Carrera Tecnica">Carrera Tecnica</option>
                  <option value="Licenciatura">Licenciatura</option>
                  <option value="Maestria">Maestria</option>
                  <option value="Doctorado">Doctorado</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Profesion
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={profesion}
                  onChange={(e) => setProfesion(e.target.value)}
                />
              </div>
            </section>

            <section className="border rounded p-8 mb-8">
              <h4 className="text-2xl mb-8">Datos de contratacion</h4>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Puesto
                </label>
                <select
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  name="puesto"
                  id="puesto"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="Quimica Maestra/Jefe de laboratorio/Quimico Auxiliar/Medico Validador">
                    Quimica Maestra/Jefe de laboratorio/Quimico Auxiliar/Medico
                    Validador
                  </option>
                  <option value="Jefe de Banco de Sangre/Quimico Auxiliar/Medico Banco de Sangre">
                    Jefe de Banco de Sangre/Quimico Auxiliar/Medico Banco de
                    Sangre
                  </option>
                  <option value="Jefe de Finanzas/ Jefe de Compras /Almacenista">
                    Jefe de Finanzas/ Jefe de Compras /Almacenista
                  </option>
                  <option value="Vendedor/Coordinador de Vinculación y Servicio/Jefe de Promocion y Ventas">
                    Vendedor/Coordinador de Vinculación y Servicio/Jefe de
                    Promocion y Ventas
                  </option>
                  <option value="Auxiliar de Recursos Humanos">
                    Auxiliar de Recursos Humanos
                  </option>
                  <option value="Jefe de Gestion de Calidad/Auxiliar de Gestion de Calidad ">
                    Jefe de Gestion de Calidad/Auxiliar de Gestion de Calidad{" "}
                  </option>
                  <option value="Recepcionista/Digital">
                    Recepcionista/Digital
                  </option>
                  <option value="Asistente de limpieza">
                    Asistente de limpieza
                  </option>
                  <option value="Conductor">Conductor</option>
                  <option value="Responsable Sanitario">
                    Responsable Sanitario
                  </option>
                  <option value="Responsable de Direccion">
                    Responsable de Direccion
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Departamento
                </label>
                <select
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  name="departamento"
                  id="departamento"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="Laboratorio Clinico">
                    Laboratorio Clinico
                  </option>
                  <option value="Banco de Sangre">Banco de Sangre</option>
                  <option value="Finanzas">Finanzas</option>
                  <option value="Promocion y Venta">Promocion y Venta</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Gestion de Calidad">Gestion de Calidad</option>
                  <option value="Recepcion">Recepcion</option>
                  <option value="Limpieza">Limpieza</option>
                  <option value="Control Vehicular">Control Vehicular</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Salario
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Horario
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor=""
                >
                  Jefe directo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id=""
                  name=""
                  value={directBoss}
                  onChange={(e) => setDirectBoss(e.target.value)}
                />
              </div>
            </section>
            <section>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-12 mr-4">
                Registrar
              </button>
              <Link href="/rh/personal">
                <a>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Cancelar
                  </button>
                </a>
              </Link>
            </section>
          </form>
        </div>
      </Container>
    </AuthRoute>
  );
};

export default Register;
