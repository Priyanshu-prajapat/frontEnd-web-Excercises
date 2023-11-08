import { Box, Typography } from '@mui/material'
import React from 'react'
import { getThreeArticles } from '../../database/db';
import Article from "../HorizontalCard";

const ArticleSection = () => {
    const articles = getThreeArticles();
    return (
        <Box>
            <Typography variant='h2' sx={{ fontSize: "75px" }}>
                Wellness Articles
            </Typography>
            <hr className="border border-white border-1" />
            <Box>
                {
                    articles.map((item, index) => (
                        <Article key={index} item={item} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default ArticleSection
