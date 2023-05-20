import { Tab, Tabs, TabList, } from "react-tabs";
import "./Category.css";
import { useState } from "react";
import CardCategory from "../CardCategory/CardCategory";

const Category = () => {
const [category, setCategory]= useState([])
const [activeTab, setActiveTab]= useState("Marvel")


const handleCategory= (subcategory)=>{
  setActiveTab(subcategory)
  fetch(`http://localhost:5000/toy/${activeTab}`)
  .then(res=> res.json())
  .then(data =>{
    console.log("subcategory data", data)
    setCategory(data)
  })
}





 

  return (
  
      <Tabs className="tabs">
        <TabList>
          <Tab onClick={() => handleCategory("Marvel")} className="tab" >
            Marvel
          </Tab>
          <Tab onClick={() => handleCategory("StarWar")} className="tab">StarWar</Tab>
          <Tab onClick={() => handleCategory("DC comics")} className="tab">DC Comics</Tab>
        </TabList>

        <div>
          <div className="grid grid-cols md:grid-cols-2 gap-10 ">
            {category.slice(0, 2).map(cat=> <CardCategory key={cat._id} cat={cat}></CardCategory>)}
          </div>
        </div>

   
      </Tabs>
  
  );
};

export default Category;
