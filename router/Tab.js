import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Data from '../screens/Data';

//Compinente Tab Navigator
function Tab() {
    //Criação de um ButtomTab
    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#353535' }, tabBarStyle: { backgroundColor: '#353535' }, headerTintColor: '#fff' }}>
                <BottomTab.Screen component={Home} name='Home' options={{ tabBarIcon: () => <Ionicons name='home' color={'#fff'} size={23} /> }} />
                <BottomTab.Screen component={Data} name='Fornercedor' options={{ tabBarIcon: () => <Ionicons name='file-tray' color={'#fff'} size={23} /> }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default Tab;