import React, {Component} from "react";
import {FlatList, ActivityIndicator} from "react-native";
import axios from "axios";
import { FAKE_CHATS } from "../data/data";
import ListChat from "./ListChat";

export default class Chat extends Component {   
    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get(FAKE_CHATS)
        .then((response) => {
            this.setState({
                chatList: response.data,
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
                    data={this.state.chatList}
                    renderItem={({item}) => (
                        <ListChat
                            first_name={item.first_name}
                            mobile= {item.mobile}
                            message={item.message}
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