import './index.css';
const TableComponent = () => {
    return (
        <>
            <input
                type="text"
                id="myInput"
                placeholder="Search places..."
            ></input>
            <table id="myTable">
                <tr class="header">
                    <th>#</th>
                    <th style={{}}>Place Name</th>
                    <th style={{}}>Country</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Berglunds snabbkop</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Island Trading</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Koniglich Essen</td>
                    <td>Germany</td>
                </tr>
            </table>
            <div class="pagination" id="pagination">
                <a href="#" id="prev">
                    Previous
                </a>
                <a href="#" class="page-link" data-page="1">
                    1
                </a>
                <a href="#" class="page-link" data-page="2">
                    2
                </a>
                <a href="#" class="page-link" data-page="3">
                    3
                </a>
                <a href="#" id="next">
                    Next
                </a>
                <p id="page-numbers"> </p>
                <select id="pagination-option">
                    <option>5</option>
                    <option>10</option>
                </select>
            </div>
        </>
    );
};

export default TableComponent;
