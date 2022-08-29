import React, { useContext } from 'react'
import { Text, View,Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {


 const { sigIn} = useContext( AuthContext)


    return (
        <View style={ styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>



            <Button  
             title='SignIn'
             onPress={()=>sigIn()}
            
            />




        </View>
    )
}
