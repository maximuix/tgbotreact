import React, {useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'синего цвета, прямые'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'синего цвета, прямые'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'синего цвета, прямые'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'синего цвета, прямые'},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, SetAddedItems] = useState([])
    const {tg} = useTelegram()

    const onAdd = (product) => {
        const alReadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = []

        if (alReadyAdded) {
            newItems = alReadyAdded.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        SetAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className="list">
            {products.map(item => {
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className='item'/>
            })
            }
        </div>
    );
};

export default ProductList;