import React, { useEffect, useState, useSyncExternalStore } from 'react';
import {Container, Row } from 'react-bootstrap'
import Cnav from './component/Cnav';
import Cheader from './component/Cheader';
import Category from './component/Category'
import Itemscard from './component/Itemscard';
import { data } from './data';
function App() {
  const [Itemsdata,setitems] = useState(data);
  const filtercategory = (Category) =>{
    if(Category === "الكل"){
      setitems(data);
    }
    else{
   const  newarr = data.filter((index)=> index.category === Category)
   setitems(newarr);
  }
}
  return (
    <div className="color-body font">
      <Row>
        <Container>
          <Cnav/>
          <Cheader/>
          <Category filtercategory={filtercategory} />
          <Container>          
          <Itemscard Itemsdata={Itemsdata}/>
          </Container>
          
        </Container> 
      </Row>
    </div>
  );
}

export default App;
