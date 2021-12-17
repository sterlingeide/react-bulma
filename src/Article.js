import React, {Component} from 'react';

class Article extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //this.props.authorIntro();

        return(
            <article className="post" key={this.props.index}>
            <h4>{this.props.message}</h4>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href="#">{this.props.person}</a> replied 34 minutes ago &nbsp;
                            <span className="tag">Question</span>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
                </div>
            </div>
        </article>
        );
    }
}

export default Article;