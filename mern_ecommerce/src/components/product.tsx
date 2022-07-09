import { Card } from 'react-bootstrap';
import React from 'react'

interface IProductProps {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

const Product = (product: IProductProps) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title>
                        <b>{product.name}</b>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product