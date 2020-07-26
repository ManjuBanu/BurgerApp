import React from 'react';
import './burger.css';
import BurgerIngredient from './burger-incredients/burger-ingredient';

const Burger = (props) =>{
    return(
        <div className="Burger">
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;