import React from 'react'
import useWindowDimensions from '../hooks/use-window-dimensions';
import { Col, Row } from 'antd';
import Socials from './Socials';
import SubscribeForm from './SubscribeForm';

const LandingPage = () => {
    const { width } = useWindowDimensions();
  return (
    <div className='main-container bg-cover'>
    <div className='overlay' />
    <div className='flex justify-start items-center h-screen w-screen z-index-max container p-6 lg:px-16 pt-20 md:pt-0'>
        <span className='space-y-4 lg:space-y-8'>
            {width > 678 ? (
                <>
                    <h1 className='text-6xl text-primary tracking-wider'>
                        Vikin.Club
                    </h1>
                    <p className='text-3xl text-white'>
                        Ride together, explore forever
                    </p>
                </>
            ) : (
                <div className='mb-[50px] space-y-2'>
                    <h1 className='text-4xl text-primary tracking-wider'>
                        Vikin.club
                    </h1>
                    <p className='text-lg text-white'>
                        Ride together, explore forever
                    </p>
                </div>
            )}
            <p className='text-lg md:text-2xl lg:text-5xl text-white'>
                Join our{' '}
                <span className='text-primary'>Bikers</span>{' '}
                Community!
            </p>
            <Row>
                <Col xs={24} md={18} className='space-y-4'>
                    <p className='text-white text-small md:text-lg lg:text-xl'>
                        Revving soon! Prepare for an
                        unparalleled biker experience. Get ready
                        to embark on a journey that will
                        redefine the way you ride, connect, and
                        explore. Join us as we unveil a
                        groundbreaking platform designed
                        exclusively for passionate riders like
                        you
                    </p>
                    <SubscribeForm />

                    <Socials className='justify-end' />
                </Col>
            </Row>
        </span>
    </div>
</div>
  )
}

export default LandingPage