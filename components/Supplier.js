import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../styles/style";

//Componenete que exibe os dados dos fornecedores
function Supplier({ data, deleteData }) {
    //Imagem 
    const image = data?.uri ;

    return (
        <View style={styles.supplierContainer}>
            <Image
                source={{ uri: image }}
                style={styles.uploadImage}
            />
            <Text style={styles.text}>Fornecedor: {data?.name}</Text>
            <Text style={styles.text}>Número: {data?.number}</Text>
            <Text style={styles.text}>Categoria: {data?.category}</Text>
            <Text style={styles.text}>Endereço: {data?.address}</Text>
            <View style={styles.imageContainer}>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteData}>
                <Text style={styles.buttonText}>Deletar Fornecedor</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Supplier;