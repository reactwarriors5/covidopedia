import React from 'react';
import DepartmentSection from './DepartmentSection';
import LaboratoryServices from './LaboratoryServices';
import MedicalServices from './MedicalServices';
import TeamMember from './TeamMember';
import DepartmentFaq from './DepartmentFaq';
import DepartmentBanner from './DepartmentBanner';


const DepartmentPageLayout = () => {
    return (
        <div>
            <DepartmentBanner/>
            <DepartmentSection/>
            <LaboratoryServices/>
            <MedicalServices/>
            <TeamMember/>
            <DepartmentFaq/>
           
        </div>
    );
};

export default DepartmentPageLayout;