import React from 'react';
import {connect} from 'react-redux';
import "./counter.css";

function mapStoreToProps( store )
{
    return { count: store.count };
}

const mapDispatchToProps =
{
    incrementAction
};

function incrementAction( count )
{
    return { type: "UPDATE_COUNT", newCount: count };
}

class Counter extends React.Component
{

    sendToStore( count )
    {
        this.props.incrementAction( count );
    }

    increment = () =>
    {
      this.sendToStore( this.props.count + 1 );
    };
    
    incrementLots = () =>
    {
        this.sendToStore( this.props.count + 10 );
    };
    
    decrement = () =>
    {
        this.sendToStore( this.props.count - 1 );
    };
    
    decrementLots = () =>
    {
        this.sendToStore( this.props.count - 10 );
    };

    render()
    {
        return(
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrementLots}>--</button>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.incrementLots}>++</button>
                </div>
            </div>
        )
    }
}

export default connect( mapStoreToProps, mapDispatchToProps )( Counter );
