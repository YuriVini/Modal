import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign, } from '@expo/vector-icons';


export default function App() {

    const [isVisible, setIsVisible] = useState(false);
    const [isShow, setIsShow] = useState(false);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
        setIsShow(() => false);
    }

    function handlePressed() {
        setIsShow((prevState) => !prevState);
    }

    return (
        <View style={styles.container}>
            <View style={styles.all}>
                <Text style={styles.text}>
                    Olá mundo
                </Text>

                <Pressable
                    onLongPress={handlePressed}
                    onPress={handleToggleVisibility}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>

                    
                </Pressable>
                {isShow ?
                    <View
                        style={styles.balloons}
                    >

                        <View style={styles.balloon2} >

                        </View>
                        <View style={styles.balloon}>
                            <Text style={styles.balloonText}>
                                SÓ CLICA!
                        </Text>
                        </View>
                    </View> : null
                }




                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={isVisible === true}
                >
                    <View style={styles.centeredModal}>
                        <View style={styles.modalForm}>
                            <View style={styles.closeIcon}>
                                <Feather
                                    name="x"
                                    size={30}
                                    color="#fff"
                                    onPress={handleToggleVisibility}
                                />
                            </View>
                            <Text style={styles.modalText}>
                                Sejam Bem-Vindos {"\n"}
                                Devs!
                            </Text>
                        </View>
                    </View>
                </Modal>

            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    all: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 13
    },
    button: {
        position: 'absolute',
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF1493',
        color: '#000',
        elevation: 2,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold"
    },
    centeredModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    closeIcon: {
        padding: 10,
        marginLeft: 340
    },
    modalForm: {
        borderRadius: 15,
        width: '100%',
        height: 350,
        backgroundColor: '#000',
        elevation: 20
    },
    modalText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        marginTop: 95
    },
    balloons: {
        flexDirection: 'column',
    },
    balloon: {
        backgroundColor: '#cccccc',
        padding: 15,
        position: 'absolute',
        top: -33,
        left: 60,
        width: '22%',
        borderRadius: 30
    },
    balloon2: {
        position: 'absolute',
        width: 25,
        height: 25,
        left: 60,
        top: -23,
        backgroundColor: '#cccccc',
        transform: [{ rotate: "45deg" }]
    },
    balloonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 11,
        fontWeight: "bold"
    }
});
