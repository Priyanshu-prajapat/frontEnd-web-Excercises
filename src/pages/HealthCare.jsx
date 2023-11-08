import React from 'react'
import HeroSection from '../components/HeroSection';
import healthcare from '../assets/image/HealthCare/HealthCarePg.png'

const HealthCare = () => {
    return (
        <HeroSection title={"Your Partner in Health"} subtitle={"Healthcare is important for people of all ages, but it's especially important for families. When everyone in the family is healthy, everyone can enjoy life to the fullest. Healthcare for the whole family is important."} img={healthcare} width={"80%"} />

    )
}

export default HealthCare
