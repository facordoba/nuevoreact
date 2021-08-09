import ItemCount from "./ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import  mock from "./mock.json"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting}) =>{
    const onAdd = a => console.log("La cantidad es: " + a)

    const [items, setItems] = useState([])
    useEffect(()=>{
        
         const test = new Promise((resolve, reject)=>{  
            setTimeout(() => {
                resolve(mock)
          }, 2000);
        })
        test.then((a)=>setItems(a))
         }, [])

    /* const pedido = fetch('https://jsonplaceholder.typicode.com/posts')   
    .then(a => a.json()  )
    .then(a => console.log(a)  ) */
    return(
        <>
            <p>{greeting}</p>
            <ItemCount stock={3} initial={1} onAdd={ onAdd } />
            <ItemList items={items}/>
        </>
    )
}

export default  ItemListContainer
