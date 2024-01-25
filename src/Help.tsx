import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Loader from './Loader';

export function ListFooterComponent<T>({
    dataLendth,
    limitCount,
    maxLimit,
}:{
    dataLendth:number,
    limitCount:number,
    maxLimit:number,
}
  ){
    if (dataLendth === 0) {
      return <View style={styles.listFooter}><Text>There is no Data</Text></View>;
    } else if (maxLimit = limitCount) {
      return (<View style={styles.listFooter}>
        <Text>All Data has been fetched</Text>
        </View>
      );
    }
    return <Loader />;
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    color: 'pink',
  },
  listFooter:{
    alignItems: 'center',
    padding: 20,
    marginBottom: 120,
  }
});
