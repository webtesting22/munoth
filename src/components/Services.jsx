import { useState, useEffect } from 'react'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [openMobileTab, setOpenMobileTab] = useState(0)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const services = [
    {
      title: "Equity Broking Desk",
      image: "/images/advise-based-banner.jpg",
      description: <>We know time is money; 'more than money' when you are high networth individual. The reason why we have set up an Advice Based Broking Desk. This premium service helps monitor your portfolio very closely. Simultaneously, we workout the best solution for you, based upon our thorough equity research. <br />
        {/* <b>Advise Based Broking Desk</b> */}
        <p>PLEASE Note, we are a registered broker and maintain no WhatsApp groups and have no link with any person who does that. Pls beware of fraud, impersonation and phishing.
        </p>
        {/* <p><b>We also have No apps on playstore or istore for investors</b></p> */}
      </>
    },
    {
      title: "Depository",
      image: "/images/depository-banner.jpg",
      description: "Transacting in securities is not easy, especially when you have segmented or scattered investments. That's why we provide you with a full-fledged Depository Service, to handle your securities' transactions absolutely hassle free. We are a CDSL Depository Participant."
    },
    {
      title: "Hedge Fund",
      image: "/images/hedge-fund-banner.jpg",
      description: "Munoth Hedge Fund is a SEBI-registered Alternative Investment Fund (Category III) that pools capital from investors and allocates it across listed equities and related instruments. Unlike traditional investment vehicles, it relies on the discipline and judgment of its fund managers rather than fixed market trends. The Fund employs a range of strategies designed to manage risk and pursue opportunities across market cycles.",
      extraContent: (
        <>
          <p>Our operations are supported by an institutional framework to ensure compliance and governance. HDFC Bank acts as Fund Accountant and Custodian, Labadiya & Mehta as Statutory Auditor, MNSS & Associates as Tax Advisor, Desai & Diwanji as Legal Counsel, KFin Technologies as RTA, and Vistra ITCL as Trustee. Munoth Capital Market Ltd. serves as the Investment Manager.</p>
          {/* <p>Contrary to traditional investments, Hedge Funds depend on the skills, foresight and sheer acumen of your Hedge Fund Manager rather than the performance of the market or the asset class. Therefore, Hedge Funds can provide opportunities to manage risk as well as diversify in both bull and bear markets.</p>
          <p>While most misconceive Hedge Funds to be a high risk, we consider them as investments without boundaries, and rightly so, because the possibilities and margins of returns. As your Hedge Fund managers, we employ a diverse and constantly evolving range of trading strategies to generate better returns. We provide investors with greater control and independence as well as enhanced transparency and liquidity matched to their underlying investments. We have made significant investment in technology and infrastructure to ensure we have the right insights to make informed investments of the funds you have entrusted us with. Our flexible investment platform allows us to work closely work with you to good ends.</p>
          <h3>Munoth Alternative Investment Fund Highlights:</h3>
          <h4>SEBI Registered Alternative Investment Fund Company (Under Category 3)</h4> */}
          {/* <br /> */}
          {/* <ul>
            <li>Fund Advisor- KPMG</li>
            <li>Custodian of Funds –HDFC Bank</li>
            <li>Legal Advisors – IC Legal, Mumbai</li>
            <li>Fund Sponsor – Chairman, Munoth Capital</li>
            <li>Settler – Siddharth Jain</li>
          </ul> */}
        </>
      )
    },
    {
      title: "Margin Funding",
      image: "/images/margin-funding-banner.jpg",
      description: "When there is a sudden availability of the opportunity of your choice, shortterm funding need might come up. That's why at Munoth, we leverage your investments, not just with our expertise, but also by contributing our resources to meet your investment needs. For this purpose, we provide organize comprehensive Margin Funding that bridges the financial gap between you and your investments, so your expectations never have to fall short of reality."
    }
  ]

  const handleTabClick = (index) => {
    if (isMobile) {
      setOpenMobileTab(openMobileTab === index ? -1 : index)
    } else {
      setActiveTab(index)
    }
  }

  return (
    <section id="service">
      <div className="main-title">
        <img src="/images/title-icon04.png" alt="" />
        <span>Services</span>
      </div>

      <div className="service-block-outer">
        <div className="service-block">
          <div className="width">
            <div id="tabs-outer" className="cf">
              <div className="tabs">
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className={!isMobile && activeTab === index ? 'active' : ''}>
                      <a
                        href="javascript:;"
                        className="item"
                        onClick={() => handleTabClick(index)}
                      >
                        {service.title}
                        {isMobile && <span className="plus"></span>}
                      </a>

                      {isMobile && (
                        <div
                          className="mob-content"
                          style={{
                            display: openMobileTab === index ? 'block' : 'none'
                          }}
                        >
                          <img src={service.image} alt="" />
                          <div className="details">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            {service.extraContent}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {!isMobile && (
                <div className="tab-content">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`content-inner ${activeTab === index ? 'active' : ''}`}
                      style={{ display: activeTab === index ? 'block' : 'none' }}
                    >
                      <img src={service.image} alt="" />
                      <div className="details">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        {service.extraContent}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
