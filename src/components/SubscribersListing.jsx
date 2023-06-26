import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { Button, Col, Row, Table, Tag, message } from 'antd';
import useWindowDimensions from '../hooks/use-window-dimensions';

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Subscribed On',
    dataIndex: 'subscribedOn',
    key: 'subscribedOn',
    render: (text) => <a>{new Date(text).toLocaleString()}</a>,
  },
]

const SubscribersListing = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false)
  const {width} = useWindowDimensions()

  const fetchEmails = async () => {
    setLoading(true)
    try {
      const emailsCollection = collection(firestore, 'emailList');
      const emailsQuery = query(emailsCollection);
      const emailSnapshot = await getDocs(emailsQuery);

      const emailData = emailSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setEmails(emailData);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      message.error("Something went wrong!")
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <>
      <Row className='h-screen bg-black p-2' justify='center' align="middle">
        <Col xs={24} md={18} className='space-y-8'>
          <div className='md:flex md:justify-between'>
            <h1 className='text-primary text-lg md:text-xl lg:text-2xl'>Subscribers Listing</h1>
            <div className='space-x-4 mt-8 md:mt-0'>
              <Button size={width > 768 ? "middle" : "small"} type="primary" className="bg-primary hover:!bg-yellow-600 text-black" onClick={fetchEmails}>Refresh</Button>
              <Tag className='text-white text-sm md:text-base'>Total Subscribers: {emails.length}</Tag>
            </div>
          </div>
          <Table columns={columns} dataSource={emails} loading={loading} pagination={false} scroll={{ y: 300 }} />
        </Col>
      </Row>
    </>
  )
}

export default SubscribersListing