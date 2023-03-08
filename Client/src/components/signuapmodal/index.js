import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Redirect} from "react-router-dom";
import { Formik, Form, Field } from 'formik'
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {api} from "../../api";
import * as actions from "../../actions/auth.actions";
import {isValidEmail, isValidPassword, isValidPhone, isValidUsername} from "../../utils";
import {Col, FormGroup, Row} from "reactstrap";
import Input from '../InputAuth'
import InputPhone from "../InputPhone";
import Checkbox from '../Checkbox'

function SignUp({ location }) {
    const dispatch = useDispatch()
    const { t } = useTranslation('common')
    const [signUpStatus, setSignUpStatus] = useState(null)
    const [serverError, setServerError] = useState(null)

    const referralName = useMemo(() => {
        let referral = ''
        if (location) {
            const searchParams = new URLSearchParams(location.search)
            const ref = searchParams.get('ref')
            if (ref) {
                referral = ref
            }
        }

        return referral
    }, [location])

    const initialValues = useMemo(
        () => ({
            phone: '',
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            referral: referralName,
            acceptPrivacyPolicy: false,
        }),
        [referralName],
    )

    const getInviterByName = useCallback(
        (name) => {
            dispatch(actions.inviter(name))
        },
        [dispatch],
    )

    useEffect(() => {
        if (referralName) {
            getInviterByName(referralName)
        }
        return () => {
            dispatch(actions.clearInviter())
        }
    }, [dispatch, referralName, getInviterByName])

    const handleOnBlurReferralField = (event) => {
        const inviterName = event.target.value
        if (inviterName) {
            getInviterByName(inviterName)
        } else {
            dispatch(actions.clearInviter())
        }
    }

    const handleOnSubmit = ({ acceptPrivacyPolicy, repeatPassword, ...finalUserInfo }) => {
        setSignUpStatus('progress')
        setServerError(null)
        api
            .signUp(finalUserInfo)
            .then(() => {
                setSignUpStatus('successful')
            })
            .catch((error) => {
                setServerError(error.message)
                setSignUpStatus('failed')
            })
    }

    // TODO: refactoring
    if (signUpStatus === 'successful') {
        return <Redirect to={'/dashboard'} />
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleOnSubmit}
                validate={({
                               phone,
                               first_name,
                               last_name,
                               username,
                               email,
                               password,
                               repeatPassword,
                               acceptPrivacyPolicy,
                           }) => {
                    const errors = {}

                    if (!first_name.trim()) {
                        errors.first_name = t('Введите Имя')
                    }

                    if (!last_name.trim()) {
                        errors.last_name = t('Фамилия')
                    }

                    if (!isValidPhone(phone)) {
                        errors.phone = t('Номер телефона')
                    }

                    if (!isValidEmail(email)) {
                        errors.email = t('почтовый ящик')
                    }

                    if (!isValidUsername(username)) {
                        errors.username = t('Придумайте Логин')
                    }

                    if (!isValidPassword(password)) {
                        errors.password = t('Придумайте пароль')
                    }

                    if (repeatPassword !== password) {
                        errors.repeatPassword = t('Повторите пароль')
                    }

                    if (!acceptPrivacyPolicy) {
                        errors.acceptPrivacyPolicy = 'Required'
                    }

                    return errors
                }}>
                {()=>(
                    <Form className="signup-form">
                        <div className="form-inner">
                            <fieldset>
                                <FormGroup>
                                    <Field
                                        type="text"
                                        name="referral"
                                        placeholder={t('Логин пригласилеля Не обязательно')}
                                        onBlur={handleOnBlurReferralField}
                                        component={Input}
                                    />
                                </FormGroup>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Field type="text" name="first_name" placeholder={t('Имя')} component={Input} />
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Field
                                                type="text"
                                                name="last_name"
                                                placeholder={t('Фамилия')}
                                                component={Input}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Field name="phone" placeholder={t('Телефон')} component={InputPhone} />
                                </FormGroup>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder={t('Придумайте логин')}
                                                component={Input}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormGroup>
                                                <Field type="text" name="email" placeholder={t('email')} component={Input} />
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder={t('Придумайте пароль')}
                                                component={Input}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Field
                                                type="password"
                                                name="repeatPassword"
                                                placeholder={t('Повторите пароль')}
                                                component={Input}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="mt-4 mb-5">
                                    <Field
                                        type="checkbox"
                                        name="acceptPrivacyPolicy"
                                        label={t('принимаю условия политики конфендициальности')}
                                        component={Checkbox}
                                    />
                                </FormGroup>
                            </fieldset>
                        </div>
                        <button type="submit" className="auth-form__btn-common signup-submit">
                            Зарегистрироваться
                        </button>
                        {serverError && <div>{serverError}</div>}
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default SignUp