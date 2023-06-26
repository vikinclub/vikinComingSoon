import { Button, Tooltip } from 'antd'
import React from 'react'

import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons"

const iconStyles = "flex items-center justify-center text-white hover:!text-primary text-lg lg:text-2xl"

const socialAccounts = [
    {
        name: "Facebook",
        icon: <FacebookOutlined />,
        url: "https://www.facebook.com/profile.php?id=100094091071869&mibextid=ZbWKwL"
    },
    {
        name: "Instagram",
        icon: <InstagramOutlined />,
        url: "https://instagram.com/vikin.club?igshid=NGExMmI2YTkyZg=="
    },
    {
        name: "Twitter",
        icon: <TwitterOutlined />,
        url: "https://twitter.com/Vikin_club?t=sFH6vNTT331g-2W3syWvTw&s=08"
    }
]

const Socials = ({ className }) => {
    return (
        <div className={`flex ${className}`}>
            {
                socialAccounts.map(social => (
                    <Tooltip title={social.name} placement='bottom' key={social.name}>
                        <Button type='link' target='_blank' className={iconStyles} href={social.url}>{social.icon}</Button>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default Socials