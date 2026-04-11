import { useEffect, useState } from "react";


import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

import CodeBlock from "./CodeBlock";

type AppContentProps = {
  onLogout: () => void;
};

import "./AppContent.css";


export default function AppContent({ onLogout }: AppContentProps) {

  useEffect(() => {
    Prism.highlightAll();
  });
  
  const [openBlocks, setOpenBlocks] = useState<Record<string, boolean>>({});

  const toggleBlock = (id: string) => {
  setOpenBlocks((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};

  return (
    <>  

      
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">

      {/* 🔥 Glow naranja fondo */}
      {/* <div className="absolute w-[600px] h-[600px] bg-orange-500 opacity-20 blur-[150px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange-600 opacity-10 blur-[120px] bottom-[-100px] right-[-100px]"></div> */}

      {/* 🔥 contenido */}
      <div className="relative z-10 p-6"></div>






      



      <div className="bg-gray-100 pb-2.5">


        <div className="flex justify-between items-center mb-6 w-[90%] max-sm:w-[100%] mx-auto">
          {/* <h1 className="text-xl font-bold text-orange-400 tracking-wide">
            ⚡ Dev Panel
          </h1> */}

          {/* logout aquí */}
          <button
            onClick={() => {
              localStorage.removeItem("auth");
              onLogout();
            }}
            className="group relative px-5 py-2 bg-black border border-orange-500 rounded-lg overflow-hidden"
          >
            {/* glow animado */}
            <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 blur-md transition"></span>

            {/* contenido */}
            <span className="relative flex items-center gap-2 text-orange-400 group-hover:text-white transition">

              {/* icono */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 group-hover:rotate-180 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V3" />
              </svg>

              Logout
            </span>
          </button>
        </div>





        {/* <!-- ATAJOS VISUAL STUDIO CODE Y PROYECTOS FO --> */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">

          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("atajos-vsc")}>
            <h3>Atajos Visual Studio Code</h3>
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["atajos-vsc"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>
          <div id="atajos-vsc" className={`ml-2.5 ${openBlocks["atajos-vsc"] ? "block" : "hidden"}`}>
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>ALT+SHIFT+O</strong> --&gt; remove unused imports</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Cuando el IS no nos da las sugerencias quick fix de autocompletado (por ejemplo al tipar en nuestro componente un parámetro y sabemos que ese type existe en nuestro archivo de types)</strong> --&gt;<strong>en nuestro jsconfig.json poner a true el checkJS</strong> --&gt; <a href="https://medium.com/fredwong-it/vs-code-not-providing-suggestions-for-imports-in-quick-fix-dae5c8cc592c" className="underline" target="blank">VS Code not providing suggestions for imports in Quick fix</a></span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Para que al cambiar la etiqueta de html automáticamente se cambie también la de cierre</strong> --&gt;<strong>Ctrl+, y "linked editing"</strong></span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Para cambiar el cursor por defecto</strong> --&gt;<strong>Ctrl+,</strong> y a continuación escribir "cursor blinking"</span>
              </div>
              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Colorizar las barras verticales que marcan los brackets(corchetes)</strong> --&gt;<strong>Ctrl+,</strong> y a continuación escribir "bracket pairs" (si no teníamos colorizados las distintas profundidades de los brackets buscar "bracket pair colorization")</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>XXXXXXXXXXXXXXXXXXXXXX</strong> --&gt;<strong>Ctrl+,</strong> y a continuación escribir ""</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Cuando el VSC se buggea y pierde el autompletado del lenguage que sea</strong> --&gt;<strong>CTRL+K</strong> y a continuación <strong>M</strong> seleccionamos el lenguage del cual no está autocompletando</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+MAYUS+A</strong> Comentario de html</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+K   +C</strong> --&gt; comentar</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+K   +U</strong> --&gt; descomentar</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]">Evitar que al tocar un archivo se expanda el arbol de explorer. Abrir Configuración del editor --&gt; Explorer: Auto reveal a false</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+B</strong> sacar/ocultar panel izquierdo</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+J</strong> sacar/ocultar panel inferior</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>En el explorador, agregar carpeta al área de trabajo para tener todos losproyectos que queramos ahí unificados.</strong>
                  Si queremos tener dos server arrancados. CTRL+J para sacar panel inferior y pulsar en dividir terminal</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Seleccionar algo a reemplazar y pulsar CTRL+D (tantas veces como elementos a reemplazar)</strong> --&gt; escribir lo nuevo o borrar</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Seleccionar algo a reemplazar y pulsar CTRL+F2 (reemplazar lo seleccionado en TODAS sus ocurrencias)</strong> --&gt; escribir lo nuevo o borrar</span>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center mt-1.25">
                  <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                  </svg>
                  <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>ENCAPSULAR CON TAG HTML HACIENDO USO DE EMMET WRAP.</strong></span>
                </div>
                <ul className="list-disc ml-10">
                  <li>Abrimos comandos abreviados con <strong>CTRL K + S</strong></li>
                  <li>buscamos <strong>emmet wrap</strong> y asignamos la combinación
                    de teclas que queramos: <strong>MAYUS+ALT+W</strong></li>
                </ul>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]">Instalo la extensión (CTRL+MAYUS+X) "Escape HTML Code" + buscamos <strong>Replace Selection with escaped HTML</strong> + asignamos la combinación
                  de teclas que queramos: <strong>MAYUS+CTRL+E</strong></span>
              </div>


              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+MAYUS+P y escribimos "Quitar importaciones sin usar"</strong> --&gt; Para quitar importaciones que ya no se utilicen</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>ALT+Click</strong> --&gt; marcar distintos sitios para editar a la vez</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>MAYUS+ALT+flecha arriba o abajo</strong> --&gt; duplicar línea</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>ALT+flecha arriba o abajo</strong> --&gt; mover línea</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>Alt+Z</strong> --&gt; Word Wrap del texto del editor</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>CTRL+K +S</strong> --&gt; comandos abreviados de teclado</span>
              </div>

              <div className="flex items-center mt-1.25">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
                <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]"><strong>RENOMBRAR</strong> --&gt; Instead, go to the definition of that variable and press F2, rename it, and press ENTER. This will change every occurrence. Not only does this work on variables, but also on functions, classes, interfaces, etc. This also works across files.</span>
              </div>
            </div>


          </div>      
        </div>

        {/* <!-- GIT, PROYECTOS FO, DEPENDENCIAS ÚTILES --> */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("proyectosfo")}>
            <h3>GIT, Proyectos y dependencias útiles npm</h3>
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["proyectosfo"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>
          <div id="proyectosfo" className={`ml-2.5 ${openBlocks["proyectosfo"] ? "block" : "hidden"}`}>
            <a href="https://app.netlify.com/teams/an.....5/sites" className="txt-primario" target="blank">https://app.netlify.com/teams/an.....5/sites</a> -
            <a href="https://github.com/an.....5/" className="txt-primario" target="blank">https://github.com/an.....5/</a>

            {/* GIT  */}
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <p className="flex items-center">
                <span className="naranja">Git</span> &nbsp; <span className="naranja">GitHub</span>
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
              </p>
              <div className="flex flex-wrap items-center">
                <a className="underline mx-1.5" href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#ch02-git-basics-chapter" target="_blank"><strong>Git basis</strong></a> /
                <a className="underline mx-1.5" href="https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Fundamentos-de-Git" target="_blank">Fundamentos Control de versiones Git</a> /
                <a className="underline mx-1.5" href="https://medium.com/@diego.coder/despliega-tu-aplicaci%C3%B3n-de-reactjs-vite-en-github-pages-34d25e619dae" target="blank">Despliega tu aplicación de ReactJS +Vite en GitHub Pages</a> /
                <a className="underline mx-1.5" href="https://es.stackoverflow.com/questions/544213/c%C3%B3mo-compartir-un-repositorio-privado-mediante-una-url" target="blank">¿Cómo compartir un repositorio privado mediante una URL?</a> / <a className="underline mx-1.5" href="https://gitfront.io/r/andune/LqWHLJa4HdLF/diario/" target="blank">Repo privado</a> /  <a className="underline mx-1.5" href="https://gitfront.io/" target="blank">https://gitfront.io/</a> /
              </div>

              {/* <!-- GIT: CONFIGURACIÓN INICIAL ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("config-git")}>
                <h3 className="flex items-center font-bold">
                  ⚙️ GIT: CONFIGURACIÓN INICIAL (OBLIGATORIA)
                  <img id="point-left" src="./src/assets/img/icon-finger-left.png" width="30" className="noshadow animation-point-left" alt="" aria-hidden="true" />
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["config-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="config-git" className={`ml-2.5 ${openBlocks["config-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  <li className="my-1.25">
                    <strong>1. Comprobar instalación:</strong>
                    <span className="destacado">git --version</span>

                    <pre><code className="language-bash">
                      git --version
                      command -v git
                    </code></pre>

                    <div className="text-sm">
                      Si no devuelve versión → instala Git.
                    </div>
                  </li>

                  <li className="my-1.25">
                    <strong>2. Configuración básica (OBLIGATORIA):</strong>

                    <pre><code className="language-bash">
                      git config --global user.name "Tu Nombre"
                      git config --global user.email "tu@email.com"
                      git config --global core.editor "nano"
                    </code></pre>

                    <div className="text-sm">
                      🔥 Define tu identidad en commits.
                    </div>
                  </li>

                  <li className="my-1.25">
                    <strong>3. Configuración recomendada (PRO):</strong>

                    <pre><code className="language-bash">
                      git config --global init.defaultBranch main
                      git config --global color.ui auto
                      git config --global pull.ff only
                    </code></pre>

                    <div className="text-sm">
                      <ul>
                        <li><code>init.defaultBranch</code> → evita "master"</li>
                        <li><code>color.ui</code> → mejor visual</li>
                        <li><code>pull.ff only</code> → evita merges innecesarios 🔥</li>
                      </ul>
                    </div>
                  </li>

                  <li className="my-1.25">
                    <strong>4. Alias clave:</strong>

                    <pre><code className="language-bash">
                      git config --global alias.st status
                      git config --global alias.co checkout
                      git config --global alias.br branch
                      git config --global alias.cm "commit -m"

                      git config --global alias.lg "log --graph --oneline --decorate --all"
                      git config --global alias.logall "log --oneline --graph --all --decorate"
                    </code></pre>

                    <div className="text-sm">
                      ⭐ <span className="destacado">git st</span> | <span className="destacado">git lg</span>
                    </div>
                  </li>

                  <li className="my-1.25">
                    <strong>5. Ver configuración:</strong>

                    <pre><code className="language-bash">
                      git config --list
                      git config --global --list
                      git config --show-origin --list
                    </code></pre>

                    <div className="text-sm">
                      🔍 Debug configuración
                    </div>
                  </li>

                  <li className="my-1.25">
                    <strong>✅ Checklist:</strong>
                    <ul className="list-disc ml-5 text-sm">
                      <li>Git instalado ✔️</li>
                      <li>user.name / email ✔️</li>
                      <li>Editor ✔️</li>
                      <li>main por defecto ✔️</li>
                      <li>Alias ✔️</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- CICLO DE VIDA ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("ciclo-git")}>
                <h3 className="flex items-center font-bold">
                  🔁 CICLO DE VIDA DE ARCHIVOS (CORE DE GIT)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["ciclo-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="ciclo-git" className={`ml-2.5 ${openBlocks["ciclo-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- MODELO --> */}
                  <li className="my-1.25">
                    <strong>Modelo mental:</strong>
                    <span className="text-sm">
                      🔥 Esto es Git.
                    </span>

                    <div className="bg-neutral-900 text-green-400 p-2 rounded text-sm font-mono my-1">
                      UNTRACKED → MODIFIED → STAGED → COMMITTED
                    </div>
                  </li>

                  {/* <!-- UNTRACKED --> */}
                  <li className="my-1.25">
                    <strong>1. UNTRACKED:</strong>
                    <span className="text-sm">
                      Archivo nuevo no rastreado.
                    </span>

                    <pre><code className="language-bash">
                      touch archivo.txt
                      git status
                    </code></pre>
                  </li>

                  {/* <!-- MODIFIED --> */}
                  <li className="my-1.25">
                    <strong>2. MODIFIED:</strong>
                    <span className="text-sm">
                      Archivo cambiado.
                    </span>

                    <pre><code className="language-bash">
                echo "cambio" &gt;&gt; archivo.txt
                      git status
                    </code></pre>
                  </li>

                  {/* <!-- STAGED --> */}
                  <li className="my-1.25">
                    <strong>3. STAGED:</strong>
                    <span className="text-sm">
                      Preparado para commit.
                    </span>

                    <pre><code className="language-bash">
                      git add archivo.txt
                      git status
                    </code></pre>
                  </li>

                  {/* <!-- COMMIT --> */}
                  <li className="my-1.25">
                    <strong>4. COMMIT:</strong>
                    <span className="text-sm">
                      Guardado en historial.
                    </span>

                    <pre><code className="language-bash">
                      git commit -m "feat: ejemplo"
                    </code></pre>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave:</strong>

                    <pre><code className="language-bash">
                      git add ≠ git commit
                    </code></pre>
                  </li>

                  {/* <!-- ZONAS --> */}
                  <li className="my-1.25">
                    <strong>🧠 Las 3 zonas:</strong>

                    <div className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono my-1">
                      Working → Staging → Repository
                    </div>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Working → editas</li>
                      <li>Staging → eliges</li>
                      <li>Repo → guardas</li>
                    </ul>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>commit -a no añade nuevos ❌</li>
                      <li>olvidar add ❌</li>
                      <li>no usar status ❌</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- COMANDOS BÁSICOS ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("basicos-git")}>
                <h3 className="flex items-center font-bold">
                  🧱 COMANDOS BÁSICOS (DÍA A DÍA)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["basicos-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="basicos-git" className={`ml-2.5 ${openBlocks["basicos-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- VISUAL ESQUEMA --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo real:</strong>

                    <div className="bg-neutral-900 text-green-400 p-2 rounded text-sm font-mono my-1">
                      edit → status → add → status → commit
                    </div>
                  </li>

                  {/* <!-- STATUS --> */}
                  <li className="my-1.25">
                    <strong>1. git status:</strong>
                    <span className="text-sm">
                      Ver el estado actual del repositorio.
                    </span>

                    <pre><code className="language-bash">
                      git status
                      git status -s
                    </code></pre>

                    <div className="text-sm">
                      👉 Muestra archivos modificados, staged y rama actual
                    </div>
                  </li>

                  {/* <!-- ADD --> */}
                  <li className="my-1.25">
                    <strong>2. git add:</strong>
                    <span className="text-sm">
                      Añadir cambios al área de staging.
                    </span>

                    <pre><code className="language-bash">
                      git add archivo.txt
                      git add .
                    </code></pre>

                    <div className="text-sm">
                      👉 Decide qué irá al commit
                    </div>
                  </li>

                  {/* <!-- DIFF --> */}
                  <li className="my-1.25">
                    <strong>3. git diff:</strong>
                    <span className="text-sm">
                      Ver diferencias en los cambios.
                    </span>

                    <pre><code className="language-bash">
                      git diff
                      git diff --staged
                    </code></pre>

                    <div className="text-sm">
                      👉 Antes y después de hacer add
                    </div>
                  </li>

                  {/* <!-- COMMIT --> */}
                  <li className="my-1.25">
                    <strong>4. git commit:</strong>
                    <span className="text-sm">
                      Guardar cambios en el historial.
                    </span>

                    <pre><code className="language-bash">
                      git commit -m "mensaje"
                      git commit -a -m "sin add (solo modificados)"
                    </code></pre>

                    <div className="text-sm">
                      👉 Solo incluye lo que está en staging
                    </div>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Git no guarda archivos, guarda snapshots.
                    </span>

                    <div className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono my-1">
                      commit = foto del estado preparado
                    </div>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Usar <code>git add .</code> sin revisar ❌</li>
                      <li>Commit sin mensaje claro ❌</li>
                      <li>No usar <code>git diff</code> ❌</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- INIT vs CLONE ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("init-clone-git")}>
                <h3 className="flex items-center font-bold">
                  🚀 INICIAR REPOSITORIO (init vs clone)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["init-clone-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="init-clone-git" className={`ml-2.5 ${openBlocks["init-clone-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- VISUAL --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo mental:</strong>

                    <div className="bg-neutral-900 text-green-400 p-3 rounded text-sm font-mono my-1 leading-6">
                      LOCAL PROYECTO NUEVO
                      ↓
                      git init
                      ↓
                      REPO LOCAL

                      ------------------------

                      REPO REMOTO (GitHub)
                      ↓
                      git clone
                      ↓
                      REPO LOCAL + HISTORIAL
                    </div>
                  </li>

                  {/* <!-- INIT --> */}
                  <li className="my-1.25">
                    <strong>1. git init:</strong>
                    <span className="text-sm">
                      Crear un repositorio desde cero en tu máquina.
                    </span>

                    <pre><code className="language-bash">
                      cd mi-proyecto
                      git init
                    </code></pre>

                    <div className="text-sm">
                      👉 Crea la carpeta oculta <code>.git</code>
                    </div>
                  </li>

                  {/* <!-- CLONE --> */}
                  <li className="my-1.25">
                    <strong>2. git clone:</strong>
                    <span className="text-sm">
                      Descargar un repositorio remoto completo.
                    </span>

                    <pre><code className="language-bash">
                      git clone https://github.com/user/repo.git
                      git clone https://github.com/user/repo.git mi-carpeta
                    </code></pre>

                    <div className="text-sm">
                      👉 Incluye historial + ramas + configuración remota
                    </div>
                  </li>

                  {/* <!-- DIFERENCIA --> */}
                  <li className="my-1.25">
                    <strong>🔥 Diferencia clave:</strong>
                    <span className="text-sm">
                      init crea, clone copia.
                    </span>

                    <div className="bg-neutral-900 text-blue-400 p-3 rounded text-sm font-mono my-1 leading-6">
                      git init → empiezas desde cero
                      git clone → partes de algo ya existente
                    </div>
                  </li>

                  {/* <!-- CASOS REALES --> */}
                  <li className="my-1.25">
                    <strong>💼 Casos reales:</strong>

                    <ul className="list-disc ml-5 text-sm">

                      <li>
                        <strong>Proyecto personal nuevo:</strong>
                        → <span className="destacado">git init</span>
                      </li>

                      <li>
                        <strong>Te bajas un proyecto de GitHub:</strong>
                        → <span className="destacado">git clone</span>
                      </li>

                      <li>
                        <strong>Empiezas local y luego subes a GitHub:</strong>

                        <pre><code className="language-bash">
                          git init
                          git add .
                          git commit -m "init"
                          git remote add origin URL
                          git push -u origin main
                        </code></pre>
                      </li>

                    </ul>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Git es distribuido → no hay "servidor central obligatorio".
                    </span>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Hacer <code>git init</code> dentro de otro repo ❌</li>
                      <li>Confundir clone con download zip ❌</li>
                      <li>No configurar remoto después de init ❌</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- REMOTOS + PUSH + PULL ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("remotos-git")}>
                <h3 className="flex items-center font-bold">
                  🌍 REMOTOS + PUSH + PULL (FLUJO REAL). Lo que convierte a GIT en herramienta colaborativa
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["remotos-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="remotos-git" className={`ml-2.5 ${openBlocks["remotos-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- DIAGRAMA AVANZADO --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo completo:</strong>

                    <div className="bg-neutral-900 text-green-400 p-4 rounded text-sm font-mono my-2 leading-6">
                      [ LOCAL ]
                      ↑ edit
                      [ Working Directory ]
                      ↑ git add
                      [ Staging ]
                      ↑ git commit
                      [ Local Repo ]
                      ↑ git push
                      =========================
                      [ Remote Repo (GitHub) ]
                      =========================
                      ↓ git pull
                      [ Local Repo ]
                    </div>
                  </li>

                  {/* <!-- REMOTE --> */}
                  <li className="my-1.25">
                    <strong>1. git remote:</strong>
                    <span className="text-sm">
                      Conectar tu repo local con uno remoto.
                    </span>

                    <pre><code className="language-bash">
                      git remote -v
                      git remote add origin URL
                      git remote set-url origin URL
                    </code></pre>

                    <div className="text-sm">
                      👉 <code>origin</code> = nombre del remoto (por convención)
                    </div>
                  </li>

                  {/* <!-- PUSH --> */}
                  <li className="my-1.25">
                    <strong>2. git push:</strong>
                    <span className="text-sm">
                      Subir commits al repositorio remoto.
                    </span>

                    <pre><code className="language-bash">
                      git push origin main
                      git push -u origin main
                    </code></pre>

                    <div className="text-sm">
                      👉 <code>-u</code> enlaza rama local con remota (solo 1 vez)
                    </div>
                  </li>

                  {/* <!-- PULL --> */}
                  <li className="my-1.25">
                    <strong>3. git pull:</strong>
                    <span className="text-sm">
                      Traer cambios del remoto.
                    </span>

                    <pre><code className="language-bash">
                      git pull origin main
                    </code></pre>

                    <div className="text-sm">
                      👉 = fetch + merge automático
                    </div>
                  </li>

                  {/* <!-- FETCH --> */}
                  <li className="my-1.25">
                    <strong>4. git fetch:</strong>
                    <span className="text-sm">
                      Descargar cambios SIN aplicarlos.
                    </span>

                    <pre><code className="language-bash">
                      git fetch origin
                    </code></pre>

                    <div className="text-sm">
                      👉 Más seguro que pull (control total)
                    </div>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      push envía tus cambios, pull trae cambios de otros.
                    </span>

                    <div className="bg-neutral-900 text-blue-400 p-3 rounded text-sm font-mono my-1">
                      LOCAL → push → REMOTE
                      REMOTE → pull → LOCAL
                    </div>
                  </li>

                  {/* <!-- CASOS REALES --> */}
                  <li className="my-1.25">
                    <strong>💼 Casos reales:</strong>

                    <ul className="list-disc ml-5 text-sm">

                      <li>
                        <strong>Subir tu proyecto por primera vez:</strong>

                        <pre><code className="language-bash">
                          git init
                          git add .
                          git commit -m "init"
                          git remote add origin URL
                          git push -u origin main
                        </code></pre>
                      </li>
                      <li>
                        <strong>Empiezas a trabajar cada día:</strong>

                        <pre><code className="language-bash">
                          git pull origin main
                        </code></pre>
                      </li>
                      <li>
                        <strong>Guardar tu trabajo:</strong>

                        <pre><code className="language-bash">
                          git add .
                          git commit -m "feat: cambios"
                          git push
                        </code></pre>
                      </li>
                      <li>
                        <strong>Ver cambios antes de mezclar:</strong>

                        <pre><code className="language-bash">
                          git fetch
                          git log origin/main --oneline
                        </code></pre>
                      </li>

                    </ul>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Hacer push sin hacer pull antes ❌</li>
                      <li>Confundir fetch con pull ❌</li>
                      <li>No usar <code>-u</code> en primer push ❌</li>
                      <li>Forzar push sin saber (<code>--force</code>) ❌🔥</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- RAMAS (REFACTOR PRO) ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("ramas-git")}>
                <h3 className="flex items-center font-bold">
                  🌿 RAMAS (BRANCHING REAL)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["ramas-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="ramas-git" className={`ml-2.5 ${openBlocks["ramas-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- DIAGRAMA MEJORADO --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo real:</strong>

                    <pre className="bg-neutral-900 text-green-400 rounded text-sm font-mono leading-4"><code>
                      main ────────●───────●──────────
                      \
                      \──●──●   feature/login
                      ↑ trabajo aislado

                      merge ↓

                      main ────────●───────●──●──────
                    </code></pre>
                  </li>

                  {/* <!-- CAMBIO DE RAMA --> */}
                  <li className="my-1.25">
                    <strong>1. Cambiar de rama:</strong>
                    <span className="text-sm">
                      Moverte entre ramas.
                    </span>

                    <pre><code className="language-bash">
                      git switch main
                      git switch feature/login
                    </code></pre>

                    <div className="text-sm">
                      👉 Alternativa antigua: <code>git checkout</code>
                    </div>
                  </li>

                  {/* <!-- VER RAMAS --> */}
                  <li className="my-1.25">
                    <strong>2. Ver ramas:</strong>
                    <span className="text-sm">
                      Listar ramas disponibles.
                    </span>

                    <pre><code className="language-bash">
                      git branch      # solo locales
                      git branch -a   # locales + remotas
                    </code></pre>
                  </li>

                  {/* <!-- MERGE --> */}
                  <li className="my-1.25">
                    <strong>3. Merge:</strong>
                    <span className="text-sm">
                      Integrar cambios en otra rama.
                    </span>

                    <pre><code className="language-bash">
                      git switch main
                      git merge feature/login
                    </code></pre>

                    <div className="text-sm">
                      👉 Estás en <strong>main</strong> y traes cambios de <strong>feature/login</strong>
                    </div>
                  </li>

                  {/* <!-- BORRAR --> */}
                  <li className="my-1.25">
                    <strong>4. Borrar rama:</strong>
                    <span className="text-sm">
                      Eliminar ramas ya usadas.
                    </span>

                    <pre><code className="language-bash">
                      git branch -d feature/login   # segura (solo si está mergeada)
                      git branch -D feature/login   # forzada
                    </code></pre>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Cada rama = contexto independiente.
                    </span>

                    <div className="bg-neutral-900 text-blue-400 p-3 rounded text-sm font-mono my-1">
                      main = estable
                      feature/* = desarrollo
                      fix/* = bugs
                    </div>
                  </li>

                  {/* <!-- CASO REAL --> */}
                  <li className="my-1.25">
                    <strong>💼 Caso real típico:</strong>

                    <pre><code className="language-bash">
                      git switch -c feature/login   # crear + cambiar
                      # trabajas
                      git add .
                      git commit -m "feat: login"

                      git switch main
                      git merge feature/login
                    </code></pre>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Trabajar en main ❌</li>
                      <li>Merge sin actualizar (sin pull) ❌</li>
                      <li>Borrar rama sin merge ❌</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- CONFLICTOS ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("conflictos-git")}>
                <h3 className="flex items-center font-bold">
                  ⚔️ CONFLICTOS (MERGE REAL)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["conflictos-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="conflictos-git" className={`ml-2.5 ${openBlocks["conflictos-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- DIAGRAMA CLARO --> */}
                  <li className="my-2">
                    <strong>🧠 Cuándo ocurre un conflicto:</strong>

                    <pre className="bg-neutral-900 text-green-400 rounded text-sm font-mono">
                      main ─────●────────●────────
                      \
                      ●──●  feature/login
                      (mismo archivo modificado)

                      merge ↓ ❌ conflicto
                    </pre>
                  </li>

                  {/* <!-- CONCEPTO --> */}
                  <li className="my-1.25">
                    <strong>¿Qué es un conflicto?</strong>
                    <span className="text-sm">
                      Dos ramas modifican la misma parte de un archivo y Git no sabe cuál elegir.
                    </span>
                  </li>

                  {/* <!-- EJEMPLO REAL --> */}
                  <li className="my-1.25">
                    <strong>💼 Caso real:</strong>
                    <span className="text-sm">
                      Dos devs cambian la misma línea.
                    </span>

                    <pre><code className="language-bash">
                      # en main
                      const user = "admin"

                      # en feature
                      const user = "guest"
                    </code></pre>
                  </li>

                  {/* <!-- MERGE CONFLICT --> */}
                  <li className="my-1.25">
                    <strong>1. Intentas hacer merge:</strong>
                    <span className="text-sm">
                      Git detecta conflicto.
                    </span>

                    <pre><code className="language-bash">
                      git switch main
                      git merge feature/login
                    </code></pre>

                    <div className="text-sm">
                      ❌ Git no puede decidir → conflicto
                    </div>
                  </li>

                  {/* <!-- ARCHIVO --> */}
                  <li className="my-1.25">
                    <strong>2. Git marca el archivo:</strong>
                    <span className="text-sm">
                      Debes resolverlo manualmente.
                    </span>

                    <pre><code className="language-bash">
                      &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                      const user = "admin"
                      =======
                      const user = "guest"
                      &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/login
                    </code></pre>

                    <div className="text-sm">
                      👉 HEAD = tu rama actual (main)
                      👉 abajo = la otra rama
                    </div>
                  </li>

                  {/* <!-- RESOLVER --> */}
                  <li className="my-1.25">
                    <strong>3. Resolver conflicto:</strong>
                    <span className="text-sm">
                      Editas el archivo y decides qué dejar.
                    </span>

                    <pre><code className="language-bash">
                      const user = "admin"   # o guest o mezcla
                    </code></pre>
                  </li>

                  {/* <!-- FINALIZAR --> */}
                  <li className="my-1.25">
                    <strong>4. Finalizar merge:</strong>
                    <span className="text-sm">
                      Marcar como resuelto y confirmar.
                    </span>

                    <pre><code className="language-bash">
                      git add archivo.js
                      git commit
                    </code></pre>
                  </li>

                  {/* <!-- ABORT --> */}
                  <li className="my-1.25">
                    <strong>Extra: cancelar merge:</strong>
                    <span className="text-sm">
                      Volver atrás si te lías.
                    </span>

                    <pre><code className="language-bash">
                      git merge --abort
                    </code></pre>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Git no pierde nada → tú decides el resultado final.
                    </span>

                    <pre className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono">
                      conflicto = decisión humana
                    </pre>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>No entender HEAD vs rama ❌</li>
                      <li>Borrar código sin revisar ❌</li>
                      <li>No probar antes de commit ❌</li>
                      <li>Entrar en pánico 😅</li>
                    </ul>
                  </li>

                </ul>

              </div>

              {/* <!-- HISTORIAL Y RECUPERACIÓN ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("historial-git")}>
                <h3 className="flex items-center font-bold">
                  🧭 HISTORIAL + RECUPERACIÓN (REAL)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["historial-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="historial-git" className={`ml-2.5 ${openBlocks["historial-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- LOG --> */}
                  <li className="my-1.25">
                    <strong>1. Ver historial:</strong>
                    <span className="text-sm">
                      Ver commits.
                    </span>

                    <pre><code className="language-bash">
                      git log
                      git log --oneline
                      git lg   # alias pro
                    </code></pre>
                  </li>

                  {/* <!-- REVERT --> */}
                  <li className="my-1.25">
                    <strong>2. Revert (seguro):</strong>
                    <span className="text-sm">
                      Deshacer un commit SIN borrar historial.
                    </span>

                    <pre><code className="language-bash">
                      git revert HASH
                    </code></pre>

                    <div className="text-sm">
                      👉 crea un commit nuevo que revierte el anterior
                    </div>
                  </li>

                  {/* <!-- RESET --> */}
                  <li className="my-1.25">
                    <strong>3. Reset (peligroso):</strong>
                    <span className="text-sm">
                      Mover el puntero del repo.
                    </span>

                    <pre><code className="language-bash">
                      git reset --soft HEAD~1   # mantiene cambios
                      git reset --hard HEAD~1   # borra TODO
                    </code></pre>
                  </li>

                  {/* <!-- REFlOG --> */}
                  <li className="my-1.25">
                    <strong>4. Reflog (salvavidas):</strong>
                    <span className="text-sm">
                      Historial interno incluso de lo borrado.
                    </span>

                    <pre><code className="language-bash">
                      git reflog
                      git checkout HEAD@{2}
                    </code></pre>
                  </li>

                  {/* <!-- CASO REAL 1 --> */}
                  <li className="my-2">
                    <strong>💼 Caso real 1: borraste commits por error</strong>

                    <pre className="bg-neutral-900 text-green-400 rounded text-sm font-mono">
                      ANTES:
                      main ───●──●──●

                      git reset --hard HEAD~2

                      DESPUÉS:
                      main ───●
                    </pre>

                    <div className="text-sm">
                      ❌ parece perdido... pero no lo está
                    </div>

                    <pre><code className="language-bash">
                      git reflog
                      git reset --hard HEAD@{1}
                    </code></pre>
                  </li>

                  {/* <!-- CASO REAL 2 --> */}
                  <li className="my-2">
                    <strong>💼 Caso real 2: commit malo en producción</strong>

                    <pre className="bg-neutral-900 text-green-400 rounded text-sm font-mono">
                      main ───●──●──● (bug)
                    </pre>

                    <pre><code className="language-bash">
                      git revert HEAD
                    </code></pre>

                    <pre className="bg-neutral-900 text-green-400 rounded text-sm font-mono">
                      main ───●──●──●──● (revert)
                    </pre>

                    <div className="text-sm">
                      ✔ no rompes historial
                      ✔ seguro para equipos
                    </div>
                  </li>

                  {/* <!-- CASO REAL 3 --> */}
                  <li className="my-2">
                    <strong>💼 Caso real 3: quieres rehacer commits</strong>

                    <pre><code className="language-bash">
                      git reset --soft HEAD~1
                    </code></pre>

                    <div className="text-sm">
                      👉 deshace commit pero mantiene cambios
                    </div>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Nada se pierde realmente en Git.
                    </span>

                    <pre className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono">
                      reflog = máquina del tiempo
                    </pre>
                  </li>

                  {/* <!-- DIFERENCIA CLAVE --> */}
                  <li className="my-1.25">
                    <strong>⚖️ Reset vs Revert:</strong>

                    <pre className="bg-neutral-900 text-green-400 p-2 rounded text-sm font-mono">
                      reset  → borra historial (local)
                      revert → crea nuevo commit (seguro)
                    </pre>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Usar reset en remoto ❌</li>
                      <li>No usar reflog ❌</li>
                      <li>Confundir revert con reset ❌</li>
                    </ul>
                  </li>

                </ul>

              </div>

              {/* <!-- STASH ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("stash-git")}>
                <h3 className="flex items-center font-bold">
                  📦 STASH (CAMBIOS TEMPORALES)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["stash-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="stash-git" className={`ml-2.5 ${openBlocks["stash-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- DIAGRAMA --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo:</strong>

                    <pre className="bg-neutral-900 text-green-400 p-3 rounded text-sm font-mono my-2">
                      working dir (cambios)
                      ↓ git stash
                      [ stash guardado ]
                      ↓ git stash pop
                      working dir (recuperado)
                    </pre>
                  </li>

                  {/* <!-- CONCEPTO --> */}
                  <li className="my-1.25">
                    <strong>¿Qué es stash?</strong>
                    <span className="text-sm">
                      Guardar cambios temporales sin hacer commit.
                    </span>
                  </li>

                  {/* <!-- GUARDAR --> */}
                  <li className="my-1.25">
                    <strong>1. Guardar cambios:</strong>
                    <span className="text-sm">
                      Limpia tu working directory.
                    </span>

                    <pre><code className="language-bash">
                      git stash
                      git stash -u   # incluye archivos nuevos
                    </code></pre>
                  </li>

                  {/* <!-- LISTAR --> */}
                  <li className="my-1.25">
                    <strong>2. Ver stash:</strong>
                    <span className="text-sm">
                      Lista de cambios guardados.
                    </span>

                    <pre><code className="language-bash">
                      git stash list
                    </code></pre>
                  </li>

                  {/* <!-- RECUPERAR --> */}
                  <li className="my-1.25">
                    <strong>3. Recuperar cambios:</strong>
                    <span className="text-sm">
                      Aplicar stash guardado.
                    </span>

                    <pre><code className="language-bash">
                      git stash apply   # mantiene stash
                      git stash pop     # aplica y borra
                    </code></pre>
                  </li>

                  {/* <!-- BORRAR --> */}
                  <li className="my-1.25">
                    <strong>4. Borrar stash:</strong>
                    <span className="text-sm">
                      Limpiar lista.
                    </span>

                    <pre><code className="language-bash">
                      git stash drop
                      git stash clear
                    </code></pre>
                  </li>

                  {/* <!-- CASO REAL --> */}
                  <li className="my-2">
                    <strong>💼 Caso real:</strong>

                    <span className="text-sm">
                      Estás trabajando y te piden cambiar de rama urgentemente.
                    </span>

                    <pre><code className="language-bash">
                      git stash
                      git switch main
                      # arreglas bug
                      git switch feature
                      git stash pop
                    </code></pre>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      stash = “guardar sin comprometer”
                    </span>

                    <pre className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono">
                      no commit → stash
                    </pre>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Olvidar stash y perder cambios ❌</li>
                      <li>No usar <code>-u</code> ❌</li>
                      <li>Acumular stash innecesarios ❌</li>
                    </ul>
                  </li>

                </ul>

              </div>

              {/* <!-- WORKFLOW REAL ////////////////////////////////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro"
                onClick={() => toggleBlock("workflow-git")}>
                <h3 className="flex items-center font-bold">
                  🔄 WORKFLOW REAL (DÍA A DÍA)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["workflow-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="workflow-git" className={`ml-2.5 ${openBlocks["workflow-git"] ? "block" : "hidden"}`}>
                <ul className="list-disc ml-5 my-2.5">
                  {/* <!-- DIAGRAMA --> */}
                  <li className="my-2">
                    <strong>🧠 Flujo diario:</strong>

                    <pre className="bg-neutral-900 text-green-400 p-3 rounded text-sm font-mono my-2">
                      mañana:
                      git pull

                      trabajo:
                      edit → add → commit

                      fin:
                      git push
                    </pre>
                  </li>

                  {/* <!-- CASO COMPLETO --> */}
                  <li className="my-2">
                    <strong>💼 Caso real completo:</strong>

                    <pre><code className="language-bash">
                      # 1. empezar el día
                      git pull origin main

                      # 2. crear rama
                      git switch -c feature/login

                      # 3. trabajar
                      git add .
                      git commit -m "feat: login"

                      # 4. subir cambios
                      git push -u origin feature/login

                      # 5. merge (tras revisión)
                      git switch main
                      git pull
                      git merge feature/login

                      # 6. limpiar
                      git branch -d feature/login
                    </code></pre>
                  </li>

                  {/* <!-- VARIANTE EQUIPO --> */}
                  <li className="my-2">
                    <strong>👥 En equipo:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>Trabajas en ramas</li>
                      <li>No tocas main directamente</li>
                      <li>Pull antes de trabajar</li>
                      <li>Push frecuente</li>
                    </ul>
                  </li>

                  {/* <!-- CLAVE --> */}
                  <li className="my-1.25">
                    <strong>🔥 Clave mental:</strong>
                    <span className="text-sm">
                      Git = flujo continuo, no acciones sueltas
                    </span>

                    <pre className="bg-neutral-900 text-blue-400 p-2 rounded text-sm font-mono">
                      pull → trabajar → push
                    </pre>
                  </li>

                  {/* <!-- ERRORES --> */}
                  <li className="my-1.25">
                    <strong>⚠️ Errores típicos:</strong>

                    <ul className="list-disc ml-5 text-sm">
                      <li>No hacer pull al empezar ❌</li>
                      <li>Trabajar en main ❌</li>
                      <li>No subir cambios ❌</li>
                      <li>Commits poco claros ❌</li>
                    </ul>
                  </li>

                </ul>

              </div>

              {/* <!-- GIT (ANTIGUA DOC FO) Guía visual y práctica para principiantes y usuarios ocasionales ///////////////////////////// --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("git")}>
                <h3 className="flex font-bold items-center">
                  GIT(ANTIGUA DOC FO)
                </h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="git" className={`ml-2.5 ${openBlocks["git"] ? "block" : "hidden"}`}>
                <a href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#ch02-git-basics-chapter" className="underline ml-1.5 mb-1.5 inline" target="blank">Repositorio GIT</a> - <a href="https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%c2%bfQu%c3%a9-es-una-rama%3F" className="underline ml-1.5 mb-1.5 inline" target="blank">Ramificaciones en GIT</a>
                <ul className="list-disc ml-5 my-2.5">
                  <li className="my-1.25">
                    <strong>Alias de Git PRO (muy usados):</strong>
                    <p>Copiamos lo siguiente en nuestro terminal una vez:</p>
                    <pre><code className="language-ts">
                      git config --global alias.logall "log --oneline --graph --all --decorate"
                      git config --global alias.lg "log --graph --pretty=format:'%C(auto)%h %d %s %C(black)%C(bold)%cr' --abbrev-commit"
                      git config --global alias.st "status -sb"
                      git config --global alias.co "checkout"
                      git config --global alias.br "branch"
                      git config --global alias.cm "commit -m"
                      git config --global alias.last "log -1 HEAD"
                      git config --global alias.unstage "restore --staged ."
                      git config --global alias.visual "!gitk"
                    </code></pre>

                    <p>Los más útiles suelen ser:</p>
                    <span className="destacado">git lg</span> → historial bonito 🔥<br />
                    <span className="destacado">git st</span> → estado corto<br />
                    <span className="destacado">git logall</span> → el del curso<br />
                    <span className="destacado">git last</span> → último commit
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">Configuraciones iniciales</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Crear alias logall: <span className="destacado">git logall</span></strong>
                        <pre><code className="language-ts">
                          git config --global alias.logall "log --oneline --graph --all --decorate"
                        </code></pre>
                        <div className="text-sm">Luego ya podemos usar <span className="destacado">git logall</span> y nos muestra el historial de forma mas visual:
                          <ul>
                            <li>
                              <p><code>--oneline</code> → resumen corto de commits
                              </p>
                            </li>
                            <li>
                              <p><code>--graph</code> → dibuja el árbol de ramas
                              </p>
                            </li>
                            <li>
                              <p><code>--all</code> → muestra todas las ramas</p>
                            </li>
                            <li>
                              <p><code>--decorate</code> → enseña etiquetas
                                (HEAD, branches, etc.)</p>
                            </li>
                          </ul>
                        </div>
                        <pre><code className="language-ts">
                          <p>Git abre un visor llamado pager (normalmente less). Por eso se ve esto abajo 👉(END)</p>
                        </code></pre>
                        controles básicos:
                        q → salir<br />
                        ↑ / ↓ → moverte<br />
                        space → bajar rápido<br />
                        b → subir<br />
                        /texto → buscar
                      </li>
                      <li className="my-1.25">
                        <strong>git log ultra visual tipo árbol bonito con colores pro: <span className="destacado">git log</span></strong>
                        <pre><code className="language-ts">
                          git config --global alias.lg "log --graph --all --decorate --pretty=format:'%C(auto)%h %d %s %C(black)%C(bold)%cr %C(blue)&lt;%an&gt;'"
                        </code></pre>
                        <div className="text-sm">Luego ya podemos usar <span className="destacado">git log</span> y nos muestra el historial viendo cosas como:
                          <pre><code className="language-ts">
                            * a1b2c3d (HEAD -&amp;gt; main) añade login hace 2 horas &lt;Agustin&gt;
                            * 9f8e7d6 fix bug navbar hace 1 día &lt;Agustin&gt;
                            * 123abcd primer commit hace 3 días &lt;Agustin&gt;
                          </code></pre>
                          <p>y con ramas:</p>
                          <pre><code className="language-ts">
                            *   a1b2c3d (HEAD -&gt; main) merge branch feature/login
                            |\
                            | * 9f8e7d6 (feature/login) añade login
                            |/
                            * 123abcd init
                          </code></pre>
                          significando:
                          * → commits <br />
                          líneas (| \ /) → ramas<br />
                          HEAD -&gt; main → dónde estás<br />
                          hash corto (a1b2c3d) → id del commit<br />
                          mensaje → lo que escribiste<br />
                          tiempo → hace cuánto<br />
                          autor → quién lo hizo
                        </div>
                      </li>
                      <li className="my-1.25">
                        <strong>Alias ULTRA visual (estilo GitHub): <span className="destacado">git gg</span></strong>
                        <pre ><code className="language-ts">
                          git config --global alias.gg "log --graph --all --decorate --date=relative --pretty=format:'%C(auto)%h%C(reset) %C(bold blue)%an%C(reset) %C(dim white)- %ar%C(reset)%C(auto)%d%C(reset)%n%C(white)%s%C(reset)%n'"
                        </code></pre>
                        <span className="destacado">git gg</span>
                        <pre><code className="language-ts">
                          * a1b2c3d Agustin - hace 2 horas (HEAD -&gt; main)
                          añade login con validación

                          * 9f8e7d6 Agustin - hace 1 día
                          fix error en navbar

                          * 123abcd Agustin - hace 3 días
                          primer commit
                        </code></pre>
                        <div className="text-sm">Explicacion</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Colores mejorados en Git:</strong>
                        <pre><code className="language-ts">
                          git config --global color.ui auto
                          git config --global color.branch auto
                          git config --global color.diff auto
                          git config --global color.status auto
                        </code></pre>
                      </li>
                      <li className="my-1.25">
                        <strong>Alias corto para el día a día: <span className="destacado">git l</span>   </strong>
                        <pre><code className="language-ts">git config --global alias.l "log --oneline --graph --decorate --all"</code></pre>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- GIT: Guía visual y práctica para principiantes y usuarios ocasionales --> */}

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">INICIAR Y CONFIGURAR REPOSITORIO</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Inicializar repositorio en un directorio existente:</strong>
                        <span className="destacado">git init</span>
                        <pre><code className="language-ts">
                          cd C:/Users/user/my_project
                          git init
                        </code></pre>
                        <div className="text-sm">Crea la carpeta .git con toda la estructura interna de Git. ¡Todavía no se rastrea ningún archivo!</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Clonar un repositorio existente:</strong>
                        <span className="destacado">git clone https://github.com/USERNAME/REPO.git</span>
                        <pre><code className="language-ts">
                          git clone https://github.com/libgit2/libgit2
                          git clone https://github.com/libgit2/libgit2 mylibgit
                        </code></pre>
                        <div className="text-sm">Descarga el historial y todos los archivos del repositorio remoto en un nuevo directorio.</div>
                        <img className="mx-auto my-2" src="./src/assets/img/git-clone.png" alt="img" loading="lazy" />
                      </li>
                      <li className="my-1.25">
                        <strong>Ignorar archivos:</strong>
                        <span className="destacado">.gitignore</span>
                        <pre><code className="language-ts">
                          # ignore all .a files
                          *.a

                          # but do track lib.a, even though you're ignoring .a files above
                          !lib.a

                          # only ignore the TODO file in the current directory, not subdir/TODO
                          /TODO

                          # ignore all files in any directory named build
                          build/

                          # ignore doc/notes.txt, but not doc/server/arch.txt
                          doc/*.txt

                          # ignore all .pdf files in the doc/ directory and any of its subdirectories
                          doc/**/*.pdf
                        </code></pre>
                        <div className="text-sm">Usa <span className="destacado">cat .gitignore</span> para ver patrones. Más ejemplos en <a href="https://github.com/github/gitignore" target="_blank" className="underline">github/gitignore</a></div>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">SEGUIMIENTO Y GESTIÓN DE ARCHIVOS</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Preparar archivos para commit:</strong> <span className="destacado">git add archivo.txt</span> <span className="destacado">git add .</span>
                        <pre><code className="language-ts">
                          git add archivo.txt
                          git add .
                        </code></pre>
                        <div className="text-sm">Rastrea archivos nuevos o modifica su estado para el próximo commit.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Comprobar el estado de los archivos:</strong> <span className="destacado">git status</span> <span className="destacado">git status -s</span>
                        <pre><code className="language-ts">
                          git status
                          git status -s
                        </code></pre>
                        <div className="text-sm">Muestra archivos modificados, nuevos o eliminados, y en qué rama estás.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Visualizar cambios no preparados/preparados:</strong>
                        <span className="destacado">git diff</span> <span className="destacado">git diff --staged</span>
                        <pre><code className="language-ts">
                          git diff
                          git diff --staged
                        </code></pre>
                        <div className="text-sm">Muestra diferencias entre archivos modificados y los preparados para commit.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Commit: registrar cambios en el historial:</strong>
                        <span className="destacado">git commit -m "mensaje"</span>
                        <span className="destacado">git commit -v</span>
                        <span className="destacado">git commit -a -m "mensaje"</span>
                        <pre><code className="language-ts">
                          git commit -m "detalles del commit"
                          git commit -a -m "commit sin preparar archivos nuevos"
                        </code></pre>
                        <div className="text-sm">
                          <strong>Importante:</strong> Solo se incluye lo preparado con <span className="destacado">git add</span>. <br />
                          <strong>-a</strong> omite el área de preparación e incluye los archivos modificados pero no nuevos.
                        </div>
                      </li>
                      <li className="my-1.25">
                        <strong>Eliminar archivos:</strong>
                        <span className="destacado">git rm archivo.txt</span>
                        <span className="destacado">git rm --cached archivo.txt</span>
                        <pre><code className="language-ts">
                          rm archivo.txt
                          git rm archivo.txt
                          git rm --cached archivo.txt
                        </code></pre>
                        <div className="text-sm">Elimina archivos del seguimiento. <span className="destacado">--cached</span> los mantiene en el disco pero no en Git.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Mover/renombrar archivos:</strong>
                        <span className="destacado">git mv file_from file_to</span>
                        <pre><code className="language-ts">
                          git mv README.md README
                        </code></pre>
                        <div className="text-sm">Equivale a <span className="destacado">mv</span>, <span className="destacado">git rm</span> y <span className="destacado">git add</span> en uno solo.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Ver historial de commits:</strong>
                        <span className="destacado">git log --pretty=oneline</span>
                        <pre><code className="language-ts">
                          git log
                          git log --oneline
                          git log --pretty=oneline
                        </code></pre>
                      </li>
                      <li className="my-1.25">
                        <strong>Restablecer el historial al commit deseado:</strong>
                        <span className="destacado">git reset --hard HASH</span>
                        <pre><code className="language-ts">
                          git reset --hard c0e55bcbd94bed986b3e2b736040d2917ac073dd
                        </code></pre>
                        <div className="text-sm">¡Ojo! Pierdes los cambios posteriores al commit indicado.</div>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">SINCRONIZACIÓN, BACKUP LOCAL, CONFLICTOS Y MENSAJES CLAROS</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Mantener tu segundo equipo (PC2) sincronizado con el repositorio remoto:</strong>
                        <span className="destacado">git pull origin main</span>
                        <div className="text-sm mt-1.25">
                          Hazlo antes de comenzar a trabajar cada día para tener la última versión del proyecto en tu equipo secundario.
                        </div>
                      </li>

                      <li className="my-1.25">
                        <strong>Ver tus commits locales que no están en remoto:</strong>
                        <span className="destacado">git log origin/main..HEAD --oneline</span>
                        <div className="text-sm mt-1.25">
                          Verás los commits que tienes localmente y no han sido subidos a GitHub.
                        </div>
                      </li>

                      <li className="my-1.25">
                        <strong>Guardar tus cambios antes de un reset forzado:</strong>
                        <ul className="list-disc ml-5">
                          <li className="my-1.25">
                            <span className="destacado">Crear una rama de respaldo:</span>
                            <pre><code className="language-ts">
                              git checkout -b respaldo-cambios-locales
                              git push origin respaldo-cambios-locales
                            </code></pre>
                            <span className="text-sm">Tus commits quedan guardados en esa rama en GitHub.</span>
                          </li>
                          <li className="my-1.25">
                            <span className="destacado">Crear un parche (backup offline):</span>
                            <pre><code className="language-ts">
                              git format-patch origin/main..HEAD -o ./parches-locales
                              git am ./parches-locales/*.patch
                            </code></pre>
                            <span className="text-sm">Crea archivos <code>.patch</code> para cada commit. Puedes recuperarlos después con <span className="destacado">git am</span>.</span>
                          </li>
                        </ul>
                      </li>

                      <li className="my-1.25">
                        <strong>Resetear tu rama y dejarla igual que el remoto:</strong>
                        <pre><code className="language-ts">
                          git fetch origin
                          git reset --hard origin/main
                        </code></pre>
                        <span className="text-sm text-gray-500">¡Ojo! Esto borra los commits locales. Guarda tus cambios importantes antes.</span>
                      </li>

                      <li className="my-1.25">
                        <strong>Guía para resolver conflictos de merge:</strong>
                        <ul className="list-disc ml-5">
                          <li className="my-1.25">
                            <span className="destacado">Detecta los archivos en conflicto:</span>
                            <span className="destacado">git status</span>
                          </li>
                          <li className="my-1.25">
                            <span className="destacado">Edita manualmente los archivos marcados por Git</span>, buscando las marcas <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; [other branch]</code>. Decide qué partes conservar y guarda los archivos.
                          </li>
                          <li className="my-1.25">
                            <span className="destacado">Marca los conflictos como resueltos:</span>
                            <span className="destacado">git add archivo-en-conflicto.ext</span>
                          </li>
                          <li className="my-1.25">
                            <span className="destacado">Finaliza el merge con un commit:</span>
                            <span className="destacado">git commit</span>
                          </li>
                          <li className="my-1.25">
                            <span className="destacado">Continúa trabajando normalmente.</span> Usa <span className="destacado">git log</span> para ver el historial y <span className="destacado">git diff</span> para ver los cambios.
                          </li>
                        </ul>
                      </li>

                      <li className="my-1.25">
                        <strong>Ejemplo visual: Pantalla de edición de mensaje de merge commit (Vim)</strong>
                        <img className="mx-auto my-2" src="./src/assets/img/git-merge-commit-vim.png" alt="img merge commit vim" loading="lazy" />
                        <ul className="list-disc ml-5">
                          <li className="my-1.25">Escribe el mensaje (puedes dejar el que viene por defecto).</li>
                          <li className="my-1.25">Las líneas que empiezan por <span className="destacado">#</span> son comentarios y se ignoran.</li>
                          <li className="my-1.25"><strong>En Vim:</strong>
                            <ul className="list-disc ml-5">
                              <li className="my-1.25">Pulsa <span className="destacado">i</span> para entrar en modo edición (INSERT).</li>
                              <li className="my-1.25">Escribe tu mensaje o edítalo.</li>
                              <li className="my-1.25">Pulsa <span className="destacado">Esc</span> para salir de INSERT.</li>
                              <li className="my-1.25">Escribe <span className="destacado">:wq</span> y pulsa Enter para guardar y salir.</li>
                            </ul>
                          </li>
                          <li className="my-1.25"><strong>En Nano:</strong>
                            <ul className="list-disc ml-5">
                              <li className="my-1.25">Escribe el mensaje directamente.</li>
                              <li className="my-1.25">Pulsa <span className="destacado">Ctrl+O</span> para guardar. Enter.</li>
                              <li className="my-1.25">Pulsa <span className="destacado">Ctrl+X</span> para salir.</li>
                            </ul>
                          </li>
                          <li className="my-1.25">Para abortar el merge commit sin guardar:
                            <ul className="list-disc ml-5">
                              <li className="my-1.25">En Vim: <span className="destacado">:q!</span> y Enter</li>
                              <li className="my-1.25">En Nano: <span className="destacado">Ctrl+X</span>, responde N si pregunta por guardar</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="my-1.25">
                        <strong>Plantillas para mensajes de commit claros:</strong>
                        <pre><code className="language-ts">
                          git commit -m "fix: corrige error en validación de usuario"
                          git commit -m "feat: añade función para exportar reportes a PDF"
                          git commit -m "refactor: simplifica lógica de manejo de estados"
                          git commit -m "docs: actualiza README con nuevas instrucciones"
                          git commit -m "chore: actualiza dependencias"
                        </code></pre>
                        <div className="text-sm mt-1.25">
                          <strong>Consejos:</strong> Usa prefijos como <span className="destacado">feat</span> (nueva funcionalidad), <span className="destacado">fix</span> (corrección de error), <span className="destacado">docs</span> (documentación), <span className="destacado">refactor</span> (reorganización interna), <span className="destacado">chore</span> (tareas menores).
                          <br />Describe el cambio concreto y evita mensajes genéricos como "update" o "cambios varios".
                        </div>
                      </li>
                      <li className="my-1.25">
                        <strong>Visual extra: Ciclo de vida de los archivos en Git:</strong>
                        <img className="mx-auto my-2" src="./src/assets/img/git-ciclo-vida-estado-archivos.png" alt="img ciclo vida git" loading="lazy" />
                        <div className="text-sm mt-1.25">
                          La imagen ilustra cómo los archivos pasan de no rastreados, a rastreados, a modificados y preparados para commit.
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">TRABAJO CON RAMAS</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25"><strong>Consultar ramas locales/remotas:</strong> <span className="destacado">git branch</span> <span className="destacado">git branch -a</span></li>
                      <li className="my-1.25"><strong>Ver a dónde apunta cada rama:</strong> <span className="destacado">git log</span></li>
                      <li className="my-1.25"><strong>Crear nueva rama:</strong> <span className="destacado">git branch nombre_rama</span></li>
                      <li className="my-1.25"><strong>Cambiarse a una rama:</strong> <span className="destacado">git checkout nombre_rama</span></li>
                      <li className="my-1.25"><strong>Eliminar una rama:</strong> <span className="destacado">git branch -d nombre_rama</span> <span className="destacado">git branch -D nombre_rama</span></li>
                      <li className="my-1.25"><strong>Eliminar rama remota:</strong> <span className="destacado">git push origin :nombre_rama</span></li>
                      <li className="my-1.25"><strong>Configurar rama para seguimiento remoto:</strong>
                        <span className="destacado">git push --set-upstream origin nombre_rama</span>
                        <span className="destacado">git push -u origin nombre_rama</span>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">OBTENER Y ACTUALIZAR CAMBIOS DEL REMOTO</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25"><strong>Clonar repositorio:</strong> <span className="destacado">git clone https://github.com/USERNAME/REPO.git</span></li>
                      <li className="my-1.25"><strong>Extraer cambios sin mezclar:</strong> <span className="destacado">git fetch REMOTE-NAME</span>
                        <pre><code className="language-ts">
                          git fetch origin
                        </code></pre>
                        <div className="text-sm">Descarga cambios remotos, pero no los mezcla en tu rama actual.</div>
                      </li>
                      <li className="my-1.25"><strong>Fusionar cambios en tu rama local:</strong> <span className="destacado">git merge REMOTE-NAME/BRANCH-NAME</span>
                        <pre><code className="language-ts">
                          git merge origin/main
                        </code></pre>
                      </li>
                      <li className="my-1.25"><strong>Extraer y fusionar en un paso:</strong> <span className="destacado">git pull REMOTE-NAME BRANCH-NAME</span>
                        <pre><code className="language-ts">
                          git pull origin main
                        </code></pre>
                        <div className="text-sm">Descarga y mezcla los cambios remotos en tu rama local.</div>
                      </li>
                      <li className="my-1.25"><strong>Abortar un merge conflictivo:</strong> <span className="destacado">git merge --abort</span></li>
                      <li className="my-1.25"><strong>Permitir combinar historiales sin ancestro común:</strong> <span className="destacado">git pull origin main --allow-unrelated-histories</span></li>
                      <li className="my-1.25"><strong>Herramienta visual para merges:</strong> <span className="destacado">git mergetool</span></li>
                      <li className="my-1.25"><strong>Guardar cambios sin confirmar temporalmente:</strong> <span className="destacado">git stash</span> <span className="destacado">git stash save</span></li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">FORZAR HISTORIAL Y RECUPERAR ESTADO</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Forzar el historial (force push) para restablecer un commit:</strong>
                        <span className="destacado">git checkout main</span>
                        <span className="destacado">git reset --hard HASH_COMMIT</span>
                        <span className="destacado">git push origin main --force</span>
                        <pre><code className="language-ts">
                          git checkout main
                          git reset --hard db8XXXXXX
                          git push origin main --force
                        </code></pre>
                        <div className="text-sm">Utiliza con precaución. El historial remoto será sobrescrito por el local.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Recuperar estado tras un forced update:</strong>
                        <span className="destacado">git fetch origin</span>
                        <span className="destacado">git reset --hard origin/main</span>
                        <span className="destacado">git pull origin main --allow-unrelated-histories</span>
                        <span className="destacado">git stash</span>
                        <span className="destacado">git checkout -b backup-mis-cambios</span>
                        <span className="destacado">git push -f origin nombre_rama</span>
                        <div className="text-sm">Permite igualar tu repo local al remoto, combinar historiales o guardar cambios antes de sobrescribir.</div>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">MENSAJES DE COMMIT CLAROS Y BUENAS PRÁCTICAS</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Ejemplos de mensajes claros:</strong>
                        <pre><code className="language-ts">
                          git commit -m "fix: corrige error en validación de usuario"
                          git commit -m "feat: añade función para exportar reportes a PDF"
                          git commit -m "refactor: simplifica lógica de manejo de estados"
                          git commit -m "docs: actualiza README con nuevas instrucciones"
                          git commit -m "chore: actualiza dependencias"
                        </code></pre>
                        <div className="text-sm">
                          Usa prefijos:<br />
                          <span className="destacado">feat</span> (nueva funcionalidad)
                          <span className="destacado">fix</span> (corrección de error)
                          <span className="destacado">docs</span> (documentación)
                          <span className="destacado">refactor</span> (reorganización interna)
                          <span className="destacado">chore</span> (tareas menores)<br />
                          Evita mensajes genéricos como "update" o "cambios varios".
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">RESOLUCIÓN DE CONFLICTOS Y MERGE COMMIT</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Guía para resolver conflictos de merge:</strong>
                        <ul className="list-disc ml-5">
                          <li className="my-1.25"><span className="destacado">git status</span> - Detecta archivos en conflicto.</li>
                          <li className="my-1.25">Edita manualmente los archivos marcados por Git: busca <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; [other branch]</code>. Decide qué partes conservar y guarda.</li>
                          <li className="my-1.25"><span className="destacado">git add archivo-en-conflicto.ext</span> - Marca como resuelto.</li>
                          <li className="my-1.25"><span className="destacado">git commit</span> - Finaliza el merge.</li>
                          <li className="my-1.25">Si necesitas abortar: <span className="destacado">git merge --abort</span></li>
                          <li className="my-1.25">Herramienta visual: <span className="destacado">git mergetool</span></li>
                        </ul>
                      </li>
                      <li className="my-1.25">
                        <strong>Ejemplo visual: Pantalla de edición de mensaje de merge commit (Vim)</strong>
                        <img className="mx-auto my-2" src="./src/assets/img/git-merge-commit-vim.png" alt="img merge commit vim" loading="lazy" />
                        <ul className="list-disc ml-5">
                          <li>Escribe el mensaje (puedes dejar el que viene por defecto).</li>
                          <li>Las líneas que empiezan por <span className="destacado">#</span> son comentarios y se ignoran.</li>
                          <li><strong>En Vim:</strong>
                            <ul className="list-disc ml-5">
                              <li>Pulsa <span className="destacado">i</span> para entrar en modo edición (INSERT).</li>
                              <li>Escribe tu mensaje o edítalo.</li>
                              <li>Pulsa <span className="destacado">Esc</span> para salir de INSERT.</li>
                              <li>Escribe <span className="destacado">:wq</span> y pulsa Enter para guardar y salir.</li>
                            </ul>
                          </li>
                          <li><strong>En Nano:</strong>
                            <ul className="list-disc ml-5">
                              <li>Escribe el mensaje directamente.</li>
                              <li>Pulsa <span className="destacado">Ctrl+O</span> para guardar. Enter.</li>
                              <li>Pulsa <span className="destacado">Ctrl+X</span> para salir.</li>
                            </ul>
                          </li>
                          <li>Abortar el merge commit sin guardar:
                            <ul className="list-disc ml-5">
                              <li>En Vim: <span className="destacado">:q!</span> y Enter</li>
                              <li>En Nano: <span className="destacado">Ctrl+X</span>, responde N si pregunta por guardar</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="my-1.25">
                        <strong>Ciclo de vida de los archivos en Git:</strong>
                        <img className="mx-auto my-2" src="./src/assets/img/git-ciclo-vida-estado-archivos.png" alt="img ciclo vida git" loading="lazy" />
                        <div className="text-sm">La imagen ilustra cómo los archivos pasan de no rastreados, a rastreados, a modificados y preparados para commit.</div>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">RECUPERACIÓN DE DATOS Y MANTENIMIENTO</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Reflog: Recupera referencias perdidas (por ejemplo, commits borrados por error):</strong>
                        <span className="destacado">git reflog</span>
                        <pre><code className="language-ts">
                          git reflog
                          git checkout HEAD@{2}
                        </code></pre>
                        <div className="text-sm">Permite ver y recuperar estados anteriores incluso si fueron borrados del historial.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Recuperar archivos eliminados accidentalmente:</strong>
                        <span className="destacado">git checkout HEAD archivo.txt</span>
                        <pre><code className="language-ts">
                          git checkout HEAD archivo.txt
                        </code></pre>
                        <div className="text-sm">Recupera el archivo desde la última confirmación.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Limpieza de archivos sin seguimiento:</strong>
                        <span className="destacado">git clean -n</span> <span className="destacado">git clean -f</span>
                        <pre><code className="language-ts">
                          git clean -n  # muestra lo que se eliminaría
                          git clean -f  # elimina realmente los archivos
                        </code></pre>
                        <div className="text-sm">Útil para limpiar archivos generados, temporales o basura.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Reparar repositorio corrupto:</strong>
                        <span className="destacado">git fsck</span> <span className="destacado">git gc</span>
                        <pre><code className="language-ts">
                          git fsck  # verifica la integridad
                          git gc    # optimiza y compacta el repositorio
                        </code></pre>
                      </li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">GESTIÓN DE TAGS Y VERSIONES</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25"><strong>Listar todos los tags:</strong> <span className="destacado">git tag</span></li>
                      <li className="my-1.25"><strong>Crear un tag anotado:</strong> <span className="destacado">git tag -a v1.0 -m "Versión 1.0"</span></li>
                      <li className="my-1.25"><strong>Subir los tags al remoto:</strong> <span className="destacado">git push origin --tags</span></li>
                      <li className="my-1.25"><strong>Eliminar un tag local y remoto:</strong>
                        <span className="destacado">git tag -d v1.0</span>
                        <span className="destacado">git push origin :refs/tags/v1.0</span>
                      </li>
                      <li className="my-1.25"><strong>Ver detalles de un tag:</strong> <span className="destacado">git show v1.0</span></li>
                      <li className="my-1.25"><strong>Checkout de un tag:</strong> <span className="destacado">git checkout v1.0</span></li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">SUBMÓDULOS: INTEGRAR OTROS REPOSITORIOS</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25"><strong>Añadir un submódulo:</strong>
                        <span className="destacado">git submodule add https://github.com/usuario/proyecto-rama carpeta/submodulo</span>
                      </li>
                      <li className="my-1.25"><strong>Inicializar submódulos:</strong> <span className="destacado">git submodule init</span></li>
                      <li className="my-1.25"><strong>Actualizar submódulos:</strong> <span className="destacado">git submodule update</span></li>
                      <li className="my-1.25"><strong>Clonar un repositorio con submódulos:</strong> <span className="destacado">git clone --recursive URL</span></li>
                    </ul>
                  </li>

                  <li className="mb-1.25 border-l-2 border-l-black pl-1.25 bg-gray-100">
                    <span className="bg-black text-white">CONFIGURACIÓN AVANZADA Y INTEGRACIÓN CON GITHUB</span>
                    <ul className="list-disc ml-5">
                      <li className="my-1.25">
                        <strong>Configurar nombre y email global:</strong>
                        <span className="destacado">git config --global user.name "Tu Nombre"</span>
                        <span className="destacado">git config --global user.email "tu@email.com"</span>
                      </li>
                      <li className="my-1.25">
                        <strong>Ver configuración actual:</strong>
                        <span className="destacado">git config --list</span>
                      </li>
                      <li className="my-1.25">
                        <strong>Cambiar el editor por defecto (por ejemplo, a nano):</strong>
                        <span className="destacado">git config --global core.editor "nano"</span>
                      </li>
                      <li className="my-1.25">
                        <strong>Autenticación avanzada (SSH):</strong>
                        <span className="destacado">ssh-keygen -t ed25519 -C "tu@email.com"</span>
                        <span className="destacado">cat ~/.ssh/id_ed25519.pub</span> (para copiar la clave pública)
                        <span className="destacado">eval $(ssh-agent -s)</span>
                        <span className="destacado">ssh-add ~/.ssh/id_ed25519</span>
                        <div className="text-sm">Agrega la clave pública en GitHub desde la configuración de usuario.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Integrar con GitHub Desktop:</strong>
                        <span className="destacado">Descarga: <a href="https://desktop.github.com/" target="_blank">GitHub Desktop</a></span>
                        <div className="text-sm">Permite gestionar repositorios de forma visual y sencilla.</div>
                      </li>
                      <li className="my-1.25">
                        <strong>Acciones útiles de integración:</strong>
                        <span className="destacado">git remote -v</span> (ver remotos)
                        <span className="destacado">git remote add origin URL</span> (añadir remoto)
                        <span className="destacado">git remote set-url origin URL</span> (cambiar URL remoto)
                        <span className="destacado">git pull --rebase origin main</span> (sin merge commit)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <!-- Explicación y pasos repositorio GIT (mas completo el anterior)--> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("tutorial-git")}>
                <h3>Explicación y pasos repositorio GIT (mas completo el anterior)</h3>
               <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["tutorial-git"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="tutorial-git" className={`ml-2.5 ${openBlocks["tutorial-git"] ? "block" : "hidden"}`}>
                <a className="underline text-black" href="https://www.atlassian.com/es/git/tutorials/setting-up-a-repository" target="_blank">Explicación y pasos repositorio Git</a>
                <ul className="my-3.5">
                  <li className="my-3.5"><span className="destacado">Para crear un nuevo repositorio</span>, usa el comando git init. <strong>git init</strong> es un comando que se utiliza una sola vez durante la configuración inicial de un repositorio nuevo. Al ejecutar este comando, se creará un nuevo subdirectorio .git en tu directorio de trabajo actual. También se creará una nueva rama principal.
                    <pre><code className="language-js">
                      cd /path/to/your/existing/code
                      git init
                    </code></pre>
                  </li>

                  <li className="my-3.5"><span className="destacado">Para clonar un repositorio existente</span>, usa el comando <strong>git clone</strong>. Si un repositorio ya se ha configurado en un repositorio central, el comando de clonación es la manera más común de obtener una copia de desarrollo local. Igual que git init, la clonación suele ser una operación única. Una vez que un desarrollador ha obtenido una copia de trabajo, todas las operaciones de control de versiones se administran por medio de su repositorio local.
                    <pre><code className="language-js">
                      git clone &lt;repo url&gt;
                    </code></pre>

                    <p><strong>El comando git clone se usa para crear una copia o clonar un repositorio remoto</strong>. Se utiliza git clone con la URL de un repositorio. Git es compatible con varios protocolos de red y sus formatos de URL correspondientes. En este ejemplo, usaremos el protocolo Git SSH. Las URL Git SSH siguen la siguiente estructura: git@HOSTNAME:USERNAME/REPONAME.git.</p>

                    <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">

                      <div className="flex flex-col">
                        <svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                        </svg> Un ejemplo de una URL Git SSH sería el siguiente: git@bitbucket.org:rhyolight/javascript-data-store.git, donde los valores de la plantilla equivalen a:
                        <ul className="list-disc ml-3 bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]">
                          <li>HOSTNAME: bitbucket.org</li>
                          <li>USERNAME: rhyolight</li>
                          <li>REPONAME: javascript-data-store</li>
                        </ul>
                        <p>Al ejecutarlo, se extraerá la última versión de los archivos del repositorio remoto en la rama principal y se añadirá a una nueva carpeta. Esta carpeta nueva tendrá el mismo nombre que el repositorio (REPONAME), en este caso, javascript-data-store. La carpeta contendrá el historial completo del repositorio remoto y una rama principal recién creada.</p>
                      </div>
                    </div>
                  </li>

                  <li className="my-3.5"><span className="destacado">Para guardar cambios en el repositorio:</span> <strong>git add y git commit</strong>
                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Ahora que has iniciado o clonado un repositorio, puedes realizar commits en la versión del archivo. Para el siguiente ejemplo asumiremos que has configurado un proyecto en /path/to/project. Los pasos son los siguientes:</p>

                    <ul className="list-disc ml-3">
                      <li>Cambia el directorio a /path/to/project</li>
                      <li>Crea un archivo nuevo CommitTest.txt con el contenido "test content for git tutorial"</li>
                      <li>Ejecuta el comando git add para añadir CommitTest.txt al área de preparación del repositorio</li>
                      <li>Crea un commit nuevo con un mensaje que describa qué trabajo se ha hecho en el commit</li>
                    </ul>
                    <pre><code className="language-js">
                      cd /path/to/project
                      echo "test content for git tutorial" &gt;&gt; CommitTest.txt
                      git add CommitTest.txt
                      git commit -m "added CommitTest.txt to the repo"
                    </code></pre>

                    <p>Tras hacer esto, en el historial de nuestro repositorio se mostrará <strong>CommitTest.txt</strong> y se realizará el seguimiento de las actualizaciones futuras a este archivo.</p>

                    <p>El comando <strong>git add se suele usar con la opción --all</strong>. Al ejecutar git add --all, se añadirán todos los archivos con cambios y sin seguimiento al repositorio y se actualizará el árbol de trabajo.</p>
                  </li>

                  <li className="my-3.5"><span className="destacado">Para colaboración entre repositorios:</span> <strong>git push</strong>

                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Es importante comprender que la idea de "copia de trabajo" de Git es muy distinta a la copia de trabajo que se obtiene al extraer código fuente de un repositorio SVN. A diferencia de SVN, Git no distingue entre las copias de trabajo y el repositorio central: todos son repositorios Git completos.</p>
                    <p>Por tanto, colaborar con Git es intrínsecamente distinto que con SVN. Mientras que SVN depende de la relación entre el repositorio central y la copia de trabajo, <strong>el modelo de colaboración de Git se basa en la interacción entre repositorios. En lugar de insertar una copia de trabajo en el repositorio central de SVN, se extraen o envían commits de un repositorio a otro</strong>.</p>

                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Por supuesto, nada te impide dar un significado especial a ciertos repositorios Git. Por ejemplo, con solo definir un repositorio de Git como el "central", es posible replicar un workflow centralizado usando Git. Esto se consigue por medio de convenciones, no porque esté integrado en el propio VCS.</p>
                  </li>

                  <li className="my-3.5"><span className="destacado">Repositorios bare (vacíos) frente a repositorios clonados</span>
                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Si en la sección anterior, "Inicio de un nuevo repositorio", has usado <strong>git clone</strong> para configurar tu repositorio local, entonces ya está listo para la colaboración remota. El comando <strong>git clone</strong> configura automáticamente el repositorio con un remote que apunta a la URL Git de donde lo has clonado. Esto significa que, una vez hagas cambios en un archivo y lo confirmes, puedes enviar los cambios al repositorio remoto con <strong>git push</strong>.</p>

                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Si has usado el comando <strong>git init</strong> para crear un repositorio nuevo, entonces no tendrás ningún repositorio remoto al cual enviar cambios. Un patrón común a la hora de iniciar un nuevo repositorio es ir a un servicio Git alojado, como Bitbucket, y crear un repositorio ahí. El servicio te proporcionará una URL Git que podrás añadir a tu repositorio de Git local y enviar con <strong>git push</strong> al repositorio alojado. <span className="destacado">Una vez que hayas creado un repositorio remoto con el servicio de tu elección, deberás actualizar tu repositorio local con una asignación. Comentaremos este proceso en la guía de ajustes y configuración que hay más adelante.</span></p>

                    <p><svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                    </svg>Si prefieres alojar tu propio repositorio remoto, deberás configurar un "repositorio bare". Tanto <strong>git init</strong> como <strong>git clone</strong> aceptan el argumento <strong>--bare</strong>. Un repositorio bare se suele usar para crear un repositorio central de Git remoto.</p>
                  </li>

                  <li className="my-3.5"><span className="destacado">Para ajustes y configuración:</span> <strong>git config</strong> PENDIENTE DE SEGUIR LINK Y QUE FUNCIONE</li>
                </ul>
              </div>

              {/* <!-- Respaldo git de web smmdd 16-02-25 --> */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("web-smmdd")}>
                <h3>Respaldo git de web smmdd 16-02-25</h3>
                <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["web-smmdd"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="web-smmdd" className={`ml-2.5 ${openBlocks["web-smmdd"] ? "block" : "hidden"}`}>
                <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
                  <div className="flex flex-col">
                    - Creo repositorio privado https://github.com/an.....5/websmmdd<br />
                    - Como hay un límite de espacio en github, creo en el raíz de mi carpeta local un .gitignore donde incluyo carpetas como documentos, flip-book, temp,... (solo quiero - subir las versiones últimas funcionales de los htmls, phps...pero SOBRE TODO LOS JS DE LECTURAS Y CALENDARIO LITURGICO PARA TENER ALMACENADAS VERSIONES OPERATIVAS ANTE POSIBLE FALLO)<br />
                    - me situo en la terminal en mi carpeta local C:\Users\XXXXXXXX\OneDrive\Webs\Web SMMDD<br />
                    - desde el terminal de VSC:<br />
                    - git init<br />
                    -  git add .<br />
                    - git commit -m "first commit"<br />
                    - git branch -M main<br />
                    - git remote add origin https://github.com/an.....5/websmmdd.git<br />
                    - git push -u origin main<br />
                    <span className="bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]">A partir de ahora su quiero <strong>innovar, probar, cambiar </strong>algo en js de lecturas, arranco mi local server con xamp y cuando esté seguro de que funciona el cambio:</span>
                    <ul>
                      <li>respaldo cambio de mi repo local en mi repo github</li>
                      <li>subo con dw al hosting de la parro</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>


            {/* <!-- PROYECTOS ///////////////////////////////////////////////////////////// --> */}
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <p className="flex items-center">
                <span className="naranja">Proyectos</span>
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
              </p>
              <div className="flex flex-wrap items-center">

                {/* <!-- Listado de proyectos --> */}
                <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("listado-proyectos")}>
                  <h3>Listado de proyectos</h3>
                   <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["listado-proyectos"] ? "rotate-180" : ""
                  }`}
                >▼</span>
                </div>
                <div id="listado-proyectos" className={`ml-2.5 ${openBlocks["listado-proyectos"] ? "block" : "hidden"}`}>
                  <div className="flex w-[100%]"></div>
                  <a href="https://github.com/an.....5/diario" className="underline mx-1.5" target="blank">https://github.com/an.....5/diario</a>
                  <div className="flex w-[100%]"></div>
                  <a href="https://manual-xxxxx.netlify.app/" className="underline mx-1.5" target="blank">https://manual-xxxxx.netlify.app/</a> -
                  <a href="https://an.....5.github.io/manual-xxxxx/" className="underline mx-1.5" target="blank">https://an.....5.github.io/manual-xxxxx/</a>
                  <div className="flex w-[100%]"></div>

                  <a href="https://portfolioXXX.netlify.app/" className="underline mx-1.5 text-red-600" target="blank">https://portfolioXXX.netlify.app/</a> -
                  <a href="https://an.....5.github.io/portfolio-XXX/" className="underline mx-1.5" target="blank">https://an.....5.github.io/portfolio-XXX/</a>
                  <div className="flex w-[100%]"></div>
                  <a href="https://XXX-calory-tracker.netlify.app/" className="underline mx-1.5" target="blank">https://XXX-calory-tracker.netlify.app/</a> -
                  <a href="https://an.....5.github.io/calory-tracker/" className="underline mx-1.5" target="blank">https://an.....5.github.io/calory-tracker/</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="https://calcula-propinas.netlify.app/" className="underline mx-1.5" target="blank">https://calcula-propinas.netlify.app/</a> -
                  <a href="https://an.....5.github.io/calculadora_propinas/" className="underline mx-1.5" target="blank">https://an.....5.github.io/calculadora_propinas/</a>

                  <div className="flex w-[100%]"></div>
                  <a href="https://react-tienda-guitarras.netlify.app/" className="underline mx-1.5" target="blank">https://react-tienda-guitarras.netlify.app/</a>
                  <a href="https://an.....5.github.io/guitarla-ts/" className="underline mx-1.5" target="blank">https://an.....5.github.io/guitarla-ts/</a>

                  <div className="flex w-[100%]"></div>
                  <a href="XXXXXXX" className="underline mx-1.5 text-red-600" target="blank">XXXXXXX</a> -
                  <a href="https://an.....5.github.io/bttf/" className="underline mx-1.5" target="blank">https://an.....5.github.io/bttf/</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="XXXXXXX" className="underline mx-1.5 text-red-600" target="blank">XXXXXXX</a> -
                  <a href="https://an.....5.github.io/pacientes-zustand/" className="underline mx-1.5" target="blank">https://an.....5.github.io/pacientes-zustand/</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="https://control-gastos-fos.netlify.app/" className="underline mx-1.5 text-red-600" target="blank">https://control-gastos-fos.netlify.app/</a> -
                  <a href="https://an.....5.github.io/control-gastos-fos" className="underline mx-1.5" target="blank">https://an.....5.github.io/control-gastos-fos</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="https://notas-fos.netlify.app/" className="underline mx-1.5 text-red-600" target="blank">https://notas-fos.netlify.app/</a> -
                  <a href="https://an.....5.github.io/notas-fos/" className="underline mx-1.5" target="blank">https://an.....5.github.io/notas-fos/</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="https://aab-clima-react-typescript.netlify.app/" className="underline mx-1.5 text-red-600" target="blank">https://aab-clima-react-typescript.netlify.app/</a> -
                  <a href="https://an.....5.github.io/clima-react-typescript" className="underline mx-1.5" target="blank">https://an.....5.github.io/clima-react-typescript</a>
                  <div className="flex w-[100%]"></div>

                  <div className="flex w-[100%]"></div>
                  <a href="https://aab-cripto-react-typescript.netlify.app/" className="underline mx-1.5 text-red-600" target="blank">https://aab-cripto-react-typescript.netlify.app/</a> -
                  <a href="https://an.....5.github.io/cripto-react-typescript/" className="underline mx-1.5" target="blank">https://an.....5.github.io/cripto-react-typescript/</a>
                  <div className="flex w-[100%]"></div>

                </div>

                {/* <!-- Crear proyecto e instalar dependencias útiles,... --> */}
                <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("comandos-npm")}>
                  <h3 className="flex font-bold items-center">Crear proyecto e instalar dependencias útiles,...
                    <img id="point-left" src="./src/assets/img/icon-finger-left.png" width="30" className="noshadow animation-point-left" alt="" aria-hidden="true" />
                  </h3>
                   <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["comandos-npm"] ? "rotate-180" : ""
                  }`}
                >▼</span>
                </div>
                <div id="comandos-npm" className={`ml-2.5 ${openBlocks["comandos-npm"] ? "block" : "hidden"}`}>
                  <ul className="list-disc my-2.5 ml-4">

                    <li className="mb-3"><p><strong>MVSCode + Configuración y plugins + https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/:</strong> Abra la configuración de VS Code (Código → Preferencias → Configuración) y busque “Ruta de extensiones de Emmet” Haga clic en “Agregar elemento”, ingrese la ruta a la carpeta donde guardó el archivo snippets.json que creó anteriormente y presione “Aceptar”</p></li>

                    <li className="mb-3"><p><strong>instalar node:</strong> https://nodejs.org/es/ (Requerimos node para crear nuestros proyectos pero también para instalar dependencias con npm)
                      (47,48,49) Node.js con npm es bastante estable y es la herramienta/tecnología que usaremos para crear apps React --&gt; Podríamos crear tu propio ambiente de desarrollo pero tienes que asegurarte de que cada versión nueva de React, cada version de las diferentes librerias sea compatible con tu proyecto y despues tienes que encontrar una forma de compilar código de css (sass etc) ...entonces vamos a gastar más tiempo en solucionar este tipo de cosas que tirando código. Por eso se recomienda usar una herramienta ya existente) </p><br />
                      <span className="destacado">node -v</span>--&gt; v22.14.0<br />
                      <span className="destacado">npm -v</span>--&gt; 10.9.2
                    </li>

                    <li className="mb-3"><p><strong>Solución a problema para instalar dependencias:</strong> Intentaba 'npm install' y no me dejaba. Solución en link --&gt; <a href="https://www.cdmon.com/es/blog/la-ejecucion-de-scripts-esta-deshabilitada-en-este-sistema-te-contamos-como-actuar" className="underline" target="blank">https://www.cdmon.com/es/blog/la-ejecucion-de-scripts-esta-deshabilitada-en-este-sistema-te-contamos-como-actuar</a></p></li>

                    <li className="mb-3"><p><strong>Para listar las dependencias npm instaladas:</strong> <span className="destacado">npm ls</span></p></li>

                    <li className="mb-3"><p className="font-bold">Crear proyecto:</p>
                      <ul className="ml-2.5 pl-2.5 border-l-2 border-l-stone-600">
                        <li><span>Vamos al directorio donde queremos crearlo</span></li>
                        <li><span><span className="destacado">npm create vite@latest</span> &gt; <strong>calorie-tracker</strong> &gt; <strong>react TypeScript + SWC</strong> &gt; <span className="destacado">npm install</span></span></li>
                        <li><span>arrancamos el servidor de desarrollo <span className="destacado">npm run dev</span> y hacemos limpieza: eliminamos carpeta src&gt;assets, eliminamos src&gt;App.css, borramos el contenido de index.css, en index.html cambiamos el title y eliminamos icono <code className="language-js">&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot; href=&quot;/vite.svg&quot; /&gt;</code>. Aquí lo podemos sustituir por el personalizado que creemos con <a href="https://realfavicongenerator.net/" className="underline" target="blank">https://realfavicongenerator.net/</a> (borramos también el icono vite.svg de la carpeta public) y limpiamos el compo ppal App.tsx.</span></li>
                      </ul>
                    </li>

                    <li className="mb-3"><strong>Para despliegue en un sitio estático (github pages y Netlify):</strong> - <a className="underline" href="https://es.vite.dev/guide/static-deploy" target="_blank">instalar cli y deploy en netlify</a>
                      <ul className="mt-1 ml-2.5 pl-6 border-l-2 border-l-stone-600 list-decimal">
                        <li className="mb-2">Creamos los dos sitios en <strong>github</strong> - <a href="https://github.com/" className="underline" target="blank">https://github.com/</a> (añadir repositorio) y <strong>Netlify</strong> - <a href="https://app.netlify.com/" className="underline" target="blank">https://app.netlify.com/</a> (hacemos un build y llevamos a mano la carpeta dist)</li>
                        <li className="mb-2">Creo repo local git, primera foto, primer commit: <span className="destacado">git init</span> + <span className="destacado">git add .</span> + <span className="destacado">git commit -m "primer commit"</span> + y con esta info que nos da Github en cuanto creamos el repositorio, establecemos el origen remoto + ¿nos situamos en la rama main? + ¿hacemos un push a esa rama?:
                          <ul className="list-disc my-3 ml-4">
                            <li className="my-1.25"><span className="destacado">git remote add origin https://github.com/andXXXX5/XXXXXXXXX.git</span></li>
                            <li className="my-1.25"><span className="destacado">git branch -M main</span></li>
                            <li className="my-1.25"><span className="destacado">git push -u origin main</span></li>
                          </ul>
                        </li>
                        <li className="mb-2"><span className="destacado">npm install --save-dev gh-pages</span> - <a className="underline" href="https://www.npmjs.com/package/gh-pages" target="_blank">https://www.npmjs.com/package/gh-pages</a> - <strong>gh-pages:</strong> librería de npm para poder trabajar y desplegar aplicaciones en github pages.
                        </li>
                        <li className="mb-2"><span className="destacado">npm install netlify-cli -g</span> <strong>CLI de Netlify: lo instalo global</strong> (supuestamente era mejor instalarlo de manera local con: <span className="destacado">npm install --save-dev netlify-cli</span> según lo que dice el link del paquete <a className="underline" href="https://www.npmjs.com/package/netlify-cli" target="_blank">link</a>, pero me daba problemas )</li>
                        <li>en <span className="file">vite.config.ts</span> configuramos el 'base' y en <span className="file">package.json</span> añadimos nuestros scripts personalizados para compilar y desplegar en uno o compilar y desplegar en los dos sitios (En Netlify nos preguntará si queremos asociarlo con un id del sitio, lo copiamos y especificamos la carpeta dist en la siguiente pregunta):
                          <div className="flex max-sm:flex-col">
                            <div className="w-[50%] max-sm:w-[100%]">
                              <pre data-line="3">
                                <code className="language-js">
                          //vite.config.ts
                                  ...
                                  export default defineConfig(&lbrace;
                                  base:"https://andXXXX5.github.io/XXXXXXXXX/",
                                  plugins: []
                                  &rbrace;)
                                </code></pre>
                            </div>
                            <div className="w-[50%] max-sm:w-[100%]">
                              <pre data-line="4-6"><code className="language-js">
                          //package.json
                                ...
                                "scripts": &lbrace;
                                ...,
                                "dpgh": "npm run build && gh-pages -d dist",
                                "dpnet": "npm run build && ntl deploy --prod",
                                "dpall": "npm run build && gh-pages -d dist && ntl deploy --prod"&lbrace;
                              </code></pre>
                            </div>
                          </div>

                        </li>
                      </ul>
                    </li>

                    <li className="mb-3">
                      <p className="font-bold inline">Instalar tailwindcss <a className="underline" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">https://tailwindcss.com/docs/installation/using-vite</a> </p>

                      <ul className="ml-2.5 pl-2.5 border-l-2 border-l-stone-600">
                        <li><span className="destacado">npm install tailwindcss @tailwindcss/vite</span></li>
                        <li>configurar el plugin:
                          <pre><code className="language-js">
                        //vite.config.ts
                            import tailwindcss from '@tailwindcss/vite'
                            export default defineConfig(&lbrace;
                            plugins: [
                            tailwindcss(),
                            ],
                            &rbrace;)
                          </code></pre>
                        </li>
                        <li>importar tailwindcss en nuestra css principal:
                          <pre><code className="language-js">
                        //src&gt;index.css
                            @import "tailwindcss";
                          </code></pre>
                        </li>
                      </ul>
                    </li>

                    <li className="mb-3">
                      <span className="destacado">npm i react-router-dom</span> - <a href="https://www.npmjs.com/package/react-router-dom" className="underline" target="blank">https://www.npmjs.com/package/react-router-dom</a> - <a href="https://api.reactrouter.com/v7/functions/react_router.NavLink.html" className="underline" target="blank">React Router API Reference</a> - <a href="https://www.robinwieruch.de/react-router/" className="underline" target="blank">React Router 7 Tutorial</a> - <strong>React Router DOM:</strong> para poder navegar por diferentes páginas. Borramos App.tsx, creamos router.tsx, <strong>¡Ojo! si tenemos configurado una url base en nuestro vite.config.ts</strong> <br />

                      <strong>¡Ojo! react app con react router dom desplegada en Netlify daba 404 al recargar navegador</strong> - <a href="https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router" className="underline" target="blank">Netlify renders 404 on page refresh (using React and react-router)</a> - <strong>Creamos fichero "netlify.toml":</strong>

                      <pre><code className="language-js">
                        [[redirects]]
                        from = "/*"
                        to = "/"
                        status = 200
                      </code></pre>

                      <p>Para más opciones de configuración de este fichero ver: <a target="_blank" href="https://docs.netlify.com/configure-builds/file-based-configuration/">https://docs.netlify.com/configure-builds/file-based-configuration/</a></p>
                    </li>

                    <li className="mb-3">
                      <span className="destacado">npm install primereact</span> - <a href="https://primereact.org/" className="underline" target="blank">https://primereact.org/</a> - <strong>PrimeReact:</strong> es un conjunto de componentes de interfaz de usuario de React de código abierto que se utiliza para construir aplicaciones web de empresa.
                    </li>

                    <li className="mb-3"><span className="destacado">npm i react-hook-form</span> - <a className="underline" href="https://react-hook-form.com/" target="_blank">https://react-hook-form.com/</a> - <strong>React Hook Form:</strong> es una librería para para la parte de validación y procesamiento de nuestros formularios de manera bastante sencilla.</li>

                    <li className="mb-3"><span className="destacado">npm i zustand</span> - <a className="underline" href="https://www.npmjs.com/package/zustand" target="_blank">https://www.npmjs.com/package/zustand</a> - <a className="underline" href="https://github.com/pmndrs/zustand" target="_blank"> github zustand</a> - <strong>Zustand:</strong> administrador para manejar un estado global de forma muy simple</li>

                    <li className="mb-3"><span className="destacado">npm i uuid</span> - <a className="underline" href="https://www.npmjs.com/package/uuid" target="_blank">https://www.npmjs.com/package/uuid</a> - <strong>uuid:</strong> es una dependencia para generar id
                      <pre><code className="language-js">
                        import &lbrace; v4 as uuidv4 &rbrace; from 'uuid'
                        ...
                        uuidv4()
                      </code></pre>
                    </li>

                    <li className="mb-3">
                      <div id="seccion13-205">
                        <span className="destacado">npm install react-date-picker</span>

                        <div className="ml-2.5 pl-2.5 border-l-2 border-l-stone-600">
                          <p>Buscamos en <a className="underline text-black" href="https://www.npmjs.com/" target="_blank">https://www.npmjs.com/</a> react-date-picker y elegimos este que vemos que soporta TS <a className="underline" href="https://www.npmjs.com/package/react-date-picker" target="_blank">https://www.npmjs.com/package/react-date-picker</a>. En esa misma página hay instrucciones sobre cómo utilizarlo. Instalamos con <span className="destacado">npm install react-date-picker</span>. Vamos a ExpenseForm.tsx e importamos DatePicker, las dos hojas de estilo. A continuación creamos los 2 types que están en la documentación de la dependencia (<strong>estos mejor, los llevamos al fichero de types que vamos a crear, ver siguiente punto</strong>) y con esto ya podemos comenzar a utilizarlo, marcar una fecha, la cual aparecerá ahí una vez empecemos a escribir en el state:</p>

                          <pre><code className="language-ts">
                        //ExpenseForm.tsx
                            import DatePicker from 'react-date-picker'
                            import 'react-date-picker/dist/DatePicker.css';
                            import 'react-calendar/dist/Calendar.css';
                            type ValuePiece = Date | null
                            type Value = ValuePiece | [ValuePiece, ValuePiece]
                          </code></pre>

                          <p>Si vemos en la app ya nos aparece este calendario personlizado (que podríamos haber usado un input type="date" pero quería mostrarnos como hacerlo con una dependencia).</p>
                          <img src="https://andune55.github.io/manual-react/assets/206-B0AT7_6t.png" alt="img" loading="lazy" />
                        </div>
                      </div>
                    </li>

                    <li className="mb-3"><span className="destacado">npm i react-toastify</span> - <a href="https://www.npmjs.com/package/react-toastify" target="_blank" className="underline">https://www.npmjs.com/package/react-toastify</a> - <strong>React-Toastify:</strong> para notificaciones</li>

                    <li className="mb-3"><span className="destacado">npm install @heroicons/react</span> - <a className="underline" href="https://heroicons.com/" target="_blank">https://heroicons.com/</a> - Hero icons
                      <div className="ml-2.5 pl-2.5 mb-3.75 border-l-2 border-l-stone-600">
                        - The 24x24 outline icons can be imported from @heroicons/react/24/outline, the 24x24 solid icons can be imported from @heroicons/react/24/solid, the 20x20 solid icons can be imported from @heroicons/react/20/solid, and 16x16 solid icons can be imported from @heroicons/react/16/solid. - <a href="https://unpkg.com/browse/@heroicons/react@2.2.0/24/outline/">Browse the full list of icon names on UNPKG →</a>
                        <pre><code className="language-js">
                          import &lbrace; BeakerIcon &rbrace; from '@heroicons/react/24/solid'
                          function MyComponent()  &lbrace;
                          return (
                          &lt;div&gt;
                          &lt;BeakerIcon className=&quot;size-6 text-blue-500&quot; /&gt;
                          &lt;p&gt;...&lt;/p&gt;
                          &lt;/div&gt;
                          )
                          &rbrace;
                        </code></pre>
                      </div>
                    </li>

                    <li className="mb-3">
                      @headlessui <span className="destacado">npm install @headlessui/react</span> (vídeo 202) - <a className="underline" href="https://www.npmjs.com/package/@headlessui/react" target="_blank">@headlessui/react</a>
                    </li>

                    <li className="mb-3">
                      <span className="destacado">npm i react-swipeable-list</span> (vídeo 215) - <a className="underline" href="https://www.npmjs.com/package/react-swipeable-list" target="_blank">react-swipeable-list</a> - <a className="underline" href="https://gist.github.com/codigoconjuan/e1a67f2a729bc44978c2c7d0f946ce7e" target="_blank">gist para para swipleable List</a>
                      <div className="ml-2.5 pl-2.5 mb-3.75 border-l-2 border-l-stone-600">
                        <span className="rojo">OJO me daba este error y blancazo interfaz:</span><br /> 16:44:03 [vite] (client) error while updating dependencies:<br />
                        Error: Build failed with 1 error:<br />
                        node_modules/react-swipeable-list/dist/react-swipeable-list.esm.js:2:22: ERROR: Could not resolve "prop-types"
                        <br /><span className="verde">Solucionado con</span> <br />
                        As of React 15.5.0, PropTypes have been removed from the core React package as a separate dependency. To fix this, add prop-types into your code:

                        If you're loading via script tags:<br />

                        &lt;script src="https://unpkg.com/prop-types/prop-types.min.js"&gt;&lt;/script&gt;
                        Or via NPM:<br />

                        <span className="destacado">npm install --save prop-types</span><br />
                      </div>
                    </li>

                    <li className="mb-3">
                      <span className="destacado">npm i react-circular-progressbar</span> - <a className="underline" href="https://www.npmjs.com/package/react-circular-progressbar" target="_blank">React Circular Progressbar</a>(vídeo 224)
                    </li>

                    <li className="mb-3">
                      <span className="destacado">npm i react-speakup</span> (proyecto notas-fos)- <a className="underline" href="https://www.npmjs.com/package/react-speakup" target="_blank">react-speakup</a> - <a href="https://github.com/Amin-Partovi/react-speakup#readme" className="underline" target="blank">github react-speakup</a>

                      <div className="ml-2.5 pl-2.5 mb-3.75 border-l-2 border-l-stone-600">
                        <p>Dentro del componente VoiceToText.tsx esta es la manera en que configuro las dos únicas props configurables (idioma y grabación continua):</p>
                        <pre data-line="0"><code className="language-ts">
                      //VoiceToText.tsx
                          const VoiceToText = () =&gt; &lbrace;
                          //props de la librería
                          const &lbrace; startListening, transcript, reset &rbrace; = useVoiceToText(&lbrace;lang:'es-ES', continuous: false&rbrace;)
                        </code></pre>
                      </div>
                    </li>

                    <li className="mb-3"><span className="destacado">npm install @dnd-kit/core</span> (proyecto notas-fos)- <a href="https://dndkit.com/" className="underline" target="blank">https://dndkit.com/</a> - <strong>dnd kit:  A modular toolkit for building
                      drag & drop interfaces</strong></li>

                    <li className="mb-3">
                      <span className="destacado">npm i prism-react-renderer</span> <strong>prism-react-renderer:</strong> - <a href="https://www.npmjs.com/package/prism-react-renderer#usage" className="underline" target="blank">https://www.npmjs.com/package/prism-react-renderer#usage</a>

                      <pre className="mb-2"><code className="language-ts">
                        import &lbrace; Highlight, themes &rbrace; from "prism-react-renderer"
                      </code></pre>
                      <pre><code className="language-ts">
                        &lt;Highlight
                        theme=&lbrace;emptyTheme&rbrace;
                        code=&lbrace;`XXXXXXXXXXX`&rbrace;
                        language=&quot;tsx&quot;
                        &gt;
                        &lbrace;(&lbrace; className, style, tokens, getLineProps, getTokenProps &rbrace;) =&gt; (
                        &lt;pre style=&lbrace;style&rbrace;&gt;
                        &lbrace;tokens.map((line, i) =&gt; (
                        &lt;div key=&lbrace;i&rbrace; &lbrace;...getLineProps(&lbrace; line &rbrace;)&rbrace;&gt;
                        &lt;span&gt;&lbrace;i + 1&rbrace;&lt;/span&gt;
                        &lbrace;line.map((token, key) =&gt; (
                        &lt;span key=&lbrace;key&rbrace; &lbrace;...getTokenProps(&lbrace; token &rbrace;)&rbrace; /&gt;
                        ))&rbrace;
                        &lt;/div&gt;
                        ))&rbrace;
                        &lt;/pre&gt;
                        )&rbrace;
                        &lt;/Highlight&gt;
                      </code></pre>
                    </li>

                    <li className="mb-3">
                      <p className="font-bold">Instalar prism(esta no va fina): <span className="destacado">npm install prismjs</span>. Una vez que se ha instalado la dependencia ya lo podemos importar en nuestros componentes:</p>

                      <div className="ml-2.5 pl-2.5 mb-3.75 border-l-2 border-l-stone-600">
                        <pre><code className="language-js">
                      // Importing Prism.js
                          import Prism from 'prismjs'

                          // Importing a language
                          import 'prismjs/components/prism-javascript'

                          // Importing a theme
                          import 'prismjs/themes/prism-tomorrow.css'
                        </code></pre>

                        <p>De momento este es mi componente 'CodePrism.tsx' y su uso desde el compo ppal 'App.tsx'</p>

                        <div className="flex max-sm:flex-col">
                          <div className="w-[50%] max-sm:w-[100%]">
                            <pre><code className="language-js">
                          //App.tsx
                              &lt;CodePrism
                              code={`
                              // Importing Prism.js
                              import Prism from &#39;prismjs&#39;
                              
                              // Importing a language
                              import &#39;prismjs/components/prism-javascript&#39;
                              
                              // Importing a theme
                              import &#39;prismjs/themes/prism-tomorrow.css&#39;          
                            `}
                              language=&lbrace;&#39;js&#39;&rbrace;
                              /&gt;
                            </code></pre>
                          </div>
                          <div className="w-[50%] max-sm:w-[100%]">
                            <pre><code className="language-js">
                          //CodePrism.tsx
                              import &lbrace; useEffect &rbrace; from &#39;react&#39;;
                              import Prism from &#39;prismjs&#39;

                              import &#39;prismjs/themes/prism-tomorrow.css&#39;; // Importing a Prism theme
                              import &#39;prismjs/components/prism-javascript&#39; // Importing js language
                              import &#39;prismjs/components/prism-typescript&#39; // Importing ts language

                              type CodePrismProps = &lbrace;
                              code: string,
                              language: string
                              &rbrace;

                              export default function CodePrism(&lbrace;code, language&rbrace; : CodePrismProps) &lbrace;

                              useEffect(() =&gt; &lbrace;
                              Prism.highlightAll();
                              &rbrace;, [code, language]);


                              return (
                              &lt;pre&gt;
                              &lt;code className=&lbrace;`language-$&lbrace;language&rbrace;`&rbrace;&gt;
                              &lbrace;code&rbrace;
                              &lt;/code&gt;
                              &lt;/pre&gt;
                              )
                              &rbrace;
                            </code></pre>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="mb-3"><p className="font-bold">Desinstalar prism: <span className="destacado">npm uninstall prisma @prisma/client</span></p></li>

                  </ul>
                </div>

                {/* <!-- Accesibilidad correo --> */}
                <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("accesibilidad-correo")}>
                  <h3 className="flex font-bold items-center">
                    <span className="mr-1.25">Accesibilidad correo</span>
                  </h3>
                   <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["accesibilidad-correo"] ? "rotate-180" : ""
                  }`}
                >▼</span>
                </div>
                <div id="accesibilidad-correo" className={`ml-2.5 ${openBlocks["accesibilidad-correo"] ? "block" : "hidden"}`}>
                  <div className="bg-blue-400 rounded-2xl p-2 mr-1.25 shadow border border-blue-700">
                    <legend>
                      <p className="mr-1.25">Accesibilidad Herramientas </p>
                    </legend>

                    <a href="https://www.emailonacid.com/app/login/" className="underline block" target="_blank">emailonacid</a>
                    <a href="https://www.accessible-email.org/" className="underline block" target="blank">https://www.accessible-email.org/</a>
                    <a href="https://www.ssa.gov/accessibility/andi/help/install.html" target="_blank">ANDI (Accessible Name & Description Inspector Tool)</a> | <a className="txt-negro underline block" href="https://www.section508.gov/training/web-software/andi-training-videos/" target="blank">Vídeos instrucciones Andi</a><br />
                    <strong><a className="underline block" href="https://a11y.email/blog/" target="_blank">https://a11y.email/blog/</a></strong>
                    <strong><a className="underline block" href="https://dequeuniversity.com/screenreaders/" target="blank">https://dequeuniversity.com/screenreaders/</a></strong>
                    <strong><a href="https://www.w3.org/WAI/ARIA/apg/patterns/" className="underline block" target="blank">ARIA Authoring Practices Guide (How to build accessibility semantics into web patterns and widgets)</a></strong>
                    <br />

                    <a href="https://www.siteimprove.com/toolkit/accessibility-checker/" className="underline block" target="blank">https://www.siteimprove.com/toolkit/accessibility-checker/</a>
                    <a href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd" className="underline block" target="blank">extensión chrome: axe DevTools - Web Accessibility Testing</a>
                    <a href="https://webaim.org/resources/contrastchecker/" className="underline block" target="blank">https://webaim.org/resources/contrastchecker/</a>
                    <a href="https://nvda.es/" className="underline block" target="blank">Lector https://nvda.es/</a>
                    <a href="https://www.csun.edu/universal-design-center/web-accessibility-criteria-keyboard-accessibility" className="underline block" target="blank">https://www.csun.edu/universal-design-center/web-accessibility-criteria-keyboard-accessibility</a>
                  </div>

                  <div className="bg-blue-200 rounded-2xl p-2 mr-1.25 shadow border border-blue-500">
                    <legend className="font-bold text-blue-900">Accesibilidad Links</legend>

                    <a href="https://blogs.oracle.com/authors/sarah-gallardo" className="underline block" target="blank">Blog de Sarah Gallardo</a>
                    <a href="https://blogs.oracle.com/marketingcloud/post/can-nocode-emails-be-accessible" className="underline block" target="blank">(Sarah Gallardo) ¿Pueden ser accesibles los correos electrónicos sin código?</a>
                    <a href="https://blogs.oracle.com/marketingcloud/post/signs-you-need-an-email-accessibility-audit" className="underline block" target="blank">(Sarah Gallardo) 6 señales de que necesitas una auditoría de accesibilidad de correo electrónico</a>

                    <a className="underline block" href="https://www.litmus.com/blog/ultimate-guide-accessible-emails" target="_blank">Litmus 2025 Guide to Creating Accessible Emails</a>
                    <a className="underline block" href="https://www.emailonacid.com/blog/article/email-development/email-accessibilty-in-2017/" target="_blank">Emailonacid Accessibility in 2024 Complete Guide</a>
                    <a className="underline block" href="https://stripo.email/es/blog/email-accessibility-guidelines-standards-best-practices/" target="_blank">Estándares y mejores prácticas de accesibilidad para correo electrónico</a>

                    <a className="underline" href="https://a11y.email/landmarks-in-email/" target="_blank">ARIA landmarks en email 1</a> (la accesibilidad del correo electrónico es bastante compleja y, sin una guía directa, nos vemos obligados a decidir por nuestra cuenta qué funciona y qué no. proceso para un análisis completo) | <a className="underline" href="https://www.goodemailcode.com/email-accessibility/aria-landmarks-in-html-email.html" target="_blank">ARIA landmarks en email 2</a> | <a className="underline block" href="https://www.caniemail.com/features/html-semantics/" target="_blank">Soporte canIuse HTML5 tag semánticos en email</a>
                    <a className="underline block" href="https://web.ua.es/es/accesibilidad/tecnologias-accesibles/lector-de-pantalla.html" target="_blank">Lectores de pantalla: Resumen, descripción y links</a>
                    <a className="txt-dec" href="https://www.deque.com/blog/text-links-practices-screen-readers/" target="_blank">comparacion aria-label y title en links</a> |  <a className="txt-dec" href="https://w3c.github.io/aria/#aria-label" target="_blank">aria-label W3C Editor's Draft</a> | <a className="txt-dec" href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html" target="_blank">Using aria-label for link purpose</a> | <a className="txt-dec" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label" target="_blank">aria-label mdn web docs</a>
                    <br /><br />
                    <a href="https://www.mailjet.com/es/blog/emailing/herramientas-pruebas-accesibilidad/" className="underline block" target="blank">https://www.mailjet.com/es/blog/emailing/herramientas-pruebas-accesibilidad/</a>
                    <a href="https://images.response.oracle-mail.com/Web/OracleAmericaInc/%7B00f7db35-fc32-494a-830a-c84364b24a53%7D_ODX_Accessibility_InclusiveDesign_Checklist.pdf?elqTrackId=b0f36340dbdb4363b77d87d7852a65ca&elqaid=108716&elqat=2&elqak=8AF5884875C8EEA859A419C7C852622154F9C0468871A9AB0CED818F03E1A0454EB1" className="underline" target="blank">Accessibility & Inclusive Design Ideas to Explore</a>
                  </div>
                </div>

                {/* <!-- Links css y fuentes --> */}
                <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("linksfo")}>
                  <h3>Links (CSS, iconos,...)</h3>
                   <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["linksfo"] ? "rotate-180" : ""
                  }`}
                >▼</span>
                </div>
                <div className="flex" >
                  <div id="linksfo" className={`ml-2.5 ${openBlocks["linksfo"] ? "block" : "hidden"}`}>
                    <div className="bg-amber-200 rounded-2xl p-2 mr-1.25 shadow border border-amber-500">
                      <legend className="font-bold text-amber-900">CSS</legend>

                      <strong>Patrones svg:</strong><br />
                      <a href="https://www.fffuel.co/" className="underline block" target="blank">https://www.fffuel.co/</a>
                      <a href="https://pattern.monster/collections" className="underline block" target="blank">https://pattern.monster/collections</a>
                      <a href="https://www.svgeez.com/" className="underline block" target="blank">https://www.svgeez.com/</a>
                      <a href="https://www.svgbackgrounds.com/" className="underline block" target="blank">https://www.svgbackgrounds.com/</a>
                      <a href="https://heropatterns.com/" className="underline block" target="blank">Patrones SVG como fondos - https://heropatterns.com/</a>
                      <a href="https://www.visiwig.com/patterns/" className="underline block" target="blank">https://www.visiwig.com/patterns/</a>
                      <a href="https://svgdoodles.com/" className="underline block" target="blank">https://svgdoodles.com/</a>
                      <a href="https://superdesigner.co/tools/svg-backgrounds" className="underline block" target="blank">https://superdesigner.co/tools/svg-backgrounds</a>

                      <a href="https://uncss-online.com/" className="underline block" target="blank">https://uncss-online.com/</a>
                      <a href="https://github.com/uncss/uncss" className="underline block" target="blank">https://github.com/uncss/uncss</a>
                      <a href="https://frontendfoc.us/issues" className="underline block" target="blank">Frontend Focus Archives</a>
                      <a href="./sombras-css.html" className="underline block" target="blank">Sombras CSS</a>
                      <a href="https://cssgradient.io/" className="underline block" target="blank">https://cssgradient.io/</a>
                      <a href="https://tobiasahlin.com/spinkit/" className="underline block" target="blank">Spinners de carga sin JS - https://tobiasahlin.com/spinkit/</a>
                      <a href="https://developer.chrome.com/blog/carousels-with-css?hl=es-419" className="underline block" target="blank">Carruseles con CSS</a>
                      <a href="https://tailwindcss.com/docs/installation/using-vite" className="underline block" target="blank">Get Started with Tailwinds</a>
                      <a href="https://tailwindflex.com/" className="underline block" target="blank">Tailwind CSS Components Library</a>
                      <a href="https://fontsensei.com/es" className="underline block" target="blank">https://fontsensei.com/es (selector de fuentes de google categorizado por tags)</a>
                    </div>
                    <div className="bg-blue-200 rounded-2xl p-2 mr-1.25 shadow border border-blue-500">
                      <legend className="font-bold text-amber-900">Iconos</legend>

                      <a href="https://realfavicongenerator.net/" className="underline block" target="blank">Generar Favicons</a>
                      <a href="https://heroicons.com/" className="underline block" target="blank">https://heroicons.com/</a>
                      <a href="https://flowbite.com/icons/" className="underline block" target="blank">https://flowbite.com/icons/</a>
                      <a href="https://icons.getbootstrap.com/" className="underline block" target="blank">https://icons.getbootstrap.com/</a>
                      <a href="https://lineicons.com/free-icons" className="underline block" target="blank">https://lineicons.com/free-icons</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Automatizar despliegue de la app de ReactJS +Vite en GitHub Pages--> */}
                <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("deploy-github-pages")}>
                  <h3>Automatizar despliegue de la app de ReactJS +Vite en GitHub Pages</h3>
                   <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["deploy-github-pages"] ? "rotate-180" : ""
                  }`}
                >▼</span>
                </div>
                <div id="deploy-github-pages" className={`ml-2.5 ${openBlocks["deploy-github-pages"] ? "block" : "hidden"}`}>
                  <p>GitHub Pages es un servicio de alojamiento de sitios web estáticos que permite a los usuarios publicar sitios web directamente desde un repositorio en GitHub. GitHub Pages permite tomar archivos HTML, CSS y JavaScript del repositorio y publicarlos como un sitio web en vivo en Internet.</p>
                  <ul className="ml-7 list-disc">
                    <li>Tener un repositorio creado: <strong>https://github.com/XXXXXXX55/XXXXXXXXXXXXXX/</strong></li>
                    <li><span className="destacado">Modificar la opción base de nuestro archivo <span className="file">vite.config.js</span></span>. <strong>En el contexto de un archivo de configuración de Vite, la opción base se refiere a la ruta base de nuestra aplicación cuando se sirve en un entorno de producción.</strong> Esta opción es parte de la configuración de construcción (build) de Vite.
                      <pre data-line="7"><code className="language-ts">
                    //vite.config.js
                        import &lbracet; defineConfig &rbracet; from 'vite'
                        import tailwindcss from '@tailwindcss/vite'
                        import react from '@vitejs/plugin-react-swc'

                        // https://vite.dev/config/
                        export default defineConfig(&lbracet;
                        base: "https://XXXXXX.github.io/XXXXX/",
                        plugins: [
                        react(),
                        tailwindcss()
                        ],
                        &rbracet;)
                      </code></pre>
                    </li>
                    <li><span className="destacado">npm install --save-dev gh-pages</span> &lt;-- Instalamos la librería de NPM para poder trabajar y desplegar aplicaciones en github pages llamada “gh-pages” https://www.npmjs.com/package/gh-pages:</li>
                    <li>Ya con nuestro paquete instalado, <span className="destacado">En nuestro <span className="file">package.json</span> creamos un nuevo script de NPM para ayudarnos a realizar el empaquetado y el despliegue</span>. A este script lo llamomos <strong>"deploy"</strong>.
                      <pre><code className="language-ts">
                        ....
                        "scripts": &lbracet;
                        ....

                        "deploy": "npm run build && gh-pages -d dist"
                        &rbracet;,
                        ...
                      </code></pre>
                    </li>
                    <li><span className="destacado">npm run deploy</span> &lt;-- Ejecutamos nuestro script para poder desplegar.
                      <img src="./src/assets/img/github-pages-deploy.png" alt="" />
                    </li>
                    <li><strong>Al acceder a nuestro repositorio, notaremos la presencia de una nueva rama llamada “gh-pages”</strong>. La rama “gh-pages” es una convención utilizada en GitHub para la publicación de sitios web directamente desde un repositorio. Cuando habilitas GitHub Pages para un repositorio, este servicio busca automáticamente una rama llamada “gh-pages” para construir y desplegar el sitio web asociado.
                      <img src="./src/assets/img/github-pages-branch.png" alt="" /></li>
                    <li><span className="destacado">En Settings&gt;Pages&gt; seleccionamos la rama gh-pages</span>
                      <img src="./src/assets/img/github-pages-setting-pages.png" alt="" /></li>
                  </ul>
                  <li><span className="destacado">npm run deploy</span> &lt;-- Ejecutamos de nuevo nuestro script para poder desplegar (el anterior lo ha hecho en la main).</li>
                  <li>Si nos vamos a la pestaña de “Actions” notaremos que se ha creado un nuevo “Workflow” y se ha ejecutado. En GitHub, un “workflow” (flujo de trabajo) se refiere a la automatización de una serie de pasos que se ejecutan cada vez que ocurre un evento específico en nuestro repositorio. <strong>Estos eventos pueden incluir acciones como el envío de cambios a un repositorio (push), la creación de una solicitud de extracción (pull request), o incluso el calendario programado.</strong>. <span className="destacado">Hemos creado y ejecutado nuestro flujo de trabajo utilizando el paquete “gh-pages” de NPM. Esto significa que hemos automatizado todo el proceso necesario para llevar a cabo el despliegue de manera eficiente y sin intervención manual. Por último, <span className="destacado">para visualizar nuestra web en GitHub, debemos dar clic a nuestro workflow y revisar los detalles.</span> Dentro de los detalles se encontrará la URL de nuestro sitio.</span>
                    <img src="./src/assets/img/github-pages-actions.png" alt="" /></li>

                </div>
              </div>

              {/* <!-- DEPLOY AUTOMATIZADO EN NETLIFY-->  */}
              <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("deploy-netlify")}>
                <h3>Deploy automatizado en Netlify conectado con cuenta de Github</h3>
                 <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["deploy-netlify"] ? "rotate-180" : ""
                  }`}
                >▼</span>
              </div>
              <div id="deploy-netlify" className={`ml-2.5 ${openBlocks["deploy-netlify"] ? "block" : "hidden"}`}>
                <p><strong>Instalar CLI de Netlify (MEJOR el primero ver <a className="underline" href="https://www.npmjs.com/package/netlify-cli" target="_blank">link</a>):</strong> <span className="destacado">npm install --save-dev netlify-cli</span> <span className="destacado">npm install netlify-cli -g</span></p>
                <img src="./src/assets/img/manual-automatizar deploy de proyecto vite react en netlify vinculado a github.png" alt="" />
              </div>
            </div>
          </div>

          {/* <!-- <a href="D:/angular%2017%20(2024)/index.html" className="txt-primario" target="blank">angular 03/24</a> <br/> --> */}
          <a href="https://doesitmutate.xyz/" className="underline mr-1.5 txt-rojo" target="blank">https://doesitmutate.xyz/</a> /
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array" className="underline mx-1.5 txt-rojo" target="blank">Enlace MDN Arrays</a> /
          <a href="https://developer.mozilla.org/es/docs/Web/API/Element" className="underline mx-1.5 txt-rojo" target="blank">Enlace MDN Element</a> /
          <a href="https://gist.github.com/JamieMason/3748498" className="underline mx-1.5 txt-rojo" target="blank">ISO Language code references</a><br />


        </div>  


         {/* COMPONENTE PARA CODIGO PRISM */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("componenteprism")}>
            <h3>Componente para código prism (AppContent.tsx)</h3>		
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["componenteprism"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>        
          <div id="componenteprism" className={`ml-2.5 ${openBlocks["componenteprism"] ? "block" : "hidden"}`}>
            
            <CodeBlock
              lang="js"
              code={`<CodeBlock
  lang="js"
  code={\`\`}
  data-line="2"
/>`}
            />
     
            
            <CodeBlock
              lang="js"
              code={`import { useEffect, useState,  useRef } from "react";
import Prism from "prismjs";

// lenguajes que uses
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";

// plugins opcionales
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

type CodeBlockProps = {
  code: string;
  lang: string;
  showLineNumbers?: boolean;
};

export default function CodeBlock({
  code,
  lang,
  showLineNumbers = false,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

const handleCopy = async () => {
  await navigator.clipboard.writeText(code);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000); // desaparece en 2s
};

  return (
    <div className="relative my-2">
    <button
        onClick={handleCopy}
        className="absolute right-2 top-2 text-xs bg-gray-700 text-white px-2 py-1 rounded"
    >
        {copied ? "Copiado ✅" : "Copy"}
    </button>

      <pre
        className={\`\${showLineNumbers ? "line-numbers" : ""} rounded-md\`}
      >
        <code ref={codeRef} className={\`language-\${lang}\`}>
          {code}
        </code>
      </pre>
    </div>
  );
}`}
            />
            
            
            
            
            
            <CodeBlock
              lang="js"
              code={`const saludo = "Hola mundo";
console.log(saludo);`}
            />

            <CodeBlock
              lang="html"
              code={`//html
<div class="container">
  <h1>Hola</h1>
</div>`}
            />

            <CodeBlock
              lang="ts"
              code={`//ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Juan",
  age: 30
};`}
            />

            <CodeBlock
              lang="js"
              showLineNumbers
              code={`//js showLineNumbers
confunction suma(a, b) {
  return a + b;
}

console.log(suma(2, 3));`}
            />


            <CodeBlock
              lang="js"
              code={`//js
const x = 1;
const y = 2;`}
              data-line="2"
            />
          </div>
        </div>

        {/* <!-- Tailwind, Herramientas, Tutoriales React  --> */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("tailwind-herramientas")}>
            <h3>Tailwind, Herramientas, Tutoriales React</h3>
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["tailwind-herramientas"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>
          <div id="tailwind-herramientas" className={`ml-2.5 ${openBlocks["tailwind-herramientas"] ? "block" : "hidden"}`}>

            {/* <!-- / TAILWINDCSS /////////////////////////////////////////////////////////////// --> */}
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <p className="flex items-center">
                <span className="naranja">Tailwindcss</span>
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
              </p>
              <div className="flex flex-wrap items-center">
                <a className="underline mx-1.5" href="./Tailwindcss-cheatsheet.html" target="_blank"><strong>Tailwindcss-cheatsheet FO</strong></a> /
                <a className="underline mx-1.5" href="https://tailwindcss.com/" target="_blank"><strong>Tailwindcss</strong></a> /
                <a className="underline mx-1.5" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"><strong>Installation y docs</strong></a> /
                <a className="underline mx-1.5" href="https://certidevs.com/tutorial-tailwindcss-introduccion" target="_blank"><strong>Tutorial certidevs</strong></a> /
                <a className="underline mx-1.5" href="https://heroicons.com/" target="_blank"><strong>https://heroicons.com/</strong></a> /
              </div>
            </div>

            {/* <!-- / HERRAMIENTAS /////////////////////////////////////////////////////////////// --> */}
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <p className="flex items-center">
                <span className="naranja">Herramientas</span>
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
              </p>
              <div className="flex flex-wrap items-center">
                <a href="https://git-scm.com/" className="underline mx-1.5" target="blank">Git</a> /
                <a href="https://nodejs.org/es/" className="underline mx-1.5" target="blank">https://nodejs.org/es/</a> /
                <a href="https://react.dev/" className="underline mx-1.5" target="blank">https://react.dev/</a> /
                <a href="https://vite.dev/" className="underline mx-1.5" target="blank">https://vite.dev/</a> (https://es.vite.dev/guide/ --&gt; una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos)
                <a href="https://autoprefixer.github.io/" className="txt-negro">https://autoprefixer.github.io/</a> /
                <a href="https://llamacoder.together.ai/" className="txt-negro">https://llamacoder.together.ai/</a> /
                <a href="https://www.postman.com/downloads/" className="underline mx-1.5" target="blank">Postman</a> /

                <div className="flex w-[100%]"></div>
                <a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&pli=1" className="underline mx-1.5" target="_blank">Ext Chrome React developer tools</a> /
                <a href="https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc" className="underline mx-1.5" target="_blank">Ext Chrome JSON viewer Pro</a> /
                <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" className="underline mx-1.5" target="blank">Iconos VS Code</a>
              </div>
            </div>

            {/* <!-- / TUTORIALES REACT /////////////////////////////////////////////////////////////// --> */}
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <p className="flex items-center">
                <span className="naranja">Tutoriales React y Typescript</span>
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                </svg>
              </p>
              <div className="flex flex-wrap items-center">
                <a href="https://webdeveloper.com/community/398346-extra-comma-output-from-map/" className="underline mx-1.5" target="blank">Explicación por qué map genera coma y solventarlo</a> /
                <a href="https:https://medium.com/@diego.coder/primeros-pasos-con-react-router-dom-7a142e5b2ca9" className="underline mx-1.5" target="blank">Primeros pasos con React Router DOM</a> /
                <a href="https://medium.com/@rishikeshsolapure0720/building-a-reusable-accordion-component-in-react-using-typescript-3a474a468f20" className="underline mx-1.5" target="blank">Building a Reusable Accordion Component in React using Typescript</a> /
                <a href="https://medium.com/@rishikeshsolapure0720" className="underline mx-1.5" target="blank">El del acordeon (y 3 artículos más interesantes)</a>
                <a href="https://medium.com/@diego.coder" className="underline mx-1.5" target="blank">Artículos Diego Esteban</a>
                <a href="http://dhiwise.com/post/understanding-react-prism-building-blocks-of-modern-web" className="underline mx-1.5" target="blank">Comprender React Prism</a>
                <a href="https://prince.dev/blog/highlight-with-react/" className="underline mx-1.5" target="blank">Add line highlighting to prism-react-renderer</a>
                <a href="" className="underline mx-1.5" target="blank">xxxxxx</a>
                <a href="" className="underline mx-1.5" target="blank">xxxxxx</a>

                <div className="flex w-[100%]"></div>

                <a href="https://blog.logrocket.com/responsive-image-gallery-css-flexbox/" className="underline mx-1.5">Responsive Image Gallery with flexbox</a> /
              </div>
            </div>

          </div>
        </div>
    
        {/* <!-- SNIPPETS  --> */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("snipets1")}>	
            <h3>Custom snippets, bloques de código para manuales html</h3>				
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["snipets1"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>        
          <div id="snipets1" className={`ml-2.5 ${openBlocks["snipets1"] ? "block" : "hidden"}`}>        
            <div className="flex max-sm:flex-col">
              <div className="w-[33%] max-sm:w-[100%]">
                <p className="font-bold"><span className="destacado">pcj2</span> Bloque (50+50) --&gt; 100</p>
                <pre><code className="language-js">
                  &lt;div className=&quot;flex max-sm:flex-col&quot;&gt;
                    &lt;div className=&quot;w-[50%] max-sm:w-[100%]&quot;&gt;
                      &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;&lt;/code&gt;&lt;/pre&gt;
                    &lt;/div&gt;
                    &lt;div className=&quot;w-[50%] max-sm:w-[100%]&quot;&gt;
                      &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;&lt;/code&gt;&lt;/pre&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code></pre>
              </div>
              <div className="w-[33%] max-sm:w-[100%]">
                <p className="font-bold"><span className="destacado">pcj3</span> Bloque (33+33+33) --&gt; 100</p>
                <pre><code className="language-js">
                  &lt;div className=&quot;flex max-sm:flex-col&quot;&gt;
                    &lt;div className=&quot;w-[33%] max-sm:w-[100%]&quot;&gt;
                      &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;&lt;/code&gt;&lt;/pre&gt;
                    &lt;/div&gt;
                    &lt;div className=&quot;w-[33%] max-sm:w-[100%]&quot;&gt;
                      &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;&lt;/code&gt;&lt;/pre&gt;
                    &lt;/div&gt;
                    &lt;div className=&quot;w-[33%] max-sm:w-[100%]&quot;&gt;
                      &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;&lt;/code&gt;&lt;/pre&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code></pre>
              </div>
              <div className="w-[33%] max-sm:w-[100%]">
                <p className="font-bold"><span className="destacado">sj</span>mostrar código sin escaparlo</p>
                <pre><code className="language-html">
                  &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;

                  &lt;/script&gt;
                </code></pre>
              </div>
            </div>
                
            <div className="flex max-sm:flex-col  mt-3">
              <div className="w-[25%] max-sm:w-[100%]">
                <p className="font-bold"><span className="destacado">(snippet "pch")</span> código html</p>
                <pre><code className="language-js">
                &lt;script type=&quot;text/plain&quot; className=&quot;language-html&quot;&gt;
                  &lt;pre&gt;&lt;code className=&quot;language-html&quot;&gt;

                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/script&gt;
                </code></pre>
              </div>
              <div className="w-[25%] max-sm:w-[100%]">                
                <p className="font-bold"><span className="destacado">(snippet "pcj")</span> código js</p>
                <pre><code className="language-js">
                &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;
                  &lt;pre&gt;&lt;code className=&quot;language-js&quot;&gt;

                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/script&gt;
                </code></pre>
              </div>
              <div className="w-[25%] max-sm:w-[100%]">              
                <p className="font-bold"><span className="destacado">(snippet "pct")</span> código ts</p>
                <pre><code className="language-js">
                &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;
                  &lt;pre&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    
                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/script&gt;
                </code></pre>
              </div>
              <div className="w-[25%] max-sm:w-[100%]">
                
                <p className="font-bold"><span className="destacado">(snippet "pcc")</span> código css</p>
                <pre><code className="language-js">
                &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;
                  &lt;pre&gt;&lt;code className=&quot;language-css&quot;&gt;

                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/script&gt;
                </code></pre>
              </div>
            </div>

            <p className="titulo mt-3"><span className="destacado">divexp</span> bloque explicativo</p>
            <pre><code className="language-js">
              &lt;div className=&quot;mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg&quot;&gt;
              &lt;a href=&quot;XXXXX&quot; className=&quot;block underline ml-1.5 mb-1.5&quot; target=&quot;blank&quot;&gt;XXXXXXX&lt;/a&gt;
              &lt;div className=&quot;flex&quot;&gt;
              &lt;svg className=&quot;size-6 shrink-0&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; strokeWidth=&quot;1.5&quot; stroke=&quot;currentColor&quot;&gt;
              &lt;path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; d=&quot;M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
                &lt;span className=&quot;bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]&quot;&gt;XXXXXXX&lt;/span&gt;
                &lt;/div&gt;
                &lt;/div&gt;
              </code></pre>
            <img src="./src/assets/img/bloque-explicativo.png" alt="" />
            
            <a className="text-[#f8ba40] bg-[#2d2d2d] px-1.5 py-0.4 rounded-md" href="https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/" target="_blank">Creando snippets emmet personalizados para vsc</a> - <a className="text-[#f8ba40] bg-[#2d2d2d] px-1.5 py-0.4 rounded-md" href="https://dev.to/kinginit/how-to-code-faster-vs-code-edition-4pa" target="_blank">How to code faster - VS Code edition</a>

            <p><a className="text-[#f8ba40] bg-[#2d2d2d] px-1.5 py-0.4 rounded-md" href="https://dev.to/davidemaye/write-code-faster-in-react-jsx-autocompletion-eeg">write-code-faster-in-react-jsx-autocompletion</a> Para hacer que emmet funcione en los .jsx: abrir configuración Ctrl+, y arriba a la derecha icono para Abrir Configuracion JSON (alterna con Configuración UI). Añadimos lo siguiente:</p>
            
            <pre><code className="language-js">
              "emmet.includeLanguages": &lbracet;
                "javascript": "javascriptreact"
            &rbracet;
            </code></pre>
                
            <a className="text-[#f8ba40] bg-[#2d2d2d] px-1.5 py-0.4 rounded-md" href="https://www.jasoft.org/Blog/post/personalizar-emmet-en-visual-studio-code-y-librarse-del-meta-x-ua-compatible-ie-edge" target="_blank">Personalizar Emmet en Visual Studio Code y librarse del meta "X-UA-Compatible ie=edge"</a> - <a className="text-[#f8ba40] bg-[#2d2d2d] px-1.5 py-0.4 rounded-md" href="https://code.visualstudio.com/docs/editor/emmet" target="_blank">Emmet en VSC</a>
            <p>archivo&gt;preferencias&gt;configuración de los servicios en línea&gt;escribir Emmet&gt;Extensions Path&gt;ruta de la carpeta donde está el archivo que hemos creado "snippets.json"</p>

            <p className="font-bold">Fichero personalizado snippets.json FO (13/02/25)</p>
            <pre><code className="language-js">
              //snippets.json (en el raiz, Curso React)
              &rbracet;
                &quot;variables&quot;: &rbracet; &quot;lang&quot;: &quot;es&quot; &rbracet;,
                &quot;html&quot;: &rbracet;
                  &quot;snippets&quot;: &rbracet;
                    &quot;pch&quot;: &quot;pre[data-line=0]&gt;code[className=language-html]&quot;, &quot;ch&quot;: &quot;code[className=language-html]&quot;,
                    &quot;pcj&quot;: &quot;pre[data-line=0]&gt;code[className=language-js]&quot;, &quot;cj&quot;: &quot;code[className=language-js]&quot;,
                    &quot;pct&quot;: &quot;pre[data-line=0]&gt;code[className=language-ts]&quot;, &quot;ct&quot;: &quot;code[className=language-ts]&quot;,
                    &quot;pcc&quot;: &quot;pre[data-line=0]&gt;code[className=language-css]&quot;, &quot;cc&quot;: &quot;code[className=language-css]&quot;,
                    &quot;sh&quot;: &quot;script[type=text/plain][className=language-html]&quot;,
                    &quot;sj&quot;: &quot;script[type=text/plain][className=language-js]&quot;,
                    &quot;spr&quot;: &quot;span[className=rojo]&quot;,
                    &quot;spdest&quot;: &quot;span[className=destacado]&quot;,
                    &quot;spf&quot;: &quot;span[className=file]&quot;,
                    &quot;spt&quot;: &quot;span[className=&#39;bg-[#4ec9b0] text-white&#39;]&quot;,
                    &quot;spint&quot;: &quot;span[className=&#39;bg-amber-950 text-amber-300&#39;]&quot;,
                    &quot;psn&quot;: &quot;p[className=&#39;mt-3.75 mb-0&#39;]&gt;span[className=naranja]&quot;,
                    &quot;pcj2&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[50%] max-sm:w-[100%]&#39;]*2&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-js&#39;]&quot;,
                    &quot;pcj3&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[33%] max-sm:w-[100%]&#39;]*3&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-js&#39;]&quot;,
                    &quot;pcj4&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[25%] max-sm:w-[100%]&#39;]*4&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-js&#39;]&quot;,
                    &quot;pct2&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[50%] max-sm:w-[100%]&#39;]*2&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-ts&#39;]&quot;,
                    &quot;pct3&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[33%] max-sm:w-[100%]&#39;]*3&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-ts&#39;]&quot;,
                    &quot;pct4&quot;: &quot;div[className=&#39;flex max-sm:flex-col&#39;]&gt;div[className=&#39;w-[25%] max-sm:w-[100%]&#39;]*4&gt;pre[data-line=&#39;0&#39;]&gt;code[className=&#39;language-ts&#39;]&quot;,
                    &quot;divexp&quot;: &quot;div[className=&#39;mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg&#39;]&gt;a[className=&#39;block underline ml-1.5 mb-1.5&#39;][href=&#39;XXXXX&#39;][target=&#39;blank&#39;]&lbracet;$&lbracet;0:XXXXXXX&rbracet;&rbracet;+div[className=&#39;flex&#39;]&gt;svg[className=&#39;size-6 shrink-0&#39;][xmlns=&#39;http://www.w3.org/2000/svg&#39;][fill=&#39;none&#39;][viewBox=&#39;0 0 24 24&#39;][strokeWidth=&#39;1.5&#39;][stroke=&#39;currentColor&#39;]&gt;path[strokeLinecap=&#39;round&#39;][strokeLinejoin=&#39;round&#39;][d=&#39;M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3&#39;]^span[className=&#39;bg-neutral-200 px-1.5 py-0.5 italic leading-[24px]&#39;]&lbracet;$&lbracet;0:XXXXXXX&rbracet;&rbracet;&quot;,
                    &quot;divlink&quot;: &quot;div[className=&#39;mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg&#39;]&gt;p[className=&#39;flex items-center&#39;]&gt;span[className=&#39;naranja&#39;]&lbracet;$&lbracet;0:XXXXXXX&rbracet;&rbracet;+svg[className=&#39;size-6 shrink-0&#39;][xmlns=&#39;http://www.w3.org/2000/svg&#39;][fill=&#39;none&#39;][viewBox=&#39;0 0 24 24&#39;][strokeWidth=&#39;1.5&#39;][stroke=&#39;currentColor&#39;]&gt;path[strokeLinecap=&#39;round&#39;][strokeLinejoin=&#39;round&#39;][d=&#39;M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3&#39;]^^div[className=&#39;flex flex-wrap items-center&#39;]&gt;a[className=&#39;underline mx-1.5&#39;][href=&#39;XXXXXXX&#39;][target=&#39;blank&#39;]&lbracet;$&lbracet;0:XXXXXXX&rbracet;&rbracet;+div[className=&#39;flex w-[100%]&#39;]+a[className=&#39;underline mx-1.5&#39;][href=&#39;XXXXXXX&#39;][target=&#39;blank&#39;]&lbracet;$&lbracet;0:XXXXXXX /&rbracet;&rbracet;&quot;,
                    &quot;flechad&quot;: &quot;svg[className=&#39;size-6 shrink-0 inline&#39;][xmlns=&#39;http://www.w3.org/2000/svg&#39;][fill=&#39;none&#39;][viewBox=&#39;0 0 24 24&#39;][strokeWidth=&#39;1.5&#39;][stroke=&#39;currentColor&#39;]&gt;path[strokeLinecap=&#39;round&#39;][strokeLinejoin=&#39;round&#39;][d=&#39;M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3&#39;]&quot;,
                    &quot;imgm&quot;: &quot;img[src=./src/assets/img/][alt=img][loading=lazy]&quot;,
                    &quot;list1&quot;: &quot;ul[className=&#39;list-disc my-3&#39;]&gt;li[className=&#39;my-1.25&#39;]*3&quot;,
                    &quot;linkfo&quot;: &quot;a[className=&#39;underline&#39;][href=&#39;XXXXXXX&#39;][target=&#39;blank&#39;]&lbracet;$&lbracet;0:XXXXXXX&rbracet;&rbracet;&quot;
                  &rbracet;
                &rbracet;
              &rbracet;
            </code></pre>

            <p>Para ver nº líneas <strong>className="line-numbers"</strong> y marcar una o varias líneas <strong>data-line="1,5-11"</strong></p>
            <pre><code className="language-html">
              &lt;pre className=&quot;line-numbers&quot; data-line=&quot;1,5-11&quot;&gt;
            </code></pre>
            
            <p className="font-bold">Bloque sección:</p>
            &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;
              {/* &lt;!-- SECCION XX --&gt; */}
              &lt;div className=&quot;w-[80%] max-sm:w-[96%] mx-auto bg-gray-200 my-1.25 py-0.75 pr-0 pl-2.5 rounded-xl&quot;&gt;
                
                &lt;div className=&quot;flex items-center mt-1.25 cursor-pointer desplegable justify-between&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;
                  &lt;h2&gt;Sección XXX: XXXXXXXXXXXX&lt;/h2&gt;
                  &lt;span className=&quot;cambiaicono ico_chevron_up mr-2.5&quot; title=&quot;&quot;&gt;&lt;/span&gt;
                &lt;/div&gt;
        
                &lt;div id=&quot;seccionXX&quot;&gt;
                  
                    &lbracet;/* &lt;!-- Bloque desplegable interior--&gt; */&rbracet;
                    &lt;div className=&quot;flex justify-between items-center mt-1.25 cursor-pointer desplegable-interior oscuro&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;
                      &lt;h3&gt;XXXXXXXXXXXXXXX&lt;/h3&gt;
                      &lt;span className=&quot;cambiaicono ico_chevron_down_blanco ico20 mr-1.25&quot; title=&quot;&quot;&gt;&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div id=&quot;seccionXX-XX&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;
                      
                      
                    &lt;/div&gt;
                    
                &lt;/div&gt;
                {/* &lt;!-- Fin div colapsable--&gt; */}
                          
              &lt;/div&gt;
              {/* &lt;!-- FIN SECCION XX --&gt; */}
            &lt;/script&gt; 

            <p className="font-bold">Bloque FINALES:</p>
            &lt;script type=&quot;text/plain&quot; className=&quot;language-js&quot;&gt;
              &lbracet;/* &lt;!-- Bloque desplegable interior--&gt; */&rbracet;
              &lt;div className=&quot;flex items-center mt-1.25 cursor-pointer desplegable-interior justify-between oscuro&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;
              &lt;h3&gt;FICHEROS FINALES&lt;/h3&gt;
              &lt;span className=&quot;cambiaicono ico_chevron_down_blanco ico20 mr-1.25&quot; title=&quot;&quot;&gt;&lt;/span&gt;
            &lt;/div&gt;
            &lt;div id=&quot;seccionXX-ficheros&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;                                
              &lt;div className=&quot;flex max-sm:flex-col&quot;&gt;
                &lt;div className=&quot;w-[25%] max-sm:w-[100%]&quot;&gt;
                  &lt;span className=&quot;destacado&quot;&gt;types/index.ts, App.tsx, index.css, main.tsx, store.ts&lt;/span&gt;&lt;br/&gt;

                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;types/index.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-types&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //types/index.ts                                   
                                      
                  &lt;/code&gt;&lt;/pre&gt;

                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;App.tsx&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-app&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;                  
                    //App.tsx

                  &lt;/code&gt;&lt;/pre&gt;
        
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;index.css&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-indexcss&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-css&quot;&gt;
                    //index.css
                    
                  &lt;/code&gt;&lt;/pre&gt;
        
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;main.tsx&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-maintsx&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-js&quot;&gt;
                    //main.tsx
                        
                  &lt;/code&gt;&lt;/pre&gt; 

                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;store.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-store&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //store.ts
                      
                    &lt;/code&gt;&lt;/pre&gt;
                &lt;/div&gt;
  
                &lt;div className=&quot;w-[25%] max-sm:w-[100%]&quot;&gt;
                  &lt;span className=&quot;destacado&quot;&gt;data, helpers, hooks, reducer, services&lt;/span&gt;&lt;br/&gt;
  
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;data/XXXXX.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-data&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //data/XXXXX.ts
                      
                  &lt;/code&gt;&lt;/pre&gt;
  
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;helpers/index.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-helpers&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //helpers/index.ts
                    
                  &lt;/code&gt;&lt;/pre&gt;   
        
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;hooks/XXXXX.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-customhook&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //hooks/XXXXX.ts
                    
                  &lt;/code&gt;&lt;/pre&gt;
        
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;reducer/XXXXX-reducer.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-XXXXX-reducer&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //reducer/XXXXX-reducer.ts
                    
                  &lt;/code&gt;&lt;/pre&gt;      
                  
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;services/XXXXX.ts&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-services&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    //services/XXXXX.ts

                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/div&gt;
                
                &lt;div className=&quot;w-[50%] max-sm:w-[100%]&quot;&gt;
                  &lt;span className=&quot;destacado&quot;&gt;Componentes&lt;/span&gt;&lt;br/&gt;
                  &lt;code className=&quot;cursor-pointer&quot; onClick=&lbracet;() =&gt; toggleBlock(&quot;&quot;)&rbracet;&gt;XXXXXXXXXX.tsx&lt;/code&gt;
                  &lt;pre data-line=&quot;0&quot; id=&quot;XX-XXXXXXXXXX&quot; className=&lbracet;`ml-2.5 $&lbracet;openBlocks[&quot;XXXXXXXXX&quot;] ? &quot;block&quot; : &quot;hidden&quot;&rbracet;`&rbracet;&gt;&lt;code className=&quot;language-ts&quot;&gt;
                    // XXXXXXXXXX.tsx  
                    
                  &lt;/code&gt;&lt;/pre&gt;
                &lt;/div&gt;
              &lt;/div&gt;
  
            &lt;/div&gt;
            &lt;/script&gt;             
          </div> 
        </div>      

        {/* <!--  EXPLICACIONES  --> */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center cursor-pointer desplegable" onClick={() => toggleBlock("explicaciones")}>	
            <h3>Explicaciones</h3>				
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["explicaciones"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>        
          <div id="explicaciones" className={`ml-2.5 ${openBlocks["explicaciones"] ? "block" : "hidden"}`}>
            {/* <!-- FLUJO FCN NUEVA EN HOOK --&gt; PROP --&gt; MODIFICAR EL COMPO --> */}
            <div className="flex justify-between items-center cursor-pointer desplegable-interior oscuro" onClick={() => toggleBlock("snp-fcn-nueva")}>	
              <h3>FLUJO FCN NUEVA EN HOOK --&gt; PROP --&gt; MODIFICAR EL COMPO</h3>			
               <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["snp-fcn-nueva"] ? "rotate-180" : ""
                  }`}
              >▼</span>
            </div>
            <div id="snp-fcn-nueva" className={`ml-2.5 ${openBlocks["snp-fcn-nueva"] ? "block" : "hidden"}`}>
              <pre className="language-ts">
                <code className="language-ts">
                  {`//useOrder.ts 
                  // - creamos una nueva función para borrar items
                  // - le ponemos como parámetro id y lo tipamos como MenuItem con un lookup para id 
                  import formatCurrency from "../helpers"
                  import { MenuItem, OrderItem } from "../types"

                  export default function useOrder() {
                    const [order, setOrder] = useState<OrderItem[]>([])

                    const removeItem = (id: MenuItem['id']) => { 
                      setOrder(order.filter(item => item.id != id))
                    }

                    return{
                      order,
                      addItem,
                      removeItem
                    }
                  }

                  //App.tsx
                  const { order, addItem, removeItem } = useOrder()

                  <OrderContents 
                    order={order}
                    removeItem={removeItem}
                  />

                  //OrderContents.tsx
                  type OrderContentsProps = {
                    order: OrderItem[],
                    removeItem: (id: MenuItems['id']) => void
                  }

                  export default function OrderContents({order,removeItem}: OrderContentsProps) {

                    <button 
                      className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                      onClick={() => removeItem(item.id)}
                    >X</button>
                  }
                  `}
                </code>
              </pre>
              
            </div>

            {/* Explicación de useMemo() y reduce() usando el 122  */}
            <div className="flex justify-between items-center mt-1.25 cursor-pointer desplegable-interior oscuro" onClick={() => toggleBlock("seccion9-122")}>
              <h3>Explicación de useMemo() y reduce() usando el 122</h3>
               <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["seccion9-122"] ? "rotate-180" : ""
                  }`}
                >▼</span>
            </div>
            <div id="seccion9-122" className={`ml-2.5 ${openBlocks["seccion9-122"] ? "block" : "hidden"}`}>
              <p><strong>Calculemos el subtotal a pagar en base al precio de los artículos y sus cantidades.</strong> Si
                agregamos varios elementos, vemos que el subtotal tiene que ser el resultado de sumar cada precio por la
                cantidad. Eso antes era más complejo hacerlo pero <strong>gracias a las "nuevos"(2015) array methods como
                  <strong>useMemo() o reduce() </strong>es más sencillo simplifican el código, evitando tener que tener renders
                  adicionales</strong>. Como ese cálculo viene desde <strong>order</strong> vamos a nuestro App.tsx</p>
              <pre>
                <code className="language-js">
                  {`//App.tsx
<OrderTotals order={order} />`}
                </code>
              </pre>
        
              <pre>
                <code className="language-js">
                  {`import { useMemo } from "react"
import formatCurrency from "../helpers"
import {OrderItem} from "../types"

type OrderTotalsProps = {
  order: OrderItem[]
}

export default function OrderTotals({order}: OrderTotalsProps) {

  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + (item.quantity * item.price), 0),
    [order]
  )

  return (
    <>
      <p>
        Subtotal a pagar:
        <span className="font-bold">
          {formatCurrency(subtotalAmount)}
        </span>
      </p>
    </>
  )
}`}
                </code>
              </pre>
        
            </div>

            {/* Explicación map() y join() para img gallery y evitar las "," que salían */}
            <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("map-join")}>	
              <h3>Explicación map() y join() para img gallery y evitar las "," que salían</h3>			
              <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["map-join"] ? "rotate-180" : ""
                }`}
              >▼</span>
            </div>
            <div id="map-join" className={`ml-2.5 ${openBlocks["map-join"] ? "block" : "hidden"}`}>
              <p>Dada una variable con string de fotos yo intentaba mapearla de esta manera para mostrar una galería dinámicamente, pero me salían "," separando cada elemento ¿por qué? --&gt; <a href="https://webdeveloper.com/community/398346-extra-comma-output-from-map/" className="txt-rojo" target="blank">Explicación por qué map genera coma y solventarlo</a>:</p>
              
              <CodeBlock
                lang="js"
                code={`const fotos = ['photo01.jpg','photo02.jpg']
const html = 
  '<div class="flex flex-wrap">' +
  fotos.map(foto => 
    '<img src="./img/fotografias/' + foto + '" />'
  ).join('') +
  '</div>'`}             
              />
              
              
              
             

              <CodeBlock
              lang="js"
              code={`//useModalPanel.ts del proyecto portfolio-XXX
import { CVItem } from &quot;../types&quot;

export const useModalPanel = () =&gt; {

  const fotos = [&#39;photo01.jpg&#39;,&#39;photo02.jpg&#39;,&#39;photo03.jpg&#39;,&#39;photo04.jpg&#39;,&#39;photo05.jpg&#39;,&#39;photo06.jpg&#39;,&#39;photo07.jpg&#39;,&#39;photo08.jpg&#39;,&#39;photo09.jpg&#39;,&#39;photo10.jpg&#39;,&#39;photo33.jpg&#39;,&#39;photo_11.jpg&#39;,&#39;photo_12.jpg&#39;,&#39;photo_13.jpg&#39;,&#39;photo_14.jpg&#39;,&#39;photo_15.jpg&#39;,&#39;photo_16.jpg&#39;,&#39;photo_17.jpg&#39;,&#39;photo_18.jpg&#39;,&#39;photo_19.jpg&#39;,&#39;photo_20.jpg&#39;,&#39;photo_21.jpg&#39;,&#39;photo_22.jpg&#39;,&#39;photo_23.jpg&#39;,&#39;photo_24.jpg&#39;,&#39;photo_25.jpg&#39;,&#39;photo_26.jpg&#39;,&#39;photo_27.jpg&#39;,&#39;photo_28.jpg&#39;,&#39;photo_29.jpg&#39;,&#39;photo_30.jpg&#39;,&#39;photo_31.jpg&#39;,&#39;photo_32.jpg&#39;]

  const fotosCompleta = fotos.map(foto=&gt;(             
    \`&lt;img class=&quot;inline-block h-[auto] w-[33%] rounded-sm&quot; src=&quot;./img/fotografias/\${foto}&quot; alt=&quot;\${foto}&quot; /&gt;\`                     
  ))

  const openModal = (item: CVItem) =&gt; {
    console.log(item)
    document.querySelector(&#39;#ModalPanel&#39;)?.classList.add(&#39;open&#39;)
    document.querySelector(&#39;#ModalPanel-overlay&#39;)?.classList.add(&#39;open&#39;)
    document.querySelector(&#39;.modal-content&#39;)!.innerHTML = \`
      &lt;p class=&quot;font-bold&quot;&gt;\${item.titulo}&lt;/p&gt;     
      &lt;p&gt;\${item.descripcion}&lt;/p&gt;      
      \${
        (!item.masFotos) ? 
          \`&lt;img class=&quot;rounded-sm w-[98%]&quot; src=&quot;./img/\${item.foto}&quot; alt=&quot;\${item.altFoto}&quot; /&gt;\`
        :          
          \`&lt;div class=&quot;images-wrapper&quot;&gt;\${fotosCompleta.join(&#39;&#39;)}&lt;/div&gt;\`                          
      }      
    \`
  }
  const closeModal = () =&gt;{
    document.querySelector(&#39;#ModalPanel&#39;)?.classList.remove(&#39;open&#39;)
    document.querySelector(&#39;#ModalPanel-overlay&#39;)?.classList.remove(&#39;open&#39;)
    document.querySelector(&#39;.modal-content&#39;)!.innerHTML = &quot;&quot;
  }
  return{
    openModal,
    closeModal
  }
}`}
/>
              
            </div>

            {/* Explicación del Hook useEffect() en el punto 82. Carrito persistente con LocalStorage - Almacenando */}
            <div className="flex justify-between items-center mt-1.25 cursor-pointer desplegable-interior oscuro" onClick={() => toggleBlock("seccion6-82")}>	
              <h3>Explicación del Hook useEffect() en el punto 82. Carrito persistente con LocalStorage - Almacenando</h3>			
              <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["seccion9-82"] ? "rotate-180" : ""
                }`}
              >▼</span>
            </div>
            <div id="seccion6-82" className={`ml-2.5 ${openBlocks["seccion6-82"] ? "block" : "hidden"}`}>
              <p>el versátil Hook useEffect (similar al watch en vue.js) vimos en el punto 82 (almacenar carrito en localStorage), que además de ser útil cuando el componente está listo, es muy útil para manejar los "efectos secundarios" de un cambio en nuestro state (cuando cambie mi state ejecutar cierto código).</p>
              <p className="naranja">Carrito persistente con LocalStorage - Almacenando</p>
              <p>Tener un carrito persistente es un buen truco para mantener los mismos elementos en el carrito aunque recarguemos navegador. ¿Cómo hacemos para tener sincronizado nuestro carrito de compras <code className="language-js">const [cart, setCart] = useState([])</code> con localStorage</p>
              
              <p>localStorage es una API muy sencilla que solo permite almacenar strings (ni objetos ni arrays). Como nuestro carrito es un array lo podemos convertir a string con <span className="destacado">JSON.stringify(cart)</span></p>

              <pre><code className="language-js">
              function saveLocalStorage()&lbracet;
                localStorage.setItem('cart', JSON.stringify(cart))
              &rbracet;
              </code></pre>

              <pre data-line="11"><code className="language-js">
                function addToCart(item)&lbracet;
                  const itemExists = cart.findIndex(guitar =&gt; guitar.id === item.id)
                  if(itemExists &gt;= 0)&lbracet;//existe en cart
                      if(cart[itemExists].quantity &gt;= MAX_ITEMS) return
                      const updatedCart = [...cart] //copia nueva de mi state, no modifica mi carrito       
                      updatedCart[itemExists].quantity++
                      setCart(updatedCart)
                  &rbracet; else&lbracet;//NO EXISTE en cart
                      item.quantity = 1
                      setCart(prevCart =&gt;[...prevCart, item])
                  &rbracet; 
                  saveLocalStorage()
              &rbracet;
              </code></pre>

              <p>Si vamos a las web developer tools, en la pestaña <strong>aplicación&gt;storage</strong> podemos ver el Local Storage. Vemos que si añadimos un primer elemento al carrito agrega algo pero vacío, y ya la segunda vez sí agrega:</p>
              
              <img className="my-2.5" src="./src/assets/img/82-01.png" alt="" />
              
              <p>El estado o state en React ¿es síncrono?¿o es asíncrono y por qué? Pos...es asíncrono, es decir, no se actualiza inmediatamente sino hasta algunos milisegundos después. ¿por qué es asíncrono? Si fuera síncrono (que todas las funciones se ejecuten en orden una tras otra) eso haría que no podríamos interaccionar con la pantalla hasta que no escriba ese estate, lo que nos dejaría sin respuesta en especial si es un state muy grande. <strong>Revisar:</strong> esa función saveLocalStorage() se manda llamar inmediatamente (mientras que el resto de nuestra función addToCart() es síncrona. Es decir cuadno la estamos llamando aún no ha sido escrito el cart por primera vez y es por eso que lo toma como un arreglo vacío</p>

              <p>¿como lo solucionamos? usando el versátil <strong>Hook useEffect()</strong> (similar al watch en vue.js). Vimos su uso cuando el componente está listo pero también tiene el siguiente caso de uso (cuando cambie mi carrito ejecutar cierto código). Es muy útil para manejar los "efectos secundarios" de un cambio en nuestro state. <strong>Eliminamos la función que hemos creado y no obstante la usamos dentro del Hook que va a estar observando por nuestro state cart; cada vez que este cambie, ejecutará lo que le especificamos (lo que antes teníamos en la función).</strong>. React se va a encargar de actualizar el localStorage una vez que ese state haya completado su acción de actualizarse en base a las funciones que teNemos definidas para ese state en lo que llevamos hecho, no hemos de preocuparnos de crear una función. Abrimos chrome y limpiamos el local storage (boton derecho borrar) y podemos comprobar que si añadimos ahora elementos al carrito, ya desde la primera vez se actualiza el local storage.</p>

              <pre><code className="language-js">
                import &lbracet; useState, useEffect &rbracet; from "react" // importamos el Hook useEffect
                //lo añadimos tras nuestras variables MIN_ITEMS, MAX_ITEMS
                useEffect(() =&gt; &lbracet;
                  localStorage.setItem('cart', JSON.stringify(cart))
                &rbracet;, [cart])
              </code></pre>                               

              <p className="naranja">Carrito persistente con LocalStorage - Recuperar los productos y mostrarlos</p>

              <p>Si recargo me aparece el carrito vacío, veamos cómo hacemos que persista. Esto pasa porque el useEffect que empleo para el almacenamiento local cada vez que carrito cambie también se ejecuta por primera vez cuando el componente esta listo, es decir de manera similar a cuando no tiene ninguna dependencia. Debemos revisar si hay algo en localStorage ese va a ser nuestro valor inicial y si no colocamos un arreglo vacio. <strong>const inicialCart</strong> (en algunos ejemplos la nombran como inicialState pero no lo recomienda en caso de tener varios states)</p> 

              <p>vamos a comprobar si hay algo en este elemento <strong>localStorageCart</strong>. (Si no hay nada devuelve un null) Si tiene algo lo convertimos de string a arreglo con JSON.parse()</p>

                <pre data-line="5"><code className="language-js">
                  const initialCart = () =&gt; &lbracet;
                    const localStorageCart = localStorage.getItem('cart') // lo primero es recuperar de localStorage
                    //a continuación comprobamos si hay algo en esa variable:
                    return localStorageCart ? JSON.parse(localStorageCart): []
                &rbracet;
                const [data, setData] = useState(db)    
                const [cart, setCart] = useState(initialCart)
                </code></pre>
              
            </div>
            
            {/* Explicación uso de localStorage para hacer persistente la app (159. Almacenando las actividades en LocalStorage) */}
            <div className="flex justify-between items-center mt-1.25 cursor-pointer desplegable-interior oscuro" onClick={() => toggleBlock("seccion10-159")}>
              <h3>Explicación uso de localStorage para hacer persistente la app (159. Almacenando las actividades en LocalStorage)</h3>
               <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["seccion10-159"] ? "rotate-180" : ""
                }`}
              >▼</span>
            </div>
            <div id="seccion10-159" className={`ml-2.5 ${openBlocks["seccion10-159"] ? "block" : "hidden"}`}>
              <p>Una buena adición y muy simple de implementar para este proyecto es localStorage. Veamos cómo hacerlo. ¿Donde podríamos colocar la función que escriba en localStorage? Mi reducer podría ser un buen lugar?¿dentro del if de 'save-activity' justo antes del return? sincronizando lo que esté en el state, sería una opción. Sin embargo también habría que agregarlo en el if de la acción 'delete-activity' y en más acciones si las agregara.<span className="destacado"> Otra opción, quizás la más sencilla, es hacerlo en el App.tsx y sincronizar únicamente el state de actividades y pasarlo como dependencia en un useEffect()</span>. <strong>La dependencia en el useEffect, lo que nos interesa que 'esté escuchando para actualizar las actividades guardadadas" es [state.activities]</strong></p>

              <pre data-line="7-9"><code className="language-js">
                //App.tsx
                import &lbracet; useReducer, useEffect &rbracet; from "react"
                ...
                function App() &lbracet;  

                  const [state, dispatch] = useReducer(activityReducer, initialState)  
                
                  useEffect(() =&gt; &lbracet;
                    localStorage.setItem('activities',JSON.stringify(state.activities))
                  &rbracet;, [state.activities])
              </code></pre>

              <div className="flex max-sm:flex-col">
                <div className="w-[50%] max-sm:w-[100%]">
                  <p>Si miramos en la <strong>pestaña aplicación del WDT</strong> vemos que al añadir una actividad nueva se agrega ahí, y si la editamos se actualiza perfectamente porque está sincronizado con el state.</p>
                  <img src="./src/assets/img/159-1.png" alt="img" loading="lazy" />
                </div>
                <div className="w-[50%] max-sm:w-[100%]">
                  <p>Sin embargo si recargamos la página se pierde todo y eso es así porque en nuestro activity-reducers.ts estamos especificando que las actividades inicien como un arreglo vacío con lo que se ejecuta ese useEffect con el arreglo vacío y lo setea en el state.</p>
                  <pre data-line="2"><code className="language-js">
                    //activity-reducers.ts --&gt; nuestro state de actividades se inicia como arreglo vacío.
                    export const initialState: ActivityState = &lbracet;
                      activities: [],
                      activeId: ''
                    &rbracet;
                  </code></pre>
                  <img src="./src/assets/img/159-2.png" alt="img" loading="lazy" />
                </div>
              </div>

              <p className="my-3">Por tanto <span className="destacado">en vez de tener ese valor inicial de arreglo vacío <strong>[]</strong> hemos de tener algo que revise si tenemos algo en localStorage:</span></p>
              
              <ul className="my-3">
                <li>Creamos variable nueva arrow function 'localStorageActivities' (como esto va a residir en localStorage no en nuestro código, TS no puede inferir, así que le especificamos que esta variable arrow function sea de tipo Activity[])</li>
                <li>esta función contiene a su vez una variable 'activities' en la que recuperamos lo que haya en el item 'activities' de localStorage</li>
                <li>return de esa variable; con un ternario especificamos que si tiene algo haga un JSON.parse() de ello y si no sea un arreglo vacío []</li>
                <li>Llamamos a nuestra 'localStorageActivities()' como inicialización de nuestro state</li>
              </ul>
              <pre data-line="1-4,6"><code className="language-js">
                //activity-reducers.ts --&gt; iniciamos nuestro state con esta comprobación de si hay algo en localStorage
                const localStorageActivities = () : Activity[] =&gt;&lbracet;
                  const activities = localStorage.getItem('activities')
                  return activities ? JSON.parse(activities) : []
                &rbracet;
                export const initialState: ActivityState = &lbracet;
                    activities: localStorageActivities(),
                    activeId: ''
                &rbracet;
              </code></pre>
              
            
            </div>

            {/* Uso de tailwind y css/estilos propios en proyecto de html (Curso y tutoriales FO) */}
            <div className="flex justify-between items-center desplegable-interior cursor-pointer oscuro" onClick={() => toggleBlock("usocss")}>	
              <h3>Uso de tailwind y css/estilos propios en proyecto de html (Curso y tutoriales FO)</h3>			
              <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["usocss"] ? "rotate-180" : ""
                }`}
              >▼</span>
            </div>
            <div id="usocss" className={`ml-2.5 ${openBlocks["usocss"] ? "block" : "hidden"}`}>
              <p>Hasta que no de con la tecla (si es posible) par configurar el uso de tailwind en proyectos de este tipo importando en la css principal tanto tylewindcss como css de terceros tipo prism.css, de momento las incluyo en el index.html principal del proyecto así:</p>
              <pre><code className="language-ts">
                &lt;title&gt;Curso React&lt;/title&gt;	
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=2&quot;&gt;	
                &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot;&gt;
                &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin&gt;
                &lt;link href=&quot;https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;    
                
                &lt;script src=&quot;https://unpkg.com/@tailwindcss/browser@4&quot;&gt;&lt;/script&gt;
                &lt;link rel=&quot;stylesheet&quot; href=&quot;./src/assets/prism.css&quot;&gt;
                &lt;link rel=&quot;stylesheet&quot; href=&quot;./src/index.css&quot;&gt;
              
                &lt;script type=&quot;module&quot; src=&quot;./src/assets/prism.js&quot;&gt;&lt;/script&gt;
                &lt;script type=&quot;module&quot; src=&quot;./src/assets/jquery-2.1.4.min.js&quot;&gt;&lt;/script&gt;
                &lt;script type=&quot;module&quot; src=&quot;./src/assets/desplegar.js&quot;&gt;&lt;/script&gt;
              &lt;/head&gt;
              &lt;body&gt;
                &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
                &lt;script type=&quot;module&quot; src=&quot;./src/main.jsx&quot;&gt;&lt;/script&gt;
              </code></pre>
              
            </div>
          </div>
        </div> 
    
        {/* DEPLOY MANUAL EN NETLIFY */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">        			
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("deploymanual-netlify")}>
            <h3>Deploy manual en Netlify</h3>		
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["deploymanual-netlify"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>  
          <div id="deploymanual-netlify" className={`ml-2.5 ${openBlocks["deploymanual-netlify"] ? "block" : "hidden"}`}>            
            <p>vídeo 84. Excelente tutorial para hacer build y deployment a mano. [EN NETLIFY AHORA MISMO TENEMOS LINKADO CON UN REPOSITORIO GIT DEL CURSO DE ANGULAR PARA CONTINUO DEPLOYMENT, EXPLORAR CAMBIAR ESTO ]</p>

            <p>Tenemos todo esto en desarrollo pero tenemos que construirlo, hacer un Build. El comando del package.json "build: vite build"</p>
              
            <p>Si tenemos arrancado en desarrollo nuestro proyecto con <span className="destacado">npm run dev</span>, antes tendremos que hacer un <span className="destacado">q</span> y una vez detenida la previsualización de nuestro proyecto y sí podemos construir<span className="destacado">npm run build</span> --&gt; Hace el build y da un resumen (he creado estos archivos) se crea una carpeta llamada "dist" que contiene nuestro código de producción optimizado y minificado, ya preparado para ser desplegado a producción (vite se encarga de converitr nuestros componentes, dependencias, optimizar, minificar código....) Se genera el archivo index.html, la hoja de estilos y el javascript que contiene una versión de React. Si haces doble click en el html no hace nada, se requiere un hosting especial.</p>
            
            <p>¿falla algo? --&gt; corregimos --&gt; ponemos un <span className="destacado">clear + Enter</span> y volvemos a ejecutar npm run build</p>
            
            <p>Tenemos que subir esa carpeta llamada dist --&gt; la mejor opción hoy día es Netlify que nos va a permitir subir nuestros proyectos
            recomienda logarse con email. Con github si nuestra cuenta es muy nueva comenta que no nos va a dejar, dando problemas que lo hacen por protegerse (PROBAR)</p>
            <p>
            - pulsamos <span className="destacado">sites</span> a la izquierda
            - abajo del todo a la derecha en el <span className="destacado">cuadro con borde punteado "Want to deply a new site....."</span> arrastramos nuestra carpeta dist desde el explorador de archivos
              realiza una serie de opciones y nos aparece la opción "<span className="destacado">Open production deploy</span>" --&gt; aparece nuestro proyecto</p>              
          </div>
        </div>      
    
        {/* PASOS PROYECTO */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("pasos-proyecto")}>
            <h3>Pasos Proyecto (antiguo)</h3>
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["pasos-proyecto"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>
        
          <div id="pasos-proyecto" className={`ml-2.5 ${openBlocks["pasos-proyecto"] ? "block" : "hidden"}`}>  
            <p><span className="destacado">Crear proyecto, instalar dependencias e instalar Tailwindcss</span></p>
            <p className="mt-1.25 mb-0"><span className="destacado">Instalando TailwindCSS y extensión para VSCode: </span> 
              Vamos al link de <strong><a href="https://tailwindcss.com/" target="blank" className="text-[#000000]">https://tailwindcss.com/</a> &gt; docs &gt; installation &gt; Framework guides:</strong> contiene guías específicas de framework para instalar TailwindCSS en un gran número distinto de entornos Vite / Next.js / Angular / Ruby on Rails / Parcel / Symfony / Astro / ... nosotros elegimos Vite. A partir de aquí los pasos varían con respecto a lo que indica en el vídeo porque la versión es más nueva, ver <a className="text-[#000000]" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">https://tailwindcss.com/docs/installation/using-vite</a>:
              </p>
    
              <ul>
                <li>Creación del proyecto y ubicarse en la carpeta ya lo hicimos</li>
                <li>Instalamos Tailwind CSS: instalamos las dependencias 'tailwindcss' y '@tailwindcss/vite' via npm: 
                  <pre><code className="language-js">
                      npm install tailwindcss @tailwindcss/vite
                    </code></pre>
                </li>
                <li><strong>Configurar el plugin de vite:</strong> añadimos el plugin '@tailwindcss/vite' a nuestra configuración de vite en <span className="file">vite.config.ts</span>
                <pre data-line="1,8"><code className="language-ts">
                  import &lbracet; defineConfig &rbracet; from 'vite'
                  import tailwindcss from '@tailwindcss/vite'
                  import react from '@vitejs/plugin-react-swc'
                  
                  // https://vite.dev/config/
                  export default defineConfig(&lbracet;
                    plugins: [
                      react(),
                      tailwindcss()
                    ],
                  &rbracet;)
                </code></pre>
                </li>
                <li><strong>Importar Tailwind CSS en nuestra css:</strong> <span className="file">src&gt;index.css</span> <code className="language-css">@import "tailwindcss";</code></li>
                <li><strong>Comenzar a utilizar las utility classes de Tailwind CSS para dar estilo a nuestro contenido</strong>
                <script type="text/plain" className="language-html">
                  <h1 className="text-3xl font-bold underline">
                    Hello world!
                  </h1>
                </script>
                </li>
              </ul>
    
              <p><strong>Instalamos la extensión Tailwind CSS IntelliSense en el Visual Studio Code</strong>.</p>
            <p><span className="destacado">En el return de nuestro App.tsx comenzamos a agregar código html (contenedores semánticos básicos)</span></p>
            <p><span className="destacado">Creamos nuestro fichero de datos <span className="file">cv.ts</span> (otro ejemplo <a className="txt-blanco" href="https://gist.github.com/codigoconjuan/7ff5b34a0a0773f8c48fd13b51a508aa" target="_blank">gist de datos</a>).</span></p>
            <pre><code className="language-ts">
              import type &lbracet; CVItem &rbracet; from "../types" 
    
              export const cvitem : CVItem[] = [
                  &lbracet;
                      "id": 1,
                      "titulo": "Fotografía macro",
                      "foto": "libelula-dragon.jpg",
                      "altFoto": "Imagen libélula dragón",
                      "textoBoton": "Ver descripción"
                  &rbracet;,
            </code></pre>
    
            <p><span className="destacado">Creamos type <span className="file">types&gt;index.ts</span>para tipar nuestra variable de datos</span> <strong>(mejora el autocompletado y detección de errores)</strong>:</p>
    
            <pre><code className="language-ts">
              export type CVItem = &lbracet;
                id: number,
                titulo: string,
                foto: string,
                altFoto: string,
                textoBoton: string
            &rbracet;                       
            </code></pre>
            <p><span className="destacado">Importamos los datos</span> en nuestro <span className="file">App.tsx</span></p>
            <pre><code className="language-ts">
              import &lbracet; cvitem &rbracet; from './data/cv'
              import Card from './components/card'
            </code></pre>
          
            <p><span className="destacado">Creamos nuestro componente</span> <span className="file">Card.tsx</span>. <strong>Importante crear aquí el type propio para tipar las propiedades que se recipan del componente padre</strong> <span className="file">App.tsx</span></p>
    
            <pre data-line="2-4"><code className="language-ts">
              import &lbracet; CVItem &rbracet; from &quot;../types&quot;
    
              type CardProps = &lbracet;
                  item: CVItem
              &rbracet;        
              export default function Card(&lbracet;item&rbracet;: CardProps)&lbracet;          
                  return(                  
                      &lt;div className=&quot;max-w-3xs border-l-6 border-l-neutral-200 mb-6 mr-9 rounded-lg bg-white shadow-lg shadow-black/20 justify-center&quot;&gt;
                      &lt;p className=&quot;p-2 text-amber-600&quot;&gt;&lt;strong&gt;&lbracet;item.titulo&rbracet;&lt;/strong&gt;&lt;/p&gt;
                      &lt;div className=&quot;card overflow-visible p-2 shadow-4-strong&quot;&gt;
                        &lt;div className=&quot;card-body&quot;&gt;
                          &lt;img className=&quot;radius-shape-XXX &quot; src=&lbracet;`./src/assets/img/$&lbracet;item.foto&rbracet;`&rbracet; alt=&quot;Imagen libélula dragón&quot; /&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;button className=&quot;mx-auto mt-2.5 mb-6.25 bg-amber-900 rotate-1 opacity-75 hover:rotate-3 transition duration-250 hover:scale-110 text-white py-1.5 px-2 block cursor-pointer rounded-md animate-pulse&quot;&gt;       
                        &lbracet;item.textoBoton&rbracet;
                      &lt;/button&gt;
                    &lt;/div&gt;                  
                  )
              &rbracet;
            </code></pre>          
          </div>
        </div>
    
        {/* VERSIONES PROGRAMAS INSTALADOS */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">            
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("programas")}>
              <h3>Versiones programas instalados</h3>		
              <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["programas"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>
          <div id="programas" className={`ml-2.5 ${openBlocks["programas"] ? "block" : "hidden"}`}>  
            <p><a href="https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+actionscript+apacheconf+aspnet+basic+c+csharp+cpp+cobol+http+java+javadoc+javadoclike+jsdoc+js-extras+json+js-templates+less+markdown+markup-templating+pascal+perl+php+phpdoc+php-extras+powershell+python+jsx+tsx+ruby+sas+sass+scss+sql+typescript+typoscript+vbnet&plugins=line-highlight+autolinker+highlight-keywords+remove-initial-line-feed+inline-color+previewers+unescaped-markup+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+diff-highlight+treeview" className="txt-negro" target="blank">Mi configuración de Prism</a></p>
            <p>Visual Studio Code <strong>1.96.4</strong> <span className="destacado">Extensiones:</span> <strong>Tailwind CSS IntelliSense</strong> / <strong>ES7+ React/Redux/React-Native snippets</strong> / <strong>Simple React Snippets</strong> / <strong>Escape HTML Code</strong></p>
            <p>node <strong>v22.13.0</strong> / npm <strong>10.9.2</strong> - <a href="https://nodejs.org/es/" target="_blank">https://nodejs.org/es/</a></p>
            <p>Git for Windows <strong>v2.47.1(2)</strong>  Latest update: January 14th 2025 - <a href="https://git-scm.com/">https://git-scm.com/</a></p>
            <p>Postman <strong>11.29.3</strong> - <a href="https://www.postman.com/">https://www.postman.com/</a></p>
          </div>
        </div>    
      
        {/* Respaldar nuestro proyecto en Github + GitHub Pages + Package.json scripts (del curso de ANGULAR 03/24) */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">				
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("80-81-angular")}>
              <h3>Respaldar nuestro proyecto en Github + GitHub Pages + Package.json scripts (del curso de ANGULAR 03/24)</h3>		
              <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["80-81-angular"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>  
          <div id="80-81-angular" className={`ml-2.5 ${openBlocks["80-81-angular"] ? "block" : "hidden"}`}>                               
            <h3 className="naranja">Respaldar nuestro proyecto en Github</h3>
            
            <p>Github es un servicio en la nube que nos permite darle segumiento a nuestros proyectos de Git. Github pages es un servicio extra que tiene Github en el cual podemos servir contenido estático</p>
            
            <p>en github creamos nuestro repositorio <strong>https://github.com/an.....5/angular-bases</strong></p>
            <p><span className="destacado">git init</span></p>
            <p>preparamos nuestro código fuente para una fotografía que es conocida como un commit</p>
            <p><span className="destacado">git add .</span>: le dice a git todos los cambios que he hecho prepáralos para la fotografía.</p>
            <p><span className="destacado">git commit -m "Fin sección 4"</span></p>
            <p>Ahora ya tengo respaldos de seguridad en el caso de que ahora me cargue algo en mi código :) <span className="destacado">git checkout -- .</span> reconstruye mi proyecto a como estaba en la última fotografía, el último commit.</p>
            <p>Subamos este código a github copiando estos comandos de aquí <a href="https://github.com/an.....5/angular-bases" target="_blank">https://github.com/an.....5/angular-bases</a>:
            <img id="53-1" className="cursor-pointer" src="img/53-1(agular).png" alt="" /> 
            </p>
            <ul className="lista-numbers-black mt-2.5 mb-5 mx-3.75">
                <li><span className="destacado">- git remote add origin https://github.com/an.....5/angular-bases.git</span> crea la referencia al registro de github para que yo suba mi código ahí (añade esta url para ese lugar remoto y le pones por nombre origin)</li>
                <li><span className="destacado">git branch -M main</span> renombra la rama en la que me encuentro y le pones por nombre main</li>
                <li><span className="destacado">git push -u origin main</span> hacer el push de los cambios y establecer el origin como origen por defecto de la rama main. Esto va a tomar todos los cambios de mi repositorio, todos los commit que yo he hecho y lso va a subir a ese repositorio.</li>
            </ul>
            <p>8:26 Cualquier cambio nuevo que hagamos (por ejemplo modificamos el README.md), <strong>git add . +  git commit - m "mensaje" + git push (ya no hay que poner el -u porque establecí el origin por defecto)</strong></p>
            
            <p>Puedo descargar este código y luego hacer un npm install para reconstruir los módulos de node.</p>

            <p><span className="destacado">Ya tenemos la app de angular subida pero no es mi proceso de distribución. Vamos a <strong>settings &gt; menú izquierda "pages" &gt; sources: desde una rama --&gt; main + carpeta docs (que vamos a crear. Esto era en el proyecto Angular. En mi proyecto manual-xxxxx lo dejo en el raiz):</strong></span>. Si vamos a acciones de github, vemos como se está ejecutando. Ya va a haber una acción (un hook) escuchando por cualquier cambio en el directorio especificado. De hecho si cambiamos algo en nuestra app y desde la consola en VSC hacemos lo siguiente:</p>
            
            <h3 className="naranja">GitHub Pages (pendiente hacer acciones automáticas carpeta doc curso angular)</h3>

            <p><strong>GitHub Pages</strong> es un servicio en la nube que nos permite dar seguimiento a nuestros proyectos de Git; es un servicio extra que tiene Github en el cual podemos servir contenido estático (contenido que una vez he generado no va a cambiar). Vamos a subir aquí nuestro build.</p>

            <p>Nos ubicamos en nuestro proyecto (el de angular era 02-bases) y hacemos nuevamente el build de cualquiera de estas dos maneras:</p>
            <ul className="lista-bullet-black">										
                <li><strong>npm run build</strong>: lo corre directamente del angular cli</li>
                <li><strong>ng build</strong>: lo corre tb del angular cli pero basado en el script que tenemos definido en nuestro package.json</li>
            </ul>
            <p>Nos aparece la carpeta de distribución "dist" con todos sus archivos que son lo que tenemos que subir. Vamos a Github.com y creamos un nuevo repositorio <strong>angular-primeros-pasos</strong> y lo dejamos público porque en provado posiblemente nos pida datos de facturación. Lo creamos y nos copiamos los comandos siguientes:</p>
            
            <p><strong>git remote add origin https://github.com/an.....5/angular-primeros-pasos.git<br/>
            git branch -M main<br/>
            git push -u origin main</strong></p>
            
            <p>reinicializamos: <strong>git init</strong> (por si habíamos borrado la carpeta git, él lo hace así para partir del mimsmo punto)</p>
            <p><strong>git add .</strong></p>
            <p><strong>git commit -m "primer commit"</strong></p>
            <p>pegamos los comandos que copiamos antes</p>
            
            <p><strong>git remote add origin https://github.com/an.....5/angular-primeros-pasos.git<br/>
            git branch -M main<br/>
            git push -u origin main</strong></p>
            
            <p><span className="destacado">Ya tenemos la app de angular subida pero no es mi proceso de distribución. Vamos a <strong>settings &gt; menú izquierda "pages" &gt; sources: desde una rama --&gt; main + carpeta docs (que vamos a crear. Esto era en el proyecto Angular. En mi proyecto manual-xxxxx lo dejo en el raiz):</strong></span>. Si vamos a acciones de github, vemos como se está ejecutando. Ya va a haber una acción (un hook) escuchando por cualquier cambio en el directorio especificado. De hecho si cambiamos algo en nuestra app y desde la consola en VSC hacemos lo siguiente:</p>


            <p><span className="destacado">git add .</span></p>
            <p><span className="destacado">git commit -m "el cambio que sea"</span></p>
            <p><span className="destacado">git push</span></p>

            <p>veremos en acciones que hay una nueva ejecutándose y desde ahí mismo una vez terminada podremos accer a la url donde se ha vuelto a "montar" la aplicación con nuestros cambios:
                <a href="https://github.com/an.....5/manual-xxxxx/actions/runs/12948584741">https://github.com/an.....5/manual-xxxxx/actions/runs/12948584741</a><br/>
                <a href="https://an.....5.github.io/manual-xxxxx/">https://an.....5.github.io/manual-xxxxx/</a>
            </p>

            <p>Cogemos nuestra carpeta "bases" que es el producto de nuestro build y dentro del mismo VS Code la arrastramos a la altura del root de nuestra aplicación (al lado del src, del .angular) y la vamos a renombrar por docs. Ahora en la consola <strong>git add . + git commit -m "doc creado" + git push</strong> <span className="destacado">Eso ya nos crea en nuestro proyecto de github la carpeta docs que contiene todos los archivos que vamos a querer poner en un sitio web.</span></p>
            
            <p>Ahora sí seleccionamos en git main y carpeta docs y guardamos. Esto va a empezar a realizar una acción automática que cada vez que hagamos un despliegue (un deployment en la carpeta docs) a la rama main automáticamente va a ejecutar este proceso. Si clickamos "Actions" vemos como va el procedimiento.</p>
            
            <img id="80-1" className="cursor-pointer" src="img/80-1(angular).png" alt="" /> 	
            
            <p>Una vez termina si pulsamos la url que nos facilita nos da blancazo y es porque tenemos que cambiar el base href de nuestro index. Lo tocamos en nuestro build de VS Code, hacemos nuevamente <strong>git add . + git commit -m "actualizado base href './'" + git push</strong> y esperamos de nuevo que finalice la acción de git. Limpiamos caché de navegador y ya nos funciona.</p>
            
            <p>A continuación veremos un proceso semiautomatizado para evitar tener que hacer todo esto manualmente, porque cada vez que hago un ng build eso va a sobreescribir muchas cosas y vamos a <strong>tener que volver a mover la carpeta "browser" de dist&gt;base&gt;browser al root, cambiar de nuevo el base ref del index a './' hacer el git add+commit+push...</strong>. Esto se presta a ver algo interesante que podemos hacer en unas apps de node y que fácilmente saquemos provecho a los scripts del package.json de nuestra app.</p>
                        
            <h3 className="naranja">Package.json scripts</h3>
                
            <p>Clase "bonus" para automatizar la construcción de esta carpeta doc que tenga el index además el path que ha de tener. Explica como en el cmd podemos crear un directorio <strong>mkdir temporal</strong> y eso mismo podriamos hacerlo creando un nuevo script (separado por coma) en nuestro package.json. --&gt; <span className="naranja">"new:folder": "mkdir temporal2"</span>. En la terminal ejecuto ese comando como <span className="destacado">npm run new:folder</span> y se nos crea la carpeta.</p>
            
            <p>Veamos una serie de procesos para automatizar la construcción para github. El proceso del build que tenemos en nuestro package.json está bien técnicamente, pero necesito uno en el que yo tenga el <strong>base href="./"</strong> así configurado en vez de así <strong>base href="/"</strong>. <span className="destacado">Si en la terminal ejecutamos <strong>ng build --help</strong> nos salen todas las "banderas" que podemos ejecutar. Ejecutamos el --base-href que sirve para cambiar el base url de la app que estamos construyendo: <strong>ng build --base-href ./</strong></span>. En nuestro package.json añadimos un nuevo script a continuación del build por defecto que dice <span className="naranja">"build:href": "ng build --base-href ./"</span> tendremos que poner en terminal <span className="destacado">npm run build:href</span></p>
            
            <p>Para hacer los dos scripts siguientes (borrar la carpeta docs y copiar ficheros, instala dos paquetes de node para aumentar la compatibilidad y que las instrucciones que vemos para crear estos scripts nos valgan independientemente de si usamos windows, lynux...):</p>
            
            <ul className="lista-bullet-black">
                <li> <strong>Borrar la carpeta docs</strong> <a className="rojo" href="https://www.npmjs.com/package/del-cli" target="_blank">Paquete Npm  "del-cli"</a>. No lo instalamos de manera global. Vamos a la terminal integrada de Vs Code e instalamos el paquete como una dependencia de desarrollo <strong>npm install del-cli --save-dev</strong>. Esto nos va a permitir a nosotros ejecutar los comandos correspondientes para eliminar archivos. Vamos a nuestro <strong>package.json</strong> y creamos nuevo script para borrar la carpeta "docs" <span className="destacado">"delete:docs": "del docs"</span>. En la terminal ponemos <span className="destacado">npm run delete:docs</span></li>
                <li> <strong>Copiar</strong>: <a className="rojo" href="https://www.npmjs.com/package/copyfiles" target="_blank">Paquete Npm "CopyFiles"</a>. Instalamos el paquete como una dependencia de desarrollo <strong>npm install copyfiles --save-dev</strong>. Vamos a nuestro <strong>package.json</strong> y creamos nuevo script para copiar todo lo que tenemos dentro de la carpeta "/dist/base/browser" a la carpeta "docs" <span className="destacado">"copy:dist": "copyfiles dist/bases/browser/* ./docs -f"</span>. En la terminal ponemos <span className="destacado">npm run copy:dist</span></li>
                <li> Hagamos ahora un script que nos sirva para hacer todo de una sola vez, un script para hacer el build listo para github<span className="span naranja">"build:github": "npm run delete:docs &amp;&amp; npm run build:href &amp;&amp; npm run copy:dist"</span>. En la terminal pondremos <span className="destacado">npm run build:github</span> y ya tendremos nuestro build de producción listo para hacer con él lo que queramos.</li>
            </ul>     
          </div>
        </div>    

        {/* TAREAS FO */}
        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto bg-gray-200 my-1.25">
          <div className="flex justify-between items-center desplegable cursor-pointer" onClick={() => toggleBlock("tareasfo")}>
            <h3>Tareas FO</h3>		
            <span className={`mr-2.5 transition-transform duration-200 ${openBlocks["tareasfo"] ? "rotate-180" : ""
                }`}
            >▼</span>
          </div>        
          <div id="tareasfo" className={`ml-2.5 ${openBlocks["tareasfo"] ? "block" : "hidden"}`}> 
            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
              </svg>
              <span className="verde">COMPLETADAS</span>

              <div> 
                <ul className="list-disc ml-5">
                  <li className="line-through">portfolio-XXX</li>
                  <li className="line-through">Códigos javascript de primeros videos</li>
                  <li className="line-through">Hacer build de Delorean</li>
                  <li className="line-through">Seguir con mejoras de diseño en nueva rama de calorie-tracker</li>
                  <li className="line-through">seguir limpiando estilos DIARIO</li>
                  <li className="line-through">Sección 11 Migrar el carrito de compras a useReducer --&gt; 171-175 / 20-02 177 /</li>
                  <li className="line-through">Publicar Diario para TENERLO de consulta (QUITAR TODAS LAS REF PERSONALES POSIBLES Y CAMBIAR A NOMBRE)</li>
                </ul>             
                
              </div>
            </div>

            <div className="mt-3 mb-2 ml-1.5 pl-2.5 pt-0.5 pb-2  border-l-2 border-dashed border-l-stone-600 rounded-tl-2xl rounded-bl-2xl bg-neutral-50 shadow-lg">
              <svg className="size-6 shrink-0 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
              </svg>
              <span className="rojo">HACIENDO</span>

              <div className="flex flex-col">      
                <ul className="list-disc ml-5">        
                <li>Actualizar el portfolio con Calorie Tracker ¿MEJORAS?</li>
                <li>Crear nueva rama y rediseñar guitarla-ur para añadirla al portfolio</li>

                <li><a href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/42829276#overview" target="blank">curso udemy react</a></li>
                <li>Quitar jquery de portfolio: - link DOM typescript -&gt; https://fullstackpro.es/courses/curso-typescript/gestion-del-dom</li>
                <li>Arreglar despliegue automático portfolio en netlify (Nuevo y cambiar de nombre) X18/08 - XX19/02 (desinstalado cli de netlify y vuelto a instalar, no global sino dev)</li>              
                <li>¿Mejoras css en visualización de imágenes de proyectos?</li>
                <li>¿Mejorar componente modal panel?</li>
                <li>Añadir boton encendido y apagado de CSS (y mirar mas)</li>  
                
                <li>Páginas individuales para secciones <a href="https://medium.com/@diego.coder/primeros-pasos-con-react-router-dom-7a142e5b2ca9" target="_blank">(React Router Dom Diego Esteban)</a></li>
                <li>Hacer build de Calendario litúrgico</li>
                <li>Hacer build de Silmarillion</li>
              </ul>
              </div>
            </div> 
          </div>
        </div>

        <div className="p-2.5 max-sm:p-2 rounded-md w-[90%] max-sm:w-[100%] mx-auto">
          <a className="underline" href="https://www.chucksacademy.com/es/topic/react-intermediate/cache" target="_blank">Estrategias de Cache y Persistencia de Datos en React</a>
        </div>



       

    </div>
    </div>
    
   

    </>
  );
}