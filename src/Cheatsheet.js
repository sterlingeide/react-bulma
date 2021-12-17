import React, { Component } from 'react';
import './Cheatsheet.css';
import './Prism.css';
import Snippet from './Snippet';


const snippetList = [
    {
        name: 'char',
        properties: 'Is a character',
        example: "let char = 'a'"
    },
    {
        name: 'int',
        properties: 'Is an integer',
        example: 'let int = 3'
    },
    {
        name: 'float',
        properties: 'Is a number with a decimal',
        example: 'let float = 2.4'
    },
]

// const displaySnippetList = snippetList.map((c, idx) => {
//     return (
//         <div className="box" key={idx}>
//             <h4 id="const" className="title is-3">{c.name}</h4>
//             <article className="message is-primary">
//                 <span className="icon has-text-primary">
//                     <i className="fab fa-js"></i>
//                 </span>
//                 <div className="message-body">
//                     {c.properties}
//                 </div>
//             </article>
//             <pre><code className="language-javascript">{c.example}</code></pre>
//         </div>
//     );
// })

const displaySnippetList = snippetList.map((c, idx) => {
    return (
        <Snippet key={idx} index={idx} name={c.name} properties={c.properties} example={c.example} />
    );
})




class Cheatsheet extends Component {
    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="container content">
                                    <i className="is-large fab fa-discord"></i>
                                    <i className="is-large fas fa-code"></i>
                                    <h1 className="title">Code <em>All</em> The Things</h1>
                                    <h3 className="subtitle">
                                        Collection of code goodies for next-level dev
                                    </h3>
                                    <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" className="button is-primary is-large">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Github</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3">
                                <aside className="is-medium menu">
                                    <p className="menu-label">
                                        categories
                                    </p>
                                    <ul className="menu-list">
                                        <li className="is-right" title="CSS"><a href="#const" className="is-active"><i className="fab fa-css3-alt"></i> CSS</a></li>
                                        <li title="JS"><a href="#let" className="is-active"><i className="fab fa-js"></i> JS</a></li>
                                        <li title="HTML"><a href="#let" className="is-active"><i className="fab fa-html5"></i> HTML</a></li>
                                    </ul>
                                    <p className="menu-label">
                                        More to read...
                                    </p>
                                    <ul className="menu-list">
                                        <li><span className="tag is-white is-medium">Lorem</span></li>
                                        <li><span className="tag is-white is-medium">Ipsum</span></li>
                                        <li><span className="tag is-white is-medium">Dolor</span></li>
                                        <li><span className="tag is-white is-medium">Animi</span></li>
                                        <li><span className="tag is-white is-medium">Eximi</span></li>
                                        <li><span className="tag is-white is-medium">Nullius</span></li>
                                        <li><span className="tag is-white is-medium">Oxipi</span></li>
                                        <li><span className="tag is-white is-medium">Vultus</span></li>
                                        <li><span className="tag is-white is-medium">Voluptatis</span></li>
                                        <li><span className="tag is-white is-medium">Exomarphis</span></li>
                                        <li><span className="tag is-white is-medium">Finimi</span></li>
                                        <li><span className="tag is-white is-medium">Aenigma</span></li>
                                        <li><span className="tag is-white is-medium">Arkham</span></li>
                                        <li><span className="tag is-white is-medium">Blue</span></li>
                                        <li><span className="tag is-white is-medium">Medium</span></li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="column is-9">
                                <div className="content is-medium">
                                    <h3 className="title is-3">Snippets ¯\_(ツ)_/¯</h3>
                                    <div className="box">
                                        <h4 id="const" className="title is-3">const</h4>
                                        <article className="message is-primary">
                                            <span className="icon has-text-primary">
                                                <i className="fab fa-js"></i>
                                            </span>
                                            <div className="message-body">
                                                Block-scoped. Cannot be re-assigned. Not immutable.
                                            </div>
                                        </article>
                                        <pre><code className="language-javascript">const test = 'test';</code></pre>
                                    </div>
                                    <div className="box">
                                        <h4 id="let" className="title is-3">let</h4>
                                        <article className="message is-primary">
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-info-circle"></i>
                                            </span>
                                            <div className="message-body">
                                                Block-scoped. Can be re-assigned.
                                            </div>
                                        </article>
                                        <pre><code className="language-javascript">let i = 0;</code></pre>
                                    </div>
                                    {displaySnippetList}
                                    <h3 className="title is-3">More to Come...</h3>
                                    <div className="box">
                                        <h4 id="lorem" className="title is-4">More to come...</h4>
                                        <article className="message is-primary">
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-info-circle"></i>
                                            </span>
                                            <div className="message-body">
                                                Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
                                            </div>
                                        </article>
                                        <pre><code className="language-javascript">let i = 0;</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <article className="notification media has-background-white">
                                        <figure className="media-left">
                                            <span className="icon">
                                                <i className="has-text-warning fas fa-columns fa-lg"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Columns</h1>
                                                <p className="is-size-5 subtitle">
                                                    The power of <strong>Flexbox</strong> in a simple interface
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-info">
                                                <i className="fab fa-lg fa-wpforms"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Form</h1>
                                                <p className="is-size-5 subtitle">
                                                    The indispensable <strong>form controls</strong>, designed for maximum clarity
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cubes"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Components</h1>
                                                <p className="is-size-5 subtitle">
                                                    Advanced multi-part components with lots of possibilities
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-grey">
                                                <i className="fas fa-lg fa-cogs"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Modifiers</h1>
                                                <p className="is-size-5 subtitle">
                                                    An <strong>easy-to-read</strong> naming system designed for humans
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-lg fa-warehouse"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Layout</h1>
                                                <p className="is-size-5 subtitle">
                                                    Design the <strong>structure</strong> of your webpage with these CSS classes
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cube"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Elements</h1>
                                                <p className="is-size-5 subtitle">
                                                    Essential interface elements that only require a <strong>single CSS className</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <div className="columns is-mobile is-centered">
                        <div className="field is-grouped is-grouped-multiline">
                            <div className="control">
                                <div className="tags has-addons"><a className="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">Bulma Templates</a>
                                    <span className="tag is-info">MIT license</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-dark">based on a pen</span>
                                    <span className="tag has-addons is-warning"><a href="https://codepen.io/melanieseltzer/pen/odOXWM"><i className="fab fa-lg fa-codepen"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>

            </div>
        )
    }
}

export default Cheatsheet;