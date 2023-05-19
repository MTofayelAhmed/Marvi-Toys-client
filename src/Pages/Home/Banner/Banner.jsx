
const Banner = () => {
  return (
<div className="mx-10">

<div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("https://i.ibb.co/8b1yKzn/cover-2.jpg")` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Toy Land</h1>
     
      <button className="btn bg-red-950 ">Grab Your favorite hero </button>
    </div>
  </div>
</div>

</div>
  );
};

export default Banner;