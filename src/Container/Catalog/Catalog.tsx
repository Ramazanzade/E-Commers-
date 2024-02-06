import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Profile_Name from '../../Component/Profile_name/Profile_Name'
import Search from '../../Component/Search/Search'
import Cart_List from '../../Component/Cart_List/Cart_List'
import Category_List from '../../Component/Category_List/Category_List'
import { SCREEN_WIDTH } from '../../Utils/common'
import Store_List from '../../Component/Store_List/Store_List'
import ImgeCategory_List from '../../Component/ImgeCategory_List/ImgeCategory_List'
import Advertising_List from '../../Component/Advertising_List/Advertising_List'
import Notifications from '../../Component/Notifications/Notifications'
import { useSelector } from 'react-redux'

const Catalog = () => {
  const data=useSelector((state:any)=>state.userReducer.value[0])
  return (
    <ScrollView style={{backgroundColor:'#F2F4F7'}}>
      <View style={{ width: SCREEN_WIDTH, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#000000', marginLeft: '7%' }}>Categories</Text>
          <Text style={{ color: 'rgba(208, 213, 221, 1)', fontSize: 15, marginLeft: '7%' }} >{data.des.length > 25 ? `${data.des.substring(0, 25)}...` : data.des}</Text>
        </View>
        <View style={{ marginRight: '5%', alignSelf: 'center' }}>
          <Notifications />
        </View>
      </View>
      <Search />
      <Category_List />
      <View style={{ width: SCREEN_WIDTH - 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '3%' }}>
        <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>Featured</Text>
        <TouchableOpacity>
          <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <Store_List />
      <ImgeCategory_List />
      <Advertising_List />
      <View style={{ width: SCREEN_WIDTH - 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%' }}>
        <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>Our Goods</Text>
        <TouchableOpacity>
          <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <Store_List />
    </ScrollView>
  )
}

export default Catalog