import { Button, Tooltip } from 'antd'
import React from 'react'

import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons"

const iconStyles = "flex items-center justify-center text-white hover:!text-primary text-lg lg:text-2xl"

const socialAccounts = [
    {
        name: "Facebook",
        icon: <FacebookOutlined />,
        url: "https://facebook.com"
    },
    {
        name: "Instagram",
        icon: <InstagramOutlined />,
        url: "https://instagram.com"
    },
    {
        name: "Twitter",
        icon: <TwitterOutlined />,
        url: "https://twitter.com"
    }
]

const Socials = ({ className }) => {
    return (
        <div className={`flex ${className}`}>
            {
                socialAccounts.map(social => (
                    <Tooltip title={social.name} placement='bottom'>
                        <Button type='link' className={iconStyles} href={social.url}>{social.icon}</Button>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default Socials