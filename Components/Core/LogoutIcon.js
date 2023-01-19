import React, {useContext} from 'react';
import {Pressable} from 'react-native';
import {AuthContext} from '../../Store/AuthContextProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LogoutIcon = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Pressable onPress={() => logout()}>
      <MaterialIcons name={'logout'} size={30} />
    </Pressable>
  );
};

export default LogoutIcon;
