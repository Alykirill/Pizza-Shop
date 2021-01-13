import React,{useEffect,useState} from "react";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";
import store from "./redux/store";
import {setPizzas} from "./redux/actions/pizzas";
import {connect, useDispatch, useSelector} from "react-redux";


function App(){

    const dispatch = useDispatch();



    useEffect(() =>{
        axios.get('http://localhost:3000/db.json').then(({data}) =>{
            dispatch(setPizzas(data.pizzas))
        })
    },[])


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={items}/>}/>
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