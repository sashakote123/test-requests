import { useEffect, useState } from "react"
import styles from './styles.module.css'

const RequestForm = (props) => {

    const [text, setText] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/users').then(res => res.json()).then(obj => setUsers(obj))
    }, [])


    const updateForm = (e) => {
        e.preventDefault()
        setText(e.target.value)
        console.log(text);
    }

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const postRequest = (e) => {
        e.preventDefault()
        const form = document.forms.form

        try {

            if (text.indexOf('ГОСТ') === -1) {
                throw new SyntaxError('Некорректное имя документа')
            }

            for (let el of props.requests) {
                if (el.user === form.name.value && el.req === text)
                    throw new Error('Вы уже отправляли заявку на этот документ')
            }


            fetch('http://localhost:3001/requests',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "user": form.name.value,
                        "req": text,
                        "date": formatDate(Date.now())
                    })

                }).then(res => res.json()).then(req => props.setRequests([...props.requests, req]))
        } catch (err) {
            alert(err.message)
        }

    }


    return (
        <form className={styles.form} name="form">
            <select className={styles.form__select} name="name" id="">
                {users.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            <input className={styles.form__input} onChange={updateForm} type="text" value={text}></input>
            <button className={styles.form__button} onClick={postRequest}>Отправить заявку</button>
        </form>
    );
}

export default RequestForm;