import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
  const singleToy = useLoaderData()
console.log(singleToy)
const {photo, name, sellerName, sellerEmail,  price, rating, quantity, description}= singleToy
  return (
    <div>
     {name}
     <h1>this is single toy detail detail page</h1>
    </div>
  );
};

export default ToyDetails;