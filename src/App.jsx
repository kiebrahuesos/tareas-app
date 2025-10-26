import { useState } from "react";
import "./index.css";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (!tarea.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto: tarea, editando: false }]);
    setTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map((t) =>
      t.id === id ? { ...t, texto: nuevoTexto, editando: false } : t
    ));
  };

  const habilitarEdicion = (id) => {
    setTareas(tareas.map((t) =>
      t.id === id ? { ...t, editando: true } : t
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Lista de Tareas</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea..."
          className="border rounded-lg px-3 py-2 w-64"
        />
        <button
          onClick={agregarTarea}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Agregar
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tareas.map((t) => (
          <li
            key={t.id}
            className="bg-white shadow-md rounded-lg p-3 mb-2 flex justify-between items-center"
          >
            {t.editando ? (
              <input
                type="text"
                defaultValue={t.texto}
                onBlur={(e) => editarTarea(t.id, e.target.value)}
                className="border-b-2 border-blue-400 focus:outline-none w-full mr-2"
                autoFocus
              />
            ) : (
              <span>{t.texto}</span>
            )}

            <div className="flex gap-2">
              {!t.editando && (
                <button
                  onClick={() => habilitarEdicion(t.id)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => eliminarTarea(t.id)}
                className="text-red-500 hover:text-red-600"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
