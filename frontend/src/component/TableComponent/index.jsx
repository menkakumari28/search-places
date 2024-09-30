import { useEffect, useRef, useState } from 'react';
import data from './data.json';
import { Spin } from 'antd';
import './style.css';
const TableComponent = () => {
    const [searchPlace, setSearchPlace] = useState();
    const inputRef = useRef(undefined);
    const [places, setPlaces] = useState(data);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false)
    const callSearchApi = (params) => {
        const filteredData = data.data.filter((data) => {
            return data.city?.toLowerCase() === params.toLowerCase();
        });
        setPlaces({ data: filteredData });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (searchPlace) {
                callSearchApi(searchPlace);
            }
        }
    };

    // Rate Limit error - Http status 429
    // Not able to fetch response due to rate limiting from api
    // const getPlaces = () => {
    // setLoading(true);
    //     fetch('http://localhost:8080/api/places/all')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setLoading(true)
    //             setPlaces(data.data);
    //         })
    //         .catch((error) => {
    //         setLoading(false);
    //             setError(error?.data.message);
    //         });
    // };

    // useEffect(() => {
    //     if (places.length === 0) {
    //         getPlaces();
    //     }
    // }, [places]);

    useEffect(() => {
        // This is handled only for windows ctrl + / 
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
        <div className="main">
            <div className="form-group">
                <input
                    type="text"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    disabled={isDisabled}
                    onChange={(e) => setSearchPlace(e.target.value)}
                    name="search"
                    value={searchPlace}
                    placeholder="Search places..."
                    autoComplete="off"
                />
                <span>Ctrl + /</span>
            </div>
            {error && 'Something went wrong..'}
            {!error && (
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place Name</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <Spin />}
                        {places.data.length > 0 ? (
                            places.data?.map((place, index) => {
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
                            })
                        ) : (
                            <div>No Records</div>
                        )}
                    </tbody>
                </table>
            )}
            <div>
                {places.data.length > 0 && (
                    <div className="pagination" id="pagination">
                        <a href="#" id="prev">
                            Previous
                        </a>
                        <a href="#" className="page-link" data-page="1">
                            1
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
                )}
            </div>
        </div>
    );
};

export default TableComponent;
