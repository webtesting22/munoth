import { useEffect, useRef } from 'react'

const NewsTickerComponent = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    // Initialize marquee effect
    const marqueeElement = marqueeRef.current
    if (marqueeElement) {
      // Simple CSS animation for marquee effect
      marqueeElement.style.animation = 'marquee 15s linear infinite'
    }
  }, [])

  const newsContent = `No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account  |  Munoth Capital does not operate any WhatsApp groups or similar platforms for investment advice.  |  Prevent unauthorised transactions in your account --> Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.......... Issued in the interest of Investors.  |  Prevent unauthorized transactions in your demat account --> Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day..... issued in the interest of investors.  |  KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.`

  return (
    <div className="news-tricker-outer">
      <div className="marquee" ref={marqueeRef}>
        {newsContent}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

export default NewsTickerComponent
