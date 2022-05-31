
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { Fragment, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Employee() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const apiResponse = await fetch(' https://api.github.com/users');
        setUsers(await apiResponse.json());

    }

    useEffect(() => {
        return () => {
            getUsers();
        };
    }, []);

const handleDeleteClick=(index,e)=>{
    setUsers(users.filter((v,i)=>i !==index));
}
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table" >
                <TableHead sx={{ bgcolor: "#002984" }}>


                    <TableRow>
                        <TableCell sx={{ color: 'white' }}> ID</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">UserName</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row,index) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center" >{row.login}</TableCell>
                            <TableCell align="center" >
                                <Button variant="text"

                                    onClick={e => handleDeleteClick(index,e)}

                                >Delete</Button></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
