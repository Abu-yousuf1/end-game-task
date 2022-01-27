import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';


const BlogByUser = () => {
    const [blog, setBlog] = useState([])

    const handleDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    fetch(`http://localhost:5000/blog/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingProducts = blog.filter(pd => pd._id !== id)
                                setBlog(remainingProducts)
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });


    }


    const handleStatus = (id) => {

        fetch(`http://localhost:5000/blog/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    blog.filter(pd => pd._id !== id)
                    fetch('http://localhost:5000/blog')
                        .then(res => res.json())
                        .then(data => setBlog(data))

                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>

            <Typography variant="h5" className="primary-color" sx={{ textAlign: 'center', fontWeight: 'bold', marginY: '15px' }}> Blog By User</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ fontWeight: 600 }} align="right">Title</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Category</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Cost</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Status</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Make Status</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {blog?.map((row) => (

                            <TableRow

                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="right">{row?.title}</TableCell>
                                <TableCell align="right">{row?.category}</TableCell>
                                <TableCell align="right">${row?.cost}</TableCell>
                                <TableCell align="right" sx={row.status == "pending" ? { bgcolor: 'error.main', textAlign: 'center' } : { bgcolor: "success.main", textAlign: 'center' }} className="textWhite" > {row?.status} </TableCell>
                                <TableCell align="right"> <Button variant="outlined" color={row?.status === "pending" ? "error" : 'success'} onClick={() => handleStatus(row._id)} > {row?.status === "pending" ? "Make Approve" : "Already Approved"}</Button></TableCell>
                                <TableCell align="right"><Button variant="outlined" color="error" onClick={() => handleDelete(row._id)} > Delete </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BlogByUser;