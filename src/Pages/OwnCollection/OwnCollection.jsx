import { Link } from "react-router-dom";




const OwnCollection = ({ personalCollection, handleDelete }) => {
  const {
    photo,
    name,
    _id,
    sellerName,

    price,
    rating,
    quantity,
   
  } = personalCollection;

  return (
    <tr>
      <td>
        <div >
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={photo} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{  sellerName}</td>
      <td>{price}</td>
      <td>{rating}</td>
     <td>{quantity}</td>
     <td><button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-warning">Delete</button> </td>
     <td><Link to={`/update/${_id}`}><button className="btn btn-outline btn-warning">Update</button></Link></td>
    </tr>
  );
};

export default OwnCollection;
