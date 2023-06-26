import { Button, Col, Form, Input, Row, message } from 'antd';
import React, { useState } from 'react';

const ProtectedRoute = ({ component: Component, password }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (data) => {
        const { password: enteredPassword } = data
console.log(import.meta.env.VITE_SUBSCRIBERS_LISTING_PASSWORD, password)
        console.log(enteredPassword)
        if (enteredPassword === password) {
            setLoggedIn(true);
        } else {
            message.error('Incorrect password. Please try again.');
        }
    };

    if (loggedIn) {
        return <Component />;
    } else {
        return (
            <>
                <Row className='h-screen bg-black' justify="center" align="middle">
                    <Col xs={24} md={12}>
                        <Form
                            name='routeValidator'
                            onFinish={handleSubmit}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item
                                label={<span className='text-white'>Password</span>}
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        type: 'password',
                                        message: 'This is a required field',
                                    },
                                ]}
                            >
                                <Input.Password placeholder='Enter paswword' allowClear />
                            </Form.Item>
                            <Button className='w-full bg-primary hover:!bg-yellow-600 text-black' type='primary' htmlType='submit'>Submit</Button>
                        </Form>
                    </Col>
                </Row>

            </>
        );
    }
};

export default ProtectedRoute;
