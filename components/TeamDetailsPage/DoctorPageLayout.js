import React from 'react';
import ContentSection from './ContentSection';
import LaboratoryServices from './LaboratoryServices';
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