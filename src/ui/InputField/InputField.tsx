import { useEffect } from 'react'
import { useController } from 'react-hook-form'
import { toast } from 'react-toastify'
import cn from 'classnames'
import { toUpperCaseFirstLetter } from 'utils/toUpperCaseFirstLetter'
import { IInputFieldProps } from './InputField.interface'
import styles from './InputField.module.scss'

const InputField = ({
  Icon,
  name,
  placeholder,
  pattern,
  min,
  max,
  type = 'text',
}: IInputFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    defaultValue: '',
    rules: {
      required: `${toUpperCaseFirstLetter(name)} is required field!`,
      minLength: min
        ? {
            value: min,
            message: `${toUpperCaseFirstLetter(
              name,
            )} must be at least ${min} characters`,
          }
        : undefined,
      maxLength: max
        ? {
            value: max,
            message: `${toUpperCaseFirstLetter(
              name,
            )} must be at most ${max} characters`,
          }
        : undefined,
      pattern,
    },
  })

  useEffect(() => {
    if (error?.message) {
      toast.error(error?.message)
    }
  }, [error])

  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={cn(styles.input, error && styles.isError)}
        placeholder={placeholder}
        onChange={field.onChange}
        value={field.value}
        name={field.name}
        ref={field.ref}
      />
      <Icon className={styles.formSvg} />
    </div>
  )
}

export default InputField
