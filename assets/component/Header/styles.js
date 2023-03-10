import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:50,
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:20,
        alignItems:'center'
    },
    logo:{
        width:100,
        height:30,
        resizeMode:'contain'
    },
    menu:{
        width:25,
        height:25
    }
});

export default styles;