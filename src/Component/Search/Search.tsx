import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Searchsvg from '../../assets/icon/search-normal.svg'

const Search = () => {
    const [search, setsearch] = useState('')
    return (
        <View style={{ display: 'flex', position: 'relative', marginTop: '3%' }}>
            <TextInput
                onChangeText={setsearch}
                value={search}
                placeholder='Search...'
                placeholderTextColor='rgba(41, 41, 41, 1)'
                style={{ borderColor: 'rgba(234, 234, 234, 1)', borderWidth: 2, borderRadius: 15, textAlign: 'left', paddingLeft: '5%', fontSize: 15, width: SCREEN_WIDTH - 20, alignSelf: 'center', marginTop: '5%', color:'rgba(41, 41, 41, 1)'}}
            />
            <View style={{ display: 'flex', alignSelf: 'flex-end', position: 'absolute', marginRight: '7%', marginTop: '8%' }}>
                <Searchsvg />
            </View>
        </View>
    )
}

export default Search