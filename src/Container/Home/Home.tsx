import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Advertising_List from '../../Component/Advertising_List/Advertising_List'
import Profile_Name from '../../Component/Profile_name/Profile_Name'
import Search from '../../Component/Search/Search'
import Order_List from '../../Component/Order_List/Order_List'
import Cart_List from '../../Component/Cart_List/Cart_List'
import Cuppon_List from '../../Component/Cuppon_List/Cuppon_List'
import Store_List from '../../Component/Store_List/Store_List'

const Home = () => {
  return (
    <ScrollView>
      <Profile_Name />
      <Search />
      <Order_List/>
      <Advertising_List/>
      <Cart_List/>
      <Cuppon_List/>
      <Store_List/>
    </ScrollView>
  )
}

export default Home