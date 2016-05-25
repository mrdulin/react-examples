import React from 'react';

class TableES6WithES7StaticProps extends React.Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        datas: [{
            "when": "2 minutes ago",
            "who": "Jill Dupre",
            "description": "Created new account"
        }, {
            "when": "1 hour ago",
            "who": "Lose White",
            "description": "Added fist chapter"
        }, {
            "when": "2 hours ago",
            "who": "Jordan Whash",
            "description": "Created new account "
        }]
    }

    static propTypes = {
        datas: React.PropTypes.array.isRequired
    }

    render() {
        const headings = this.props.headings.map((heading, index) => {
            return <th key={index}>{heading}</th>;
        });
        const rows = this.props.datas.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.who}</td>
                    <td>{data.description}</td>
                    <td>{data.when}</td>
                </tr>
            );
        });
        return (
            <div>
                <h3>{this.props.title}</h3>
                <table>
                    <thead>
                        <tr>
                            {headings}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default TableES6WithES7StaticProps;
