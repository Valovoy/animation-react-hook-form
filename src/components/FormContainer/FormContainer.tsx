import { useState } from 'react'
import cn from 'classnames'
import LogInForm from 'components/LogInForm/LogInForm'
import SignInForm from 'components/SignInForm/SignInForm'
import Notifications from 'components/Notifications/Notifications'
import { Arrow } from 'ui/svg'
import styles from './FormContainer.module.scss'

const Form = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleFormType = (): void => {
    setIsLogin(s => !s)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.changeFormContainer}>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={toggleFormType}>
              LOG IN
            </button>
            <button className={styles.btn} onClick={toggleFormType}>
              SIGN IN
            </button>
          </div>
          <div className={styles.pointer}>
            <div className={cn(styles.arrow, !isLogin && styles.rightSvg)}>
              <Arrow className={styles.svg} />
            </div>
          </div>
        </div>
        <div className={cn(styles.formWrapper, !isLogin && styles.isSignForm)}>
          <div className={styles.containerForm}>
            <div className={styles.formFront}>
              <LogInForm />
            </div>
          </div>
          <div className={styles.containerForm}>
            <div className={styles.formBack}>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
      <Notifications />
    </div>
  )
}

export default Form
