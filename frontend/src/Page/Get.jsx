import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style/get.css"

function Get() {
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(""); // Set default limit
  //search name
  const [sname , setSname]=useState("")
  //lessThen
const [less , setLess]=useState("")
//greater then 
const [garten , setGarten]=useState("")


  const callAbout = async () => {
    try {

      let url=`http://localhost:9000/Dataget?limites=${limit}&names=${sname}&gerten=${garten}&lessthen=${less}`

      const res = await axios.get(url, {
      
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.data;
      setUser(data);
      console.log(data)

      if (res.status !== 200) {
        throw new Error(`API request failed with status: ${res.status}`);
      }
    } catch (error) {
      console.log(error);
      // Handle errors
    }
  };

  useEffect(() => {
    callAbout();
  }, [limit , sname , less , garten]); // Call useEffect whenever limit or searchTerm changes

  return (
    <div>
      <div className="background">


{/* // Search Your Api Limit  */}
<div className="limit">
        <form>
          <center>

<input type="number" value={garten}  id="" onChange={(e)=>setGarten(e.target.value)}  placeholder='greten then age'/>

<input type="number" value={less}  onChange={(e)=>setLess(e.target.value)} id=""  placeholder='less then age'/>

<br />
<br />
<input type="text"  value={sname} onChange={(e)=>setSname(e.target.value)} id=""  placeholder='serach_name'/>

            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="enter number limit"
            />
          </center>
        </form>
        </div>


        {/* /// Get your Api  */}

        <div className="display">
          {user.length > 0 ? (
            user.map((item) => (
              <div className="ides" key={item.id}>
                <h1 id="ides">ID: {item._id}</h1>
                <h1>Name: {item.name}</h1>
                <h1>Bio: {item.bio}</h1>
                <h1>Age : {item.age}</h1>
                <h1>Country: {item.country}</h1>
                <h1>Date: {item.date}</h1>
                <h1>Gender: {item.gender}</h1>
                <h1>Eligible: {item.eligible || "not show"}</h1>
                <h1>Hobbies: {item.hobbies}</h1>
              </div>
            ))
          ) : (
            <p>No user data found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Get;