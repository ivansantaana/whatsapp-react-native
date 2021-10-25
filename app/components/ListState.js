import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export default class ListState extends Component {
    render() {
        return (
            <View style = {styles.listItemContainer}>
                <View style = {styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{uri: this.props.image}}
                    />
                </View>
                <View style = {styles.callDetailsContainer}>
                    <View style={styles.callDetailsContainerWrap}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{this.props.first_name}</Text>
                        </View>
                    </View>
                <View style={styles.callDetailsContainerWrap}>
                    <View style={styles.date_timeContainer}>
                        <Text>{this.props.date} {this.props.time}</Text>
                    </View>
                </View>
                </View>
            </View>
        );
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
    callDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    callDetailsContainerWrap: {
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
    }
});
