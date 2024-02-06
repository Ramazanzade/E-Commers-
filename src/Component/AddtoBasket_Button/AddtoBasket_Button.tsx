import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common';
import { useNavigation } from '@react-navigation/native';
const AddtoBasket_Button = () => {
    const [count, setcount] = useState<any>(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<any>();

    const handelcheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // navigation.navigate('BasketScreen');
        }, 2000);

    }

    const handleMinus = () => {
        if (count >= 1) {
            setcount(count - 1)
        }
    };

    const handlePlus = () => {
        setcount(count + 1)
    };

    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', width: SCREEN_WIDTH - 40, marginVertical: '5%', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 20, paddingVertical: '2%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(249, 250, 251, 1)', borderRadius: 20, paddingHorizontal: '7%', borderWidth: 1, borderColor: 'rgba(228, 231, 236, 1)', alignSelf: 'center' }}>
                <TouchableOpacity onPress={handleMinus} >
                    <Text style={{ fontSize: 25, fontWeight: '400', color: 'rgba(29, 41, 57, 1)' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '400', color: 'rgba(29, 41, 57, 1)', marginHorizontal: 10, textAlign: 'center', alignSelf: 'center' }}>{count}</Text>
                <TouchableOpacity onPress={handlePlus} style={{}}>
                    <Text style={{ fontSize: 25, fontWeight: '300', color: 'rgba(29, 41, 57, 1)' }}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: 'rgba(246, 61, 104, 1)', alignSelf: 'center', borderRadius: 60, marginTop: '2%', paddingHorizontal: '15%',
                    paddingVertical: '5%',
                    height: 45,
                    width:150
                }} onPress={() => { handelcheckout() }} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size='small' color="white" style={{ alignSelf: 'center' , marginTop:'5%'}} />
                    ) : (
                        <Text style={{ fontSize: 18, color: 'rgba(255, 255, 255, 1)', textAlign: 'center',fontWeight:'600' }}>
                            Add to Cart
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddtoBasket_Button