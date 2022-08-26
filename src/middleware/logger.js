const logger = (store) => (next) => (action) => {
    let now = new Date();

    console.group(action.type, ' ', now.toLocaleTimeString());

    console.log('The action is ', action.type);
    const result = next(action);
    console.log('The new state is: ', store.getState());

    console.groupEnd();

    return result;
};

export default logger;
