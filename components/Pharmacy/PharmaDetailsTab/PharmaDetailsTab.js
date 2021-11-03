import React from 'react';
import "antd/dist/antd.css";
import { Tabs } from 'antd';
import PharmaOverview from '../PharmaOverview/PharmaOverview';
import PharmaLocation from '../PharmaLocation/PharmaLocation';
import BusinessHours from '../BuisnessHours/BusinessHours';



const { TabPane } = Tabs;
const PharmaDetailsTab = () => {
    return (
      <section className='bg-white px-4 py-8 my-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:container lg:px-2'>
         <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Overview" key="1">
           <PharmaOverview/>
            </TabPane>
            <TabPane tab="Locations" key="2">
            <PharmaLocation/>
            </TabPane>
            <TabPane tab="Business Hours" key="3">
            <BusinessHours/>
            </TabPane>
        </Tabs>
      </section>
      
    )
  }
  
  export default PharmaDetailsTab