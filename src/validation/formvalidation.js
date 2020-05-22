import * as yup from 'yup'


const FormValidation = yup.object().shape({
  name: yup.string()
    .min(3, 'Name must be at least three characters long')
    .required('Name is required'),

  size: yup.string()
    .required('A size is required'),

})

export default FormValidation
