import React, { Component } from "react";

export default class Album extends Component {
    render() {
        return (
            <>
                <div className="albumContainer">
                    <div className="image">
                        <img src={this.props.albumArt} />
                    </div>
                    <div className="name">
                        {this.props.id + 1}. {this.props.name}
                    </div>
                </div>
            </>
        );
    }
}