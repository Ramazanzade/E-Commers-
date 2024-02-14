import { View, Text } from 'react-native'
import React from 'react'
import Vector from '../../assets/imge/AccountSetup_imge/Vector.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
import Vector2 from '../../assets/imge/AccountSetup_imge/Vector-d.svg'
const AccountSetupHeadre = () => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', width: SCREEN_WIDTH - 20, alignSelf: 'flex-end' }}>
                <View>
                    <Text style={{ color: "#1A1C1E", fontSize: 30, fontWeight: '500' }}>Welcome to</Text>
                    <Text style={{ color: '#F63D68', fontSize: 60, fontWeight: '700' }}>Bloomify.</Text>
                    <Text style={{ color: '#98A2B3', fontSize: 15, fontWeight: '400' }}>Embrace joy with Bloomify. Start now!</Text>
                </View>
                <View>
                    <Vector />
                </View>
            </View>
            <View style={{marginTop:'5%'}}>
                <Vector2 />
            </View>
        </View>
    )
}

export default AccountSetupHeadre