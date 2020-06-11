import React, { Component } from 'react'
import Navbar from './Navgiation/navBar'
import FamilyTree from './FamilyTree/index'
import './../App.css'

export default class homePage extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <FamilyTree />
            </div>
        )
    }
}
