import React, {Component} from 'react';

class Snippet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="box" key={this.props.index}>
            <h4 id="const" className="title is-3">{this.props.name}</h4>
            <article className="message is-primary">
                <span className="icon has-text-primary">
                    <i className="fab fa-js"></i>
                </span>
                <div className="message-body">
                    {this.props.properties}
                </div>
            </article>
            <pre><code className="language-javascript">{this.props.example}</code></pre>
        </div>
        );
    }
}

export default Snippet;