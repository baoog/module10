import { Box, Button, Container, TextField, Typography } from '@mui/material'
import * as React from 'react'
import './TextAddress.css'
import Select from 'react-select';

export default function AddressStep(props) {
    
    return (
        <Container>
            <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
                <Typography variant='boy1'>Select Address:</Typography>
                <Select
                    className='selectWidth'
                    options={props.optionAddress}
                    onChange={props.handleChangeAddress}
                    name="address"
                />
            </Box>
            <Box marginTop={5} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box textAlign={'center'}>
                    <Typography variant='h4'>Add address</Typography>
                </Box>
                <Box component={'form'} onSubmit={props.handleSubmit} width={'45%'} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <TextField
                        className='textAddress'
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('name')}
                        margin="normal"
                        name="name"
                        label="Name"
                        id="name"
                        autoComplete="name"
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('contactNumber')}
                        margin="normal"
                        name="contactNumber"
                        label="Contact Number"
                        id="contactNumber"
                        autoComplete="contactNumber"
                        className='textAddress'
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('street')}
                        margin="normal"
                        name="street"
                        label="Street"
                        id="street"
                        autoComplete="street"
                        className='textAddress'
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('city')}
                        className='textAddress'
                        margin="normal"
                        name="city"
                        label="City"
                        id="city"
                        autoComplete="city"
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('state')}
                        margin="normal"
                        name="state"
                        label="State"
                        id="state"
                        autoComplete="state"
                        className='textAddress'
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('landmark')}
                        margin="normal"
                        name="landmark"
                        label="Landmark"
                        id="landmark"
                        autoComplete="landmark"
                        className='textAddress'
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={props.handleOnChange}
                        error={props.errors.hasOwnProperty('zipCode')}
                        margin="normal"
                        name="zipCode"
                        label="Zip Code"
                        id="zipCode"
                        autoComplete="zipCode"
                        className='textAddress'
                        fullWidth
                        required
                    />
                    <Button type='submit' variant='contained' style={{ width: '100%'}} >Save Address</Button>
                </Box>
            </Box>

        </Container>
    )
}