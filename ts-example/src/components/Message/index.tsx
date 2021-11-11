import * as React from 'react';
import * as classnames from 'classnames';
import './style.scss';

type MessageColor = 'orange' | 'green';
interface IMessageStyle {
  [cssProp: string]: string;
}

interface IMessageProps {
  label: string;
  color: MessageColor;
  className: string;
  style: IMessageStyle;
  avatar: string;
}

class Message extends React.PureComponent<IMessageProps, any> {
  public static defaultProps: IMessageProps = {
    label: '',
    color: 'orange' || 'green',
    className: '',
    style: {},
    avatar: ''
  };

  public render(): React.ReactElement<IMessageProps> {
    const { label, color, className, style, avatar } = this.props;
    const messageBoxClassName: string = classnames('message-box', color, className);

    return (
      <div className={messageBoxClassName} style={style}>
        <div className='message-box-inner'>
          <div className='message-avatar-box'>
            <img src='' alt="avatar" />
          </div>
          {/* <div className='message-box-content'> */}
          <p className='message-label'>{label}</p>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export {
  MessageColor,
  Message,
  IMessageStyle
};
