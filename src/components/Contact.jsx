import { useState } from 'react'

import { FiPhone, FiMail } from 'react-icons/fi'

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    mobile: '',
    comments: ''
  })
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState({ success: '', error: '' })

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setMessages({ success: '', error: '' })

    try {
      // Simulate API call
      const response = await fetch('/inquiry/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      })

      const data = await response.json()

      if (data.iserror) {
        setMessages({ success: '', error: data.message })
      } else {
        setMessages({ success: data.message, error: '' })
        setContactData({ name: '', email: '', mobile: '', comments: '' })
      }
    } catch (error) {
      setMessages({ success: '', error: 'Network error occurred' })
    }

    setLoading(false)
  }

  const handleInputChange = (field, value) => {
    setContactData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact">
      {/* <div className="main-title">
        <img src="/images/title-icon08.png" alt="" />
        <span>Contact</span>
      </div> */}

      <div id="contact-block">
        <div className="width">
          <h2>Munoth Capital Market Ltd.</h2>

          <div className="contact-info cf">
            <div className="block-left">
              <h3>Corporate office & Registered Office</h3>
              <p>
                Shanti Nivas - Office Building<br />
                Opposite Shapath V<br />
                Near Karnavati Club<br />
                S G Road, Ahmedabad - 380058
              </p>
              <ul className='FlexUl'>
                <li className="number"><a href="tel:9033003188">+91 9033003188</a></li>
                <li className="email">
                  <a href="mailto:info@munoth.com">info@munoth.com</a>
                  {/* <a href="mailto:grievances@munoth.com">grievances@munoth.com</a> */}
                </li>
              </ul>
            </div>
            <div className="contact-bottom cf">
              <div className='FirstContainer'>
                <div className="block">
                  <h4>Compliance Officer</h4>
                  <p>
                    <b>Siddharth S. Jain</b> <br />
                    <div className='MobileFlex'>
                    <div>
                      <FiPhone style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      <a href="tel:079-26937954">079-26937954</a><br />
                    </div>
                    <div>
                      <FiMail style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      <a href="mailto:sjain@munoth.com">sjain@munoth.com</a>
                    </div>
                    </div>
                  </p>
                </div>
                <div className="block">
                  <h4>Investor Grievance</h4>
                  <p><a href="mailto:grievances@munoth.com">grievances@munoth.com</a></p>
                  <p><a href="/documents/escalation-matrix.pdf" target="_blank" rel="noopener noreferrer">Escalation Matrix</a></p>
                </div>
              </div>
              <div className="block block03">
                <h4>Standard Set of Client Registration Form</h4>
                <p>
                  <img src="/images/pdf-blue-icon.png" alt="" />
                  <a className="download" href="/documents/trading-form.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                </p>
              </div>
              <div className="block last">
                <h4>Saral Account Opening Form</h4>
                <p>
                  <img src="/images/pdf-blue-icon.png" alt="" />
                  <a className="download" href="/documents/saral-account-form.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                </p>
              </div>
            </div>
            {/* <div className="block-right">
              <h3>Inquiry</h3>
              
              {loading && (
                <div id="contact_loader">
                  <img src="/images/loader.gif" alt="" />
                </div>
              )}
              
              {messages.error && (
                <div id="contact_error" className="contact_error">
                  {messages.error}
                </div>
              )}
              
              {messages.success && (
                <div id="contact_success" className="contact_success">
                  {messages.success}
                </div>
              )}
              
              <div id="form" className="contact-form">
                <form className="cf" onSubmit={handleContactSubmit}>
                  <div className="control">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Name*" 
                      value={contactData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="control">
                    <input 
                      type="email" 
                      className="input-text" 
                      placeholder="Email*" 
                      value={contactData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="control">
                    <input 
                      type="text" 
                      className="input-text" 
                      placeholder="Mobile" 
                      value={contactData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                  <div className="control">
                    <textarea 
                      cols="5" 
                      rows="5" 
                      className="input-textarea" 
                      placeholder="Comments*" 
                      value={contactData.comments}
                      onChange={(e) => handleInputChange('comments', e.target.value)}
                      required
                    />
                  </div>
                  <input 
                    type="submit" 
                    className="submit-btn" 
                    disabled={loading}
                  />
                </form>
              </div>
            </div> */}
          </div>



          <div id="register-block">
            <table>
              <thead>
                <tr>
                  <th>Details</th>
                  <th>NSE Cash Segment</th>
                  <th>NSE F&O Segment</th>
                  <th>BSE Cash</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEBI Reg.No.</td>
                  <td colSpan="3">INZ000302337</td>
                </tr>
                <tr>
                  <td>Member Code</td>
                  <td align="center" colSpan="2">12480</td>
                  <td>3205</td>
                </tr>
                <tr>
                  <td>CDSL Reg.No.</td>
                  <td colSpan="3">IN-DP-CDSL437-2008</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontSize: '90%', paddingBottom: '40px', color: '#a8b7cb' }}>
            SEBI Complaint Redress System (SCORES): Filing of complaints on SCORES – Easy & quick (a) Register on SCORES portal (b) Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID (c) Benefits: i. Effective communication ii. Speedy redressal of the grievances. Please refer {' '}
            <a href="https://scores.gov.in/scores/Welcome.html" target="_blank" rel="noopener noreferrer">
              https://scores.gov.in/scores/Welcome.html
            </a> and FAQs available thereon, more particularly FAQ-7 showing "How can investors lodge their complaint online in SCORES?".
          </div>

          <footer>
            <ul className="cf">
              <li><a href="http://www.bseindia.com/" target="_blank" rel="noopener noreferrer">BSE</a></li>
              <li><a href="#">Investor&nbsp;Protection</a></li>
              <li><a href="http://www.nseindia.com/" target="_blank" rel="noopener noreferrer">NSE</a></li>
              <li><a href="http://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">SEBI</a></li>
              <li><a href="#">Watchout&nbsp;Investors</a></li>
              <li><a href="#">Investor&nbsp;Complaints</a></li>
              <li><a href="https://www.scores.gov.in/scores/Welcome.html" target="_blank" rel="noopener noreferrer">SCORES</a></li>
              <li><a href="https://evoting.cdslindia.com/Evoting/EvotingLogin" target="_blank" rel="noopener noreferrer">eVoting</a></li>
              <li><a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer">SMART&nbsp;ODR</a></li>
            </ul>
            <div className="copyright cf">
              <p>&copy; 2022 Munoth Capital Market Ltd. - All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Contact
