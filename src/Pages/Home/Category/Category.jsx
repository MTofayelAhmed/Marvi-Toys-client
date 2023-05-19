import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Category = () => {
  return (
    <div>
      <Tabs>
        <TabList className="border rounded flex justify-between  items-center w-full h-10 px-10 font-bold">
          <Tab>
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-toggle="modal"
              data-te-target="#exampleModalLg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Large modal
            </button>
          </Tab>
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
