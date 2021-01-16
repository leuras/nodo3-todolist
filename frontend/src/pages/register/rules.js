const Rules = {
  name: [
    { required: true, message: 'Please, enter your full name' }
  ],
  email: [
    { type: 'email', required: true, message: 'Please, enter a valid email address' }
  ],
  password: [
    { required: true, message: 'Password is required' }
  ],
  confirmPassword: [
    { required: true, message: 'Please, confirm your password' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (! value || getFieldValue('password') === value) {
          return Promise.resolve()
        }

        return Promise.reject('Passwords don\'t match')
      }
    })
  ]
}

export default Rules