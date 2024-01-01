import { Stack } from 'expo-router';
import { useCallback } from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


const Layout = () => {
    const [loaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        //DMItalic: require('../assets/fonts/DMSans-Italic.ttf'),
        DMMeduium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

    });
    const onLayoutRootView = useCallback(async () => {
        if (loaded) {
            await SplashScreen.hideAsync();
        }
    } , [loaded])
    if (!loaded) {
        return null;
    }

        
    return <Stack />;

};

export default Layout;
