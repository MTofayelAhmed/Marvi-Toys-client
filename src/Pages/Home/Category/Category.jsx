import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Category = () => {


  return (
    <div>
      <Tabs>
    <TabList className="border rounded flex justify-between bg-red-900 text-white items-center w-full h-10 px-10 font-bold">
      <Tab>Marvel</Tab>
      <Tab>Avengers</Tab>
      <Tab>DC Comics</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Category;