import { useState } from 'react'

const ClientLogin = () => {
  const [showRegister, setShowRegister] = useState(false)
  const [signInData, setSignInData] = useState({ username: '', password: '' })
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    designation: ''
  })
  const [loading, setLoading] = useState({ signIn: false, signUp: false })
  const [messages, setMessages] = useState({ signIn: '', signUp: '', signInError: '', signUpError: '' })

  const handleSignInSubmit = async (e) => {
    e.preventDefault()
    if (loading.signIn) return

    setLoading(prev => ({ ...prev, signIn: true }))
    setMessages({ signIn: '', signUp: '', signInError: '', signUpError: '' })

    try {
      // Simulate API call
      const response = await fetch('/signin/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signInData)
      })
      
      const data = await response.json()
      
      if (data.iserror) {
        setMessages(prev => ({ ...prev, signInError: data.message }))
      } else {
        setMessages(prev => ({ ...prev, signIn: data.message }))
      }
    } catch (error) {
      setMessages(prev => ({ ...prev, signInError: 'Network error occurred' }))
    }

    setLoading(prev => ({ ...prev, signIn: false }))
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    if (loading.signUp) return

    setLoading(prev => ({ ...prev, signUp: true }))
    setMessages({ signIn: '', signUp: '', signInError: '', signUpError: '' })

    try {
      // Simulate API call
      const response = await fetch('/signup/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpData)
      })
      
      const data = await response.json()
      
      if (data.iserror) {
        setMessages(prev => ({ ...prev, signUpError: data.message }))
      } else {
        setMessages(prev => ({ ...prev, signUp: data.message }))
        setSignUpData({ name: '', email: '', mobile: '', company: '', designation: '' })
      }
    } catch (error) {
      setMessages(prev => ({ ...prev, signUpError: 'Network error occurred' }))
    }

    setLoading(prev => ({ ...prev, signUp: false }))
  }

  return (
    <section id="client-login">
      <div className="width">
        <div className="main-title">
          <img src="/images/title-icon07.png" alt="" />
          <span>Client Login</span>
        </div>

        <div id="client-block" className="cf">
          <div className="login-box">
            <div id="form" className="signin-form">
              {loading.signIn && (
                <div id="signin_loader">
                  <img src="/images/loader.gif" alt="" />
                </div>
              )}
              
              {messages.signInError && (
                <div id="signin_error" className="signin_error">
                  {messages.signInError}
                </div>
              )}
              
              {messages.signIn && (
                <div id="signin_success" className="signin_success">
                  {messages.signIn}
                </div>
              )}

              <form className="cf" onSubmit={handleSignInSubmit}>
                <div className="signin">
                  <input 
                    type="text" 
                    className="input-text" 
                    placeholder="username" 
                    value={signInData.username}
                    onChange={(e) => setSignInData(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>
                <div className="signin">
                  <input 
                    type="password" 
                    className="input-text" 
                    placeholder="password" 
                    value={signInData.password}
                    onChange={(e) => setSignInData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                <p>
                  <input 
                    type="submit" 
                    className="submit-btn" 
                    value="Login" 
                    disabled={loading.signIn}
                  />
                  <span className="arrow-icon"></span>
                </p>
              </form>
            </div>
          </div>

          <div id="create-account">
            <a 
              href="javascript:;" 
              className={`login-txt txt01 ${showRegister ? 'hidden' : ''}`}
              onClick={() => setShowRegister(true)}
            >
              Don't have an account? Create one.
            </a>

            <div className={`register-form ${showRegister ? 'show' : ''}`}>
              {loading.signUp && (
                <div id="signup_loader">
                  <img src="/images/loader.gif" alt="" />
                </div>
              )}
              
              {messages.signUpError && (
                <div id="signup_error" className="signup_error">
                  {messages.signUpError}
                </div>
              )}
              
              {messages.signUp && (
                <div id="signup_success" className="signup_success">
                  {messages.signUp}
                </div>
              )}
              
              <div id="form" className="signup-form">
                <form className="cf" onSubmit={handleSignUpSubmit}>
                  <div className="signup">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Name" 
                      value={signUpData.name}
                      onChange={(e) => setSignUpData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="signup">
                    <input 
                      type="email" 
                      className="input-text" 
                      placeholder="Email" 
                      value={signUpData.email}
                      onChange={(e) => setSignUpData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="signup">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Mobile" 
                      value={signUpData.mobile}
                      onChange={(e) => setSignUpData(prev => ({ ...prev, mobile: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="signup">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Company" 
                      value={signUpData.company}
                      onChange={(e) => setSignUpData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div className="signup">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Designation" 
                      value={signUpData.designation}
                      onChange={(e) => setSignUpData(prev => ({ ...prev, designation: e.target.value }))}
                    />
                  </div>
                  <p>
                    <input 
                      type="submit" 
                      className="submit-btn" 
                      value="Submit" 
                      disabled={loading.signUp}
                    />
                    <span className="arrow-icon"></span>
                  </p>
                </form>
              </div>
            </div>
            
            <a 
              href="javascript:;" 
              className={`login-txt txt02 ${!showRegister ? 'hidden' : ''}`}
              onClick={() => setShowRegister(false)}
            >
              Already have an account? Login now
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hidden { display: none !important; }
        .register-form { display: none; }
        .register-form.show { display: block; }
      `}</style>
    </section>
  )
}

export default ClientLogin
