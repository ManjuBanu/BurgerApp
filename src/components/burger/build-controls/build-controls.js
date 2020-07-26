import React from 'react';
import './build-controls.css';
import Building from './building/building';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];


const BuildControls = (props) => (
    <div className="BuildControls">
   
    {controls.map(eachCtrl => (
        <Building key={eachCtrl.label} label={eachCtrl.label}/>
    ))}
    </div>
);

export default BuildControls;