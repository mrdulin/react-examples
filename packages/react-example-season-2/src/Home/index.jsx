import React, {Component} from 'react';
import {withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

class Home extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    static defaultProps = {
        tools: require('../tools').datas
    }

    render() {
        const {tools, content: contentComponent} = this.props;
        const toolItem= tools.map(tool => {
            return <ListItem onTouchTap={() => this.handleToolClick(tool.key)} key={tool.key} primaryText={tool.name}></ListItem>
        })
        return <div>
            <AppBar title="聚合工具" onLeftIconButtonTouchTap={this.handleDrawerToggle}/>
            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                <AppBar title="工具导航" showMenuIconButton={false}/>
                <List>
                    {toolItem}
                </List>
            </Drawer>
            {contentComponent}
        </div>
    }

    handleToolClick(toolKey) {
        this.setState({open: false}, () => {
            this.props.router.replace(toolKey);
        });
    }

    handleDrawerToggle = () => {
        this.setState({open: !this.state.open});
    }
}

export default withRouter(Home);