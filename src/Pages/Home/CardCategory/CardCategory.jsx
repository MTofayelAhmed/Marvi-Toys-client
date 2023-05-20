import { Link } from "react-router-dom";

const CardCategory = ({ cat }) => {
  const { photo, name, _id, price, rating } = cat;

  console.log(cat);
  return (
    <div className="flex flex-col rounded-lg mt-10 bg-white border  dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={photo}
        alt=""
      />
      <div className="flex flex-col justify-start p-6 ">
        <h1 className="bg-gray-900 text-white rounded p-2 hover:bg-gray-800  ">
          {name}
        </h1>
        <p className=" mt-4 rounded font-bold">Price: {price}</p>
        <p className="mb-10 rounded font-bold">Ratings: {rating}</p>

        <button className="btn btn-outline mt-20">
       
          <Link to={`/details/${_id}`}>view Details</Link>
        </button>
        
      </div>
    </div>
  );
};

export default CardCategory;
