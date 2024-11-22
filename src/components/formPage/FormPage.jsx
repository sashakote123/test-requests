import { useEffect, useState } from "react"
import RequestForm from "../requestForm/RequestForm"
import Table from "../table/Table"
import styles from './styles.module.css'

const FormPage = (props) => {





    return (
        <div className={styles.container}>
            <RequestForm requests={props.requests} setRequests={props.setRequests} />
            <Table array={props.requests} />
        </div>
    );
}

export default FormPage;