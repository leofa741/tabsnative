import React, { useContext } from 'react'
import { View, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string
}

export const TouchableIcon = ({iconName}:Props) => {


  const{changeFavicon}=  useContext(AuthContext)

    return (

              <TouchableOpacity
              onPress={()=>changeFavicon(iconName)}
              >
      
             <Icon name={iconName} size={ 80 } color={ colores.primary } />

            




             </TouchableOpacity>
    )
}
