import React from "react";
import { SubmitButton, Widget, TextareaInput } from "../index";

function ConfirmForm({ icon, ...otherProps }) {
    const { 
        labelTitle, 
        placeholderTitle, 
        minRowsTitle, 
        maxRowsTitle,
        labelDescription, 
        placeholderDescription, 
        minRowsDescription, 
        maxRowsDescription,
        submitTitle
    } = otherProps;
    return (
        <Widget>
            <TextareaInput 
                label={labelTitle}
                placeholder={placeholderTitle}
                minRows={minRowsTitle}
                maxRows={maxRowsTitle}
                />
            <TextareaInput 
                label={labelDescription}
                placeholder={placeholderDescription}
                minRows={minRowsDescription}
                maxRows={maxRowsDescription}
                />
            <SubmitButton
                title={submitTitle}
                variant="contained"
                sx={{ mt: 1 }}
                />
        </Widget>
  );
}

export default ConfirmForm;
