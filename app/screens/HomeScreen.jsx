import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Head from '../components/Head.jsx'
import { getProducts } from '../../Api.js';
import Loader from '../components/Loader.jsx';
import Item from '../components/Home/Item.jsx';

const HomeScreen = () => {
  const [Products, SetProducts] = useState({});
  const [viewLoader, setViewLoader] = useState(true);

  const loadData = async () => {
    const data = await getProducts();
    SetProducts(data);
    setViewLoader(false)
  };

  useEffect(() => {
    loadData();
  }, []);

  if(viewLoader) return <Loader />;

  return (
    <View style={styles.body} >
      <Head />
      <View style={styles.container} >
        
        <FlatList
          data={Products.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Item data={item} />}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  body: {
    backgroundColor: '#080E1E',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop:20
   
  },
  checkbox: {
    width: 64,
    height: 64
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

export default HomeScreen

