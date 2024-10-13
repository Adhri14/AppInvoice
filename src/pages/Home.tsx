import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Text, { fontFamilyType } from '../components/Text';
import Card from '../components/Card';
import FloatingButton from '../components/FloatingButton';
import { HomeScreenType } from '../types';

const Home = ({ navigation }: HomeScreenType) => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>List Data</Text>
            <FlatList
                data={Array(5).fill(0)}
                renderItem={({ item, index }) => (
                    <Card>
                        Testing {index + 1}
                    </Card>
                )}
                contentContainerStyle={styles.container}
            />
            <FloatingButton onPress={() => navigation.navigate('Tambah')} />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 20,
        marginLeft: 24,
        marginTop: 30,
        color: '#232426',
        fontFamily: fontFamilyType['bold']
    }
});