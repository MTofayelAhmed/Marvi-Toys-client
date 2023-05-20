import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
useTitle('AddToy')


 const  handleAddToy = event=>{
  event.preventDefault()
  const form = event.target;
  const photo = form.photo.value;
  const name= form.name.value;
  const sellerName= form.sellername.value;
  const sellerEmail = form.selleremail.value;
  const category= form.category.value;
  const price = form.price.value;
  const rating = form.rating.value;
  const quantity = form.quantity.value;
  const description = form.description.value;
  const toyInfo = {
    photo, name, sellerName, sellerEmail, category, price, rating, quantity, description
  }
  console.log(toyInfo)
fetch('https://assignment-11-server-two-puce.vercel.app/toys',{
  method: 'POST', 
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(toyInfo)
})
.then(res=> res.json())
.then(data => {
  console.log("successfully added in DB", data)
  if(data.insertedId){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
})


 }






  return (
    <form onSubmit={handleAddToy} >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mx-16 mt-16">
        <div className="w-3/4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">seller Name</span>
            </label>
            <input
              type="text"
              name="sellername"
              placeholder="seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">seller Email</span>
            </label>
            <input
              type="email"
              name="selleremail"
              placeholder="seller Email"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="w-3/4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Sub-category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
    
    
        <div className="form-control px-16">
          <label className="label ">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Detail Description"
            className="input input-bordered"
          />
        </div >
       <div className="w-3/4 mx-auto">
       <input  className="btn btn-block my-10 bg-red-900 " type="submit" value="Add Toy Info" />
       </div>
     
       
      </form>
    
  );
};

export default AddToy;
