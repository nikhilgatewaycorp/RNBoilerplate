import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content} from "native-base";
import {MainHeader} from "app/Component";
import {notificaiton} from 'app/assets'
import {View, Text} from "react-native";

class NewsScreen extends Component {
    render() {
        return (
            <Container>
                <MainHeader  bodyContent={'NewsScreen'} rightIcon={notificaiton}/>
                <View>
                    <Text>{'Setting'}</Text>
                </View>
            </Container>


        );
    }
}

const mapActionCreators = {};

export default connect(
    null,
    mapActionCreators
)(NewsScreen);
