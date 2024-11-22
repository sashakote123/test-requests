import ResultTable from "../resultTable/ResultTable";

const ResultPage = (props) => {
    return (
        <ResultTable array={props.requests} />
    );
}

export default ResultPage;