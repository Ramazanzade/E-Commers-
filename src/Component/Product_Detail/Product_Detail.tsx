import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Reviews from '../../assets/icon/star-.svg'
import { useSelector } from 'react-redux'
const Product_Detail = () => {
    const [activeTab, setActiveTab] = useState('Description');
    const data = useSelector((state: any) => state.productReducer.value);
    const handleTabPress = (tab: any) => {
        setActiveTab(tab);
    };
    return (
        <View style={{}}>
            <View style={{ height: 8, width: 50, backgroundColor: 'rgba(152, 162, 179, 1)', alignSelf: 'center', marginTop: '3%', marginBottom: '5%', borderRadius: 60 }}></View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
                <Text style={{ fontWeight: '700', fontSize: 25, color: 'rgba(29, 41, 57, 1)' }}>Souly - Beauty In Pink</Text>
                <Text style={{ fontWeight: '700', fontSize: 25, color: 'rgba(29, 41, 57, 1)', marginTop: '2%' }}>₼52.50</Text>
            </View>
            <View style={{ display: "flex", flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(246, 61, 104, 1)', padding: '1%', borderRadius: 20 }}>
                    <Reviews width={25} height={25} />
                    <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: '1%', paddingHorizontal: '2%', color: 'rgba(255, 255, 255, 1)' }}>4.6</Text>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: '3%', textAlign: 'center', color: "rgba(152, 162, 179, 1)" }}>(58 Review)</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column',marginBottom:'5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '9%' }}>
                    <TouchableOpacity style={{ backgroundColor: activeTab === 'Description' ? 'rgba(246, 61, 104, 1)' : 'transparent', paddingHorizontal: '4%', paddingVertical: '2%', borderRadius: 20 }} onPress={() => handleTabPress('Description')}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: activeTab === 'Description' ? 'white' : 'black' }}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: activeTab === 'Reviews' ? 'rgba(246, 61, 104, 1)' : 'transparent', paddingHorizontal: '4%', paddingVertical: '2%', borderRadius: 20 }} onPress={() => handleTabPress('Reviews')}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: activeTab === 'Reviews' ? 'white' : 'black' }}>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: SCREEN_WIDTH - 60, alignSelf: 'center', marginTop: '5%' }}>
                    {activeTab === 'Description' ? (
                        <View>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</Text>
                        </View>
                    ) : (
                        <View>
                            <Text>Reviews content goes here</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default Product_Detail