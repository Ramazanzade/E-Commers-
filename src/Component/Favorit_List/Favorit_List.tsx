import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync, productAction, toggleFavorite } from '../../Store/Feature/Product/ProductSlice';
import Heart from '../../assets/icon/heart.svg'
import IsHeart from '../../assets/icon/heart-filled.svg'
import Star from '../../assets/icon/star-filled.svg'
import Vector from '../../assets/icon/Vector.svg'
import { SCREEN_WIDTH } from '../../Utils/common';
const Favorit_List = ({ navigation }: any) => {
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
        dispatch(productAction(data))        
        navigation.navigate('ProductScreen',{productId: data.id });
        
    }
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 10, backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 20, marginTop:'5%' }} onPress={() => {handlepres(item)}}>
                <View style={{ position: 'relative', padding: 10 }}>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={{ width: 150, height: 150, borderRadius: 10 }}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 15,
                            right: 25,
                            zIndex: 1,
                            width: 30,
                            height: 30,
                            backgroundColor: '#ffffff',
                            borderRadius: 50,
                        }}
                        onPress={() => handle(item)}
                    >
                        {item.isFavorite ? (
                            <View style={{ alignSelf: 'center', marginTop: '9%' }}>
                                <Heart width={25} height={25} />
                            </View>
                        ) : (
                            <View style={{ alignSelf: 'center', marginTop: '9%' }}>
                                <IsHeart width={25} height={25} />
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)' }}>{item.title.length > 10 ? `${item.title.substring(0, 10)}...` : item.title}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Star color={'green'} width={30} height={25} />
                        <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)', marginLeft: 3, alignSelf: 'center' }} >{item.category.id}</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
                    <View >
                        <Text style={{ fontSize: 13, color: 'rgba(152, 162, 179, 1)' }}>{item.category.name.length > 15 ? `${item.category.name.substring(0, 15)}...` : item.category.name}...</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
                        <Vector color={'green'} width={25} height={20} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 10, marginBottom: 10 }}>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>₼{item.price}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'rgba(52, 64, 84, 1)' }}>25-30 min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{alignSelf:'center'}}>
            <FlatList
                data={data.products}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
            />
        </View>
    )
}

export default Favorit_List