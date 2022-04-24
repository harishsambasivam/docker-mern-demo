import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AddData({ addData }) {

    const handlePaste = (event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            addData(event.target.value);
            event.target.value = "";
        }
    }
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <TextField onKeyDown={handlePaste} fullWidth label="Paste" id="fullWidth" />
        </Box>
    );
}
