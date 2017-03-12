import Immutable from 'seamless-immutable';

export default (engine, whitelist = []) => {
    return {
        ...engine,

        load() {
            return engine.load().then((result) => {
                whitelist.forEach((key) => {
                    result[key] = Immutable(result[key]);
                });
                return result;
            });
        },
    };
};
