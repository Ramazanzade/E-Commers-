import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
const Register_inuput = () => {
    const [email, setemail] = useState('')

    return (
        <View>
            <View>
                <TextInput
                    onChangeText={setemail}
                    value={email}
                    placeholder='Enter your email or number'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 17, color: '#ACB5BB', padding: '4%' }}
                />
            </View>
        </View>
    )
}

export default Register_inuput