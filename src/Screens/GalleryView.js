import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Modal,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import CarouselView from '../Components/CarouselView';

const deviceWidth = Dimensions.get("window").width;
let imageData = [
    { id: 1, url: 'https://pimg.fabhotels.com/propertyimages/665/thumbnail/room-photos-fabhotel-4-seasons-silk-board-bangalore-Hotels-20171017031000.jpg' },
    { id: 2, url: 'https://pimg.fabhotels.com/propertyimages/665/medium/room-photos-fabhotel-4-seasons-silk-board-bangalore-Hotels-20171017031027.jpg' },
    { id: 3, url: 'https://pimg.fabhotels.com/propertyimages/665/medium/room-photos-fabhotel-4-seasons-silk-board-bangalore-Hotels-20171017031047.jpg' },
    { id: 4, url: 'https://pimg.fabhotels.com/propertyimages/665/medium/room-photos-fabhotel-4-seasons-silk-board-bangalore-Hotels-20171017031058.jpg' }];
export default class GalleryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            previewData: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>FabHotels</Text></View>
                <CarouselView data={imageData} showFullView={this.showFullView} />
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: false });
                    }}>
                    <View style={styles.preview}>
                        <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }); }} style={styles.close}><Text style={styles.closeText}>CLOSE</Text></TouchableOpacity>
                        <Image style={styles.previewImage} resizeMode={'contain'} source={{ uri: this.state.previewData ? this.state.previewData.url : '' }}></Image>
                    </View>
                </Modal></View >
        );
    }
    showFullView = (image) => {
        this.setState({ modalVisible: true, previewData: image })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    preview: {

        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1
    },
    previewImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    close: {
        justifyContent: 'flex-end',
    },
    closeText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        margin: 15
    },
    header: {
        width: deviceWidth,
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
        elevation: 2,
        shadowColor: "transparent",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#e5e3e7",
        shadowColor: "#e5e3e7",
    },
    headerText: {
        fontSize: 18,
        color: "#333333"
    }
});