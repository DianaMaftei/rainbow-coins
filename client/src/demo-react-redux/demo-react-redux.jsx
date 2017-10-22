import React from 'react';
import { render } from 'react-dom';

// https://reactcheatsheet.com/
class SimpleCoinList extends React.Component {
    render() {
        console.log("my props", this.props)
        return (
            <div>
                <ul>
                    {this.props.coins.map(coin =>
                        <SimpleCoinEl
                            /*spread the object, same as : 
                            symbol={coin.symbol} 
                            name={coin.name} */
                            {...coin}
                            key={coin.symbol} />
                    )}
                </ul>
            </div>
        )
    }
}

//defaultProps is a static property, same for all instances
SimpleCoinList.defaultProps = {
    coins: [{ symbol: "BTC", name: "Bitcoin", visible: true },
    { symbol: "ETH", name: "Ethereum", visible: false }]
}

//each LI is a different component
class SimpleCoinEl extends React.Component {
    render() {
        return (<li>{this.props.name}</li>)
    }
}

//TODO finish the tutorial http://redux.js.org/docs/basics/UsageWithReact.html
const getVisibleCoins = (coins, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return coins
        case 'SHOW_ACTIVE':
            return coins.filter(t => !t.visible)
    }
}

const mapStateToProps = state => {
    return {
        coins: getVisibleCoins(state.coins, state.visibilityFilter)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}
// const VisibleTodoList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)



const el = document.createElement("div")
document.body.appendChild(el)
render(<SimpleCoinList />, el)