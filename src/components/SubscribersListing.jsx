import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { Button, Col, Row, Table, Tag, message } from 'antd';

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
      <Row className='h-screen bg-black' justify='center' align="middle">
        <Col xs={24} md={18} className='space-y-8'>
          <div className='flex justify-between'>
            <h1 className='text-primary text-lg md:text-xl lg:text-2xl'>Subscribers Listing</h1>
            <div className='space-x-4'>
              <Button type="primary" className="bg-primary hover:!bg-yellow-600 text-black" onClick={fetchEmails}>Refresh</Button>
              <Tag className='text-white text-base'>Total Subscribers: {emails.length}</Tag>
            </div>
          </div>
          <Table columns={columns} dataSource={emails} loading={loading} pagination={false} scroll={{ y: 300 }} />
        </Col>
      </Row>
    </>
  )
}

export default SubscribersListing