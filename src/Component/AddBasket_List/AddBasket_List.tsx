// import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductsAsync } from '../../Store/Feature/Product/ProductSlice';
// import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
// import Delet from '../../assets/icon/trash.svg'
// import CupponAdd_Input from '../CupponAdd_Input/CupponAdd_Input';
// import Checkout_Button from '../Checkout_Button/Checkout_Button';
// const AddBasket_List = ({ route }: any) => {
//     const data = useSelector((state: any) => state.productReducer)
//     const dispatch = useDispatch<any>();
//     const [itemCounts, setItemCounts] = useState<any>({});
//     const [total, settotal] = useState(0);

//     useEffect(() => {
//         console.log('useEffect is called');
//         dispatch(fetchProductsAsync());
//     }, [dispatch]);

//     const handleMinus = (itemId: string) => {
//         if (itemCounts[itemId] && itemCounts[itemId] >= 1) {
//             setItemCounts((prevCounts: any) => ({
//                 ...prevCounts,
//                 [itemId]: prevCounts[itemId] - 1,
//             }));
//         }
//     };

//     const handlePlus = (itemId: string) => {
//         setItemCounts((prevCounts: any) => ({
//             ...prevCounts,
//             [itemId]: (prevCounts[itemId] || 1) + 1,
//         }));
//     };



//     let totalAmount = 0;

//     const renderItem = ({ item }: any) => {
//         const itemId = item.id.toString();
//         const count = itemCounts[itemId] || 1;
//         const data_price = item.price;
//         const data_total = data_price * count;
//         totalAmount += data_total;
//         settotal(totalAmount)

//         return (
//             <View style={{ display: 'flex', flexDirection: 'row', marginVertical: '2%', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 10, padding: '3%' }}>
//                 <View>
//                     <Image
//                         source={{ uri: item.images[0] }}
//                         style={{ width: 80, height: 100, borderRadius: 10, alignSelf:"center" }}
//                     />
//                 </View>
//                 <View style={{ flex: 1, marginHorizontal: '5%' }}>
//                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                         <View>
//                             <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>{item.category.name.length > 15 ? `${item.category.name.substring(0, 15)}...` : item.category.name}</Text>
//                             <Text style={{ fontSize: 15, color: 'rgba(169, 169, 169, 1)' }}>{item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}</Text>
//                         </View>
//                         <View>
//                             <TouchableOpacity>
//                                 <Delet />
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
//                         <View>
//                             <Text style={{ fontSize: 15, fontWeight: '600', color: 'rgba(29, 41, 57, 1)' }}>₼{data_total}</Text>
//                         </View>
//                         <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(249, 250, 251, 1)', borderRadius: 20, paddingHorizontal: '9%', borderWidth: 2, borderColor: 'rgba(228, 231, 236, 1)' }}>
//                             <TouchableOpacity onPress={() => handleMinus(itemId)} >
//                                 <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgba(29, 41, 57, 1)' }}>-</Text>
//                             </TouchableOpacity>
//                             <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgba(29, 41, 57, 1)', marginHorizontal: 10, textAlign: 'center', alignSelf: 'center' }}>{count}</Text>
//                             <TouchableOpacity onPress={() => handlePlus(itemId)} style={{}}>
//                                 <Text style={{ fontSize: 15, fontWeight: '300', color: 'rgba(29, 41, 57, 1)' }}>+</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
//     return (
//         <View>
//             <View style={{ height: SCREEN_HEIGHT / 1.9 }}>
//                 <FlatList
//                     data={data.products.slice(0, 3)}
//                     renderItem={(item) => renderItem(item)}
//                     keyExtractor={(item) => item.id.toString()}
//                     showsHorizontalScrollIndicator={false}
//                     style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}
//                 />
//             </View>
//             <View style={{ backgroundColor: 'rgba(249, 250, 251, 1)', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: SCREEN_HEIGHT }}>
//                 <CupponAdd_Input />
//                 <View style={{ marginTop: '5%' }}>
//                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 60, alignSelf: 'center' }}>
//                         <Text style={{ color: 'rgba(152, 162, 179, 1)', fontSize: 20 }}>Subtotal</Text>
//                         <Text style={{ fontSize: 20, fontWeight: '400', color: 'rgba(29, 41, 57, 1)' }}>₼{total}</Text>
//                     </View>
//                     <View style={{ height: 2, backgroundColor: 'rgba(228, 231, 236, 1)', width: SCREEN_WIDTH - 50, alignSelf: 'center', marginVertical: '3%' }}></View>
//                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 60, alignSelf: 'center' }}>
//                         <Text style={{ color: 'rgba(29, 41, 57, 1)', fontSize: 20 }}>Total</Text>
//                         <Text style={{ fontSize: 20, fontWeight: '400', color: 'rgba(29, 41, 57, 1)' }}>₼{total}</Text>
//                     </View>
//                 </View>
//                 <Checkout_Button />
//             </View>
//         </View>
//     )
// }

// export default AddBasket_List