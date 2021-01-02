import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component {

    constructor() {
        super()
        this.state={
            text : ""
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Header backgroundColor={'black'}
                    centerComponent={{
                    text:"Write Story Screen", 
                    style:{color:"white", fontSize: 25}}}>
                </Header>

                <TextInput style={styles.inputBox} onChangeText = {text=>{
                    this.setState({text:text});
                }}
                value = {this.state.text}>
                </TextInput>

                <TextInput style={styles.inputBox} onChangeText = {text=>{
                    this.setState({text:text});
                }}
                value = {this.state.text}>
                </TextInput>

                <TextInput style={styles.inputBox} 
                    onChangeText = {text=>{
                        this.setState({text:text});
                    }}
                    value = {this.state.text}
                    multiline = {true}>
                </TextInput>

                <TouchableOpacity style = {styles.submitButton}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        marginTop: 200, 
        width: '80%', 
        alignSelf: 'center', 
        height: 40, 
        textAlign: 'center', 
        borderWidth: 4, 
        outline: 'none' 
    },
    submitButton:{
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        radius : 15
    },
    submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:"bold",
        color: 'white'
    }
});