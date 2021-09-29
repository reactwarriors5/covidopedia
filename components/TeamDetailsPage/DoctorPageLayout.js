import React from 'react';
import Content from './Content';
import ContentSection from './ContentSection';
import LaboratoryServices from './LaboratoryServices';
import Team from './Team';
import TeamBanner from './TeamBanner';
import TeamFaq from './TeamFaq';
import TeamMember from './TeamMember';


const DoctorPageLayout = () => {
    return (
        <div>
            <TeamBanner/>
            <ContentSection/>
          
            <LaboratoryServices/>
            <TeamMember/>
            <TeamFaq/>
        </div>
    );
};

export default DoctorPageLayout;