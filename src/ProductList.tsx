import React, { useCallback } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, Platform } from "react-native";
import { TProduct, products } from "./productData";
import ProductItem from "./ProductCard";

interface IProductListProps {}

const ProductList = (props: IProductListProps) => {
  const renderItem = useCallback(
    ({ item, index }: { item: TProduct; index: number }) => (
      <ProductItem {...item} />
    ),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTextStyle}>{"Product List"}</Text>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ProductList;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS === 'android' ? 30 : 0,
    marginBottom:Platform.OS === 'android' ? 15 : 0
  },
  headerTextStyle: {
    marginVertical: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 15,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
});
