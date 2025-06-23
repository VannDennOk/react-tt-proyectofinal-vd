import { createContext, useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false)
    const [error, setError] = useState(false);

    const apiUrl = 'https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins';

    const { setProductos } = useContext(CartContext);

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
            toast.success('Producto agregado correctamente')
            cargarProductos()
            setProductos((prev) => [...prev, data])
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
            toast.success('Producto editado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
            setProductos((prev) =>
                prev.map((p) => (p.id === data.id ? data : p))
            );
        } catch (error) {
            toast.error('hubo un problema al editar el producto')
        }
    }

    //Eliminar un producto por ID
    /*     const eliminarProducto = async (id) => {
            const confirmar = window.confirm('Estás seguro de eliminar el producto?')
            if (confirmar) {
                try {
                    const respuesta = await fetch(`https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins/${id}`, {
                        method: 'DELETE',
                    })
                    if (!respuesta.ok) throw Error('Error al eliminar')
                    toast.success('producto eliminado correctamente')
                    cargarProductos()
                    setProductos((prev) => prev.filter((p) => p.id !== id));
                } catch (error) {
                    toast.error('hubo un problema al eliminar el producto')
                }
            }
        } */

    //Eliminar un producto por ID con SweetAlert Personalizado
    const eliminarProducto = async (id) => {
        const { isConfirmed } = await Swal.fire({
            title: '¿Seguro que deseas eliminar el producto?',
            text: '¡No podrás deshacer esta acción!',
            iconHtml: '<i class="fas fa-exclamation-triangle fa-1x" style="color: var(--colorAmarillo);"></i>',
            iconColor: 'transparent',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',

            customClass: {
                popup: 'mi-popup',
                title: 'mi-title',
                htmlContainer: 'mi-text',
                confirmButton: 'btn-negro btn-160',
                cancelButton: 'btn-blanco  btn-160',
            }
        });

        if (!isConfirmed) return;
        try {
            const respuesta = await fetch(
                `https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins/${id}`,
                { method: 'DELETE' }
            );

            if (!respuesta.ok) throw new Error('Error al eliminar');
            // Swal.fire('Listo', 'El producto fue eliminado correctamente', 'success');
            Swal.fire({
            title: '¡Listo!',
            text: 'El producto fue eliminado correctamente',
            iconHtml: '<i class="fas fa-check-circle fa-1x" style="color: var(--colorVerde);"></i>',
            iconColor: 'transparent',
            showCancelButton: false,
            confirmButtonText: 'Ok',

            customClass: {
                popup: 'mi-popup',
                title: 'mi-title',
                htmlContainer: 'mi-text',
                confirmButton: 'btn-negro btn-160',
            }
        })
            
            
            cargarProductos();
            setProductos((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            toast.error('Hubo un problema al eliminar el producto');
            console.error(error);
        }
    };






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
                form,
                setForm,
                error,
            }}>
            {children}
        </AdminContext.Provider>
    )
}