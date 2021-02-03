import React, {useState, useEffect} from 'react'
import {getProducts, getCategory} from "./helper/coreapicalls"
import Base from "./Base"
import Card from "./Card"
import "../styles.css"




export default function Home() {

    const [products, setProducts] = useState([]);
    const [categorys, setCategory] = useState([]);
    const [error, setError] = useState(false) 
    
    const loadAllProducts = () => {
        getProducts()
        .then(data => {
            if(data && data?.error) {
                setError(data.error)
                console.log(error)
                
            }else {
                setProducts(data);
                
            }
        });
    };
        useEffect(()=> {
            loadAllProducts();
        },[])


    const loadAllCategorys = () => {
        getCategory()
        .then(data => {
            if(data && data?.error) {
                setError(data.error)
                console.log(error)
                
            }else {
                setCategory(data);
                
            }
        });
    };
        useEffect(()=> {
            loadAllCategorys();
        },[])
        
        
            return (

                <Base title="Home Page" description="Welcome to Tshirt store">
                    
                    <div className="row">
                        
                        {categorys.map((category , index) => {
                            
                            
                            const produ = products.filter(prod => prod.category === `http://localhost:8000/api/category/${category.id}/`)
                            
                            
                            return (
                            
                                produ.map(product => 
                                    
                                        <div  key={product.id} className="col-4 mb-4">
                                            <h3>Category : {category.name}</h3>
                                        <Card product={product} />
                                        </div>
                                    
                                )
                            )

                            
                        })}
                        
                    </div>
                </Base>
            );
    
           
       
      
}

