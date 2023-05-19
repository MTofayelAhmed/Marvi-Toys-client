
import AgeCategory from "../AgeCategory/AgeCategory";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedToys from "../FeaturedToys/FeaturedToys";
import Gallery from "../Gallery/Gallery";


const Home = () => {
  return (
    <div>
<Banner></Banner>
<AgeCategory></AgeCategory>
<Gallery></Gallery>
<FeaturedToys></FeaturedToys>

<Category></Category>
    </div>
  );
};

export default Home;