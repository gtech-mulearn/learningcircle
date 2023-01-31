import React from 'react'

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import styles from '../subcourse.module.css'

const TableStructure = ({ level, courses }) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#f6842c",
            fontFamily: "Noto Sans",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontFamily: "Poppins",
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    return (
        <>
            <br />
            <p className={styles.sv_heading}>
                <span>{level}</span> Projects
            </p>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Project Name</StyledTableCell>
                            <StyledTableCell align="right">Tutorial Link</StyledTableCell>
                            <StyledTableCell align="right">Discord Tags</StyledTableCell>
                            <StyledTableCell align="right">Karma Points</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {courses && courses.map((course) => (
                            <StyledTableRow key={course.project_name}>
                                <StyledTableCell component="th" scope="row">{course.project_name}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <a
                                        href={course.tutorial_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className={styles.link}>Click Here</span>
                                    </a>
                                </StyledTableCell>
                                <StyledTableCell align="right">{course.discord_tag}</StyledTableCell>
                                <StyledTableCell align="right">{course.karma}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableStructure