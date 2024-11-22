import styles from './resulttable.module.css'

const ResultTable = (props) => {



    const parseArray = array => {
        let documents = new Set()
        for (let el of array) {
            documents.add(el.req)
        }
        let resArr = []
        for (let el of documents) {
            let tmpArr = array.filter(item => item.req === el)
            resArr.push({ document: el, count: tmpArr.length })
        }
        return resArr.sort((a, b) => b.count - a.count)
    }

    const resultTable = parseArray(props.array)

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.table__header}>
                    <th className={styles.header__item}>Наименование документа</th>
                    <th className={styles.header__item}>Количество заявок</th>
                </tr>
            </thead>
            <tbody>
                {resultTable.map((item, index) => {
                    return (
                        <tr key={index} className={styles.table__row}>
                            <td className={styles.row__item}>{item.document}</td>
                            <td className={styles.row__item}>{item.count}</td>
                        </tr>
                    )
                })}
            </tbody>


        </table>

    );
}

export default ResultTable;