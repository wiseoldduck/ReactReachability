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
        this.state = {ready: true, hostname: null, testResult: "unknown", errorDescription: ""};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.hostBar} autoCorrect={false} onChangeText={this._onChangeText.bind(this)}/>
                <View style={styles.bottomPanel}>
                    <ResultLight testResult={this.state.testResult} style={styles.resultLight}/>
                    {
                    /** Use 'Ripple' or get a warning: https://github.com/facebook/react-native/issues/3904 **/
                    }
                    <TouchableNativeFeedback onPress={this._onPressButton.bind(this)}
                                             background={TouchableNativeFeedback.Ripple()}>
                        <View style={styles.testButton}>
                            <Text>{this.state.ready ? 'Test' : 'Testing...'}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <Text style={styles.errorDescription}>{this.state.errorDescription}</Text>
            </View>
        )
    }

    _onChangeText(hostname) {
        // this is our single lame attempt at being friendly with loosey-goosey urls
        // we are only testing http reachability so this is a valid assumption if the user leaves it out
        if (hostname.sub(0, 7) != 'http://') {
            hostname = 'http://' + hostname;
        }

        this.setState({hostname: hostname});
    }

    _onPressButton() {
        if (this.state.ready && this.state.hostname) {
            this.setState({ready: false});
            NativeModules.ReachabilityModule.test(this.state.hostname).then(
                (response) => this.setState({ready: true, testResult: 'good', errorDescription: 'OK'}),
                (error) => this.setState({ready: true, testResult: 'bad', errorDescription: error.toString()}));
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
