import { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";


const AllToys = () => {
  const[toys, setToys]= useState([])

useEffect(()=>{
fetch('http://localhost:5000/toys')
.then(res=>res.json())
.then(data =>{
  setToys(data)
})
},[] )


  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>SellerName</th>
        <th>ToysName</th>
        <th>SubCategory</th>
        <th>price</th>
        <th>Quantity</th>
        <th>view Details</th>
      </tr>
    </thead>
    <tbody>
   
    {toys.map(toy=> <AllToysTable key={toy._id} toy={toy}></AllToysTable>)}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllToys;