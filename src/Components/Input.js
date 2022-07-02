import React from 'react';


function Input({ name, type, id, action, placeholder }) {
    function handelChnage() {
        action()
    }
    return (
        <div>
            <label>{name}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={handelChnage }
            />
        </div>
    )
}

export default Input;