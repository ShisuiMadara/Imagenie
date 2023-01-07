import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomForm from '../form/form.js';

export default function CustomCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={props.url}
            title={props.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.description}
            </Typography>
        </CardContent>
        <CardActions>
            {/* <CustomForm /> */}
        </CardActions>
        </Card>
    )
  
}