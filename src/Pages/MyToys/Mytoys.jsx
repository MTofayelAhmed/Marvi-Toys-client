import { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OwnCollection from "../OwnCollection/OwnCollection";


const Mytoys = () => {
const[own, setOwn]= useState([])
  const {user}= useContext(AuthContext)
  console.log(user.email)
  const url = `http://localhost:5000/toys?email=${user.email}`
useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    console.log("mydata", data)
    setOwn(data)
  })
},[url])
  return (
    <div>
      <h1>this is my toys</h1>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
      own.map(personalCollection=> <OwnCollection personalCollection={personalCollection} key= {personalCollection._id}></OwnCollection>)
     }
      
     
    
    </tbody>
    
  </table>
</div>
    </div>
  );
};

export default Mytoys;