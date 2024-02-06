import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'

const CupponAdd_Input = ({ route }: any) => {
    const [Discount, setDiscount] = useState('')

    return (

        <View style={{ display: 'flex', position: 'relative', marginTop: '3%' }}>
            <TextInput
                onChangeText={setDiscount}
                value={Discount}
                placeholder='Enter Discount Code...'
                style={{ borderColor: 'rgba(234, 234, 234, 1)', borderRadius: 20, textAlign: 'left', paddingLeft: '5%', fontSize: 15, width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%', backgroundColor: 'rgba(242, 244, 247, 1)', color:'rgba(152, 162, 179, 1)' }}
            />
            <TouchableOpacity style={{ display: 'flex', alignSelf: 'flex-end', position: 'absolute', marginRight: '15%', marginTop: '8%' }}>
                <Text style={{ color: 'red', fontWeight: '500', fontSize: 15 }} >Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CupponAdd_Input