import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import AddBasket_List from '../../Component/AddBasket_List/AddBasket_List'
import CupponAdd_Input from '../../Component/CupponAdd_Input/CupponAdd_Input'

const Cart = () => {
  return (
    <View>
      <View style={{ width: SCREEN_WIDTH - 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%' }}>
        <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>My Cart</Text>
      </View>
      <AddBasket_List/>
    </View>
  )
}

export default Cart