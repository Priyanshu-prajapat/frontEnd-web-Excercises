import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard({ item }) {
    const theme = useTheme();
    return (
        <Card sx={{ display: { xs: 'block', sm: 'flex' }, bgcolor: '#212529', color: 'white', marginBlock: "15px", boxShadow: 5, justifyContent: 'center', alignItems: "center" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', marginInline: '25px' }}>
                    <Typography component="div" variant="h3" >
                        {item._title}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        {item._desc}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: { sm: 300 }, height: { sm: 300 } }}
                image={item._img}
                alt="Live from space album cover"
            />
        </Card>
    );
}
