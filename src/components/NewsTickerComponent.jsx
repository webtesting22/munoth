import './NewsTickerComponent.css'

const NewsTickerComponent = () => {
  const newsContent = `No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.  |  Prevent unauthorized transactions in your DEMAT account → Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day.  |  KYC is a one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (Broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.`

  return (
    <div className="news-ticker-outer">
      <marquee 
        className="marquee-tag"
        scrollamount="8"
        behavior="scroll"
        speed="1"
        direction="left"
        onMouseOver="this.stop()"
        onMouseOut="this.start()"
      >
        {newsContent}
      </marquee>
    </div>
  )
}

export default NewsTickerComponent
