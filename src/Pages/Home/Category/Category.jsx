import { Tab, Tabs, TabList } from "react-tabs";
import "./Category.css";
import { useEffect, useState } from "react";
import CardCategory from "../CardCategory/CardCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("Marvel");

  useEffect(() => {
    fetch(`https://assignment-11-server-two-puce.vercel.app/toy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("subcategory data", data);
        setCategory(data);
      });
  }, [activeTab]);

  const handleCategory = (subcategory) => {
    setActiveTab(subcategory);
  };

  return (
    <>
      <div className="w-2/5 mx-auto mb-10">
        <h1 className="text-center text-4xl py-2 rounded-md hover:bg-gray-700 bg-gray-900 text-white font-serif font-bold">
          Product Category
        </h1>
      </div>
      <Tabs className="tabs ml-20">
        <TabList>
          <Tab
            onClick={() => handleCategory("Marvel")}
            className={`tab ${activeTab == "Marvel" ? "bg-red-800 text-white" : ""}`}
          >
            Marvel
          </Tab>
          <Tab
            onClick={() => handleCategory("StarWar")}
            className={`tab ${activeTab == "StarWar" ? "bg-red-800 text-white" : ""}`}
          >
            StarWar
          </Tab>
          <Tab
            onClick={() => handleCategory("DC comics")}
            className={`tab ${activeTab == "DC comics" ? "bg-red-800 text-white" : ""}`}
          >
            DC Comics
          </Tab>
        </TabList>

        <div className="ml-40">
          <div className="grid grid-cols md:grid-cols-2 gap-10">
            {category.slice(0, 2).map((cat) => (
              <CardCategory key={cat._id} cat={cat}></CardCategory>
            ))}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Category;
