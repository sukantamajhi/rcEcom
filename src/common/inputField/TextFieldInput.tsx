import { Box, TextField } from "@mui/material";
import React from "react";

const TextFieldInput = (props: any) => {
    return (
        <div className={`flex flex-col justify-center`}>
            <p>{props.label}</p>
            <TextField
                className={`textExtraClsRoot w-full bg-white border border-solid border-blue-700 rounded`}
                // helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                // label="Name"
            />
        </div>
    );
};

export default TextFieldInput;
