import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import { Tabs } from 'antd';
import Overview from '../Overview/Overview';
import SkillsOfDoctor from '../SkillsOfDoctor/SkillsOfDoctor';
import BusinessHours from '../../Pharmacy/BuisnessHours/BusinessHours';


const { TabPane } = Tabs;
const ServiceDetailsPage = ({doctor}) => {
    return (
      <section className='bg-white px-4 py-8 my-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:container lg:px-2'>
         <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Overview" key="1">
            <Overview doctor={doctor}/>
            </TabPane>
            <TabPane tab="Expertise" key="2">
            <SkillsOfDoctor doctor={doctor}/>
            </TabPane>
            <TabPane tab="Business Hours" key="3">
            <BusinessHours/>
            </TabPane>
        </Tabs>
      </section>
      
    )
  }
  
  export default ServiceDetailsPage