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
    View
} from 'react-native';


//https://github.com/facebook/react-native/issues/3904

class ReactReach extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.hostBar}/>
                <View style={styles.bottomPanel}>
                    <ResultLight style={styles.resultLight}/>
                    <TouchableNativeFeedback onPress={this._onPressButton} background={TouchableNativeFeedback.Ripple()}>
                        <View style={styles.testButton}>
                            <Text>Test</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

    _onPressButton() {

    }
}

class ResultLight extends Component {
    render() {

        return (
            <Image source={require('./disabled.png')}/>
        )
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

    testButton: {
    }

});

AppRegistry.registerComponent('ReactReach', () => ReactReach);