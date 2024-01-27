import { View, Text } from 'react-native'
import React from 'react'
import Advertising_List from '../../Component/Advertising_List/Advertising_List'
import Profile_Name from '../../Component/Profile_name/Profile_Name'
import Search from '../../Component/Search/Search'

const Home = () => {
  return (
    <View>
      <Profile_Name />
      <Search />
    </View>
  )
}

export default Home