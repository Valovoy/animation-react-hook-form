import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { InputField, FormHeader, SubmitBtn } from 'ui'
import { Email, LockClosed } from 'ui/svg'
import { ILoginFormFields } from './LoginForm.interface'
import styles from './LogInForm.module.scss'

const LogInForm = () => {
  const methods = useForm<ILoginFormFields>({ reValidateMode: 'onSubmit' })

  const onSubmit: SubmitHandler<ILoginFormFields> = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormHeader title="Log in" />
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
        />
        <SubmitBtn />
        <span className={styles.forgotPas}>Forgot your password?</span>
      </form>
    </FormProvider>
  )
}

export default LogInForm
