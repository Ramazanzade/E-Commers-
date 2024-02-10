import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Imge from '../../assets/imge/1.svg';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import Left from '../../assets/icon/arrow-left.svg'
import Heart from '../../assets/icon/heart-filled.svg'
import { toggleFavorite } from '../../Store/Feature/Product/ProductSlice';
import IsHeart from '../../assets/icon/heart.svg'
const Product_headr = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.advertisingReducer.value);
    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const flatListRef = useRef<FlatList>(null);
    const dispatch = useDispatch<any>();
    const [isFavorite, setisFavorite] = useState(false)
    const circles = data.map((_: any, index: number) => (
        <View
            key={index}
            style={[
                {
                    width: 10,
                    height: 10,
                    borderRadius: 100,
                    marginHorizontal: 5,
                    backgroundColor: '#ffffff',
                },
                index === currentIndex ? { width: 25, } : null,
            ]}
        />
    ));
    const renderitem = ({ item, index }: { item: any; index: number }) => {
        return (
            <View style={{ width: SCREEN_WIDTH, alignSelf: 'center' }}>
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(254, 163, 180, 1)',
                        height: SCREEN_HEIGHT / 3.3
                    }}
                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <View style={{ alignSelf: 'center', alignContent: 'flex-end' }}>
                            <View style={{ flexDirection: 'row', marginTop: '110%', marginLeft: '18%' }}>{circles}</View>
                        </View>
                        <View style={{ position: 'absolute', zIndex: -1, marginLeft: '-5%' }}>
                            <Imge />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const goback = () => {
        navigation.navigate('HomeScreen')
    }
    const handle = () => {
        setisFavorite(!isFavorite);
    }
    return (
        <View style={{position:'absolute',zIndex:-1}}>
            <View style={{ position: 'absolute', zIndex: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 30, padding: '2%', width: 45, height: 43 }} onPress={() => goback()}>
                    <Left height={30} width={30}  />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 30, padding: '2%', width: 45, height: 43, alignSelf: 'center' }} onPress={() => handle()}>
                    {isFavorite ? (
                        <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginTop:'5%' }}>
                            <IsHeart width={25} height={25} />
                        </View>
                    ) : (
                        <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginTop:'5%' }}>
                            <Heart width={25} height={25} />
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={(itemProps) => renderitem(itemProps)}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 60));
                    setCurrentIndex(newIndex);
                }}
                showsHorizontalScrollIndicator={false}
            // style={{ width: SCREEN_WIDTH - 20 }}
            />
        </View>
    );
};


export default Product_headr