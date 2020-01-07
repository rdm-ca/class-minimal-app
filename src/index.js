import React from "react";
import { render } from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './counter';
import SomeContainer from './someContainer';

import "./index.css";

const initialState = { count: 0, label: "Something labelled" };

class App extends React.Component
{
  reducer( state = initialState, action )
  {
    let newState = {};

    switch( action.type )
    {
      case "UPDATE_COUNT":
        newState = { ...state, count: action.newCount };
        break;

      default:
        newState = { ...state };
    }

    return newState;
  }

  store = createStore( this.reducer );

  render()
  {
    return(
      <Provider store={this.store}>
        <div className="arbitrary-block">
            {this.store.getState().count}  // This will never be re-rendered
            <Counter />
        </div>
        <div className="another-arbitrary-block">
          <SomeContainer />        
        </div>
    </Provider>  
    );
  }  
}

render(<App />, document.getElementById("root"));