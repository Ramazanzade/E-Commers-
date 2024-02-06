import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '../../Store/Feature/Product/ProductSlice'
import { SCREEN_WIDTH } from '../../Utils/common'

const Category_List = () => {
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
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E4E7EC', borderRadius: 10, marginHorizontal: 10, marginTop: '7%' }}>
                <Text style={{ color: 'rgba(29, 41, 57, 1)', fontWeight: '500', fontSize: 20, margin: 10 }}>{item.category.name}</Text>
                <Image
                    source={{ uri: item.category.image }}
                    style={{ width: 100, height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
        )
    }
    const upperData = data.products.slice(0, Math.ceil(data.products.length / 2));
    const lowerData = data.products.slice(Math.ceil(data.products.length / 2));
    return (
        <View>
            <FlatList
                data={upperData}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}
            />
              <FlatList
                data={lowerData}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}
            />
        </View>
    )
}

export default Category_List;
