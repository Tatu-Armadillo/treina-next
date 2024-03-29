import React from "react";
import InputMask from 'react-input-mask';
import TextField from "../TextField/TextField";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
    value: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, value, onChange, ...props }) => {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            <TextField {...props} />
        </InputMask >
    );
}

export default TextFieldMask;
