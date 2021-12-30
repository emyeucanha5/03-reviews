import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [data,setData] = useState(0);
  useEffect(() => {
    console.log(data)
  });
  const prevbtn = () => {
    setData((data) => {
        if(data<=0){
          return people.length-1
        }else{
          return data-1;
        }   
      });
  }
  const nextbtn = () => {

      setData((data) => {
        if(data>=people.length-1){
          return 0
        }else{
          return data+1;
        }   
      });
  }
  const randombtn = () => {
    const num = Math.floor(Math.random()*(people.length));
    setData((data)=> num);
  }
  useEffect(()=>{
    window.addEventListener("keydown", (event) => {
      if(event.keyCode===37){
        prevbtn();
      }else if(event.keyCode===39){
        nextbtn();
      }else if(event.keyCode===13){
        randombtn();
      }
    });
  }
  ,[])
  return <article className="review">
    <div className="img-container">
      <img src={people[data].image} alt={people[data].name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{people[data].name}</h4>
    <p className="job">{people[data].job}</p>
    <p className="info">{people[data].text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevbtn}> <FaChevronLeft/> </button>
      <button className="next-btn"onClick={nextbtn}> <FaChevronRight/> </button>
    </div>

    <button className="random-btn" onClick={randombtn}>Random people</button>
  </article>;
};

export default Review; 
