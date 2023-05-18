import { Link } from "react-router-dom";


const AllToysTable = ({toy}) => {
const {_id,sellerName, name,category, price,quantity } = toy;

  return (
    <tr>
        
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td >< Link to={`/details/${_id}`}>view Details</Link ></td>


      </tr>
      
  );
};

export default AllToysTable;