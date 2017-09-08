import * as React from 'react';
import {string} from 'prop-types';

// 使用这种方式，需要写模块定义文件，见types/index.d.ts
import * as style from './style.module.scss';
// console.log(style);

// 如果不用上面import的形式导入style，还可以用下面这种方式
// const style = require('./style.module');
// console.log(style);

interface IPanelHeadProps {
  title: string;
  subTitle?: string;
  icon?: string;
}

const PanelHead: React.SFC<IPanelHeadProps> = (props: IPanelHeadProps): React.ReactElement<IPanelHeadProps> => {

  // const iconClass = `icon-${icon}`;

  return (
    <div className={style.panelHeading}>
      <h3 className={style.panelTitle}>
        {props.title}
        {props.subTitle ? <small className={style.panelSubTitle}>{props.subTitle}</small> : null}
      </h3>
    </div>
  );
};

PanelHead.propTypes = {
  title: string,
  subTitle: string,
  icon: string
};

export default PanelHead;
