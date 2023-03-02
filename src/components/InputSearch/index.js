import React from "react";

function InputSearch({value, className, style, placeholder, field, form, ...props}){
    const isInvalid =
        // eslint-disable-next-line react/prop-types
        form && form.errors && form.touched[field.name] && form.errors[field.name]
    return (
        <>
            <input value={value} className={`${isInvalid? '': ""} ${className}`} placeholder={placeholder} style={style} {...field} {...props}/>
        </>
    )
}
export default InputSearch
