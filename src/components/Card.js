import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {

    return (
        <Card


            sx={{

                bgcolor: "white",
                width: '94%',
                border: "1px solid white ",
                borderRadius: "10px",
                padding: "10px",
                height: "80px"

            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="Black" gutterBottom>
                    Total {props.type}
                </Typography>
                <Typography variant="h6" component="div" sx={{ color: "black" }}>
                    {props.total}
                </Typography>
            </CardContent>
        </Card>
    );
}