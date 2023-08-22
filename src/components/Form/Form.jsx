import React, {useState} from 'react';
import "./Form.css"

const Form = () => {
    const [country, SetCountry] = useState('')
    const [street, SetStreet] = useState('')
    const [subject, SetSubject] = useState('physical')

    const onChangeCountry = (e) => {
        SetCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        SetStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        SetSubject(e.target.value)
    }
    return (
        <form className='form'>
            <h3>Введите ваши данные</h3>
            <input className='input' type='text' placeholder='Страна' value={country} onChange={onChangeCountry}/>
            <input className='input' type='text' placeholder='Улица' value={street} onChange={onChangeStreet}/>
            <select className='select' value={subject} onChange={onChangeSubject}>
                <option value='physical'>Физ. лицо</option>
                <option value='legal'>Юр. лицо</option>
            </select>
        </form>
    );
};

export default Form;