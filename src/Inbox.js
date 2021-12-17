import React, { Component } from 'react';
import './Inbox.css';

const mailList = [
    {
        header: 'Sterling',
        subject: 'Need help',
    },
    {
        header: 'Jack',
        subject: 'Happy Thanksgiving',
    },
    {
        header: 'Jesus',
        subject: 'Merry Christmas',
    },
]

const displayMailList = mailList.map((c, idx) => {
    return (
        <div v-for="(msg, index) in messages" className="card" id="'msg-card-'+index" click="showMessage(msg,index)" data-preview-id="index" key={idx}>
            <div className="card-content">
                <div className="msg-header">
                    <span className="msg-from"><small>From: {c.header}</small></span>
                    <span className="msg-timestamp"></span>
                    <span className="msg-attachment"><i className="fa fa-paperclip"></i></span>
                </div>
                <div className="msg-subject">
                    <span className="msg-subject"><strong id="fake-subject-1">{c.subject}</strong></span>
                </div>
                <div className="msg-snippet">
                    <p id="fake-snippet-1"></p>
                </div>
            </div>
        </div>
    );
})


class Inbox extends Component {
    render() {
        return (
            <div>
                <nav className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
                            </a>


                            <div className="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    Account
                                </a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        Dashboard
                                    </a>
                                    <a className="navbar-item">
                                        Profile
                                    </a>
                                    <a className="navbar-item">
                                        Settings
                                    </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="columns" id="mail-app">
                    <aside className="column is-2 aside hero is-fullheight">
                        <div>
                            <div className="compose has-text-centered">
                                <a className="button is-danger is-block is-bold">
                                    <span className="compose">Compose</span>
                                </a>
                            </div>
                            <div className="main">
                                <a href="#" className="item active"><span className="icon"><i className="fa fa-inbox"></i></span><span className="name">Inbox</span></a>
                                <a href="#" className="item"><span className="icon"><i className="fa fa-star"></i></span><span className="name">Starred</span></a>
                                <a href="#" className="item"><span className="icon"><i className="fa fa-envelope-o"></i></span><span className="name">Sent Mail</span></a>
                                <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
                            </div>
                        </div>
                    </aside>
                    <div className="column is-4 messages hero is-fullheight" id="message-feed">
                        <div className="action-buttons">
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-chevron-down"></i></a>
                                <a className="button is-small"><i className="fa fa-refresh"></i></a>
                            </div>
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-inbox"></i></a>
                                <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                            </div>
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-folder"></i></a>
                                <a className="button is-small"><i className="fa fa-tag"></i></a>
                            </div>
                            <div className="control is-grouped pg">
                                <div className="title"> of </div>
                                <a className="button is-link"><i className="fa fa-chevron-left"></i></a>
                                <a className="button is-link"><i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>


                        <div className="inbox-messages" id="inbox-messages">
                            <div v-for="(msg, index) in messages" className="card" id="'msg-card-'+index" click="showMessage(msg,index)" data-preview-id="index">
                                <div className="card-content">
                                    <div className="msg-header">
                                        <span className="msg-from"><small>From: </small></span>
                                        <span className="msg-timestamp"></span>
                                        <span className="msg-attachment"><i className="fa fa-paperclip"></i></span>
                                    </div>
                                    <div className="msg-subject">
                                        <span className="msg-subject"><strong id="fake-subject-1"></strong></span>
                                    </div>
                                    <div className="msg-snippet">
                                        <p id="fake-snippet-1"></p>
                                    </div>
                                </div>
                            </div>
                            {displayMailList}
                        </div>
                    </div>
                    <div className="column is-6 message hero is-fullheight is-hidden" id="message-pane">
                        <div className="action-buttons">
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-inbox"></i></a>
                                <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                            </div>
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                            </div>
                            <div className="control is-grouped">
                                <a className="button is-small"><i className="fa fa-folder"></i></a>
                                <a className="button is-small"><i className="fa fa-tag"></i></a>
                            </div>
                        </div>
                        <div className="box message-preview">
                            <div className="top">
                                <div className="avatar">
                                    <img src="https://placehold.it/128x128" />
                                </div>
                                <div className="address">
                                    <div className="name">John Smith</div>
                                    <div className="email">someone@gmail.com</div>
                                </div>
                                <hr />
                                <div className="content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                            </p>
                            <p>
                                <a className="icon" href="https://github.com/BulmaTemplates/bulma-templates">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Inbox;