import React from 'react'
import { useSelector } from 'react-redux'

export default function UserDetails() {

    const user = useSelector(state => state.user.user)

    return (
        <div>
            <div class="ui card">
                <div class="image">
                    <img src="https://img.a.transfermarkt.technology/portrait/big/36139-1696447429.png?lm=1"/>
                </div>
                <div class="content">
                    <a class="header">{user?.userName}</a>
                    <div class="meta">
                        <span class="date">{user?.email}</span>
                    </div>
                    <div class="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i class="user icon"></i>
                        22 Friends
                    </a>
                </div>
            </div>
        </div>
    )
}
