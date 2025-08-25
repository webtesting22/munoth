const Compliance = () => {
  const complianceData = {
    investorCharters: [
      {
        date: "01 Mar, 2025",
        title: "Investor Charter for Stock Brokers",
        size: "176.24 KB",
        link: "/documents/investor-charter-stock-brokers.pdf"
      },
      {
        date: "01 Jun, 2024",
        title: "Investor Charter for Depositories and Depository Participants",
        size: "207.13 KB",
        link: "/documents/investor-charter-depositories.pdf"
      }
    ],
    complaintsData: [
      {
        date: "04 Jul, 2025",
        title: "Investor Complaints Data",
        size: "34.92 KB",
        link: "/documents/investor-complaints-data.xlsx"
      }
    ],
    documents: [
      {
        date: "18 Jul, 2024",
        title: "DP Rights & Obligation",
        size: "99.88 KB",
        link: "/documents/dp-rights-obligation.pdf"
      },
      {
        date: "01 Aug, 2023",
        title: "Account Opening Step by Step Guide",
        size: "159.96 KB",
        link: "/documents/account-opening-guide.pdf"
      },
      {
        date: "01 Aug, 2023",
        title: "Annexure A - Details of Mandatory Display",
        size: "249.70 KB",
        link: "/documents/annexure-mandatory-display.pdf"
      },
      {
        date: "01 Aug, 2023",
        title: "Filing of Compliant Step by Step Guide",
        size: "101.86 KB",
        link: "/documents/filing-complaint-guide.pdf"
      },
      {
        date: "01 Apr, 2022",
        title: "Guidance Note - Do's and Don'ts for Trading on the Stock Exchange(s) for Investors",
        size: "107.51 KB",
        link: "/documents/guidance-note-trading.pdf"
      },
      {
        date: "01 Apr, 2022",
        title: "Rights and Obligations of Stock Brokers, Sub-Brokers and Clients",
        size: "164.80 KB",
        link: "/documents/rights-obligations-brokers.pdf"
      },
      {
        date: "01 Apr, 2022",
        title: "Risk Disclosure Document for Capital Market and Derivatives Segments",
        size: "105.61 KB",
        link: "/documents/risk-disclosure-derivatives.pdf"
      }
    ]
  }

  const DownloadItem = ({ item, isExcel = false }) => (
    <a href={item.link} className="info-outer cf" target="_blank" rel="noopener noreferrer">
      <span className="info">
        <span className="date">{item.date}</span>
        <span className="desc">{item.title}</span>
        <span className="size">Download <em>({item.size})</em></span>
      </span>
      <span className="download-icon">
        <img src="/images/pdf-icon.jpg" alt={isExcel ? "Excel" : "PDF"} />
      </span>
    </a>
  )

  return (
    <section id="charters">
      <div className="width">
        <div className="main-title">
          <img src="/images/title-icon05.png" alt="" />
          <span>Compliance</span>
        </div>

        <div id="download-block" className="cf">
          {/* Investor Charters */}
          <div className="block-inner">
            <h2>Investor Charters</h2>
            {complianceData.investorCharters.map((item, index) => (
              <div key={index} className="block-sub">
                <DownloadItem item={item} />
              </div>
            ))}
          </div>

          {/* Investor Complaints Data */}
          <div className="block-inner">
            <h2>Investor Complaints Data</h2>
            {complianceData.complaintsData.map((item, index) => (
              <div key={index} className="block-sub">
                <DownloadItem item={item} isExcel={true} />
              </div>
            ))}
          </div>

          {/* Documents */}
          <div className="block-inner">
            <h2>Documents</h2>
            {complianceData.documents.map((item, index) => (
              <div key={index} className="block-sub">
                <DownloadItem item={item} />
              </div>
            ))}
            <div className="block-sub" style={{ paddingTop: 0 }}>
              <p>
                To Download Client Registration Documents (Rights & Obligations, Risk Disclosure Document, Do's & Don'ts) in Vernacular Language, {' '}
                <a 
                  href="https://www.nseindia.com/trade/members-client-registration-documents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
