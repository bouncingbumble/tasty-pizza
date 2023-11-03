import { Tabs } from 'expo-router/tabs'
import GridIcon from '../assets/GridIcon'
import ListIcon from '../assets/ListIcon'
import MapIcon from '../assets/MapIcon'

export default function AppLayout() {
    return (
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
                name="grid"
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: () => <GridIcon />,
                    tabBarIconStyle: { marginBottom: -8 },
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
        </Tabs>
    )
}
