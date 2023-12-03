import React from 'react'
import {Col, Row , Button } from 'react-bootstrap'

const Category = ({filtercategory}) => {
  const onfilter = (cat)=>{
    filtercategory(cat)
  }
  return (
    <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>
            <div>
            <Button onClick= {() => onfilter('الكل')} variant="outline-warning text-black mx-2">الكل</Button> 
            <Button onClick= {() => onfilter('غداء')} variant="outline-warning text-black mx-2">الغداء</Button>               
            <Button onClick= {() => onfilter('فطار')} variant="outline-warning text-black mx-2">الفطار</Button>
            </div>
        </Col>
    </Row>
  )
}

export default Category
