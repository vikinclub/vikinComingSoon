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
                    <Input allowClear size='large' className='border-2 border-primary placeholder:text-black' placeholder='Enter your email' suffix={
                        <Button htmlType="submit" className='bg-primary text-white font-bold' size='large'>
                           Get Invite
                        </Button>
                    } />
                </Form.Item>

            </Form>
        </>
    )
}

export default SubscribeForm