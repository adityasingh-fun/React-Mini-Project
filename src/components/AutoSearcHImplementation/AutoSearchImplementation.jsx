import React, { useEffect, useState } from "react";
import "./AutoSearchImplementation.css";

const AutoSearchImplementation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const handleListClick = (e)=>{
    console.log(e.target.innerText)
    setSearchParams(e.target.innerText)
    setFilterUsers([]);
      setShowDropDown(false);
  }

  const handleOnChange = (event) => {
    const query = event.target.value.toLowerCase();
    console.log(query);
    setSearchParams(query);
    if (query.length > 1) {
      const filterData = data.filter(
        (item) => item.toLowerCase().indexOf(query) !== -1
      );
      setFilterUsers(filterData);
      setShowDropDown(true);
    } else {
      setFilterUsers([]);
      setShowDropDown(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(false);
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Unable to fecth data. Please try again.");
      }
      const getData = await response.json();
      // console.log(getData.users)
      if (getData && getData.users && getData.users.length) {
        setData(
          getData.users.map((item) => {
            // console.log(item.firstName)
            return item.firstName;
          })
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  //  console.log(data)
  return (
    <div className="main-search">
      <div className="search-conatiner">
        <h1>Auto search Implementation</h1>
        <input
          type="text"
          placeholder="Search user"
          name="search-implementation"
          onChange={(event) => handleOnChange(event)}
          value={searchParams}
        />
        <ul className="lists">
          {showDropDown
            ? filterUsers && filterUsers.length
              ? filterUsers.map((item, index) => <li onClick={handleListClick} key={index}>{item}</li>)
              : null
            : null}
        </ul>
      </div>
    </div>
  );
};

export default AutoSearchImplementation;
