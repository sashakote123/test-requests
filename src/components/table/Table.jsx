import styles from './table.module.css'

const Table = (props) => {
    console.log(props.array);
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.table__header}>

                    <th className={styles.header__item}>Имя</th>
                    <th className={styles.header__item}>Наименование документа</th>
                    <th className={styles.header__item}>Дата</th>
                </tr>
            </thead>
            <tbody>
                {props.array.map((item, index) => {
                    return (
                        <tr key={index} className={styles.table__row}>
                            <td className={styles.row__item}>{item.user}</td>
                            <td className={styles.row__item}>{item.req}</td>
                            <td className={styles.row__item}>{item.date}</td>
                        </tr>
                    )
                })}
            </tbody>


        </table>

    );
}

export default Table;