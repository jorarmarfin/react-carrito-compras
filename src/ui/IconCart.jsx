import cartSvg from '../assets/icons/cart.svg';
import {useState} from "react";
export const IconCart = () => {
    const [isHovered, setIsHovered] = useState(true);
    return (
        <div className='relative'>
            <div
                className="cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={cartSvg} alt='cart' className='w-10 text-white'/>
                {isHovered && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                        <div className="p-4">
                            <h2 className="text-lg font-bold">El carrito está vacío</h2>
                            <table className="w-full mt-2">
                                <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <img src="/path/to/guitar-image.jpg" alt="Guitar" className="w-8 h-8"/>
                                    </td>
                                    <td>SRV</td>
                                    <td>$299</td>
                                    <td>
                                        <button>-</button>
                                        1
                                        <button>+</button>
                                        <button>x</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="mt-4">
                                <p className="text-right font-bold">Total pagar: $299</p>
                                <button className="mt-2 w-full bg-black text-white py-2 rounded-lg">
                                    VACIAR CARRITO
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}