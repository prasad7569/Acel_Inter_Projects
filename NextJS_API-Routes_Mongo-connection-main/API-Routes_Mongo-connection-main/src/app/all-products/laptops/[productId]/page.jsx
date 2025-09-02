"use client"

import { useState, useEffect } from 'react'
import styles from '../../../addproducts/products.module.css'

const page = ({params}) => {

    const id = params.productId

    const [name, setName] = useState("");
    const [laptopmodel, setLaptopModel] = useState("")
    const [laptopprice, setLaptopPrice] = useState("")


    const getProductHandler = async()=>{
            const response = await fetch(`http://localhost:3000/api/products/laptops/update/${id}`)
            const singleRecord = await response.json();
            console.log("checking for single record", singleRecord)
            setName(singleRecord.productRecord.name)
            setLaptopModel(singleRecord.productRecord.laptopmodel)
            setLaptopPrice(singleRecord.productRecord.laptopprice)

    }

    useEffect(()=>{
        getProductHandler()
    }, [])

    const productUpdateHandler = async(e)=>{
        e.preventDefault()

        const response = await fetch(`http://localhost:3000/api/products/laptops?id=${id}`,{
            method:'PUT', 
            body:JSON.stringify({newTitle:name, newModel:laptopmodel, newPrice:laptopprice})
        })
        const result = await response.json();
        console.log("this is updated prodcut", result)
        alert("product updated")
    }


  return (
    <div>
      <h1>Dynamic routing</h1>
      <form className={styles.formSection} onSubmit={productUpdateHandler}>
            <div className={styles.formInp} >
                <h3>Laptop Name</h3>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className={styles.formInp}>
                <h3>Model</h3>
                <input type="text" value={laptopmodel} onChange={(e)=>setLaptopModel(e.target.value)}/>
            </div>
            <div className={styles.formInp}>
                <h3>Price</h3>
                <input type="text" value={laptopprice} onChange={(e)=>setLaptopPrice(e.target.value)}/>
            </div>
            <button type='submit' className={styles.formBtn}>Update Product</button>
        </form>
    </div>
  )
}

export default page
