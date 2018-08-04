import hljs from 'highlightjs';
import React from 'react';
import 'highlightjs/styles/solarized-dark.css';

class CodeBlock extends React.PureComponent {
    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }

    setRef(dom) {
        this.codeDom = dom;
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight() {
        hljs.highlightBlock(this.codeDom);
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef} className={`language-${this.props.language}`}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}

export default CodeBlock;