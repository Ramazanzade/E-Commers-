import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Advertising_List = () => {
    const data = useSelector((state: any) => state.advertisingReducer.value)
    const renderitem = (data: any) => {
        return (
            <TouchableOpacity>
                <Text>{data.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal={true}
                />
        </View>
    )
}

export default Advertising_List