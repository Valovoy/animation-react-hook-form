import styles from './FormHeader.module.scss'

interface IFormHeaderProps {
  title: string
}

const FormHeader = ({ title }: IFormHeaderProps) => (
  <h2 className={styles.title}>{title}</h2>
)

export default FormHeader
