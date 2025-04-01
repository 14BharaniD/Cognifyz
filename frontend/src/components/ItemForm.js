import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/App.module.css'; // Import CSS Module

const ItemForm = ({ setItems, editItem, setEditItem }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        if (editItem) {
            setName(editItem.name);
        } else {
            setName('');
        }
    }, [editItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem) {
            axios.put(`http://localhost:5000/api/items/${editItem._id}`, { name })
                .then(res => {
                    setItems(prev => prev.map(item => item._id === res.data._id ? res.data : item));
                    setEditItem(null);
                    setName('');
                })
                .catch(err => console.error(err));
        } else {
            axios.post('http://localhost:5000/api/items', { name })
                .then(res => setItems(prev => [...prev, res.data]))
                .catch(err => console.error(err));
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item name"
                required
            />
            <button type="submit" className={`${styles.button} ${styles.addButton}`}>
                {editItem ? 'Update Item' : 'Add Item'}
            </button>
            {editItem && (
                <button onClick={() => setEditItem(null)} className={styles.button}>
                    Cancel
                </button>
            )}
        </form>
    );
};

export default ItemForm;
