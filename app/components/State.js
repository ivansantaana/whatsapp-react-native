import React, {Component} from "react";
import {FlatList, ActivityIndicator} from "react-native";
import axios from "axios";
import { FAKE_STATES } from "../data/data";
import ListState from "./ListState";

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateList : [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get(FAKE_STATES)
        .then((response) => {
            this.setState({
                stateList: response.data,
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
                    data={this.state.stateList}
                    renderItem={({item}) => (
                        <ListState
                            first_name={item.first_name}
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