import { IReducerProvider } from '../../../utils/reducer/contracts/reducer.provider';
import { IReducerCombiner } from '../../../utils/reducer/reducer.combiner';
import { DataReducer } from '../reducers/data.reducer';
import { ArticlesReducer } from '../reducers/articles.reducer';

class DashboardReducerProvider implements IReducerProvider {
    public register(reducerCombiner: IReducerCombiner) {
        reducerCombiner.registerReducer("DashboardDataReducer", DataReducer);
        reducerCombiner.registerReducer("ArticlesReducer", ArticlesReducer);
    }
}

const _DashboardReducerProvider = new DashboardReducerProvider;

export default _DashboardReducerProvider;