import React, {useState, useEffect} from 'react'
import {getOrders} from "./helper/userapicalls"
import {isAuthenticated} from "../auth/helper"
import Base from "../core/Base"




const UserDashboard = () => {


    const [orders, setProducts] = useState([]);
   
    const [error, setError] = useState(false) ;
    const userId = isAuthenticated && isAuthenticated().user.id;
    
    const loadAllOrders = () => {
        getOrders()
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
            loadAllOrders();
        },[])

    return (
        <Base title="User dashboard" description="">
            <h1>Your Orders List </h1>
            <div className="row">
                        
                        {orders.map((order , index) => {
                            
                            
                            if(order.user === `http://localhost:8000/api/user/${userId}/`)
                            {
                                return (
                            

                                    <div className="card text-white bg-dark border border-info col-4">
        
                                    <div className="card-header lead">Transaction Id:  {order.transaction_id}</div>

                                    <div className="card-header lead">Products:  {order.product_names}</div>

                                    
                                    <p className="btn btn-success rounded  btn-sm px-4">
                                        Amount Spent: Rs 
                                        <div className="card-header lead"> {order.total_amount}</div>
                                        
                                    </p> 
                                    
                                  </div>
                                        
                                    
                                )
                            }
                            
                            

                            
                        })}
                        
                    </div>


        </Base>
    )
};
export default UserDashboard;