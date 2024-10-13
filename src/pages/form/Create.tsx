import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Create = () => {
    const [form, setForm] = useState({
        name: '',
        username: '',
        checkInDate: '',
        price: '',
        note: ''
    });
    const [selectDate, setSelectDate] = useState<Date>();
    const [isModalPicker, setModalPicker] = useState(false);

    const onHandleChange = (field: string, value: string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const onSubmit = () => {

    }

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <Input label="Nama Kamar" placeholder="Isi nama kamar" value={form.name} onChangeText={(val: string) => onHandleChange('name', val)} />
                <Input label="Nama Penyewa" placeholder="Isi nama penyewa kamar" value={form.username} onChangeText={(val: string) => onHandleChange('username', val)} />
                <Input label="Tanggal Masuk" placeholder="Isi tanggal masuk" type="date" date={selectDate} onConfirm={(val: Date) => {
                    onHandleChange('checkInDate', `${val}`);
                    setSelectDate(val);
                    setModalPicker(false);
                }} isVisible={isModalPicker} onCancel={() => setModalPicker(false)} onPress={() => setModalPicker(true)} />
                <Input label="Tarif per Bulan" keyboardType="number-pad" placeholder="Isi berapa per bulan" value={form.price} onChangeText={(val: string) => onHandleChange('price', val)} />
                <Input label="Catatan" type="text-area" placeholder="Isi catatan" value={form.note} onChangeText={(val: string) => onHandleChange('note', val)} />
                <Button label="Submit" onPress={() => null} />
            </ScrollView>
        </View>
    )
}

export default Create;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24
    }
});