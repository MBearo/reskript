import {sync as resolve} from 'resolve';
import {LoaderFactory} from '../interface';

const factory: LoaderFactory = entry => {
    const {mode, projectSettings: {build: {script: {displayName}}}} = entry;

    return {
        loader: resolve('@reskript/svg-mixed-loader'),
        options: {
            deprecationWarning: mode === 'development',
            displayName: displayName === 'auto' ? mode === 'development' : displayName,
        },
    };
};

export default factory;
