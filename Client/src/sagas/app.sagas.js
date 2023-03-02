import { takeEvery, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actions from '../actions/app.actions'
import * as api from '../api/app.api'
import * as ActionTypes from "../constants/app.constants";

export function* userInfo() {
    try {
        const userInfo = yield call(api.userInfo)
        if (userInfo) {
            yield put(actions.userInfoSuccess(userInfo))
        }
    } catch (error) {
        yield put(actions.userInfoError(error))
        toast.error(error.message)
    }
}
export default function* appSagas(){
    yield all([
        takeEvery(ActionTypes.USER_INFO_REQUEST, userInfo),
    ])
}
