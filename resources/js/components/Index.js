import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Index() {
    const [values, setValues] = useState({
        title: "",
    });
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    const [msg, setmsg] = useState([]);
    const fetchData = () => {
        axios.get("messages").then((res) => {
            setmsg(res.data);
        });
    };
    useEffect(() => {
        fetchData();

        // return () => {
        //     cleanup
        // }
    }, []);
    const postData = (e) => {
        if (e.key === "Enter") {
            axios.post("messages", values).then((values.title = ""));
            fetchData(); // alert("data added");
        }
    };
    console.log(values);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Messages</div>
                        <div className="card-body">
                            <ul
                                className="list-unstyle"
                                style={{
                                    height: "300px",
                                    overflowY: "scroll",
                                }}
                            >
                                {msg.map((i, k) => {
                                    return (
                                        <li
                                            key={k}
                                            className="py-2"
                                            tabindex="1"
                                        >
                                            <strong>{i.user.name}</strong>{" "}
                                            {i.message}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <input
                            onKeyPress={postData}
                            type="text"
                            name="title"
                            value={values.title}
                            placeholder="Write you message..."
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <span className="text-muted">user is typing...</span>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">User status</div>
                        <div className="card-body">
                            <ul>
                                <li className="py-2">user</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById("myapp")) {
    ReactDOM.render(<Index />, document.getElementById("myapp"));
}
