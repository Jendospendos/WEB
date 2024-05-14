import Order from './Order';
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im";
import { useState, useRef, useEffect } from 'react'


const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />

        ))}
        <p className='summa'>Total: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h3>Empty</h3>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    const cartRef = useRef(null);

    const handleCloseCart = () => {
        setCartOpen(false);
    }

    const handleCartButtonClick = () => {
        setCartOpen(!cartOpen);
    }

    const handleClickOutsideCart = (e) => {
        if (cartRef.current && !cartRef.current.contains(e.target)) {
            setCartOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideCart);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideCart);
        };
    }, []);

    return (
        <header>
            <nav>
                <ul className='nav'>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Home |</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/profile'>Profile |</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/contacts'>Ask a question |</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/button" >Shop</Link> 
                        
                    </li>
                    <div id="indicator"></div>
                </ul>
            </nav>

            <ImCart onClick={handleCartButtonClick} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
                <div ref={cartRef} className='shop-cart'>
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                </div>
            )}
        </header>
    )
}