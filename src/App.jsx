import { Button, Col, ConfigProvider, Row } from 'antd';
import { ThemeObj } from './AntDesignCustomTheme';
import { useState } from 'react';
import { Socials, SubscribeForm } from './components';
import useWindowDimensions from './hooks/use-window-dimensions';

function App() {
    const [data, setData] = useState(ThemeObj);
    const { width } = useWindowDimensions();

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        ...data,
                    },
                }}
            >
                <div className='main-container bg-cover'>
                    <div className='overlay' />
                    <div className='flex justify-start items-start md:items-center h-screen w-screen z-index-max container p-6 lg:px-16 pt-20 md:pt-0'>
                        <span className='space-y-4 lg:space-y-8'>
                            {width > 678 ? (
                                <>
                                    <h1 className='text-4xl lg:text-8xl text-primary tracking-wider'>
                                        Vikin.club
                                    </h1>
                                    <p className='text-lg lg:text-4xl text-white'>
                                        Ride together, explore forever
                                    </p>
                                </>
                            ) : (
                                <div className='mb-[180px] space-y-2'>
                                    <h1 className='text-4xl lg:text-8xl text-primary tracking-wider'>
                                        Vikin.club
                                    </h1>
                                    <p className='text-lg lg:text-4xl text-white'>
                                        Ride together, explore forever
                                    </p>
                                </div>
                            )}
                            <p className='text-2xl lg:text-6xl text-white'>
                                Join our{' '}
                                <span className='text-primary'>Bikers</span>{' '}
                                Community!
                            </p>
                            <Row>
                                <Col xs={24} md={18} className='space-y-4'>
                                    <p className='text-white text-base lg:text-2xl'>
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
            </ConfigProvider>
        </>
    );
}

export default App;
