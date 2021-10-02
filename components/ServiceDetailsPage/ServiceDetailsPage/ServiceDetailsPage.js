import React from 'react';
import Contents from '../../HomePage/HomePage/Contents/Contents';
import Footer from '../../HomePage/HomePage/Footer/Footer';
import Navbar from '../../HomePage/HomePage/Navbar/Navbar';
import AboutDoctor from '../AboutDoctor/AboutDoctor';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import SkillsOfDoctor from '../SkillsOfDoctor/SkillsOfDoctor';

const ServiceDetailsPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <DoctorDetails />
            <AboutDoctor />
            <SkillsOfDoctor />
            <ContactMe />
            <Contents />
            <Footer />
        </div>
    );
};

export default ServiceDetailsPage;

