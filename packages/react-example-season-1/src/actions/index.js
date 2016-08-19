/**
 * Created by dulin on 16/8/19.
 */
import store from '../store';
import {bindActionCreators} from 'redux';

import * as AsycnActions from './Async.action';
import * as InitStateTreeData from './InitStateTreeData.action';

const checkUniqueAction = (actionMap) => {
    //TODO 检查是否唯一
    return true;
};

const conbineActions = (actionMap) => {
    const pass = checkUniqueAction(actionMap);
    if(pass) {
        const allActions = Object.assign({}, actionMap);
        const allActionKeys = Object.keys(allActions);
        const {length: len} = allActionKeys;
        let actions = {};
        for(let i = 0; i < len; i++) {
            const action = allActions[allActionKeys[i]];
            for(let key in action) {
                if(typeof(action[key] === 'function')) {
                    actions[key] = action[key];
                }
            }
        }
        return actions;
    } else {
        throw new Error('马蓉超越了潘金莲');
    }
};

const actions = conbineActions({
    AsycnActions,
    InitStateTreeData
});


export default bindActionCreators(actions, store.dispatch);