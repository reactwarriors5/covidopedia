import React from 'react';
import AboutDoctor from './AboutDoctor';
import ContactDoctor from './ContactDoctor';
import DoctorExperience from './DoctorExperience';
import DoctorHero from './DoctorHero';
import SkillsOfDoctor from './SkillsOfDoctor';

const DoctorPageLayout = () => {
    return (
        <div>
            <DoctorHero/>
            <AboutDoctor/>
            <DoctorExperience/>
            <SkillsOfDoctor/>
            <ContactDoctor/>
        </div>
    );
};

export default DoctorPageLayout;