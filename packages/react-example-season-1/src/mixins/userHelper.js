export const isLogin = function() {
    const {InjectStateToEs5ComponentMixins} = this.props;
    
    return InjectStateToEs5ComponentMixins.token.length
}

const userHelper = {
    isLogin
}

export default userHelper;