import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

const Card = ({restaurant , handleDelete}) => {

  return (
    <div className='bigcard'>
         <div className="card" style={{width:"18rem"}} key={restaurant.id}>
                  <img src={restaurant.img} alt="" className="card-img top" />
                  <div className="card-bodoy">
                    <h5 className="title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.type}</p>
                    <Link to="" className="btn btn-danger px-2" onClick={()=>{
                      handleDelete(restaurant.id);
                    }}>Delete</Link>
                    <Link to="`/update/${restaurant.id}` " className="btn btn-warning px-2">Edite</Link>
                  </div>
                </div>
    </div>
  )
}

export default Card
