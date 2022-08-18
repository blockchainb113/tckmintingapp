import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faDiscord,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

export default function SocialFollow() {
    return ( <
        div class = "social-container" >
        <
        h3 > < /h3> <
        a href = "https://discord.gg/yVm7EPVJ"
        className = "Discord social" >
        <
        FontAwesomeIcon icon = {
            faDiscord
        }
        size = "2x" / >
        <
        /a> <
        a href = "https://twitter.com/Rootygangnft"
        className = "Twitter social" >
        <
        FontAwesomeIcon icon = {
            faTwitter
        }
        size = "2x" / >
        <
        /a> <
        a href = "https://www.instagram.com/Rootygang.io"
        className = "Instagram social" >
        <
        FontAwesomeIcon icon = {
            faInstagram
        }
        size = "2x" / >
        <
        /a> <
        /div>
    );
}