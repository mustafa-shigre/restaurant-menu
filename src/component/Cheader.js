import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Cheader = () => {
    return (
        <Row>
            <Col sm="12" className='justify-content-center text-center'> 
                <div className='title'> قائمة الطعام</div>
                <div className='justify-content-center d-flex'>
                <p className='under-line text-warning'></p>
                </div>
            </Col>
        </Row>
    )
}

export default Cheader
