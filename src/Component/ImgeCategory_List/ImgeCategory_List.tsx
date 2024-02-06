import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '../../Store/Feature/Product/ProductSlice'
import { SCREEN_WIDTH } from '../../Utils/common'

const ImgeCategory_List = () => {
    const data = useSelector((state: any) => state.productReducer)
    const dispatch = useDispatch<any>();
    useEffect(() => {
        console.log('useEffect is called');
        dispatch(fetchProductsAsync());
    }, [dispatch]);
    const uniqueCategories = new Set<string>();
    const renderItem = ({ item }: any) => {
        if (uniqueCategories.has(item.category.name)) {
            return null;
        }
        uniqueCategories.add(item.category.name);
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F2F4F7', borderRadius: 10, marginHorizontal: 10,}}>
                <Image
                    source={{ uri: item.category.image }}
                    style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text style={{ color: 'rgba(29, 41, 57, 1)', fontWeight: '500', fontSize: 20,textAlign:'center',marginTop:3 }}>{item.category.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{backgroundColor:'#F2F4F7'}}>
            <FlatList
                data={data.products}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{width:SCREEN_WIDTH-40, alignSelf:'center', marginBottom:'5%'}}
            />
        </View>
    )
}


export default ImgeCategory_List