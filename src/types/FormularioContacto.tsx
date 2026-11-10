import { useFormulario } from '../hooks/useFormulario';

export function FormularioContacto() {
  const {
    nombre,
    setNombre,
    email,
    setEmail,
    mensaje,
    setMensaje,
    error,
    enviadoConExito,
    esValido,
    handleSubmit,
  } = useFormulario();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
      
      <h1 className="text-2xl font-bold text-indigo-600 mb-1">Portafolio de Carlos</h1>
      <p className="text-gray-500 text-sm mb-6">Envíale un mensaje de contacto</p>

      {enviadoConExito && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm text-center">
          ¡Gracias por tu mensaje! Pronto te responderemos.
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-500 text-xs text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="¿Qué proyecto tienes en mente?"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={!esValido}
          className={`w-full font-semibold py-2 px-4 rounded transition text-white ${
            esValido
              ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Enviar Mensaje
        </button>

      </form>

    </div>
  );
}