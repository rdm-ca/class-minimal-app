import React from 'react';
import Counter from "./counter";
import {connect} from 'react-redux';

import "./someContainer.css";

function mapStoreToProps( store )
{
    return { label: store.label };
}

class SomeContainer extends React.Component
{
    render()
    {
        return(
            <div className="arbitrary-inner-block">
                <h1>{this.props.label}</h1>
                <Counter />
            </div>
        )
    }
}

export default connect( mapStoreToProps )( SomeContainer );
