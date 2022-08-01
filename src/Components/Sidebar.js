import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="position-sticky">
            <ul>
                <a href="/colors">Colors</a>
            </ul>
            <ul>
                <a href="/users">Users</a>
            </ul>
            <ul>
                <a href="/settings">Settings</a>
            </ul>
            </div>
        </div>
    )
}