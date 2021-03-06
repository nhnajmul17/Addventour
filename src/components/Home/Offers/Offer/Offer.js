import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = (props) => {
    const { name, place, days, price, picture, about, _id } = props.offer;
    return (
        <div >
            <Col>
                <div className='card'>
                    <Card className="bg-dark text-white">
                        <div className='img'>
                            <Card.Img src={picture} alt="Card image" />
                        </div>

                        <Card.ImgOverlay>
                            <div className='texts'>
                                <Card.Title className='fs-1 fw-1'>{name}</Card.Title>
                                <Card.Text className='fs-3 fw-1'> {place}</Card.Text>
                                <Card.Text className='fs-4 fw-1'> {days} days Tour</Card.Text>
                                <Card.Text className='fs-4 fw-1'>Price: ${price}</Card.Text>


                                <Link to={`/booking/${_id}`}><button className='btn-danger rounded-pill'>BooK Now</button></Link>
                            </div>
                        </Card.ImgOverlay>

                    </Card>
                </div>
            </Col>

        </div>
    );
};

export default Offer;