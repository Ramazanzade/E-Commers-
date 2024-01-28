import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Imge from '../../assets/imge/3d-render-gift-box-with-ribbon-present-package 1.svg';
import { SCREEN_WIDTH } from '../../Utils/common';

const Cuppon_List = () => {
    const data = useSelector((state: any) => state.cupponReducer.value);
    const renderitem = ({ item}:any) => {
        return (
            <View style={{ width: SCREEN_WIDTH - 20, alignSelf: 'center' }}>
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor: 'rgba(242, 244, 247, 1)',
                        borderRadius: 20,
                        marginLeft: 20,
                    }}


                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <View style={{ alignSelf:'center',alignItems:'center' }}>
                            <Text style={{ fontSize: 25, color: '#000000', fontWeight: '800',width:'60%' }}>{item.text}</Text>
                            <Text style={{ fontSize: 15, color: '#000000', fontWeight: '800',width:'60%', marginTop: 5 }}>{item.des}</Text>
                        </View>
                        <View>
                            <Imge width={200} height={200} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };


    return (
        <View style={{marginTop:'3%'}}>
            <FlatList
                data={data}
                renderItem={(itemProps) => renderitem(itemProps)}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={{ width: SCREEN_WIDTH - 20 }}
            />
        </View>
    );
};

export default Cuppon_List;
