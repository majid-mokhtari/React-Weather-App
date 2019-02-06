export default {
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 600,
    fontSize: '15px',
    letterSpacing: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px'
  },
  authTitle: {
    width: '20%',
    zIndex: 1,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginBottom: '20px'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30%',
    height: '350px'
  },
  formItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80px'
  },
  formInput: {
    height: '30px',
    borderRadius: '5px',
    fontSize: '20px',
    outline: 'none',
    padding: '10px'
  },
  loginBtn: {
    height: '50px',
    background: '#4c7bd9',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '20px',
    outline: 'none'
  },
  signUpBtn: {
    height: '50px',
    background: '#fff',
    color: '#4c7bd9',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '20px',
    outline: 'none'
  },
  forgotPass: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '15px',
    fontWeight: '400',
    color: '#4c7bd9',
    cursor: 'pointer'
  },
  authError: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#dc5f5f',
    textAlign: 'center'
  }
}
