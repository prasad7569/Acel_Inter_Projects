
"use client"

import React, { useState } from 'react'
import styles from '../products.module.css'


const page = () => {
    const [name, setName] = useState()
    const [model, setModel] = useState()
    const [price, setPrice] = useState()

    const laptopDataHandler = async(e)=>{
        e.preventDefault()
            const response = await fetch("http://localhost:3000/api/products/laptops",{
                    method:'POST', 
                    "Content-type":"application/json",
                    body:JSON.stringify({name,  laptopmodel:model,  laptopprice:price})
            })
            if(response.ok){
                alert("laptop added successfully")
            }
            setName("")
            setModel("")
            setPrice("")
    }

  return (
    <div>
        <form className={styles.formSection} onSubmit={laptopDataHandler}>
            <div className={styles.formInp} >
                <h3>Laptop Name</h3>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className={styles.formInp}>
                <h3>Laptop Model</h3>
                <input type="text" value={model} onChange={(e)=>setModel(e.target.value)}/>
            </div>
            <div className={styles.formInp}>
                <h3>Laptop Price</h3>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button type='submit' className={styles.formBtn}>Add Laptop</button>
        </form>

    </div>
  )
}

export default page
