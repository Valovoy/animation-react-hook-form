import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { InputField, FormHeader, SubmitBtn } from 'ui'
import { Email, LockClosed, User } from 'ui/svg'
import { ISignInFormFields } from './SignInForm.interface'
import styles from './SignInForm.module.scss'

const SignInForm = () => {
  const methods = useForm<ISignInFormFields>({ reValidateMode: 'onSubmit' })

  const onSubmit: SubmitHandler<ISignInFormFields> = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormHeader title="Sign in" />
        <InputField Icon={User} placeholder="Your Name" name="username" />
        <InputField
          Icon={Email}
          placeholder="Your Email"
          name="email"
          pattern={{
            value:
              /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            message: 'Please enter valid email',
          }}
        />
        <InputField
          Icon={LockClosed}
          placeholder="Your Password"
          type="password"
          name="password"
          min={6}
          max={16}
        />
        <SubmitBtn />
      </form>
    </FormProvider>
  )
}

export default SignInForm
