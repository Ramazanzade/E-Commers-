import { View, Text } from 'react-native'
import React from 'react'
import Userimge from '../../assets/imge/Profile.svg'
import { useSelector } from 'react-redux'
import { SCREEN_WIDTH } from '../../Utils/common'

const User_Profil = () => {
    const data=useSelector((state:any)=>state.userReducer.value[0])
    return (
        <View style={{display:'flex',flexDirection:'row', width:SCREEN_WIDTH-40,alignSelf:'center',marginTop:'5%', backgroundColor:'rgba(255, 255, 255, 255)'}}>
            <View>
                <Userimge />
            </View>
            <View style={{alignSelf:'center',marginLeft:'3%'}}>
                <Text>Welcome,</Text>
                <Text style={{fontSize:20,fontWeight:'700',color:'rgba(29, 41, 57, 1)'}}>{data.name}  {data.surname}</Text>
            </View>
        </View>
    )
}

export default User_Profil