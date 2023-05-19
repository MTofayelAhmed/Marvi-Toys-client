import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Category = () => {
  return (
    <div>
      <Tabs>
        <TabList className="border rounded flex justify-between  items-center w-full h-10 px-10 font-bold">
          <Tab>Marvel</Tab>
          <Tab>Avengers</Tab>
          <Tab>DC Comics</Tab>
        </TabList>

        <TabPanel>
          <div></div>
        </TabPanel>
        <TabPanel>
          <div></div>
        </TabPanel>
        <TabPanel>
          <div></div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
