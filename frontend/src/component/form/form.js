import React from "react";

export default function CustomForm() {

  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="image" alt="image" ref={this.fileInput} />
        </label>
        <label>
            Width:
            <input type="number" ref={this.width}/>
        </label>
        <label>
            Height:
            <input type="number" ref={this.height}/>
        </label>
        <label>
            Name:
            <input type="name" ref={this.outputName} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
