import { Box, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';

const AddExpe = () => {
    const { user } = useAuth()
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [rating, setRating] = useState(5)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])

    const onSubmit = data => {
        data.rating = rating
        data.user = userData
        console.log(data, "exper")
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/expe`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                swal("Good job!", "Congratulations You added new service.", "success")
                reset()
            })

    }
    console.log(rating)
    return (
        <div>

            <Box sx={{ width: { xs: '100%', sm: '100%', md: "50%" }, margin: 'auto' }}  >

                <Typography variant="h4" sx={{ mb: 5 }}>Share your travel experience </Typography>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("category", { required: true })}>
                        <option value="sea beach">sea beach</option>
                        <option value="Forest">Forest</option>
                        <option value="other">other</option>
                    </select>
                    <input  {...register("title", { required: true })} placeholder='traveler title' />

                    <textarea {...register("Description", { required: true })} placeholder='travel Description' />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <Stack spacing={1}> <Rating name="size-large" defaultValue={2} onChange={(e) => setRating(e.target.value)} size="large" /></Stack>
                    <input style={{ backgroundColor: "#F58E5D" }} type="submit" />
                </form>

            </Box>


        </div>
    );
};

export default AddExpe;