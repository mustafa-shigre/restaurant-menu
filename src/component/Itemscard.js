import React from 'react'
import { Card, Col, Row , Container} from 'react-bootstrap'

const Itemscard = ({Itemsdata}) => {
  return (
    <Row>
    {
      Itemsdata.length >= 1 ? (Itemsdata.map((item)=>{

        return(<Col sm="12" className="mb-3">
            <Card className='d-flex flex-row' style={{backgroundColor: '#f8f8f8'}} >
                <Card.Img style={{ width: '16rem' }} className='img-card' variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between'>
                         <div  className='item-title'>{item.title} </div>
                         <div  className='item-price'> {item.price}</div>
                         </Card.Title>
                        <Card.Text className='item-des py-2'>
                        {item.description}
                        </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            )})) : <h3 className='text-center'>no items found</h3>
    
    }
    </Row>
  )
}

export default Itemscard
