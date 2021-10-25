import React, {Component} from "react";
import {View, Text, FlatList, ActivityIndicator, Image, StyleSheet} from "react-native";
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
                <>
                <View style = {styles.listItemContainer}>
                <View style = {styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{uri: "https://cdn-icons-png.flaticon.com/512/581/581707.png"}}
                    />
                </View>
                <View style = {styles.stateDetailsContainer}>
                    <View style={styles.stateDetailsContainerWrap}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{"Mi estado"}</Text>
                        </View>
                    </View>
                <View style={styles.stateDetailsContainerWrap}>
                    <View style={styles.date_timeContainer}>
                        <Text style = {styles.date_timeContainer}>{"añade una actualización"}</Text>
                    </View>
                </View>
                </View>
            </View>
            <View style ={styles.grey_block}>
                <View style = {styles.nameContainer}>
                    <Text style = {styles.recientes}>{"  Recientes"}</Text>
                </View>
            </View>
            
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
                </>
            )
        } else {
            return(
                <ActivityIndicator size="large" />
            )
        }
    }
}

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
    stateDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    stateDetailsContainerWrap: {
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
    date_timeContainer: {
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
    },
    video_callContainer: {
        flex: 1,
        alignItems: "flex-end"
    },
    video_call: {
        borderRadius: 30,
        width: 30,
        height: 30
    },
    grey_block:{
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
    recientes: {
        fontWeight: "bold",
        color: "#008F39",
    }
});