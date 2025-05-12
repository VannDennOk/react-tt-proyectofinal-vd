/*   const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)
    if (productExist) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item))
    } else {
      setCart([...cart, product])
    }
  } */

  const borrarProducto = (product) => {
    setCart(cart.filter(item => item.id != product.id))
    /* setCart(preVCart => {
      return preVCart.map(item => {
        if (item.id === product.id) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 }
          } else {
            return null
          }

        } else {
          return item
        }
      }).filter(item => item != null)
    }) */
  }
