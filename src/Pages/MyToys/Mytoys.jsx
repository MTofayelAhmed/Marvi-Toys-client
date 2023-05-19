import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OwnCollection from "../OwnCollection/OwnCollection";
import Swal from "sweetalert2";

const Mytoys = () => {
  const [own, setOwn] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const url = `http://localhost:5000/toys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("mydata", data);
        setOwn(data);
      });
  }, [url]);

const handleDelete = (_id)=>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/toys/${_id}`,{
        method: "DELETE"
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
    if(data.deletedCount>0){
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }   }) }
  })
}


  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>photo</th>
              <th>Name</th>
              <th>sellerName</th>
              <th>price</th>
              <th>rating</th>
              <th>quantity</th>
           
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {own.map((personalCollection) => (
              <OwnCollection
                personalCollection={personalCollection}
                key={personalCollection._id}
                handleDelete= {handleDelete}
              ></OwnCollection>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytoys;
