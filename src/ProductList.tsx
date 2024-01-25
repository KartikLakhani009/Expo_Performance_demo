import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import { TProduct, products } from "./productData";
import ProductItem from "./ProductCard";
import Loader from "./Loader";

interface IProductListProps {}

const ProductList = (props: IProductListProps) => {
  const [data, setData] = useState(products);

  const renderItem =useCallback(({ item, index }: { item: TProduct; index: number }) => (
      <ProductItem {...item} />
    ),[])

  const onReload = useCallback(()=>{
    setData([])
    setTimeout(()=>{
      setData(products)
    },2000)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTextStyle}>{"Product List"}</Text>
        <TouchableOpacity onPress={onReload} >
          <Text style={{fontWeight:'bold', marginRight:10}} >Reload</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListFooterComponent={() => {
          if (data.length === 0) return <Loader />;
          else
            return (
              <View style={styles.listFooter}>
                <Text>All Data has been fetched</Text>
              </View>
            );
        }}
      />
    </SafeAreaView>
  );
};

export default ProductList;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 40 : 10,
    marginBottom: Platform.OS === "android" ? 15 : 0,
  },
  headerTextStyle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "blue",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginLeft: 15,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    marginRight: 15,
  },
  listFooter: {
    alignItems: "center",
    padding: 20,
    marginBottom: 120,
  },
});
