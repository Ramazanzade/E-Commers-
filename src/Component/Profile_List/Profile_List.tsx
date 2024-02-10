import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SCREEN_WIDTH } from '../../Utils/common'
import Rigiht from '../../assets/icon/arrow-right.svg'
import Order from '../../assets/icon/truck.svg'
import Favorites from '../../assets/icon/heart.svg'
import Reviews from '../../assets/icon/star.svg'
import Informations from '../../assets/icon/add.svg'
import Messages from '../../assets/icon/messages.svg'
import Cupons from '../../assets/icon/ticket.svg'
import Reminders from '../../assets/icon/clock.svg'
import Registered from '../../assets/icon/card-pos.svg'
import Wallet from '../../assets/icon/wallet-2.svg'
import Collections from '../../assets/icon/forward-item.svg'
import Notifications from '../../assets/icon/notification-bing.svg'
import Support from '../../assets/icon/card-pos.svg'
import Help from '../../assets/icon/message-question.svg'
import Campaigns from '../../assets/icon/percentage-square.svg'
const Profile_List = ({navigation}:any) => {
    const data = useSelector((state: any) => state.ProfileListReducer.value)
    const icons = {
        truck:Order,
        heart:Favorites,
        star:Reviews,
        add:Informations,
        messages:Messages,
        ticket:Cupons,
        clock:Reminders,
        card:Registered,
        wallet:Wallet,
        forward:Collections,
        notification:Notifications,
        crd:Support,
        question:Help,
        percentage:Campaigns

      };
      type Item = {
        icon: 'truck' | 'heart'|'star'|'add'|'messages'|'ticket'|'clock'|'card'|'wallet'|'forward'|'notification'|'crd'|'question'|'percentage';
        text: string;
      };
      
    const renderitem = ({ item }: { item: Item }) => {
        const Icon = icons[item.icon]; 
        const onPress = () => {
            if (item.icon === 'heart') {
                navigation.navigate('Favorit'); 
            }
        };
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent: 'space-between', borderRadius: 10, marginVertical: '2%', padding: '3%' }} onPress={()=>onPress()}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{backgroundColor:'rgba(242, 244, 247, 1)',padding:'5%', borderRadius:5,}}>
                      <Icon></Icon>
                    </View >
                    <View style={{alignSelf:'center',marginLeft:'10%'}}>
                        <Text style={{ fontSize: 20, color: 'rgba(29, 41, 57, 1)' , textAlign:'center', fontWeight:'bold'}}>{item.text}</Text>
                    </View>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Rigiht />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ marginBottom: '5%',backgroundColor:'rgba(255, 255, 255, 255)'}}>
            <FlatList
                data={data}
                renderItem={(item) => renderitem(item)}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}
            />
        </View>
    )
}

export default Profile_List