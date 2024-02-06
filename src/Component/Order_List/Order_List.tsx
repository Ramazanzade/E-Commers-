import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Flowers from '../../assets/imge/Frame 14.svg'
const Order_List = () => {
    const height = 100;
    return (
        <View style={{ width: SCREEN_WIDTH }}>
            <View style={{ marginTop: '5%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000', marginLeft: '4%' }}>My Orders</Text>
            </View>
            <View style={{ width: SCREEN_WIDTH-25,  backgroundColor:'rgba(249, 250, 251, 1)', borderRadius:20,alignSelf:'center', marginTop:'3%'}}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'column' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',marginTop:'5%', marginHorizontal:'3%' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000000', fontWeight: 'bold' }}>Order 72340</Text>

                        </View>
                        <View>
                            <Text style={{ color: 'red', fontWeight: '600' }}><Text style={{ fontSize: 17 }}>●</Text>  Getting ready</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' , padding:'5%'}}>
                        <View>
                            <Flowers height={height} width={100} />
                        </View>
                        <View style={{ display: 'flex',flexDirection:'column', height:height, marginLeft:'3 %'}}>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '800', color: '#000000' }}>Recipient: Narmin A.</Text>
                            </View>
                            <View style={{marginTop:height/4}}>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000' }}>Delivery: December 24</Text>
                                <Text style={{ fontSize: 17, fontWeight: '400', color: '#000000' }}>From 9:00 - 12:00</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Order_List