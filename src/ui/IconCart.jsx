import cartSvg from '../assets/icons/cart.svg';
import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, decrementQuantity, deleteProduct, incrementQuantity} from "../store/slices/CartSlice.jsx";
export const IconCart = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.Cart.products);
    const totalPrice = useMemo(() => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    }, [products]);
    const isEmpty = useMemo(() => {
        return products.length === 0;
    }, [products]);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);




    return (
        <div className='relative'>
            <div
                className=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={cartSvg} alt='cart' className='w-10 text-white'/>
                {isHovered && (
                    <div className="absolute right-0 top-1 mt-2 w-80 bg-white border rounded-lg shadow-lg z-10">
                        <div className="p-4">
                            {
                                isEmpty && (
                                    <h2 className="text-lg font-bold">El carrito está vacío</h2>
                                )
                            }
                            {
                                !isEmpty && (
                                    <>
                                        <table className="w-full mt-2 table">
                                            <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                products.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            <img src={product.image} alt={product.name}
                                                                 className="w-8 h-8"/>
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td>${product.price}</td>
                                                        <td>
                                                            <button onClick={() => dispatch(decrementQuantity(product))}
                                                                    className='btn-minus'>-
                                                            </button>
                                                            {product.quantity}
                                                            <button onClick={() => dispatch(incrementQuantity(product))}
                                                                    className='btn-plus'>+
                                                            </button>
                                                            <button onClick={() => dispatch(deleteProduct(product))}
                                                                    className='btn-delete'>x
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        <div className="mt-4">
                                            <p className="text-right font-bold">Total pagar:${totalPrice.toFixed(2)} </p>
                                            <button onClick={() => dispatch(clearCart())}
                                                    className="mt-2 w-full bg-black text-white py-2 rounded-lg">
                                                VACIAR CARRITO
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}