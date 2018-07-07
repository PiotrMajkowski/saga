import { apiRequest } from './home.saga';
export function* rootSaga() {
    yield [
        apiRequest()
    ];
}