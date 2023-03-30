import React, { useEffect, useState } from 'react'

const SecondPage = ({movieArray,movie,time}) => {
  const [movieStore,setMovieStore]=useState({});
  const [tempStore,setTempStore]=useState({});
  let tempArr=[];

  useEffect(()=>{
      if(!(`${movie}-${time}` in movieStore)){
          setMovieStore(()=>({...movieStore,[`${movie}-${time}`]:[]}));
          for(let i=1;i<=10;i++){
            tempArr.push({ id: i, time, movie, isBooked: false });
          }
      }
      if(tempArr.length){
          setTimeout(()=>{
            setMovieStore({...movieStore,[`${movie}-${time}`]:tempArr})
          },0)
      }
      if(!tempStore[`${movie}-${time}`]){
          setTempStore({...tempStore,[`${movie}-${time}`]:[]})
      }
    },[movie,time])
    
    const handleInputClick=(seat)=>{
        // setTimeout(()=>{
            if(!(tempStore[`${movie}-${time}`].includes(seat.id))){
                setTempStore({...tempStore,[`${movie}-${time}`]:[...tempStore[`${movie}-${time}`],seat.id]})
            }
            else{
                setTempStore({...tempStore,[`${movie}-${time}`]:tempStore[`${movie}-${time}`].filter(item=>item!==seat.id)})
                // console.log("first")
                setMovieStore({...movieStore,[`${movie}-${time}`]:movieStore[`${movie}-${time}`].map(item=>item.id===seat.id?{...item,isBooked:false}:item)});
            }
            // },0)
        }
        const handleSubmit=()=>{
            setMovieStore({...movieStore,[`${movie}-${time}`]:movieStore[`${movie}-${time}`].map(movies=>tempStore[`${movie}-${time}`].includes(movies.id)?{...movies,isBooked:true}:movies)})
        }
        console.log(tempStore)    
    console.log(movieStore);

  return (
    <div>      
      {movieStore[`${movie}-${time}`]?.map(seat=><input type={'checkbox'} key={seat.id} onClick={()=>handleInputClick(seat)} disabled={seat.isBooked}/>)}<br/><br/>
      <button onClick={()=>handleSubmit()}>Pay</button>
    </div>
  );
}

export default SecondPage