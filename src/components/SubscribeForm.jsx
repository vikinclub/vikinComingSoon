import { Button, Form, Input } from 'antd'
import React from 'react'

const SubscribeForm = () => {
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Form
                name="subscribeForm"
                onFinish={onSubmit}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: 'Please enter a valid email',
                        },
                    ]}

                >
                    <Input allowClear size='large' className='border-2 border-primary placeholder:text-black' placeholder='Join the riders list' suffix={
                        <Button htmlType="submit" className='bg-primary text-white font-bold' size='large'>
                            Join the ride
                        </Button>
                    } />
                </Form.Item>

            </Form>
        </>
    )
}

export default SubscribeForm