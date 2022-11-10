import { StyleSheet } from "react-native";

const styles=StyleSheet.create ({
  feed :
   {flex: 1,
    backgroundColor: "grey",
},card: {
    marginVertical: 20,
},
description:{
     margin: 16,
},
image:{
    width: '100%',
    flex: 1,
    height: 320,
},
cardHeader: {
 margin: 4,
 flexDirection: 'row',
},
userName:{
    margin: 8,
    fontSize: 18,
    fontWeight: '600',
}

});

export default styles;