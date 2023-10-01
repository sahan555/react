import React from 'react'
import { Link } from "react-router-dom";

function ProductComponent() {
  return (
   <>
   <div>
    <ul>
      <li><Link to="/products/create">Create</Link></li>
      <li><Link to=""></Link></li>
      <li><Link to=""></Link></li>
    </ul>
   </div>
   </>
  )
}

export default ProductComponent