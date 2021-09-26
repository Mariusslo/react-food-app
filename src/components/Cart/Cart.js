import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = props => {
    const cartItems = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: 2,
            price: 12.99
        }
    ].map(item => <li>{item.name}</li>);

    const cartList = <ul className={styles['cart-items']}>{cartItems}</ul>

    return (
        <Modal onClose={props.onClose}>
            {cartList}
            <div className={styles.total}>
                <spand>Total Amount</spand>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;