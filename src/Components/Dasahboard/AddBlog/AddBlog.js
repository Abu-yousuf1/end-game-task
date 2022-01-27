import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import './AddBlog.css'
import { Box, Typography } from '@mui/material';
import swal from 'sweetalert';
import useAuth from './../../../hook/useAuth';

const AddBlog = () => {
    const { isAdmin } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState(null)
    console.log(isAdmin, 'admin')

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        console.log(image)

        const formData = new FormData();
        formData.append('image', image)

        setIsLoading(true)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image = imageData.data.display_url
                console.log(image, 'imageeee')
                data.image = image
                isAdmin ? data.status = "approve" : data.status = "pending"
                console.log(data, "full data")
                fetch(`https://enigmatic-shelf-41985.herokuapp.com/blog`, {
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
            })


    };
    // const handleClick = (e) => {
    //     console.log(e.target.files[0], "manual")
    // }
    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: "50%" }, margin: 'auto' }}  >

            <Typography variant="h4" sx={{ mb: 5 }}>Add Blog </Typography>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input type="file" style={{ border: 'none' }} onChange={(e) => setImage(e.target.files[0])} />
                <input  {...register("title", { required: true })} placeholder='traveler title' />
                <input  {...register("info", { required: true })} placeholder='traveler info' />
                <select {...register("category", { required: true })}>
                    <option value="sea beach">sea beach</option>
                    <option value="Forest">Forest</option>
                    <option value="other">other</option>
                </select>
                <input type="number"  {...register("cost", { required: true })} placeholder='travel cost' />
                <input  {...register("location", { required: true })} placeholder='travel location' />
                <textarea {...register("Description", { required: true })} placeholder='travel Description' />

                {errors.exampleRequired && <span>This field is required</span>}

                <input style={{ backgroundColor: "#F58E5D" }} type="submit" />
            </form>

        </Box>
    );
};

export default AddBlog;