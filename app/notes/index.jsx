
import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const NotesScreen = () => {
    const [notes, setNotes] = useState([
        { id: 1, content: 'First Note' },
        { id: 2, content: 'Second Note' },
        { id: 3, content: 'Third Note' }
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');


    const addNote=()=>{
        if(newNote.trim().length===0){
            return;
        }
        setNotes(prevNotes=>[...prevNotes,{id:Date.now(),content:newNote}]);
  
  setNewNote('');
  setModalVisible(false);
    } 
    return (<View
        style={styles.container}>
        <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.noteItem}> <Text>{item.content}</Text></View>
            )} />
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}>Add Note</Text></TouchableOpacity>
        <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modelOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}> Add a new note </Text>
                    <TextInput style={styles.input} value={newNote} onChangeText={setNewNote} placeholder='enter note' placeholderTextColor='#aaa' />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.modalButtons} onPress={
                            () => setModalVisible(false)}>
                            <Text style={styles.addButtonText}>Cancel</Text>
                        </TouchableOpacity>
<TouchableOpacity style={styles.saveButton} onPress={() => addNote()}>
    <Text style={styles.addButtonText}>Save</Text>
</TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },


    noteItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    addButton: {
        backgroundColor: '#3fbb2cff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#c82929ff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    modelOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalText: {
        fontSize: 18,
        marginBottom: 15,
    },
    input: {
        width: '80%',
        borderColor: '#ccc',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },

    saveButton:{
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
    }
});
export default NotesScreen