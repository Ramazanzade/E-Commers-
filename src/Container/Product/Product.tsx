import { View, Text } from 'react-native'
import React from 'react'
import Product_headr from '../../Component/Product_Headr/Product_headr'
import Product_Detail from '../../Component/Product_Detail/Product_Detail'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'

const Product = () => {
  return (
    <View>
      <Product_headr />
      <View style={{borderTopLeftRadius:20,backgroundColor:'rgba(249, 250, 251, 1)',borderTopRightRadius:20,position:'absolute',zIndex:1,marginTop:SCREEN_HEIGHT/4.1, width:SCREEN_WIDTH}}>
        <Product_Detail />
      </View>
    </View>
  )
}

export default Product