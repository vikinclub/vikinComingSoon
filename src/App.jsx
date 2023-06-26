import { ConfigProvider } from 'antd';
import { ThemeObj } from './AntDesignCustomTheme';
import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';

function App() {
    const [data, setData] = useState(ThemeObj);

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        ...data,
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </>
    );
}

export default App;
