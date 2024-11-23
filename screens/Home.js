import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker";
import styles from '../styles/style'

function Home() {
    //UseState para armazenar o valor do TextInput
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [category, setCategory] = useState('');
    const [address, setaAdress] = useState('');
    //Armazena a imagem
    const [file, setFile] = useState(null);
    //Armazena a mensagem de erro caso ocorra
    const navigation = useNavigation();
    //Função para enviar os dados para o componente Data
    function buttonPress() {
        if (name !== '' && number !== '' && category !== '' && address !== '' && file !== null) {
            setName('');
            setNumber('');
            setCategory('');
            setaAdress('');
            setFile(null);
            const provider = {
                name: name,
                number: number,
                category: category,
                address: address,
                uri: file
            }
            //Passando o objeto provider para o componente Data
            navigation.navigate('Fornercedor', { provider });
        } else {
            Alert.alert('Os campos não foram preenchido!')
        }
    }
    //Função para receber uma imagem
    async function pickImage() {
        //Recebe a imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
        });

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            //Atribui a uri da imagem ao useState
            setFile(result.assets[0].uri);
        } else {
            Alert.alert('Nenhuma imagem selecionada!');
        }
    }

    return (
        <View style={styles.container}>
            {file !== null ? <Image
                source={{
                    uri: file
                }}
                style={{ width: 150, height: 150, borderRadius: 100 }}
            /> : <Image
                source={require('../image/imagem-fornecedor.png')}
                style={styles.image}
            />}
            <Text style={styles.title}>Cadastro Fornecedor</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Digite o nome do fornecedor'
                placeholderTextColor={'#fff'}
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Digite o número do fornecedor'
                placeholderTextColor={'#fff'}
                maxLength={11}
                keyboardType='numeric'
                onChangeText={setNumber}
                value={number}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Digite a catogoria do produto'
                placeholderTextColor={'#fff'}
                onChangeText={setCategory}
                value={category}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Digite o endereço do fornecedor'
                placeholderTextColor={'#fff'}
                onChangeText={setaAdress}
                value={address}
            />
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                <Ionicons name='arrow-up-circle' size={23} />
                <Text>Adicionar imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={buttonPress}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Home;