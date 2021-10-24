import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export default class ListCall extends Component {
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
                <View style = {styles.video_callContainer}>
                     <Image
                        style={styles.video_call}
                        source={{uri:"data:image/png;base64,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"}}
                    />   
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
