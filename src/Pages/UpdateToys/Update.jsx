import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const toyInfo = useLoaderData()
const {_id,price, quantity, description}= toyInfo



const handleUpdate= (event)=>{
  event.preventDefault()
  const form = event.target;
  const price = form.price.value;
  const quantity = form.quantity.value;
  const description = form.description.value;
  const updatedInfo = {price, quantity, description}
  fetch(`http://localhost:5000/toys/${_id}`,{
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updatedInfo)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data)
   if( data.modifiedCount> 0){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your toys info has been updated',
      showConfirmButton: false,
      timer: 1500
    })
   }
  })

}

  return (

      <form onSubmit={handleUpdate} >
      <div className="form-control w-1/2 mx-auto ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              defaultValue={price}
            
            />
          </div>
       <div className="form-control w-1/2  mx-auto">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
              defaultValue={quantity}
            />
          </div>
     <div className="form-control w-1/2  mx-auto ">
          <label className="label ">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Detail Description"
            className="input input-bordered"
            defaultValue={description}
          />
        </div >
        <div className="w-1/2 mx-auto">
       <input  className="btn btn-block my-10 bg-red-900 " type="submit" value="update info" />
       </div>
      </form>
   
  );
};

export default Update;