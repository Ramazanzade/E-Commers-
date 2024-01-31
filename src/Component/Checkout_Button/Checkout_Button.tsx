import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common';

const Checkout_Button = () => {
    const [loading, setLoading] = useState(false);
    const handelcheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }

    return (
        <View>
            <TouchableOpacity style={{width:SCREEN_WIDTH-60,backgroundColor:'red',alignSelf:'center',borderRadius:20,marginTop:'1.5%', marginBottom:'5%'}} onPress={handelcheckout}>
                {loading ? (
                    <ActivityIndicator size='large' color="white" style={{}} />
                ) : (<Text style={{fontSize:20,color:'rgba(255, 255, 255, 1)',textAlign:'center',padding:'3%'}}>Checkout</Text>)}
            </TouchableOpacity>
        </View>
    )
}

export default Checkout_Button