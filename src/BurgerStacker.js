import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {
constructor () {
    super()

    this.state = {
         ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'goldenrod'}
          ],
          burgerIngs: []
    }
}

    addToStack = (e) => {
        // console.log('this is clicked', e.target)
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        this.setState({
            burgerIngs: [
                {name: ingName, color: ingColor},
                ...this.state.burgerIngs
            ]
        })
    }

    clearBurger = () => {
        this.setState({
            burgerIngs: []
        })
    }
    render () {
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className='stacks'>
                    <IngredientList 
                    ingredients={this.state.ingredients}
                    addIngs = {this.addToStack}
                    />
                    <BurgerPane 
                    ingredients={this.state.burgerIngs}
                    clear={this.clearBurger}
                    />
                </div>
            </div>
        )
    }
}