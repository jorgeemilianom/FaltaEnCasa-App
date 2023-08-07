import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from '@react-native-material/core'

const Loader = () => {
  
  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}

export default Loader
