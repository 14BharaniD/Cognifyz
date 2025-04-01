import React from 'react';
import axios from 'axios';
import styles from '../styles/App.module.css'; // Import CSS Module

const ItemList = ({ items, setItems, setEditItem }) => {
    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/api/items/${id}`)
            .then(() => setItems(items.filter(item => item._id !== id)))
            .catch(err => console.error(err));
    };

    return (
        <ul className={styles.list}>
            {items.map(item => (
                <li key={item._id} className={styles.listItem}>
                    {item.name}
                    <div>
                        <button onClick={() => setEditItem(item)} className={`${styles.button} ${styles.editButton}`}>Edit</button>
                        <button onClick={() => deleteItem(item._id)} className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
