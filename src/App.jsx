import { Button, Col, ConfigProvider, Row } from 'antd';
import { ThemeObj } from './AntDesignCustomTheme';
import { useState } from 'react';
import { Socials, SubscribeForm } from './components';
import useWindowDimensions from './hooks/use-window-dimensions';


function App() {
    const [data, setData] = useState(ThemeObj);
    const { width } = useWindowDimensions()

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        ...data
                    },
                }}
            >
                <div className='main-container bg-cover'>
                    <div className="overlay" />
                    <div className='flex justify-start items-center h-screen w-screen z-index-max container p-6 lg:px-16'>
                        <span className='space-y-8'>
                            {/* <h1 className='text-3xl lg:text-6xl text-primary tracking-wider'>vikin.club</h1> */}
                            <p className='text-4xl lg:text-8xl text-white uppercase'>We're Coming <span className='text-primary'>Soon</span></p>
                            <Row>
                                <Col xs={24} md={18} className='space-y-4'>
                                    <p className='text-white text-base lg:text-2xl'>
                                        The countdown has begun! Get ready to ignite your passion and dominate the road. Sign up now to be first in line when we hit the pavement at <a className="text-primary inline-block fatface font-smibold" href="https://vikin.club">vikin.club</a>.
                                    </p>
                                    <p className='text-white text-base lg:text-2xl'>
                                        It's time to unleash the biker within. Join us and let's ride like never before!
                                    </p>
                                    <SubscribeForm />
                                    <div className='flex justify-between'>
                                        <Button type='link' className='text-primary text-2xl'>Surveys</Button>
                                        <Socials />
                                    </div>
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
