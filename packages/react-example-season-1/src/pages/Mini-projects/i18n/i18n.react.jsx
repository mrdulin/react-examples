import React, {Component} from 'react';
import {
    IntlProvider,
    addLocaleData,
    FormattedDate, 
    FormattedTime, 
    FormattedRelative,
    FormattedNumber,
    FormattedMessage
} from 'react-intl';
import intl from 'intl';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from './lang/en_US';
import zh_CN from './lang/zh_CN';
addLocaleData([...en, ...zh]);

class I18n extends Component{
    state = {
        locale: 'zh'
    }
    static defaultProps = {
        languages: new Map([['en', 'English'], ['zh', '简体中文']])
    }

    chooseLocale() {
        switch(this.state.locale) {
            case 'en':
                return en_US;
            case 'zh':
                return zh_CN;
            default: 
                return zh_CN;
        }
    }

    render() {
        console.count('I18n render');
        const {languages} = this.props;
        const {locale} = this.state;
        const optionDoms = [...languages.keys()].map(lang => {
            return <option value={lang} key={lang}>{languages.get(lang)}</option>
        })
        return <IntlProvider locale={locale} key={locale} messages={this.chooseLocale()}>
            <div>
                <form>
                    <label>
                        <select onChange={this.handleSelectLanguage} value={this.state.locale}>{optionDoms}</select>
                    </label>
                </form>
                <div>
                    <h3>{'<FormattedDate>'}组件</h3>
                    <p><FormattedDate value={new Date()}></FormattedDate></p>
                </div>
                <div>
                    <h3>{'<FormattedTime>'}组件</h3>
                    <FormattedTime value={new Date().getTime()} children={formattedTime => <p>{formattedTime}</p>}></FormattedTime>
                </div>
                <div>
                    <h3>{'<FormattedRelative>'}组件</h3>
                    <FormattedRelative updateInterval={1000} value={Date.now()}></FormattedRelative>
                </div>
                <div>
                    <h3>{'<FormattedNumber>'}组件</h3>
                    <FormattedNumber value={10000}></FormattedNumber>
                </div>
                <div>
                    <h3>{'<FormattedMessage>'}组件</h3>
                    <FormattedMessage tagName='p' id='app.greeting' values={{name: <b>guest</b>}}></FormattedMessage>
                </div>
                <p>为了兼容Safari各个版本，需要同时安装 intl，intl在大部分的『现代』浏览器中是默认自带的，但是Safari和IE11以下的版本就没有了</p>
                <p>没有安装intl，报错：Invariant Violation: [React Intl] The `Intl` APIs must be available in the runtime, and do not appear to be built-in. An `Intl` polyfill should be loaded.
See: http://formatjs.io/guides/runtime-environments/</p>
            </div>
            
        </IntlProvider>
    }

    handleSelectLanguage = e => {
        this.setState({locale: e.target.value});
    }
}

export default I18n;