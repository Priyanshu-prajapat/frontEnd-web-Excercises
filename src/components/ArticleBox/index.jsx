import { Box, Typography } from '@mui/material'
import React from 'react'

function ArticleBox() {
    return (
        <Box sx={{
            background: '#3a3d40',
            width: '20em',
            padding: "20px 10px"
        }}>
            <Typography>
                Through this project, I aim to share my knowledge and experiences, inspiring others to embark on their own transformative journeys.
            </Typography>
            <Typography>
                At Fitness Fanatics, we believe in the power of community and support. Whether you're a seasoned fitness enthusiast or just beginning your wellness journey, you'll find a welcoming space here to explore, learn, and grow. Our mission is to provide you with the tools, resources, and motivation you need to achieve your health and fitness goals.
            </Typography>
            <Typography>
                I invite you to explore our website, discover valuable resources, and join our vibrant community of like-minded individuals. Together, let's embark on a journey towards a healthier, happier, and more fulfilling life.
            </Typography>

        </Box>
    );
}

export default ArticleBox
