import watchCompanySuggestion from './watchCompanySuggestion';
import watchCompanyTypeahead from './watchCompanyTypeahead';

function* rootSaga() {
  yield [
    watchCompanySuggestion(),
    watchCompanyTypeahead()
  ]
}

export default rootSaga;
