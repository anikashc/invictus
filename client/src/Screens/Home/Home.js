import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero'
import GoEvents from '../../Components/GoEvents/GoEvents'
import Prizes from '../../Components/Prizes';
import LectureSeries from '../../Components/LectureSeries';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Hero />
                <Prizes/>
                <GoEvents />
                <LectureSeries/>
            </div>
        </React.Fragment>
    )
}

export default Home
