import React, { useContext } from 'react'
import { Text, View,Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {


 const { sigIn,authState} = useContext( AuthContext)


    return (
        <View style={ styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>

            {
                !authState.isLoggedIn ?   <Button   title='SignIn'  onPress={()=>sigIn()} />: null
            }         


        </View>
    )
}
