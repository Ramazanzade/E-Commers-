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
                style={{ borderColor: 'rgba(234, 234, 234, 1)', borderWidth: 2, borderRadius: 20, textAlign: 'left', paddingLeft: '5%', fontSize: 15, width: SCREEN_WIDTH - 20, alignSelf: 'center', marginTop: '5%' }}
            />
            <View style={{ display: 'flex', alignSelf: 'flex-end', position: 'absolute', marginRight: '15%', marginTop: '8%' }}>
                <Searchsvg />
            </View>
        </View>
    )
}

export default Search