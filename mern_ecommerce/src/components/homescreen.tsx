import { Col, Row } from 'react-bootstrap'
import React from 'react'

import products from "../products"
import Product from './product'

const Homescreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product =>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product {...product} />
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Homescreen