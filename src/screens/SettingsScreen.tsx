import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const {authState,logOut} = useContext(AuthContext)

    

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen</Text>

            <Button   title='SignIn'  onPress={()=>logOut()} />

            <Text style={ styles.title }>{JSON.stringify(authState,null,3)}</Text>


            {
                 authState.favoriteIcon? <Icon name={authState.favoriteIcon} size={100} />:null

             }



        </View>
    )
}
