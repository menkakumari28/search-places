import { useEffect, useRef, useState } from 'react';
import data from './data.json';
import './index.css';
const TableComponent = () => {
    const [searchPlace, setSearchPlace] = useState();
    const [places, setPlaces] = useState(data);
    const inputRef = useRef(undefined);
    const callSearchApi = (params) => {
        console.log('calling the search api', params);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (searchPlace) {
                callSearchApi(searchPlace);
            }
        }
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (e.ctrlKey) {
                if (e.key?.toLowerCase() === 'k') {
                    e.preventDefault();
                    inputRef.current.focus();
                }
            }
        };
        window.addEventListener('keydown', handleClick);

        return () => {
            window.removeEventListener('keydown', handleClick);
        };
    }, []);

    return (
        <>
            <input
                type="text"
                id="myInput"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchPlace(e.target.value)}
                name="search"
                value={searchPlace}
                placeholder="Search places..."
                autoComplete="off"
            />

            <table id="myTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Place Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {places.map((place, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{place.city}</td>
                                <td>
                                    {place.country}
                                    <img
                                        src={`https://flagsapi.com/${place.countryCode}/flat/24.png`}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <div className="pagination" id="pagination">
                        <a href="#" id="prev">
                            Previous
                        </a>
                        <a href="#" className="page-link" data-page="1">
                            1
                        </a>
                        <a href="#" className="page-link" data-page="2">
                            2
                        </a>
                        <a href="#" className="page-link" data-page="3">
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
                </tfoot>
            </table>
        </>
    );
};

export default TableComponent;
