
import useTitle from "../../../Hooks/useTitle";
import AboutSection from "../AboutSection/AboutSection";
import AgeCategory from "../AgeCategory/AgeCategory";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedToys from "../FeaturedToys/FeaturedToys";
import Gallery from "../Gallery/Gallery";


const Home = () => {

  useTitle('Home')
  return (
    <div>
<Banner></Banner>
<AgeCategory></AgeCategory>
<Gallery></Gallery>
<FeaturedToys></FeaturedToys>
<AboutSection></AboutSection>

<Category></Category>
    </div>
  );
};

export default Home;