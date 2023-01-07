import react from "react";

export default class NotificationDrop extends react.Component {
    render() {
        if (this.props.message === "") {
            return <></>;
        }
        setTimeout(this.props.timeoutFn, this.props.timeout);
        return (
            <div
                className={`${
                    this.props.type === "error" ? "bg-red-600" : "bg-white"
                } bg-opacity-90 max-w-lg w-full fixed -top-20 p-4 items-center flex flex-col rounded-xl`}
            >
                {this.props.message}
            </div>
        );
    }
}
