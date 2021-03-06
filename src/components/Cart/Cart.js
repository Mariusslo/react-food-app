import { useContext } from 'react/cjs/react.development';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    }

    const cartItems = cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />);
    const cartList = <ul className={styles['cart-items']}>{cartItems}</ul>

    return (
        <Modal onClose={props.onClose}>
            {cartList}
            <div className={styles.total}>
                <spand>Total Amount</spand>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
               {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;