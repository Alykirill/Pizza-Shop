import React, {useEffect} from "react";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";
import {fetchPizzas, setPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";


function App(){
    const dispatch = useDispatch();


    useEffect(() =>{
        fetchPizzas()
    },[])


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        </div>
    );
}

export default App


//export default connect(
//    (state) => {
//        return {
//            items: state.pizzas.items,
//            filters: state.filters,
//        };
//    },
//    (dispatch) => {
//        return {
//            setPizzas: (items) => dispatch(setPizzas(items)),
//        };
//    },
//)(App);