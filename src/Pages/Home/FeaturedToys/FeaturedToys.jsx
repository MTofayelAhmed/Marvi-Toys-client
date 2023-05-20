const FeaturedToys = () => {
  return (
    <div className=" my-10">
      <div className="w-2/5 mx-auto mb-10">
        <h1 className="  text-center text-4xl py-2 rounded-md hover:bg-gray-700 bg-gray-900 text-white font-serif font-bold">
          Featured Products
        </h1>
      </div>
      <div className="grid grid-cols md:grid-cols-4  gap-3  mx-10 ">
        <div className="w-64 rounded bg-red-900 hover:bg-gray-700 px-3 pt-3  ">
          <div>
            <img src="https://i.ibb.co/VBBG1Yt/iron-man-5265222-960-720.jpg" alt="Shoes" />
          </div>
          <div>
            <p className="text-center mt-5 text-xl text-white">Iron Man</p>
          </div>
        </div>
        <div className="w-64 rounded bg-green-900 px-3 pt-3 hover:bg-blue-900 ">
          <div>
            <img src="https://i.ibb.co/cvZWcfC/hulk-2.jpg" alt="Shoes" />
          </div>
          <div>
            <p className="text-center mt-5 text-xl text-white">Hulk</p>
          </div>
        </div>
        <div className="w-64 rounded bg-pink-900 hover:bg-red-900 px-3 pt-3  ">
          <div>
            <img src="https://i.ibb.co/P1QTpnC/Spiderman.jpg" alt="Shoes" />
          </div>
          <div>
            <p className="text-center mt-5 text-xl text-white">Spider man</p>
          </div>
        </div>
        <div className="w-64 rounded bg-blue-700 hover:bg-sky-800 px-3 pt-3  ">
          <div>
            <img src="https://i.ibb.co/QP3nFx3/thortoy.jpg" alt="Shoes" />
          </div>
          <div className="h-5">
            <p className="text-center mt-5 text-xl text-white">Thor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToys;
