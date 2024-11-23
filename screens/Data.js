import { View, Text, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Supplier from "../components/Supplier";
import styles from "../styles/style";

function Data() {
    //Usando route
    const route = useRoute();
    //Usando navigation
    const navigation = useNavigation();
    //Recenbendo o objeto provider de Home
    const providerData = route.params?.provider;
    //UseState para armazenar os dados salvos no dispositivo
    const [data, setData] = useState(null);
    //Salva o objeto providerData localmente no dispositivo
    async function save() {
        try {
            await AsyncStorage.setItem('@provider', JSON.stringify(providerData));
        } catch (err) { }
    }
    //Função para deletar o objeto
    async function deleteData() {
        try {
            await AsyncStorage.removeItem('@provider');
            getData();
            navigation.goBack();
        } catch (err) {
            Alert.alert('Ocorreu um erro ao deletar');
        }
    }
    //Retorna o objeto salvo
    async function getData() {
        try {
            const data = await AsyncStorage.getItem('@provider');
            setData(JSON.parse(data));
        } catch (err) {
            Alert.alert('Ocorreu um erro');
        }
    }
    //Chama função getData e save quando o providerData recebe os dados 
    useEffect(
        () => {
            save();
            getData();
        }, [providerData]
    );

    return (
        <View style={styles.container}>
            {/*Se o data for null uma mensagem é exibida*/}
            {data === null ? <Text style={styles.text}>Ainda não foi adicionado nenhum fornecedor.</Text> : <Supplier data={data} deleteData={deleteData} />}
        </View >
    );
}

export default Data;