import React from "react";
import axios from "axios";

export default class CardForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isDisabled: true,
        });
        var request = {};
        var failed = false;
        this.props.config.required.map((id) => {
            if (!failed) {
                if (event.target[id].type === "file") {
                    var formData = new FormData();
                    var file = event.target[id];
                    console.log(`uploading ${file.files[0].name}`);
                    formData.append("file", file.files[0], file.files[0].name);
                    axios
                        .post("https://imagenie.bidhuri.repl.co/api/fileUpload", formData)
                        .then((res) => {
                            if (res.data.success) {
                                console.log("done");
                                request[this.props.config.objectToName[id]] = res.data.remotePath;
                            } else {
                                failed = true;
                            }
                        });
                } else {
                    request[this.props.config.objectToName[id]] = event.target[id].value;
                }
            }
            return failed;
        });
        const interval = setInterval(() => {
            if (failed || Object.keys(request).length === this.props.config.required.length) {
                if (!failed) {
                    axios
                        .post(this.props.config.requestURL, {
                            request,
                        })
                        .then((res) => {
                            console.log(res.data);
                            if (res.data.success) {
                                const a = document.createElement("a");
                                a.style.display = "none";
                                document.body.appendChild(a);
                                a.href = res.data.data;
                                a.download = `${request.outputName}${res.data.type}`;
                                a.click();
                                window.location.reload();
                            }
                            this.setState({
                                isDisabled: false,
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            this.setState({
                                isDisabled: false,
                            });
                        });
                } else {
                    this.setState({
                        isDisabled: false,
                    });
                }
                clearInterval(interval);
            }
        }, 1000);
    };
    handleChange = (event) => {
        var tempState = this.state;
        if (
            event.target.value == null ||
            event.target.value === undefined ||
            event.target.value === ""
        ) {
            tempState[event.target.name] = false;
        } else {
            tempState[event.target.name] = true;
        }
        var count = 0;
        this.props.config.required.map((id) => {
            if (tempState[id]) {
                count++;
            }
        });
        if (count === this.props.config.required.length) {
            tempState["isDisabled"] = false;
        } else {
            tempState["isDisabled"] = true;
        }
        this.setState(tempState);
    };
    constructor(props) {
        super(props);
        var temp = {};
        this.props.config.required.map((id) => {
            temp[id] = false;
        });
        temp["isDisabled"] = true;
        this.state = temp;
    }
    render() {
        return (
            <div className="flex-grow w-full items-center flex flex-col">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    {this.props.config.config.map((item, index) => {
                        return (
                            <div key={`${this.props.title}#${index}`}>
                                <div className="w-full flex flex-col items-center font-semibold">
                                    {item.title}
                                </div>
                                <div className="w-full flex flex-col items-center mt-1 mb-1">
                                    <input
                                        className="w-full p-4"
                                        type={item.type}
                                        name={item.name}
                                        min={item.min}
                                        max={item.max}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <div className="w-full flex flex-col items-center mt-2">
                        <button
                            className="w-full p-4 shadow rounded-full"
                            type="submit"
                            disabled={this.state.isDisabled}
                            style={{
                                backgroundColor: this.state.isDisabled ? "gray" : "lightblue",
                            }}
                        >
                            {this.props.title}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
