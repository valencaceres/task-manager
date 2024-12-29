import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

import Button from "../ui/Button";
import { Linkedin } from "lucide-react";

import { useUser, useTask } from "../../store/hooks";

const Layout = () => {
  const navigate = useNavigate();
  const { resetUser } = useUser();
  const { resetTask } = useTask();

  const handleUser = () => {
    resetUser();
    resetTask();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-10">
      <div className="w-full flex justify-end pr-5">
        <Button type="login" onClick={() => handleUser()}>
          Cerrar sesion
        </Button>
      </div>
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 h-[15vh]">
        Task Manager
      </h1>
      <Outlet />
      <footer className="bg-black h-[10vh] w-full flex justify-center items-center flex-col">
        <h3>&copy; 2024 Valentin Caceres. Todos los derechos reservados.</h3>
        <div>
          <Link to={"https://www.linkedin.com/in/valentin-caceres-b22446288/"}>
            <Linkedin />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
