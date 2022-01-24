import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const { logout, authState: { isLoggedIn }  } = useContext( AuthContext );

    return (
        <View>
            <Text style={ styles.title }>AlbumsScreen</Text>

            {
                isLoggedIn &&
                <Button
                    title='Logout'
                    onPress={ logout }
                />
            }
        </View>
    )
}
