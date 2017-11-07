import {ReducerCombiner} from '../utils/reducer/reducer.combiner';
import {RouteCombiner} from '../utils/router/route.combiner';


import DashboardReducerProvider from '../containers/dashboard/providers/reducer.provider';
import DashboardRouteProvider from '../containers/dashboard/providers/route.provider';


export const mainConfig = () => {
    return {
        apiUrl: `http://example.com/api`
    }
}

export const registerReducers = () => {
    
    ReducerCombiner.registerReducerProvider(DashboardReducerProvider);
    
}

export const registerRoutes = () => {
    
    RouteCombiner.registerRouteProvider(DashboardRouteProvider);
    
}
