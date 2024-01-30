import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Product_headr from '../../Component/Product_Headr/Product_headr'
import Product_Detail from '../../Component/Product_Detail/Product_Detail'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Cart_List from '../../Component/Cart_List/Cart_List'
import { toFormData } from 'axios'
import AddtoBasket_Button from '../../Component/AddtoBasket_Button/AddtoBasket_Button'

const Product = () => {
  return (
    <ScrollView>
      <View>
        <Product_headr />
        <View style={{ borderTopLeftRadius: 20, backgroundColor: 'rgba(249, 250, 251, 1)', borderTopRightRadius: 20, width: SCREEN_WIDTH }}>
          <Product_Detail />
        </View>
        <View style={{}}>
          <View style={{ width: SCREEN_WIDTH - 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%'}}>
            <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>Other Products</Text>
            <TouchableOpacity>
              <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
            </TouchableOpacity>
          </View>
          <Cart_List />
        </View>
        <View style={{marginTop:'5%'}}>
          <View style={{ width: SCREEN_WIDTH - 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%'}}>
            <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>You may also like</Text>
            <TouchableOpacity>
              <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
            </TouchableOpacity>
          </View>
          <Cart_List />
        </View>
        <AddtoBasket_Button/>
      </View>
    </ScrollView>
  )
}

export default Product
