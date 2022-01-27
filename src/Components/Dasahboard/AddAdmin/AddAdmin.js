import React from 'react';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { Box, Typography } from '@mui/material';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data, "makadmin")
        fetch('http://localhost:5000/makeadmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Congratulations admin made successfully!", "success")
                }
            })
    }
    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: "50%" }, margin: 'auto' }}>
            <Typography variant="h4">Make Admin</Typography>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input type="email" {...register("email", { required: true })} placeholder='Email' />

                {errors.exampleRequired && <span>This field is required</span>}

                <input style={{ backgroundColor: "#F58E5D" }} type="submit" />
            </form>

        </Box>
    );
};

export default AddAdmin;