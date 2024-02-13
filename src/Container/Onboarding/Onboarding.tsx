import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import Splas_Loading from '../../Constans/Splas_Loading/Splas_Loading';

const images = [
    { id: 1, image: require('../../../src/assets/imge/Onboarding_imge/1.png'), title: 'Welcome to Bloomify', text: 'Explore a world of vibrant blooms and delightful gifts tailored for every occasion. Lets start your journey with Bloomify' },
    { id: 2, image: require('../../../src/assets/imge/Onboarding_imge/2.png'), title: 'Personalized Gifting Made Easy', text: 'Customize your gifting experience, from elegant bouquets to thoughtful gifts, all at your fingertips with Bloomify. Start spreading joy today!', },
];

const Slide = ({ item }: any) => {
    return (
        <View style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
            <Image
                source={item?.image}
                style={{ height: SCREEN_HEIGHT / 2, width: SCREEN_WIDTH }}
            />
            <View>
                <Text style={{ width: SCREEN_WIDTH - 60, textAlign: 'center', color: '#000000', fontSize: 30, fontWeight: '700', marginTop: '10%' }}>{item?.title}</Text>
                <Text style={{ width: SCREEN_WIDTH - 60, textAlign: 'center', color: '#667085', fontSize: 15, marginTop: '5%' }}>{item?.text}</Text>
            </View>
        </View>
    );
};

const Onboarding = ({ navigation }: any) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
   const ref = useRef<any>();
    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== images.length) {
            const offset = nextSlideIndex * SCREEN_WIDTH;
            ref.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = images.length - 1;
        const offset = lastSlideIndex * SCREEN_WIDTH;
        ref.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View style={{ height: SCREEN_HEIGHT * 0.2, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    {images.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                { height: 10, width: 10, backgroundColor: '#E4E7EC', marginHorizontal: 3, borderRadius: 50 },
                                currentSlideIndex === index && { backgroundColor: '#F63D68', height: 10, width: 10 },
                            ]}
                        />
                    ))}
                </View>
                <View style={{ marginBottom: '10%' }}>
                    {currentSlideIndex === images.length - 1 ? (
                        <View style={{ height: 60 }}>
                            <TouchableOpacity
                                style={[{ flex: 1, height: 100, width: SCREEN_WIDTH - 40, borderRadius: 70, backgroundColor: '#F63D68', justifyContent: 'center', alignItems: 'center' }, { backgroundColor: '#F63D68' }]}
                                onPress={() =>navigation.navigate('AccountSetupScreen')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>Get Start</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row', width: SCREEN_WIDTH - 40 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[{ flex: 1, height: 60, borderRadius: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }, { backgroundColor: '#F2F4F7' }]}
                                onPress={skip}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Skip</Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={{ flex: 1, height: 60, borderRadius: 50, backgroundColor: '#F63D68', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: SCREEN_HEIGHT * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={images}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

export default Onboarding;
