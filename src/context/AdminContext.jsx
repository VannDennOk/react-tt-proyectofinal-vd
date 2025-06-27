import { createContext, useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [carga, setCarga] = useState(true);
    const [open, setOpen] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false)
    const [error, setError] = useState(false);

    const apiUrl = 'https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins';

    const { setProductos } = useContext(CartContext);

    //Conexión con MockAPI OK
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setCarga(false);
                }, 2000);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                setError(true);
                setCarga(false);
            })
    }, []);

    //Al agregar o eliminar un producto se va a refrescar sin recargar toda la página OK
    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log('Error al cargar productos', error);
        }
    }

    //Agregar producto nuevo con SweetAlert Personalizado OK
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}`, {
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
            Swal.fire({
                title: '¡Listo!',
                text: 'El producto fue agregado correctamente',
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
            cargarProductos()
            setProductos((prev) => [...prev, data])
        } catch (error) {
            Swal.fire({
                title: '¡Ups!',
                text: 'Hubo un problema al agregar el producto',
                iconHtml: '<i class="fa-solid fa-circle-xmark" style="color: var(--colorRojo);"></i>',
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
        }
    }

    //Editar producto con SweetAlert Personalizado OK
    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw Error('Error al actualizar el producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                title: '¡Listo!',
                text: 'El producto fue editado correctamente',
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
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
            setProductos((prev) =>
                prev.map((p) => (p.id === data.id ? data : p))
            );
        } catch (error) {
            Swal.fire({
                title: '¡Ups',
                text: 'Hubo un problema al editar el producto',
                iconHtml: '<i class="fa-solid fa-circle-xmark" style="color: var(--colorRojo);"></i>',
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
        }
    }

    //Eliminar un producto por ID con SweetAlert Personalizado OK
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
            const respuesta = await fetch(`${apiUrl}/${id}`,
                { method: 'DELETE' }
            );
            if (!respuesta.ok) throw new Error('Error al eliminar');
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
            Swal.fire({
                title: '¡Ups!',
                text: 'Hubo un problema al eliminar el producto',
                iconHtml: '<i class="fa-solid fa-circle-xmark" style="color: var(--colorRojo);"></i>',
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
        }
    };

    return (
        <AdminContext.Provider
            value={{
                products,
                carga,
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