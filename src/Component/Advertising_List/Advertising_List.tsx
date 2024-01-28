import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Imge from '../../assets/imge/1.svg';
import { SCREEN_WIDTH } from '../../Utils/common';

const Advertising_List = () => {
    const data = useSelector((state: any) => state.advertisingReducer.value);
    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const flatListRef = useRef<FlatList>(null);

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
                index === currentIndex ? {width:25, } : null,
            ]}
        />
    ));
    const renderitem = ({ item, index }: { item: any; index: number }) => {
        return (
            <View style={{ width: SCREEN_WIDTH - 20, alignSelf: 'center' }}>
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor: 'rgba(254, 163, 180, 1)',
                        borderRadius: 20,
                        marginLeft: 20,
                    }}


                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <View style={{ alignSelf: 'center', alignItems:'center'}}>
                            <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800', width: '70%' }}>{item.text}</Text>
                            <Text style={{ fontSize: 15, color: '#ffffff', fontWeight: '800', width: '80%', marginTop: 5 }}>{item.des}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop:'20%', alignContent:'flex-end', marginLeft:'25%'}}>{circles}</View>
                        </View>
                        <View style={{}}>
                            <Imge />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };


    return (
        <View style={{marginTop:'3%'}}>
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
                style={{ width: SCREEN_WIDTH - 20 }}
            />
        </View>
    );
};

export default Advertising_List;
