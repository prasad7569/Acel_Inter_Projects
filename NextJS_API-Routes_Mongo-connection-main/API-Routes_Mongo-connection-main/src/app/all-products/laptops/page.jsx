
"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

const page = () => {
    const [laptops, setLaptops] = useState([])

    const productHandler = async()=>{
        const response = await fetch("http://localhost:3000/api/products/laptops");
        const resData = await response.json();

        console.log("checking for products", resData)
        setLaptops(resData.laptopData)
    }

    useEffect(()=>{
        productHandler()
    },[])

    const productDeleteHandler= async(productId)=>{
            console.log("dynamic Id", productId)
            const response = await fetch(`http://localhost:3000/api/products/laptops?id=${productId}`,{
               method:'DELETE' 
            });
            const result = await response.json()
            console.log("deleted product", result)
            setLaptops(laptops.filter((item)=>item._id !== productId))
            alert("product deleted successfully!")
    }

  return (
    <div>
        <h1>Laptop Products</h1>
        <table border="1">
            <thead>
               <tr>
               <th>Laptop Id</th>
                <th>Title</th>
                <th>Model</th>
                <th>Price</th>
                <th>Action</th>

               </tr>
            </thead>
            <tbody>
                {laptops.map((item)=>{
                    return(
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
 
                            <td>{item.laptopmodel}</td>
                            <td>{item.laptopprice}</td>
                            <td>
                                <Link href={`/all-products/laptops/${item._id}`}>
                             
                                <button
                                style={{background:'orange', color:'white'}}
                                >Update</button>
                                   </Link>
                            </td>
                            <td>
                                <button onClick={()=>productDeleteHandler(item._id)}
                                 style={{background:'red', color:'white'}}
                                >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      
    </div>
  )
}

export default page
