import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/build-controls/build-controls';

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
        }
    }

    render() {
        return(
            <Aux>
            <Burger ingredient ={this.state.ingredient}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;