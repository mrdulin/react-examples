import React from 'react';

import TableES6 from '../components/tableES6';
import TableES5 from '../components/tableES5';
import TableES6WithES7StaticProps from '../components/TableES6WithES7StaticProps';

class Table extends React.Component{
    static defaultProps = {
        headings: ["Last updated at", "By Author", "Summary"]
    }
    render() {
        return (
            <div id="table-demo">
                <h2>Table Demo</h2>
                <TableES6 headings={this.props.headings} title={"React Table ES6 Version"}></TableES6>
                <TableES5 headings={this.props.headings} title={"React Table ES5 Version"}></TableES5>
                <TableES6WithES7StaticProps headings={this.props.headings} title={"React Table ES6 Version With Static Props"}></TableES6WithES7StaticProps>
            </div>
        );
    }
};

export default Table;
