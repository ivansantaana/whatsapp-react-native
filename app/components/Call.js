import React, {Component} from "react";
import {FlatList, ActivityIndicator} from "react-native";
import axios from "axios";
import { FAKE_CALLS } from "../data/data";
import ListCall from "./ListCall";

export default class Call extends Component {
    constructor(props) {
        super(props)
        this.state = {
            callList : [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get(FAKE_CALLS)
        .then((response) => {
            this.setState({
                callList: response.data,
                loaded: true
            })
        })
       .catch(function(error) {
           console.log(error);
       });
    }
    render() {
        if(this.state.loaded) {
            return (
                <FlatList
                    data={this.state.callList}
                    renderItem={({item}) => (
                        <ListCall
                            first_name={item.first_name}
                            mobile={item.mobile}
                            date={item.date}
                            time={item.time}
                            image={item.image}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            )
        } else {
            return(
                <ActivityIndicator size="large" />
            )
        }
    }
}