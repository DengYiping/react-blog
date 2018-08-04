import React from 'react';

export function withJson(WrappedComponent, url, field, extra = {}){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data: {},
            };

            this.setData = this.setData.bind(this);
        }

        setData(data){
            this.setState({data: data});
        }

        componentDidMount(){
            fetch(url).then(resp => resp.json()).then(this.setData);
        }

        render(){
            let props = Object.assign({}, extra);
            props[field] = this.state.data;
            return <WrappedComponent {...props} />;
        }
    }
};