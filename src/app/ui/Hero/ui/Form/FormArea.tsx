'use client';

import cn from 'classnames';
import { Form, Formik } from 'formik';

import { Button } from '@/shared/ui/Button';
import { CustomInput } from '@/shared/ui/CustomInput';

import css from './Form.module.scss';

interface IInitialFields {
  name: string;
  email: string;
}

const initialFields: IInitialFields = {
  name: '',
  email: '',
};

const validateName = (name: string) => {
  const REG_EXP = /^[a-zA-Z][a-zA-Z0-9-]+$/;

  if (!name) {
    return 'Required';
  } else if (!REG_EXP.test(name)) {
    return 'Incorect validate';
  }
};

const validateEmail = (email: string) => {
  const REG_EXP = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  if (!email) {
    return 'Required';
  } else if (!REG_EXP.test(email)) {
    return 'Incorect validate';
  }
};

const FormArea = () => {
  const handleForm = () => {};

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={(_, actions) => {
        handleForm();
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h2 className={css.title}>
            Take your best <span>solution</span>
          </h2>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.name && touched.name,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.name && touched.name,
              })}
              name='name'
              type='text'
              placeholder='Name'
              validate={validateName}
            />
          </label>

          <label
            className={cn(css.label, {
              [css.lableError]: errors.email && touched.email,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.email && touched.email,
              })}
              name='email'
              type='email'
              placeholder='Email'
              validate={validateEmail}
            />
          </label>

          <div className={css.buttonInner}>
            <Button type='submit' color='tr'>
              Sign in
            </Button>
            <span className={css.or}>Or</span>
            <Button type='button' color='lightGreen'>
              Sign up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { FormArea };
