const AgeCategory = () => {
  return (
    <div className=" my-10">
      <div className="w-2/5 mx-auto mb-10">
        <h1 className="  text-center text-4xl py-2 rounded-md hover:bg-gray-700 bg-gray-900 text-white font-serif font-bold">
         Ways To Shop
        </h1>
      </div>
      <div className=" mx-20 grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 avatar my-10">
        <div className="w-44 rounded-full hover:bg-gray-700 bg-sky-800">
          <h1 className="text-center pt-20 font-sans font-bold text-white ">
            Age: 2-4 Years
          </h1>
        </div>
        <div className="w-44 rounded-full hover:bg-purple-800 bg-red-900">
          <h1 className="text-center pt-20 font-sans font-bold text-white ">
            Age: 4-5 Years
          </h1>
        </div>
        <div className="w-44 rounded-full hover:bg-lime-700 bg-orange-600">
          <h1 className="text-center pt-20 font-sans font-bold text-white ">
            Age: 6-7 Years
          </h1>
        </div>
        <div className="w-44 rounded-full hover:bg-blue-700 bg-green-700">
          <h1 className="text-center pt-20 font-sans font-bold text-white ">
            Age: 8-13 Years
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCategory;
