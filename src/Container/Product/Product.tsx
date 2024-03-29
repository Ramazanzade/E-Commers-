import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Product_headr from '../../Component/Product_Headr/Product_headr'
import Product_Detail from '../../Component/Product_Detail/Product_Detail'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Cart_List from '../../Component/Cart_List/Cart_List'
import { toFormData } from 'axios'
import AddtoBasket_Button from '../../Component/AddtoBasket_Button/AddtoBasket_Button'

const Product = ({navigation}:any) => {
  return (
    <ScrollView>
      <View>
        <Product_headr navigation={navigation} />
        <View style={{width: SCREEN_WIDTH , marginTop:'57%'}}>
          <Product_Detail />
        </View>
        <View style={{}}>
          <View style={{ width: SCREEN_WIDTH - 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%'}}>
            <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>Other Products</Text>
            <TouchableOpacity>
              <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
            </TouchableOpacity>
          </View>
          <Cart_List  navigation={navigation}/>
        </View>
        <View style={{marginTop:'5%'}}>
          <View style={{ width: SCREEN_WIDTH - 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: '3%', marginBottom: '5%'}}>
            <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20, fontWeight: '800' }}>You may also like</Text>
            <TouchableOpacity>
              <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 15, fontWeight: '500' }}>See All</Text>
            </TouchableOpacity>
          </View>
          <Cart_List  navigation={navigation}/>
        </View>
        <AddtoBasket_Button/>
      </View>
    </ScrollView>
  )
}

export default Product
