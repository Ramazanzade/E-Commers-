import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SCREEN_WIDTH } from '../../../Utils/common';
import Imge from '../../../assets/imge/ForgotOtp_img/3.svg'
const OTP_Time = () => {
    const [seconds, setSeconds] = useState(300);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <View>
            <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 40, marginTop: '5%', position:'relative' }}>
                <Text style={{ color: 'rgba(172, 181, 187, 1)', fontSize: 15, fontWeight: '600' }}>Send code reload in</Text>
                <Text style={{ color: 'rgba(246, 61, 104, 1)', fontSize: 17, fontWeight: '600' }}>0{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</Text>
            </View>
            <View style={{marginTop:'-5%'}} >
                <Imge />
            </View>
        </View>
    );
};

export default OTP_Time;
