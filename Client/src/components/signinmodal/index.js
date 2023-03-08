import React, {useCallback, useMemo, useState} from 'react'
import * as actions from "../../actions/auth.actions";
import {isValidPassword, isValidUsername, setAccessToken} from "../../utils";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {api} from "../../api";
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import Modal from 'react-bootstrap/Modal';
import {initial} from "lodash";
import Input from '../InputAuth'
import SignUp from "../signuapmodal";
import './index.css'

function SignIn({modalAuth, setModalAuth}){
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const [serverError, setServerError] = useState(null)
    const [tabAcktivem, setTabsAcktive] = useState(true)

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                username: yup
                    .string()
                    .required()
                    .test('username', t('signInPage.inputs.username.error'), (value) => isValidUsername(value)),
                password: yup
                    .string()
                    .required()
                    .test('password', t('signInPage.inputs.password.error'), (value) => isValidPassword(value)),
            }),
        [t],
    )

    const submitSignInModal = useCallback(
        (credentials) => {
            setServerError('')
            api
                .signIn({ ...credentials})
                .then((response) => {
                    dispatch(actions.signInSuccess())
                    setAccessToken(response)
                    api
                        .getUserInfo()
                        .then(() => {})
                        .catch(() => {})

                })
                .catch(() => {
                    setServerError('Неверный логин или пароль.')
                })
        },
        [dispatch],
    )
    return(
        <>
            <div>
                <Modal show={modalAuth} onHide={()=>setModalAuth(false)}>
                    <Modal.Header closeButton={()=>setModalAuth(false)}>
                        <Modal.Title>
                            <div className="auth-form__title">
                                Войдите в личный кабинет
                            </div></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="auth-form__body">
                            <div className="auth-form__tabs-control ac-tabs-control">
                                <div className="auth-form__tabs tabs">
                                    <div className={tabAcktivem? "auth-form__tab tab active auth-form__tab--active": "auth-form__tab tab"} onClick={()=>setTabsAcktive(true)}
                                         data-auth-tab-id="login-d">
                                        <span> Войти </span>
                                    </div>
                                    <div className={tabAcktivem? "auth-form__tab tab": "auth-form__tab tab active auth-form__tab--active"} data-auth-tab-id="registration-d" onClick={()=>setTabsAcktive(false)}>
                                        <span> Зарегистрироваться </span>
                                    </div>
                                </div>
                                <div className="auth-form__tabs-content tabs-content">
                                    <Formik initialValues={initial} onSubmit={submitSignInModal} validationSchema={validationSchema}>
                                        {()=>(
                                            <div className={tabAcktivem? "auth-form__login tab-pane active in":'auth-form__login tab-pane'}>
                                                <Form id="login-form" className="login-form">
                                                    <>
                                                        <div className="auth-form__field">
                                                            <Field
                                                                type="text"
                                                                id="client-email"
                                                                name="username"
                                                                component={Input}
                                                                className={"auth-form-control required autofocus-js"}
                                                                placeholder="Введите логин"
                                                            />
                                                        </div>
                                                        <div className="auth-form__field">
                                                            <Field
                                                                type="password"
                                                                id="client-password"
                                                                name="password"
                                                                component={Input}
                                                                className={"auth-form-control required autofocus-js"}
                                                                placeholder="Введите Пароль"
                                                            />
                                                        </div>

                                                    </>
                                                    <Modal.Footer>
                                                        <button type="submit"
                                                                className="auth-form__btn-common login-submit">
                                                            Войти
                                                        </button>
                                                    </Modal.Footer>
                                                    {serverError && <div className="form-errors">{serverError}</div>}
                                                </Form>
                                            </div>
                                        )}
                                    </Formik>
                                    <div className={tabAcktivem? 'auth-form__registration tab-pane': 'auth-form__registration tab-pane active in'}>
                                        <SignUp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default SignIn