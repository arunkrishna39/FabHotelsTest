import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

//import { Constants } from 'expo';
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window');

export default class CarouselView extends Component {

    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
    }
    renderItems = () => {
        const listItems = this.props.data.map((image) =>
            <TouchableOpacity key={image.id} onPress={() => { this.showPreview(image) }}>
                <Image source={{ uri: image.url }} style={styles.item} />
            </TouchableOpacity>
        );
        return listItems;
    }
    showPreview = (image) => {
        this.props.showFullView(image);
    }
    render() {
        return (
            <ScrollView
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.container}
                //pagingEnabled={true}
                horizontal={true}
                decelerationRate={0}
                snapToInterval={width - 60}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled={true}
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 30,
                    bottom: 0,
                    right: 30,
                }}>
                {this.renderItems()}
            </ScrollView>
        );
    }
}
CarouselView.propTypes = {
    data: PropTypes.array,
    showFullView: PropTypes.func
};
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexWrap: "wrap",
        height: 250,
        //backgroundColor: "red"
    },
    item: {
        //marginTop: 100,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    }
});