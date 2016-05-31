export const makeActionCreator = (type, ...propertykeys) => {
    return (...propertyValues) => {
        let action = {type};
        propertykeys.forEach((el, index) => {
            action[propertykeys[index]] = propertyValues[index];
        });
        return action;
    };
};
