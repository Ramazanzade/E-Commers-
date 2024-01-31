import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Profile_Name from '../../Component/Profile_name/Profile_Name'
import Search from '../../Component/Search/Search'
import Favorit_List from '../../Component/Favorit_List/Favorit_List'
import Notifications from '../../Component/Notifications/Notifications'
import { SCREEN_WIDTH } from '../../Utils/common'
import Left from '../../assets/icon/arrow-left.svg'
const Favorit = ({navigation}:any) => {
    const goback = () => {
        navigation.navigate('Profile' )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: SCREEN_WIDTH-20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', alignSelf:'center' }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <TouchableOpacity style={{borderRadius: 30, padding: '2%' }} onPress={()=>goback()}>
                        <Left height={30} width={30} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000', marginLeft: '7%', alignSelf:'center', textAlign:'center' }}>Favorit</Text>
                </View>
                <View style={{ marginRight: '5%', alignSelf: 'center' }}>
                    <Notifications />
                </View>
            </View>
            <Search />
            <Favorit_List />
        </View>
    )
}

export default Favorit