import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import Splas_Loading from '../../Constans/Splas_Loading/Splas_Loading';
import Flower from '../../assets/imge/Flowers.svg'
import { SCREEN_WIDTH } from '../../Utils/common';

const Splash = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [textOpacity] = useState(new Animated.Value(0));
    const [imgeOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        setTimeout(() => {
            setBackgroundColor('#F63D68');
        }, 1000);

        Animated.timing(textOpacity, {
            toValue: 1,
            duration: 1000,
            delay: 3000,
            useNativeDriver: true,
        }).start();
        Animated.timing(imgeOpacity, {
            toValue: 1,
            duration: 1000,
            delay: 3500,
            useNativeDriver: true,
        }).start();

    }, []);

    return (
        <View style={{ backgroundColor, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Animated.Image
                style={{
                    opacity: imgeOpacity,
                    transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [-200, 0] }) }],
                    width: SCREEN_WIDTH,
                }}
                source={require('../../assets/imge/2.png')}

            />
            <Animated.View style={{transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }]}}>
                <Animated.Text style={{ opacity: textOpacity, textAlign: 'center', color: '#FFFFFF', fontSize: 50, fontWeight: '600' }}>
                    Bloomify.
                </Animated.Text>
            </Animated.View>
            <View>
                <Animated.Image
                    style={{
                        opacity: imgeOpacity,
                        transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [200, 60] }) }],
                        alignSelf: 'center'
                    }}
                    source={require('../../assets/imge/4.png')}
                />
                <Animated.Image
                    style={{
                        opacity: imgeOpacity,
                        transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }],
                        width: SCREEN_WIDTH
                    }}
                    source={require('../../assets/imge/3.png')}
                />
            </View>
        </View>
    );
};

export default Splash;
