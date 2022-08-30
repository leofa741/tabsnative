import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props ) => {

    // const params = route.params as RouterParams;
    const params = route.params;
    console.log(params)
    const{changeUsernameSelect}=useContext(AuthContext)

    useEffect( () => {

        navigation.setOptions({
            title: params.nombre
        })

    },[]);

    useEffect(()=>{
        changeUsernameSelect(params.nombre)

    },[]);



    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }

            </Text>
        </View>
    )
}
