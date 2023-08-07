const Gallery = () => {
  return (
    <div className="mt-20 my-10">
      <div className="w-2/5 mx-auto mb-10">
        <h1 className="  text-center text-4xl py-2 rounded-md hover:bg-gray-700 bg-gray-900 text-white font-serif font-bold">
          Your Hero Gallery
        </h1>
      </div>

      <div className=" container mx-auto  py-2  opacity-90 px-16  ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 h-52">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/KGqMYvr/image-8.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2  h-52">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/fSGkR1L/image-3.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2 h-80">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/349S9Gy/image-9.jpg"
              />
            </div>
          </div>

          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 h-80">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/7KLs5j6/imge-10.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 h-60">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/X26ss6X/img-11.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 h-60">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/3fxVKz4/image-1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
