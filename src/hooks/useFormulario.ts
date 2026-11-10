import { useState, type FormEvent } from 'react';

export function useFormulario() {

  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [enviadoConExito, setEnviadoConExito] = useState<boolean>(false);

  const esValido = nombre.trim() !== '' && email.trim() !== '' && mensaje.trim() !== '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!esValido) {
      setError('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    setError('');
   
    setEnviadoConExito(true);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return {
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
  };
}