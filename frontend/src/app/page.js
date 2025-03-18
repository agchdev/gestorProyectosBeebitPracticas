"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("No se pudo cargar la lista de usuarios.");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
    try {
      await axios.post(`${API_URL}/users`, {
        name: "Nuevo Usuario",
        role: "user",
      });

      await fetchUsers(); // Asegurar que la UI se actualiza con los datos nuevosç
    } catch (err) {
      console.log("Usuario creado");
      console.error("Error creando usuario:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.role}
            </li>
          ))
        ) : (
          <p>No hay usuarios registrados.</p>
        )}
      </ul>
      <button className="bg-red-100 p-3 rounded-full cursor-pointer" onClick={addUser}>Añadir Usuario</button>
    </div>
  );
}
