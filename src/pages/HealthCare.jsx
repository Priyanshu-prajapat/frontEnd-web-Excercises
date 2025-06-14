import React from 'react'
import HeroSection from '../components/HeroSection';
import healthcare from '../assets/image/HealthCare/HealthCarePg.png'

const HealthCare = () => {
    let title = "Your Partner in Health";
    let subtitle = "Healthcare is important for people of all ages, but it's especially important for families. When everyone in the family is healthy, everyone can enjoy life to the fullest. Healthcare for the whole family is important."
    return (
        <HeroSection title={title} subtitle={subtitle} img={healthcare} width={"80%"} />

    )
}

export default HealthCare
