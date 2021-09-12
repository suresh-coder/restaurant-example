import React, { Component } from 'react'
import dataService from '../services/data'
import { Link } from "react-router-dom";
export default class Restaurant extends Component {
    constructor(props) {
        super(props)
        this.state = { restaurantList: [] }
        this.openAdd=this.openAdd.bind(this)
    }
    componentDidMount() {
        this.fillRestaurantData()
    }

    fillRestaurantData() {
        const restaurantLst = dataService.getRestaurantList()
        restaurantLst.then((data) => {
            if (typeof data !== 'undefined' && data !== null) {
                console.log(data, 'data')
                this.setState({ restaurantList: data.restaurant })

            }
        })
    }

    openAdd = () => {
        <Link to="/add" />
    }

    render() {
        const { restaurantList } = this.state
        return (
            <div style={{ textAlign: "center" }}>
                <h5 className="header">Restaurant List </h5>
                <div className="content">
                    <input type="button" className="button" value="Add Restaurant" onClick={() => { this.openAdd() }} />

                    <table id="restaurant">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Borough</th>
                                <th>Cuisine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {typeof restaurantList !== 'undefined' && restaurantList.length > 0 ? (
                                restaurantList.map((restaurant, index) => {
                                    const { address, borough, cuisine, name, _id } = restaurant;
                                    return (
                                        <tr key={`${_id}`} >
                                            <td>{`${name}`}</td>
                                            <td>{`${address.building},${address.street},${address.zipcode}`}</td>
                                            <td>{`${borough}`}</td>
                                            <td>{`${cuisine}`}</td>

                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4}>No restaurant found</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
