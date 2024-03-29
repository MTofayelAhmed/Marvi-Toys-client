import image1 from "../../../assets/deadpool.jpg";
import image2 from "../../../assets/Spiderman.jpg";

const AboutSection = () => {
  return (
    <div className=" mx-20 mt-20 my-10">
        <div className="w-2/5 mx-auto mb-10">
        <h1 className="  text-center text-4xl py-2 rounded-md hover:bg-gray-700 bg-gray-900 text-white font-serif font-bold">
          About us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10 mt-10">
        <div className="w-full md:w-2/5 flex flex-col md:flex-row md:gap-5">
          <div className="w-full md:w-1/2">
            <img src={image1} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 md:mt-32">
            <img src={image2} alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full md:w-3/5 m-5 md:mt-0">
          <h2>
            <span className="text-4xl font-bold uppercase text-gray-700">
              WE Have been doing this
            </span>
            <br />
            <span className="ml-5 text-blue-800 font-extrabold text-4xl uppercase">
              since 1999
            </span>
          </h2>
          <p className="mt-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            harum officia dignissimos pariatur asperiores amet eveniet quasi
            illo necessitatibus voluptatibus, architecto natus minima, ad
            ratione, commodi consequatur totam voluptatum dolor aspernatur
            accusamus consectetur repudiandae. Officiis porro eveniet hic ipsa!
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-6 md:mr-72">
            <div className="mb-4 md:mb-0">
              <p className="font-mono text-2xl font-bold">2280+</p>
              <p className="text-blue-600 font-semibold">Clients</p>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-mono text-2xl font-bold">280+</p>
              <p className="text-blue-600 font-semibold">Employee</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold">180+</p>
              <p className="text-blue-600 font-semibold">Projects</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white p-2 m-2 rounded mt-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
