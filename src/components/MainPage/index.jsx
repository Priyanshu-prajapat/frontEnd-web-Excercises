import React from 'react'
import { Box, Typography } from '@mui/material'
import { features } from '../../database/Features';
import HeroSection from '../../components/HeroSection';
import ArticleSection from '../../components/ArticleSection';
import FeatureCard from '../../components/FeatureCard';
import gif from "../../assets/gif/MainPgImg.gif";

const MainPage = () => {
    return (
        <Box sx={{ marginBlock: '10vh' }}>
            <HeroSection img={gif} title={"Fitness Fanatic"} subtitle={"A fitness movement that is worth breaking a sweat for"} />
            <Box sx={{ marginBlock: "10vh" }}>
                <Typography variant='h2' sx={{ fontSize: '75px' }} >
                    Features
                </Typography>
                <hr className="border border-white border-1" />
                <Box sx={{ paddingBlock: '10px' }}>
                    {
                        features.map((feature, index) => (
                            <FeatureCard key={index} item={feature} />
                        ))
                    }
                </Box>
            </Box>
            <ArticleSection />
        </Box>
    );
}

export default MainPage
