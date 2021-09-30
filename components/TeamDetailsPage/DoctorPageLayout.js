import React from 'react';
import ContentSection from './ContentSection';
import LaboratoryServices from './LaboratoryServices';
import MedicalServices from './MedicalServices';
import TeamBanner from './TeamBanner';
import TeamFaq from './TeamFaq';
import TeamMember from './TeamMember';


const DoctorPageLayout = () => {
    return (
        <div>
            <TeamBanner/>
            <ContentSection/>
            <LaboratoryServices/>
            <MedicalServices/>
            <TeamMember/>
            <TeamFaq/>
           
        </div>
    );
};

export default DoctorPageLayout;