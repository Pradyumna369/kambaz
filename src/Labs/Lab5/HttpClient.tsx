import React, {useEffect, useState} from "react";
import axios from "axios";
import * as client from "./client";

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fetchWelcomeOnClick = async() => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async() => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    },[]);
    return (
        <div>
            <h3>HTTP client</h3>
            <h4>Requesting on click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>
            <h4>
                Requesting on load
            </h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr/>
        </div>
);}