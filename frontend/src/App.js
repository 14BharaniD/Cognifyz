import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import styles from './styles/App.module.css'; // Import CSS Module

function App() {
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.container}>
            <h1>CRUD App</h1>
            <ItemForm setItems={setItems} editItem={editItem} setEditItem={setEditItem} />
            <ItemList items={items} setItems={setItems} setEditItem={setEditItem} />
        </div>
    );
}

export default App;
