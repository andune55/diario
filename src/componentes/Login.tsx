import { useState } from "react";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }:LoginProps) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "FOS123abc") {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (

<div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">

  {/* Glow fondo */}
  <div className="absolute w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[120px]"></div>

  <div className="relative z-10 w-[380px] bg-[#111] border border-orange-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,115,0,0.2)]">

    {/* ICONO */}
    <div className="flex justify-center mb-4">
      <div className="bg-orange-500/20 p-3 rounded-full border border-orange-500">
        🔐
      </div>
    </div>

    <h2 className="text-center text-xl font-bold text-orange-400">
      Acceso Privado
    </h2>

    <p className="text-center text-gray-400 text-sm mb-6">
      Introduce contraseña para continuar
    </p>

    <input
      type="password"
      placeholder="••••••••"
      className="w-full mb-4 px-4 py-2 bg-black border border-orange-500/30 rounded-lg focus:outline-none focus:border-orange-500 text-white"
      value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleLogin} className="w-full py-2 bg-orange-500 hover:bg-orange-600 transition rounded-lg font-bold shadow-lg shadow-orange-500/20">
      Entrar
    </button>

  </div>
</div>
    
  );
}