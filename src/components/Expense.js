import React from 'react'
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

function Expense(props) {
    const textColor = props.type === 'expense' ? '#F2420A' : '#33C431';

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'

        }} >
            <Box
                sx={{
                    display: 'flex',
                    margin: ' 10px 10px',
                    padding: '10px 10px'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: "flex-start",
                    flexDirection: "column",
                    width: "100%"

                }}>
                    <Typography sx={{ color: "#BDB2AE", fontWeight: 800 }}>{props.name}</Typography>
                    <Typography sx={{ color: "white", fontWeight: 800 }}>{props.description}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "flex-end",
                    width: "100%"

                }}>
                    <Typography sx={{ color: textColor, fontWeight: 800 }}>{props.expense}</Typography>
                    <Typography sx={{ color: "white", fontWeight: 800 }}>{props.date}</Typography>
                </Box>
            </Box>

            <Divider color="grey" variant='outlined' />
        </Box>


    );


}
export default Expense;