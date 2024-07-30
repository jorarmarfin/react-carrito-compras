import logo from './assets/images/logo.svg';
import {IconCart} from "./ui/index.js";
import {useDispatch} from "react-redux";
import {addProducts} from "./store/slices/CartSlice.jsx";

const data = [
    {
        id: 1,
        name: 'LUKATHER',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 299,
        image: '/src/assets/images/guitarra_01.jpg',
    },
    {
        id: 2,
        name: 'SRV',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 190,
        image: '/src/assets/images/guitarra_02.jpg',
    },
    {
        id: 3,
        name: 'BORLAND',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 309,
        image: '/src/assets/images/guitarra_03.jpg',
    },
    {
        id: 4,
        name: 'VAI',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 80,
        image: '/src/assets/images/guitarra_04.jpg',
    },
    {
        id: 5,
        name: 'THOMPSON\n',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 500,
        image: '/src/assets/images/guitarra_05.jpg',
    },
    {
        id: 6,
        name: 'WHITE',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 680,
        image: '/src/assets/images/guitarra_06.jpg',
    },
    {
        id: 7,
        name: 'COBAIN',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 65.3,
        image: '/src/assets/images/guitarra_07.jpg',
    },
    {
        id: 8,
        name: 'DALE',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 900,
        image: '/src/assets/images/guitarra_08.jpg',
    },
    {
        id: 9,
        name: 'KRIEGER',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 1200,
        image: '/src/assets/images/guitarra_09.jpg',
    },
    {
        id: 10,
        name: 'CAMPBELL\n',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 680,
        image: '/src/assets/images/guitarra_10.jpg',
    },
    {
        id: 11,
        name: 'REED',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 800,
        image: '/src/assets/images/guitarra_11.jpg',
    },
    {
        id: 12,
        name: 'HAZEL',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
        price: 100.5,
        image: '/src/assets/images/guitarra_12.jpg',
    }
];

export const App = ()=> {
    const dispatch = useDispatch();

    const handleAddProduct = (product) => {
        dispatch(addProducts(product));
    }

    return (
    <>
      <header className=' px-20 flex bg-img-header bg-cover bg-top opacity-100 justify-between'>
          <div className='p-5'><img className='w-40' src={logo}/>logo</div>
          <div className='p-6'>
              <IconCart/>
          </div>
      </header>
        <div className='container '>
            <h1 className='text-center py-10'>Nuestra Colección</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((item) => (
                            <div key={item.id} className='card flex'>
                                <div className=''><img src={item.image}/></div>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p className='price'>${item.price}</p>
                                    <button onClick={()=>handleAddProduct(item)} className='btn'>Añadir al carrito</button>
                                </div>
                            </div>
                        ))
                }
            </div>

        </div>

    </>
  )
}

