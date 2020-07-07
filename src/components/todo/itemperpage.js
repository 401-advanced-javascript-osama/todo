import React, { useContext } from 'react';

import { PaginationContext }  from '../context/pagination-context'


function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);
const changHandler = (e) =>{
    pagination.setItem(e.target.value)
}
  
    return (
      <>
       <h4>change number of pages</h4>
       <select onChange={changHandler}>
           <option value='3'>3</option>
           <option value='5'>5</option>
           <option value='7'>7</option>
       </select>
      </>
    );
  
}
export default ChengeNumberOfPages;
