import { Button, Form, Input, Modal, Spin, message } from 'antd';
import React, { useState } from 'react';
import { firestore } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { gAnalytics } from '../utils/analytics';
import { useNavigate } from 'react-router';

const SubscribeForm = () => {
    const [subscriptionForm] = Form.useForm();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const checkEmailExists = async (email) => {
        const q = query(
            collection(firestore, 'emailList'),
            where('email', '==', email)
        );
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const emailExists = await checkEmailExists(data.email);
            if (emailExists) {
                message.info('Seems you have already joined our list!');
                return;
            }

            const docRef = await addDoc(collection(firestore, 'emailList'), {
                ...data,
                subscribedOn: new Date().toISOString(),
            });

            if (docRef) {
                gAnalytics.onSubrcibedSucessfully();
                subscriptionForm.resetFields();
                message.success(
                    "Thanks for joining in. We'll soon get back with an update 🎉"
                );
                setOpenModal(true);
            }
            setLoading(false);
            return;
        } catch (error) {
            gAnalytics.onSubrciptionFail();
            setLoading(false);
            message.error('Something went wrong, please try again later.');
        }
    };

    const onModalClose = () => {
        onSurveyButtonClicked(false)
        setOpenModal(false);
    };

    const onModalOkay = () => {
        gAnalytics.onSurveyButtonClicked(true)
        navigate('/survey');
    };
    return (
        <>
            <Form
                name='subscribeForm'
                onFinish={onSubmit}
                autoComplete='off'
                form={subscriptionForm}
            >
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please enter a valid email',
                        },
                    ]}
                >
                    <Input
                        disabled={loading}
                        allowClear
                        size='middle'
                        className='border-2 border-black'
                        placeholder='Enter your email'
                        onClick={() => {
                            gAnalytics.onSubscribeInputClick();
                        }}
                        suffix={
                            <Button
                                htmlType='submit'
                                className='font-bold space-x-2'
                                type='primary'
                                size='middle'
                                onClick={() => {
                                    gAnalytics.onSurveyButtonClicked();
                                }}
                                disabled={loading}
                            >
                                {loading && <Spin />}
                                <span>Get Invite</span>
                            </Button>
                        }
                    />
                </Form.Item>
            </Form>

            {/* survey modal */}
            <Modal
                title={<p className='font-semibold'>Vikin.Club Survey</p>}
                open={openModal}
                onOk={() => navigate('/survey')}
                footer={''}
                closable={false}
            >
                <p>
                    Thanks for subcribing to our invite list. Please take a few
                    moments to participate in our short survey. Your responses
                    will help us understand what matters most to you, what
                    features you'd like to see, and how we can create an
                    engaging and inclusive space for all bikers.
                </p>
                <div className='text-right space-x-3'>
                    <Button onClick={onModalClose}>Cancel</Button>
                    <Button type='primary' onClick={onModalOkay}>
                        Okay
                    </Button>
                </div>
            </Modal>
            {/* survey modal */}
        </>
    );
};

export default SubscribeForm;
