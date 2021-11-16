import { FC, useContext, createContext, useState } from "react";

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  password: string;
  userType: string;
}

interface IAuth {
  user: IUser | null;
  register: (user: IUser) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuth>({
  user: null,
  register: () => {},
  login: () => {},
  logout: () => {},
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const register = async (user: IUser) => {
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
        setUser(data.user);
      }
    } catch (error) {}
  };
  const login = async (email: string, password: string) => {
    const LOGIN_URL = "http://localhost:4000/users/login";

    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (data.auth) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    const LOGOUT_URL = "http://localhost:4000/users/logout";

    try {
      const res = await fetch(LOGOUT_URL, {
        method: "POST",
      });
      const data = await res.json();
      setUser(null);
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
