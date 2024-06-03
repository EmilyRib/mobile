import { View, FlatList, Text, StyleSheet } from 'react-native';
const contacts = [
{ id: '1', name: 'Alice', number: '123-456-7890' },
{ id: '2', name: 'Bob', number: '987-654-3210' },
{ id: '3', name: 'Charlie', number: '555-666-7777' }
];

const ContactItem = ({ name, number }) => (
<View style={styles.item}>
<Text style={styles.name}>{name}</Text>
<Text>{number}</Text>
</View>
);
const ContactList = () => {
return (
<FlatList
data={contacts}
keyExtractor={item => item.id}
renderItem={({ item }) => <ContactItem name={item.name} number={item.number} />}
style={styles.list}
/>
);
};
const styles = StyleSheet.create({
list: {
marginTop: 20
},
item: {
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#ccc'
},
name: {
fontWeight: 'bold'
}
});
export default ContactList;