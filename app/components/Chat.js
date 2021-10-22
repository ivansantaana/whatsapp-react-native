import React, {Component} from "react";
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import axios from "axios";
import { FAKE_CHATS } from "../data/data";
<<<<<<< HEAD
import { StyleSheet } from "react-native";
=======
>>>>>>> 364731b45636c2cdef81653ae660cc99e787db94

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
<<<<<<< HEAD
    render() {
        if(this.state.loaded) {
            return (
                <FlatList
                    data={this.state.chatList}
                    renderItem={({item}) => <Text>{item.first_name}</Text>}
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

/*export default class ListChat extends Component {
    render() {
        return (

        );
=======
    render() {
        if(this.state.loaded) {
            return (
                <FlatList
                    data={this.state.chatList}
                    renderItem={({item}) => <Text>{item.first_name}</Text>}
                    keyExtractor={item => item.id}
                />
            )
        } else {
            return(
                <ActivityIndicator size="large" />
            )
        }
>>>>>>> 364731b45636c2cdef81653ae660cc99e787db94
    }
}*/

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        padding:10
    },
    avatarContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    chatDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    chatDetailsContainerWrap: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    nameContainer: {
        alignItems: "flex-start",
        flex: 1
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"flex-end"
    },
    msgContainer: {
        flex: 1
    },
    nameText: {
        fontWeight: "bold",
        color: "#000"
    },
    dateText: {
        fontSize: 12
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});