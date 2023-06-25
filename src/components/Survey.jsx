import { Col, Row, Spin } from 'antd';
import React, { useEffect } from 'react';
import { gAnalytics } from '../utils/analytics';

const Survey = () => {
    useEffect(() => {
        gAnalytics.onSurveyPageLoad();
    }, []);

    return (
        <>
            <Row className='w-full h-full flex justify-center items-center bg-black py-8 lg:py-0 px-4 lg:px-16'>
                <Col xs={24} lg={10} className='space-y-4'>
                    <h1 className='text-white text-4xl'>
                        Greetings{' '}
                        <span className='text-primary'>Fellow Riders</span> ,
                    </h1>
                    <p className='text-white text-small md:text-lg lg:text-xl text-justify'>
                        We are building an incredible online community dedicated
                        to riders like you, and we need your valuable input to
                        make it the ultimate hub for bikers. Your feedback will
                        play a vital role in shaping our platform and ensuring
                        it caters to all your needs. Please take a few moments
                        to participate in our short survey. Your responses will
                        help us understand what matters most to you, what
                        features you'd like to see, and how we can create an
                        engaging and inclusive space for all bikers. By sharing
                        your thoughts, you'll have a direct impact on the future
                        of our riders community. Together, we can create a
                        vibrant and supportive environment that connects riders
                        from all walks of life.
                    </p>
                </Col>
                <Col
                    xs={24}
                    lg={10}
                    className='w-full h-screen mx-auto'
                >
                    <iframe
                        src='https://docs.google.com/forms/d/e/1FAIpQLSdUdNJXBmCt6u-E63BaXP5j6NKbBWpnlqHHMXNEgKU6BgdDaQ/viewform?embedded=true'
                        className='w-full h-screen py-8 '
                    >
                        <Spin />
                    </iframe>
                </Col>
            </Row>
        </>
    );
};

export default Survey;
