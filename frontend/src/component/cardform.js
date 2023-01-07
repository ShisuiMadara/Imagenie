import React from "react";
import axios from "axios";

export default class CardForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        var file = event.target.file;
        formData.append("file", file.files[0], file.files[0].name);
        axios.post("http://localhost:5000/api/fileUpload", formData).then((res) => {
            console.log(res);
        });
    };
    render() {
        return (
            <div className="flex-grow w-full items-center flex flex-col">
                <form onSubmit={this.handleSubmit}>
                    <div className="w-full flex flex-col items-center font-semibold">
                        Select a file
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <input className="w-full p-4" type="file" name="file" min="0" max="99" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <input
                            className="w-full p-4"
                            type="submit"
                            value={`Upload and ${this.props.title.toLowerCase()}`}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
