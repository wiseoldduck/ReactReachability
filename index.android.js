/**
 * React "Reachability" demo
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    TextInput,
    TouchableNativeFeedback,
    Image,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';


class ReactReach extends Component {

    // Can use es6 classes, but put initial state into constructor: https://discuss.reactjs.org/t/es6-component-getinitialstate/2838
    constructor(props) {
        super(props);
        this.state = {testResult: "unknown", hostname: null};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.hostBar} onChangeText={(text) => this.setState({hostname:text})}/>
                <View style={styles.bottomPanel}>
                    <ResultLight testResult={this.state.testResult} style={styles.resultLight}/>
                    {
                    /** Use 'Ripple' or get a warning: https://github.com/facebook/react-native/issues/3904} **/
                    }
                    <TouchableNativeFeedback onPress={this._onPressButton.bind(this)}
                                             background={TouchableNativeFeedback.Ripple()}>
                        <View style={styles.testButton}>
                            <Text>Test</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

    _onPressButton() {
        if (this.state.hostname) {
            NativeModules.ReachabilityModule.test(this.state.hostname);
        }
    }
}


class ResultLight extends Component {

    render() {
        if (this.props.testResult == 'good') {
            return (
                <Image source={require('./green.png')}/>
            );
        }
        else if (this.props.testResult == 'bad') {
            return (
                <Image source={require('./red.png')}/>
            );
        }
        else {
            return (
                <Image source={require('./disabled.png')}/>
            );
        }
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 50,
        marginRight: 50
    },

    hostBar: {},

    bottomPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    resultLight: {},

    testButton: {}

});

AppRegistry.registerComponent('ReactReach', () =>ReactReach);