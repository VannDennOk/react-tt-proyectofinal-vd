import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false)
    const apiUrl = 'https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins';

    //Conexión con MockAPI
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                setError(true);
                setLoading(false);
            })
    }, []);

    //Al agregar o eliminar un producto se va a refrescar sin recargar toda la página
    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log('Error al cargar productos', error);
        }
    }

    //Agregar producto nuevo
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            alert('Producto agregado correctamente')
            cargarProductos()
        } catch (error) {
            console.log(error.message);
        }
    }

    //Editar producto
    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) throw Error('Error al actualizar el producto')
            const data = await respuesta.json()
            alert('Producto editado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            alert('hubo un error al editar el producto')
        }
    }

    //Eliminar un producto por ID
    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('Estás seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins/${id}`, {
                    method: 'DELETE',
                })
                if (!respuesta.ok) throw Error('Error al eliminar')
                alert('producto eliminado correctamente')
                cargarProductos()
            } catch (error) {
                alert('hubo un problema al eliminar el producto')
            }
        }
    }

    return (
        <AdminContext.Provider
            value={{
                products,
                loading,
                open,
                setOpen,
                openEditor,
                setOpenEditor,
                seleccionado,
                setSeleccionado,
                agregarProducto,
                actualizarProducto,
                eliminarProducto,
            }}>
            {children}
        </AdminContext.Provider>
    )
}