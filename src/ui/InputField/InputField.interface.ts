interface IPattern {
  message: string
  value: RegExp
}

export interface IInputFieldProps {
  Icon: React.ElementType
  name: string
  placeholder: string
  type?: string
  pattern?: IPattern
  min?: number
  max?: number
}
