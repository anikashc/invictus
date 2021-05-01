import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero'
import GoEvents from '../../Components/GoEvents/GoEvents'
const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <Hero />
                <GoEvents />
            </Container>
        </React.Fragment>
    )
}

export default Home
