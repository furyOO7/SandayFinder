import React from 'react';

const DisplaySunday = (props) => {
  
    return ( 
       <ul>
          {
               props.calculatedSundays.map((sund,i) => <li key={i}>{sund}</li>)
          }
       </ul>
     );
}
 
export default DisplaySunday;
