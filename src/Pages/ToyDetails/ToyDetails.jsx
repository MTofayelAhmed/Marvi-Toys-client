import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const {
    photo,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = singleToy;
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row ">
      <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{  name}</h1>
        <p className="py-6">{sellerName}</p>
       <p>{sellerEmail}</p>
       <p>{ price}</p>
       <p>{ rating}</p>
       <p>{quantity}</p>
       <p>{ description}</p>
      </div>
    </div>
  </div>
  );
};

export default ToyDetails;
