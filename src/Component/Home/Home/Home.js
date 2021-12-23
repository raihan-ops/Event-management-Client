import React from 'react';
import Available from '../Available/Available';
import Banner from '../Banner/Banner';
import BestTeam from '../BestTeam/BestTeam';
import Features from '../Features/Features';
import Packeges from '../Packages/Packeges';
import Calender from '../Services/Modal/Calender/Calender';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Packeges></Packeges>
           <BestTeam></BestTeam>
           <Available></Available>
        </div>
    );
};

export default Home;