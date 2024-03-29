import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync, productAction, toggleFavorite } from '../../Store/Feature/Product/ProductSlice';
import Heart from '../../assets/icon/heart.svg'
import IsHeart from '../../assets/icon/heart-filled.svg'
import Star from '../../assets/icon/star-filled.svg'
import Vector from '../../assets/icon/Vector.svg'
import { SCREEN_WIDTH } from '../../Utils/common';
const Store_List = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.productReducer)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        console.log('useEffect is called');
        dispatch(fetchProductsAsync());
    }, [dispatch]);
    const handle = (data: any) => {
        dispatch(toggleFavorite(data.id))
    }
    const handlepres = (data: any) => {
        // dispatch(productAction(data))        
        navigation.navigate('ProductScreen', { productId: data.id });

    }
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={{
                marginHorizontal: 5, backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 20, shadowColor: '#F2F4F7',
                shadowOffset: { width: 10, height: 20 },
                shadowOpacity: 1.25, 
                shadowRadius: 30, 
                elevation: 5
            }} onPress={() => { handlepres(item) }}>
                <View style={{ position: 'relative', padding: 10 }}>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={{ width: 200, height: 150, borderRadius: 10 }}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 15,
                            right: 15,
                            zIndex: 1,
                            width: 30,
                            height: 30,
                            backgroundColor: '#ffffff',
                            borderRadius: 50,
                        }}
                        onPress={() => handle(item)}
                    >
                        {item.isFavorite ? (
                            <View style={{ alignSelf: 'center', marginTop: '13%' }}>
                                <IsHeart width={20} height={20} />
                            </View>
                        ) : (
                            <View style={{ alignSelf: 'center', marginTop: '13%' }}>
                                <Heart width={20} height={20} />
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                        <View >
                            <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)' }}>{item.category.name.length > 15 ? `${item.category.name.substring(0, 15)}...` : item.category.name}...</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10, marginTop: '2%' }}>
                            <Vector color={'green'} width={25} height={20} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
                        <View style={{ marginTop: '2%' }}>
                            <Star color={'green'} width={30} height={25} />
                        </View>
                        <Text style={{ fontSize: 17, color: 'rgba(52, 64, 84, 1)', marginLeft: 3, alignSelf: 'center' }} >{item.category.id}</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 10, marginBottom: 15 }}>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>₼{item.price}+</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)' }}>25-30 min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ marginBottom: '5%', backgroundColor: '#F2F4F7' }}>
            <FlatList
                data={data.products}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ width: SCREEN_WIDTH - 50, alignSelf: 'center' }}
            />
        </View>
    )
}

export default Store_List