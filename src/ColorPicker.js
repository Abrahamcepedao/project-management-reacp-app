import React from 'react';
import { Button } from '@material-ui/core';
import './css/ColorPicker.css'

function ColorPicker() {
    return (
        <div className="colorPicker__container">
            <Button className="colorPicker__Button button1" disabled={false}></Button>
            <Button className="colorPicker__Button button2" disabled={false}></Button>
            <Button className="colorPicker__Button button3" disabled={false}></Button>
            <Button className="colorPicker__Button button4" disabled={false}></Button>
            <Button className="colorPicker__Button button5" disabled={false}></Button>
        </div>
    )
}

export default ColorPicker;
