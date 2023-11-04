import { Tabs } from 'expo-router/tabs'
import ListIcon from '../assets/ListIcon'
import MapIcon from '../assets/MapIcon'
import { useFonts } from 'expo-font'
import GeneralStatusBarColor from '../Components/GeneralStatusBarColor'
import PizzaIcon from '../assets/PizzaIcon'

export default function AppLayout() {
    const [fontsLoaded] = useFonts({
        'Nanum Gothic': require('../assets/fonts/NanumGothic-Regular.ttf'),
        'Nanum Gothic Bold': require('../assets/fonts/NanumGothic-Bold.ttf'),
    })

    return (
        fontsLoaded && (
            <>
                <GeneralStatusBarColor
                    backgroundColor="#a42229"
                    barStyle="light-content"
                />
                <Tabs
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor: '#a42229',
                            paddingVertical: 16,
                        },
                    }}
                >
                    <Tabs.Screen
                        // Name of the route to hide.
                        name="index"
                        options={{
                            // This tab will no longer show up in the tab bar.
                            href: null,
                        }}
                    />
                    <Tabs.Screen
                        name="list"
                        options={{
                            headerShown: false,
                            tabBarLabel: '',
                            tabBarIcon: () => <ListIcon />,
                            tabBarIconStyle: { marginBottom: -8 },
                        }}
                    />
                    <Tabs.Screen
                        name="map"
                        options={{
                            headerShown: false,
                            tabBarLabel: '',
                            tabBarIcon: () => <MapIcon />,
                            tabBarIconStyle: { marginBottom: -8 },
                        }}
                    />
                    <Tabs.Screen
                        name="info"
                        options={{
                            headerShown: false,
                            tabBarLabel: '',
                            tabBarIcon: () => <PizzaIcon />,
                            tabBarIconStyle: { marginBottom: -8 },
                        }}
                    />
                </Tabs>
            </>
        )
    )
}
