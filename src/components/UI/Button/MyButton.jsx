import React from 'react';
import s from "./MyButton.module.css";

const MyButton = ({children,...props}) => {
    return (
            <button {...props} className={s.myButton}>{children}</button>
    );
};

export default MyButton;