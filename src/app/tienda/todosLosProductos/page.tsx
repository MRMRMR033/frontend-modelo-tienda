"use client"
import { ContextoProductos } from '@/app/Providers/ProviderProductos'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const page = () => {
    const router = useRouter()
    const {productos} = useContext(ContextoProductos)    
    function redireccionarAlProducto(id: number){
        router.push(`/tienda/productos/${id}`)
    }
    return (
    <div id="seccion-todos-los-productos">
        <h5>Todos los Productos</h5>
     {
        productos.map(producto => (
            <div  id="seccion-todos-los-productos-producto" key={producto.id} onClick={() => redireccionarAlProducto(producto.id)}>
               <p>{producto.nombre}</p>
            </div>
        ))
     }
    </div>
  )
}

export default page