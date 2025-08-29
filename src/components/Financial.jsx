import { useState } from 'react'

const Financial = () => {
  const [openAccordions, setOpenAccordions] = useState({})

  const toggleAccordion = (accordionId) => {
    setOpenAccordions(prev => ({
      ...prev,
      [accordionId]: !prev[accordionId]
    }))
  }

  const downloadData = {
    annualReturns: [
      {
        date: "28 Nov, 2023",
        title: "Annual Return for 2022-23",
        size: "275.93 KB",
        link: "/documents/annual-return-2022-23.pdf"
      },
      {
        date: "24 Aug, 2022",
        title: "MGT-7 2021-22",
        size: "738.57 KB",
        link: "/documents/mgt-7-2021-22.pdf"
      },
      {
        date: "22 Oct, 2021",
        title: "Annual Return for 2020-21",
        size: "277.98 KB",
        link: "/documents/annual-return-2020-21.pdf"
      },
      {
        date: "10 Nov, 2020",
        title: "Annual Return for 2019-20",
        size: "276.59 KB",
        link: "/documents/annual-return-2019-20.pdf"
      },
      {
        date: "20 Nov, 2019",
        title: "Annual Return for 2018-19",
        size: "277.74 KB",
        link: "/documents/annual-return-2018-19.pdf"
      }
    ],
    quarterlyReports: {
      shareholding: [
        {
          date: "30 Sep, 2018",
          title: "Share holding pattern for quarter ending 30th September 2018",
          size: "442 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 30th September 2018.pdf"
        },
        {
          date: "30 Jun, 2018",
          title: "Share holding pattern for quarter ending 30th June 2018",
          size: "442 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 30th June 2018.pdf"
        },
        {
          date: "31 Mar, 2018",
          title: "Share holding pattern for quarter ending 31st March 2018",
          size: "440 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 31st March 2018.pdf"
        },
        {
          date: "31 Dec, 2017",
          title: "Share holding pattern for quarter ending 31st December 2017",
          size: "436 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 31st December 2017.pdf"
        },
        {
          date: "30 Sep, 2017",
          title: "Share holding pattern for quarter ending 30th September 2017",
          size: "436 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 3oth September 2017.pdf"
        },
        {
          date: "30 Jun, 2017",
          title: "Share holding pattern for quarter ending 30th June 2017",
          size: "438 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 30th June 2017.pdf"
        },
        {
          date: "31 Mar, 2017",
          title: "Share holding pattern for quarter ending 31st March 2017",
          size: "438 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 31st March 2017.pdf"
        },
        {
          date: "31 Dec, 2016",
          title: "Share holding pattern for quarter ending 31st December 2016",
          size: "438 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 31st December 2016.pdf"
        },
        {
          date: "30 Sep, 2016",
          title: "Share holding pattern for quarter ending 30th September 2016",
          size: "483 KB",
          link: "/documents/ShareHoldingPattern/Share holding pattern for quarter ending 30th Sep 2016.pdf"
        },
        {
          date: "30 Jun, 2016",
          title: "Share holding pattern for quarter ending 30th June 2016",
          size: "189 KB",
          link: "/documents/ShareHoldingPattern/Shareholding Pattern for the Quarter ended on 30th June 2016.pdf"
        },
        {
          date: "31 Mar, 2016",
          title: "Shareholding Pattern for the Quarter ended on 31st March 2016",
          size: "183 KB",
          link: "/documents/ShareHoldingPattern/Shareholding Pattern for the Quarter ended on 31st Mar 2016.pdf"
        },
        {
          date: "31 Dec, 2015",
          title: "Shareholding Pattern for the Quarter ended on 31st December 2015",
          size: "144 KB",
          link: "/documents/ShareHoldingPattern/Shareholding Pattern for the Quarter ended on 31st Dec 2015.pdf"
        },
        {
          date: "30 Sep, 2015",
          title: "Shareholding Pattern for the Quarter ended on 30th September 2015",
          size: "212 KB",
          link: "/documents/ShareHoldingPattern/Shareholding Pattern for the Quarter ended on 30th Sept 2015.pdf"
        },
        {
          date: "30 Jun, 2015",
          title: "Shareholding Pattern for the Quarter ended on 30th June 2015",
          size: "207 KB",
          link: "/documents/ShareHoldingPattern/Shareholding Pattern for the Quarter ended on 30th June 2015.pdf"
        }
      ],
      financial: [
        {
          date: "12 Feb, 2022",
          title: "Unaudited Financial results for Q3 of 2021-22",
          size: "267.54 KB",
          link: "/documents/unaudited-financial-results-q3-2021-22.pdf"
        },
        {
          date: "13 Nov, 2021",
          title: "Unaudited Financial results for Q2 of 2021-22",
          size: "285.23 KB",
          link: "/documents/unaudited-financial-results-q2-2021-22.pdf"
        },
        {
          date: "14 Aug, 2021",
          title: "Unaudited Financial results for Q1 of 2021-22",
          size: "203.23 KB",
          link: "/documents/unaudited-financial-results-q1-2021-22.pdf"
        }
      ]
    },
    annualResults: {
      audited: [
        {
          date: "30 May, 2019",
          title: "Audited Financial Results for year ending 2018-19",
          size: "1.98 MB",
          link: "/downloads/Audited Financial Results for year ending 2018-19.zip"
        },
        {
          date: "31 Mar, 2018",
          title: "Audited Financial Results for year ending 2017-18",
          size: "81 KB",
          link: "/documents/AuditedFinancialResults/Audited Financial Results for year ending 2017-18.pdf"
        },
        {
          date: "31 Mar, 2017",
          title: "Audited Financial Results for year ending 2016-17",
          size: "81 KB",
          link: "/documents/AuditedFinancialResults/Audited Financial Results for year ending 2016-17.pdf"
        },
        {
          date: "31 Mar, 2016",
          title: "Audited Financial Results for the year ending 2015-16",
          size: "252 KB",
          link: "/documents/AuditedFinancialResults/Audited Financial Results for the year ending 2015-16.pdf"
        },
        {
          date: "31 Mar, 2015",
          title: "Audited Financial Results for year ending 2014-15",
          size: "298 KB",
          link: "/documents/AuditedFinancialResults/Audited Financial Results for year ending 2014-15.pdf"
        }
      ],
      reports: [
        {
          date: "06 Sep, 2024",
          title: "Annual Report for 2023-24",
          size: "1.19 MB",
          link: "/documents/annual-report-2023-24.pdf"
        },
        {
          date: "05 Sep, 2023",
          title: "Annual Report for 2022-23",
          size: "1.78 MB",
          link: "/documents/annual-report-2022-23.pdf"
        },
        {
          date: "24 Aug, 2022",
          title: "Annual Report for 2021-22",
          size: "764.14 KB",
          link: "/documents/annual-report-2021-22.pdf"
        }
      ]
    },
    announcements: {
      2024: [
        {
          date: "06 Jan, 2024",
          title: "Notice of EGM_ Munoth Capital",
          size: "1.19 MB",
          link: "/documents/notice-egm-munoth-capital.pdf"
        },
        {
          date: "06 Jan, 2024",
          title: "Valuation Report",
          size: "1.67 MB",
          link: "/documents/valuation-report.pdf"
        }
      ]
    },
    policies: [
      {
        date: "13 Mar, 2023",
        title: "Archiving of Documents",
        size: "206.60 KB",
        link: "/documents/archiving-documents.pdf"
      },
      {
        date: "13 Mar, 2023",
        title: "Risk Management Policy",
        size: "345.55 KB",
        link: "/documents/risk-management-policy.pdf"
      },
      {
        date: "13 Mar, 2023",
        title: "Nomination and Remuneration Policy",
        size: "318.33 KB",
        link: "/documents/nomination-remuneration-policy.pdf"
      }
    ]
  }

  const DownloadItem = ({ item }) => (
    <a href={item.link} className="info-outer cf" target="_blank" rel="noopener noreferrer">
      <span className="info">
        <span className="date">{item.date}</span>
        <span className="desc">{item.title}</span>
        <span className="size">Download <em>({item.size})</em></span>
      </span>
      <span className="download-icon">
        <img src="/images/pdf-icon.jpg" alt="PDF" />
      </span>
    </a>
  )

  return (
    <section id="financial">
      <div className="width">
        <div className="main-title">
          <img src="/images/title-icon05.png" alt="" />
          <span>Financial</span>
        </div>

        <div id="download-block" className="cf">
          {/* Annual Returns */}
          <div className="block-inner">
            <h2>Annual Return</h2>
            {downloadData.annualReturns.map((item, index) => (
              <div key={index} className="block-sub">
                <DownloadItem item={item} />
              </div>
            ))}
          </div>

          {/* Quarterly Reports */}
          <div className="block-inner">
            <h2>Quarterly Reports</h2>
            
            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['shareholding'] ? 'active' : ''}`}
                id="accord11"
                onClick={() => toggleAccordion('shareholding')}
              >
                Shareholding Pattern<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['shareholding'] ? 'block' : 'none' }}
              >
                {downloadData.quarterlyReports.shareholding.map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['financial'] ? 'active' : ''}`}
                id="accord12"
                onClick={() => toggleAccordion('financial')}
              >
                Financial Results<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['financial'] ? 'block' : 'none' }}
              >
                {downloadData.quarterlyReports.financial.map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Annual Results */}
          <div className="block-inner">
            <h2>Annual Results</h2>
            
            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['audited'] ? 'active' : ''}`}
                id="accord21"
                onClick={() => toggleAccordion('audited')}
              >
                Audited Financial Results<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['audited'] ? 'block' : 'none' }}
              >
                {downloadData.annualResults.audited.map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['reports'] ? 'active' : ''}`}
                id="accord22"
                onClick={() => toggleAccordion('reports')}
              >
                Annual Reports<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['reports'] ? 'block' : 'none' }}
              >
                {downloadData.annualResults.reports.map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="block-inner">
            <h2>Announcements</h2>
            
            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['announcements2024'] ? 'active' : ''}`}
                id="accord31"
                onClick={() => toggleAccordion('announcements2024')}
              >
                2024<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['announcements2024'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2024].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Documents and Others */}
          <div className="block-inner">
            <h2>Documents and Others</h2>
            
            <div className="accordion-outer">
              <div 
                className={`accordion ${openAccordions['policies'] ? 'active' : ''}`}
                id="accord41"
                onClick={() => toggleAccordion('policies')}
              >
                Policies<span></span>
              </div>
              <div 
                className="container"
                style={{ display: openAccordions['policies'] ? 'block' : 'none' }}
              >
                {downloadData.policies.map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Financial
