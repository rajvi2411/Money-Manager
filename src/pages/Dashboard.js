import React, { useState } from 'react'
import { Box, Grid, TextField, Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Expense from '../components/Expense';
import BasicCard from '../components/Card'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './file.css'






function Dashboard() {
    const [data, setData] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());



    const handlePriceChange = (event) => {
        const inputPrice = event.target.value;
        // Regular expression to allow only numeric input
        const regex = /^\d*\.?\d*$/; // Allows digits and optional decimal point
        if (regex.test(inputPrice) || inputPrice === '') {
            setPrice(inputPrice);
        }

        console.log("Price is", price)

    };
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log("Name is", name)
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        console.log("Descriptions is", description)
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
        console.log("Type is", type);
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        if (!type || !price || !description || !name || !startDate) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        const object = {
            type,
            price: Number(price),
            description,
            name,
            date: startDate.toLocaleDateString(),

        }
        setData(prev => [object, ...prev]);
        if (type === 'expense') {
            setTotalExpense((prev) => Number(prev) + Number(price))
        }
        else {
            setTotalIncome((prev) => Number(prev) + Number(price))

        }


        setName("")
        setDescription("")
        setPrice(0)
        setStartDate("")
        setType("")
    }

    return (
        <Grid conatiner sx={{
            minHeight: "100vh",

            backgroundColor: "#EFEAE8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Grid item xs={12} md={6} sx={{
                backgroundColor: "#0f172b",
                height: "86vh",
                width: "100vh",
                margin: "auto",
                padding: "50px 70px",
                border: "10px solid black",
                borderRadius: "10px"

            }}>


                <Box
                    sx={{
                        color: "white",
                        display: "flex",
                        marginBottom: "10px",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        //border: "10px solid red",

                    }}>
                    <Box sx={{
                        width: "49%",
                        // marginRight: "10px",
                        // border: "10px solid yellow",

                    }}>
                        <BasicCard
                            type='Expense'
                            total={totalExpense}

                        />
                    </Box>
                    <Box sx={{
                        width: "49%",
                        // marginLeft: "10px",

                    }}>
                        <BasicCard
                            type='Income'
                            total={totalIncome}
                        />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: "10px"
                }}>

                    <Select

                        value={type}
                        onChange={(event) => {
                            handleTypeChange(event);
                        }}
                        fullWidth
                        sx={{
                            borderRadius: '10px',
                            color: "black",
                            backgroundColor: "white",
                            width: "49.4%"

                        }}
                    >
                        <MenuItem value={'expense'}>Expense</MenuItem>
                        <MenuItem value={'income'}>Income</MenuItem>
                    </Select>

                    <Box


                        sx={{
                            width: "49.4%"
                        }}
                    >
                        <div className="custom-datepicker-container" >

                            <DatePicker


                                selected={startDate} onChange={(date) => setStartDate(date)}
                                // Add any other props or configurations you need
                                className="custom-react-datepicker" // Assign a class for more specific styling
                                calendarClassName="custom-calendar" // Class for calendar container
                                popperClassName="custom-popper" // Class for popper container
                                wrapperClassName="custom-wrapper" // Class for wrapper container
                            />

                        </div>

                    </Box>


                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: "10px"
                }}>
                    <Box sx={{
                        width: "49%",
                        // marginRight: "10px",
                        // border: "10px solid yellow",

                    }}>
                        <TextField
                            value={price}
                            onChange={handlePriceChange}
                            pattern="\d*\.?\d*"
                            placeholder='price '
                            sx={{
                                backgroundColor: "white",

                                width: "100%", border: "1px solid #dcdddd", borderRadius: "10px",
                                //  marginLeft: "5px", marginRight: "5px",
                                input: {
                                    color: 'black'

                                }

                            }} />
                    </Box>
                    <Box sx={{
                        width: "49%",
                        // marginRight: "10px",
                        // border: "10px solid yellow",

                    }}>
                        <TextField placeholder='Bike'
                            value={name}
                            onChange={handleNameChange} sx={{
                                backgroundColor: "white",

                                width: "100%", border: "1px solid #dcdddd", borderRadius: "10px",
                                //  marginRight: "5px",
                                input: {
                                    color: 'black'
                                }

                            }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom: "10px"
                }}>
                    <TextField placeholder='Spent on buying new bike'
                        value={description}
                        onChange={handleDescriptionChange} sx={{
                            backgroundColor: "white",

                            width: "100%",
                            // marginLeft: "5px", marginRight: "5px",
                            borderRadius: "10px",
                            input: {
                                color: 'black'
                            }

                        }} />

                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "10px",
                    marginLeft: "5px",
                    marginRight: "5px"

                }}>
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}

                        sx={{

                            backgroundColor: '#fea115',
                            fontWeight: 800,


                            width: "100%", color: "white",
                            '&:hover': {
                                backgroundColor: "white",
                                color: "#fea115"

                            }
                        }}>Add new Transaction
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        minHeight: '100px', // Set the maximum height for the scrollable box
                        overflow: 'auto', // Enable scrolling when content exceeds the box height
                        height: "30vh",
                        marginTop: "20px"

                    }}>
                    {data.length > 0 && (
                        data.map((item) => {
                            return (
                                <Expense
                                    type={item.type}
                                    name={item.name}
                                    description={item.description}
                                    date={item.date}
                                    expense={item.price}
                                />
                            )
                        })

                    )}
                </Box>

            </Grid>

        </Grid >
    )
}

export default Dashboard
