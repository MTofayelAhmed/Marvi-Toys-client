import { Link, useLoaderData } from "react-router-dom";

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
    <div className="hero min-h-screen  bg-base-200 w-4/6 mx-auto mt-20 rounded-lg">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={photo}
          className="max-w-sm rounded-lg h-[400px] shadow-xl ml-10"
        />
        <div className="ml-20">
          <h1 className="text-5xl font-bold mb-5">{name}</h1>
          <p>Seller: {sellerName}</p>
          <p className="">Email: {sellerEmail}</p>
          <div className="flex justify-evenly gap-3 my-5">
            <button className="btn gap-1">
              price
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn gap-1">
              Rating
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn gap-1">
              quantity
              <div className="badge badge-secondary">{quantity}</div>
            </button>
          </div>

          <p>{description}</p>

          <button className="btn btn-active mt-8">
        
            <Link to="/"> Back to HomePage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
