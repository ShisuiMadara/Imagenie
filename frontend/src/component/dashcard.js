import * as React from "react";
import CardForm from "./cardform";

export default class DashCard extends React.Component {
    toggleFormVisibility = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen,
        });
    };
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,
        };
    }
    render() {
        return (
            <div className="flex flex-col shadow-xl w-full p-7 rounded-xl font-mono bg-slate-50">
                <div className="w-full h-28 mb-4 overflow-hidden items-center flex flex-col">
                    <img
                        className="rounded-xl h-full shadow-md w-auto aspect-auto"
                        src={this.props.image}
                        alt={this.props.title}
                    />
                </div>
                <div className="w-full flex flex-col items-center font-bold text-4xl capitalize truncate">
                    {this.props.title}
                </div>
                <div className="w-full flex flex-col items-center font-extralight text-lg truncate mt-3">
                    {this.props.description}
                </div>
                <div
                    onClick={this.toggleFormVisibility}
                    className="cursor-pointer mt-4 w-full h-14 bg-gray-50 bottom-0 right-0 rounded-full shadow-2xl border-slate-400 border-2 flex flex-col items-center"
                >
                    <div className="flex-grow flex flex-row items-center">
                        {this.state.isFormOpen ? "Hide" : "Show"}
                    </div>
                </div>
                {this.state.isFormOpen ? (
                    this.props.forms.map((item, index) => {
                        return (
                            <div
                                className="mt-6 w-full flex flex-col items-center"
                                key={`card_${this.props.title.toString().toLowerCase()}#${index}`}
                            >
                                <CardForm
                                    title={this.props.title.toString().toLowerCase()}
                                    config={item}
                                />
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        );
    }
}
