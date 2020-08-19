import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/build-controls/build-controls';



const INGREDIENT_PRICE ={
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:5
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount +1;
        const updatedIngredient ={
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredient:updatedIngredient})
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient ={
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredient:updatedIngredient})
    }

    render() {
        const disableInfo ={
            ...this.state.ingredient
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        // return {salad:true , meat:false..} like this
        return(
            <Aux>
            <Burger ingredient ={this.state.ingredient}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved ={this.removeIngredientHandler}
                disabled = {disableInfo}
                price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;