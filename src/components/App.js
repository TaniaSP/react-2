import React from 'react'
import ReactDOM from 'react-dom'
import "./app.scss";

export default function App(props) {
    return <h1>Hello, <span>{props.name}</span></h1>;
}
