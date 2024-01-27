import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'

const Search = () => {
    const [search, setsearch] = useState('')
    return (
        <View>
            <TextInput
                onChangeText={setsearch}
                value={search}
                placeholder='Search...'
                style={{borderColor:'rgba(234, 234, 234, 1)', borderWidth:5, borderRadius:20, textAlign:'left', paddingLeft:'5%', fontSize:15,width:SCREEN_WIDTH-20, alignSelf:'center', marginTop:'5%'}}
            />
        </View>
    )
}

export default Search