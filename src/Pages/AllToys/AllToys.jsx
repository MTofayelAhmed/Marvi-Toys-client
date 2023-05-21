import { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [text, setText] =useState('')
  useTitle("All Toys")

  useEffect(() => {
    fetch("https://assignment-11-server-two-puce.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);



  const handleSearch= ()=>{
    fetch(`https://assignment-11-server-two-puce.vercel.app/search/${text}`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setToys(data)
    })
  }


  return (
    <div className="my-20">
      <div className="ml-80 my-10">
        <input
          onChange={(event) => setText(event.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
       <button onClick={handleSearch} className="btn btn-primary ml-10">Search </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SellerName</th>
              <th>ToysName</th>
              <th>SubCategory</th>
              <th>price</th>
              <th>Quantity</th>
              <th>view Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, 20).map((toy) => (
              <AllToysTable key={toy._id} toy={toy}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
