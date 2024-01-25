import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

type TProductItemProps = {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  thumbnail: string;
};

const ProductItem = ({
  id,
  title,
  brand,
  description,
  price,
  thumbnail,
}: TProductItemProps) => {
  return (
    <View key={id} style={styles.productCardStyle}>
      <View style={{ flex: 0.4, justifyContent: "center" }}>
        <Image source={{ uri: thumbnail }} style={styles.productImageStyle} />
      </View>
      <View style={{ flex: 0.6, justifyContent: "center" }}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subText}>{brand}</Text>
        <Text style={styles.subText}>{description}</Text>
        <Text style={[styles.titleText, { fontSize: 16 }]}>{"$ " + price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

// export default React.memo(ProductItem)

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    marginBottom: 5,
  },
  productImageStyle: { width: 120, height: 120, borderRadius: 10 },
  productCardStyle: {
    backgroundColor: "#fffffF",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    flexDirection: "row",
  },
});
