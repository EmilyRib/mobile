// Importa os módulos React e useState, useEffect de 'react'
import React, { useState, useEffect } from "react";
// Importa os componentes View, Text, TextInput, Button, FlatList e StyleSheet de
'react-native'
import {View,Text,TextInput,Button,FlatList,StyleSheet} from "react-native";
// Defina a URL da API
// const API_URL = 'http://10.0.2.2:3000'; // Para emuladores Android
// Define a URL da API para dispositivos reais
const API_URL = "http://10.136.42.33:3000"; // Para dispositivos reais
// Função principal do aplicativo
export default function App() {
// Define os estados para nome, quantidade, marca, produtos e produto selecionado
const [name, setName] = useState("");


const [quantity, setQuantity] = useState("");
const [brand, setBrand] = useState("");
const [products, setProducts] = useState([]);
const [selectedProduct, setSelectedProduct] = useState(null);
// UseEffect para buscar os produtos quando o componente é montado
useEffect(() => {
fetchProducts();
}, []);
// Função para buscar produtos da API
const fetchProducts = async () => {
try {
// Faz uma requisição GET para a API
const response = await fetch(`${API_URL}/products`);
// Converte a resposta para JSON
const data = await response.json();
// Define o estado de produtos com os dados recebidos
setProducts(data.products);
} catch (error) {
// Loga erros no console
console.error(error);
}
};
// Função para adicionar um produto
const handleAddProduct = async () => {
try {
// Faz uma requisição POST para a API
const response = await fetch(`${API_URL}/products`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
// Envia o corpo da requisição em formato JSON
body: JSON.stringify({ name, quantity, brand }),
});
// Converte a resposta para JSON
const data = await response.json();
// Atualiza o estado de produtos com o novo produto adicionado
setProducts([...products, { id: data.id, name, quantity, brand }]);
// Limpa os campos de entrada
setName("");
setQuantity("");
setBrand("");
} catch (error) {
// Loga erros no console
console.error(error);
}
};
// Função para atualizar um produto
const handleUpdateProduct = async () => {
try {
// Faz uma requisição PUT para a API
await fetch(`${API_URL}/products/${selectedProduct.id}`, {
method: "PUT",
headers: {
"Content-Type": "application/json",
},

// Envia o corpo da requisição em formato JSON
body: JSON.stringify({ name, quantity, brand }),
});
// Busca novamente os produtos após a atualização
fetchProducts();
// Limpa a seleção e os campos de entrada
setSelectedProduct(null);
setName("");
setQuantity("");
setBrand("");
} catch (error) {
// Loga erros no console
console.error(error);
}
};
// Função para deletar um produto
const handleDeleteProduct = async (id) => {
try {
// Faz uma requisição DELETE para a API
await fetch(`${API_URL}/products/${id}`, {
method: "DELETE",
});
// Busca novamente os produtos após a exclusão
fetchProducts();
} catch (error) {
// Loga erros no console
console.error(error);
}
};
// Função para selecionar um produto para edição
const handleSelectProduct = (product) => {
setSelectedProduct(product);
setName(product.name);
setQuantity(product.quantity.toString());
setBrand(product.brand);
};
// Retorna o layout do aplicativo
return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Nome do Produto"
value={name}
onChangeText={setName}
/>
<TextInput
style={styles.input}
placeholder="Quantidade"
value={quantity}
onChangeText={setQuantity}
keyboardType="numeric"
/>
<TextInput
style={styles.input}
placeholder="Marca"
value={brand}
onChangeText={setBrand}
/>

<Button
title={selectedProduct ? "Atualizar Produto" : "Adicionar Produto"}
onPress={selectedProduct ? handleUpdateProduct : handleAddProduct}
/>
<FlatList
data={products}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => (
<View style={styles.product}>
<Text>{item.name}</Text>
<Text>{item.quantity}</Text>
<Text>{item.brand}</Text>
<Button title="Editar" onPress={() => handleSelectProduct(item)} />
<Button
title="Deletar"
onPress={() => handleDeleteProduct(item.id)}
/>
</View>
)}
/>
</View>
);
}
// Estilos para os componentes do aplicativo
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
input: {
borderWidth: 1,
borderColor: "#ccc",
padding: 10,
marginBottom: 10,
},
product: {
padding: 20,
borderBottomWidth: 1,
borderBottomColor: "#ccc",
},
});