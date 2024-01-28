import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Advertising_List from '../../Component/Advertising_List/Advertising_List'
import Profile_Name from '../../Component/Profile_name/Profile_Name'
import Search from '../../Component/Search/Search'
import Order_List from '../../Component/Order_List/Order_List'
import Cart_List from '../../Component/Cart_List/Cart_List'
import Cuppon_List from '../../Component/Cuppon_List/Cuppon_List'
import Store_List from '../../Component/Store_List/Store_List'
import { SCREEN_WIDTH } from '../../Utils/common'

const Home = () => {
  return (
    <ScrollView>
      <Profile_Name />
      <Search />
      <Order_List />
      <Advertising_List />
      <Cart_List />
      <Cuppon_List />
      <View style={{ width: SCREEN_WIDTH - 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%' }}>
        <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>Magazines</Text>
        <TouchableOpacity>
          <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <Store_List />
    </ScrollView>
  )
}

export default Home