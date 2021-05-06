import React from 'react'
import { InView } from 'react-intersection-observer';
import { useCountUp } from 'react-countup';
import Box from '@material-ui/core/Box';
const EventStats = () => {
    const { countUp, start, reset} = useCountUp({
        start: 0,
        end: 30,
        delay: 0,
        duration: 5,
        onReset: () => {
            start()
        },
    });
    return (
        <React.Fragment>
            <InView as="div" onChange={(inView, entry) =>{ 
                // console.log('Inview:', inView);
                start()
                }}>
            </InView>
            <Box>
                <div>{countUp}+ Events</div>         
            </Box> 
        </React.Fragment>
    )
}

export default EventStats
