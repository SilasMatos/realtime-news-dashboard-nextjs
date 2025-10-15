// pages/usuarios.tsx
import React from 'react'

type Usuario = {
  id: number
  name: string
  email: string
}

type Props = {
  usuarios: Usuario[]
}

export default async function ProductsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log('res', res)
  const usuarios: Usuario[] = await res.json()
  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Usuários (SSR)</h1>
      <ul>
        {usuarios?.map((usuario: Usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Função SSR (executada no servidor a cada requisição)
