import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from "./Main"
import Pokemon from './Pokemon'

export default function Navigation() {
    return (
    <Router>
        <Route exact path="/">
            <Main></Main>
        </Route>
        <Route path='/pokemon'>
            <Pokemon />
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
    </Router>
    )
}
const About = () => <div>Trang giới thiệu</div>