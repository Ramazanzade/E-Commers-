import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../Store/Feature/Product/ProductSlice';
import { SCREEN_WIDTH } from '../../Utils/common';
import Delet from '../../assets/icon/trash.svg'
const AddBasket_List = () => {
    const data = useSelector((state: any) => state.productReducer)
    const dispatch = useDispatch<any>();
    const [itemCounts, setItemCounts] = useState<any>({});
    useEffect(() => {
        console.log('useEffect is called');
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    const handleMinus = (itemId: string) => {
        if (itemCounts[itemId] && itemCounts[itemId] >= 1) {
            setItemCounts((prevCounts:any) => ({
                ...prevCounts,
                [itemId]: prevCounts[itemId] - 1,
            }));
        }
    };

    const handlePlus = (itemId: string) => {
        setItemCounts((prevCounts:any) => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 1) + 1,
        }));
    };
    const renderItem = ({ item }: any) => {
        const itemId = item.id.toString();
        const count = itemCounts[itemId] || 1;

        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: '2%', backgroundColor:'rgba(255, 255, 255, 1)', borderRadius:10 , padding:'3%'}}>
                <View>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={{ width: 70, height: 70, borderRadius: 10 }}
                    />
                </View>
                <View style={{flex: 1, marginHorizontal:'5%'}}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>{item.category.name.length > 15 ? `${item.category.name.substring(0, 15)}...` : item.category.name}</Text>
                            <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)' }}>{item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Delet />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',marginTop:'2%' }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>₼{item.price}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'rgba(249, 250, 251, 1)', borderRadius:20, paddingHorizontal:'7%', borderWidth:1, borderColor:'rgba(228, 231, 236, 1)'}}>
                            <TouchableOpacity onPress={() => handleMinus(itemId)} >
                                <Text style={{ fontSize: 25, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)', marginHorizontal: 10 ,textAlign:'center', alignSelf:'center'}}>{count}</Text>
                            <TouchableOpacity onPress={() => handlePlus(itemId)}  style={{}}>
                                <Text style={{ fontSize: 25, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>+</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data.products}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}
            />
        </View>
    )
}

export default AddBasket_List