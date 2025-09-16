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
          date: "31 Dec, 2024",
          title: "Shareholding Pattern for quarter ending 31st December 2024",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP_Dec 2024.pdf"
        },
        {
          date: "30 Sep, 2024",
          title: "Shareholding Pattern for quarter ending 30th September 2024",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP_Sept 2024.pdf"
        },
        {
          date: "30 Jun, 2024",
          title: "Shareholding Pattern for quarter ending 30th June 2024",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__June 2024.pdf"
        },
        {
          date: "31 Mar, 2024",
          title: "Shareholding Pattern for quarter ending 31st March 2024",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__March 2024.pdf"
        },
        {
          date: "31 Dec, 2023",
          title: "Shareholding Pattern for quarter ending 31st December 2023",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__Dec 2023.pdf"
        },
        {
          date: "30 Sep, 2023",
          title: "Shareholding Pattern for quarter ending 30th September 2023",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__Sept 2023.pdf"
        },
        {
          date: "30 Jun, 2023",
          title: "Shareholding Pattern for quarter ending 30th June 2023",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__June 2023.pdf"
        },
        {
          date: "31 Mar, 2023",
          title: "Shareholding Pattern for quarter ending 31st March 2023",
          size: "N/A",
          link: "/documents/ShareHoldingPattern/SHP__March 2023.pdf"
        },
        {
          date: "31 Mar, 2018",
          title: "Share holding pattern for quarter ending 31st March 2018",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 31st March 2018.pdf"
        },
        {
          date: "30 Sep, 2018",
          title: "Share holding pattern for quarter ending 30th September 2018",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 30th September 2018.pdf"
        },
        {
          date: "30 Jun, 2018",
          title: "Share holding pattern for quarter ending 30th June 2018",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 30th June 2018.pdf"
        },
        {
          date: "31 Mar, 2017",
          title: "Share holding pattern for quarter ending 31st March 2017",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 31st March 2017.pdf"
        },
        {
          date: "30 Sep, 2017",
          title: "Share holding pattern for quarter ending 3oth September 2017",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 3oth September 2017.pdf"
        },
        {
          date: "30 Jun, 2017",
          title: "Share holding pattern for quarter ending 30th June 2017",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 30th June 2017.pdf"
        },
        {
          date: "31 Dec, 2017",
          title: "Share holding pattern for quarter ending 31st December 2017",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 31st December 2017.pdf"
        },
        {
          date: "31 Dec, 2016",
          title: "Share holding pattern for quarter ending 31st December 2016",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Share holding pattern for quarter ending 31st December 2016.pdf"
        },
        {
          date: "31 Mar, 2016",
          title: "Shareholding Pattern for the Quarter ended on 31st Mar 2016",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 31st Mar 2016.pdf"
        },
        {
          date: "30 Sep, 2016",
          title: "Shareholding Pattern for the Quarter ended on 30th Sep 2016",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 30th Sep 2016.pdf"
        },
        {
          date: "30 Jun, 2016",
          title: "Shareholding Pattern for the Quarter ended on 30th June 2016",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 30th June 2016.pdf"
        },
        {
          date: "31 Dec, 2015",
          title: "Shareholding Pattern for the Quarter ended on 31st Dec 2015",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 31st Dec 2015.pdf"
        },
        {
          date: "30 Sep, 2015",
          title: "Shareholding Pattern for the Quarter ended on 30th Sept 2015",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 30th Sept 2015.pdf"
        },
        {
          date: "30 Jun, 2015",
          title: "Shareholding Pattern for the Quarter ended on 30th June 2015",
          size: "N/A",
          link: "/documents/QuarterlyReports/Shareholding Pattern/Shareholding Pattern for the Quarter ended on 30th June 2015.pdf"
        }
      ],
      financial: [
        {
          date: "2025-26",
          title: "Financial Results for quarter ended 30th June 2025",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Results_30.06.2025.pdf"
        },
        {
          date: "2024-25",
          title: "Financial Results for quarter ended 31st March 2025",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.03.2025.pdf"
        },
        {
          date: "2024-25",
          title: "Financial Results for quarter ended 31st December 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.12.2024.pdf"
        },
        {
          date: "2024-25",
          title: "Financial Results for quarter ended 30th September 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_30.09.2024.pdf"
        },
        {
          date: "2024-25",
          title: "Financial Results for quarter ended 30th June 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_30.06.2024.pdf"
        },
        {
          date: "2023-24",
          title: "Financial Results for quarter ended 31st March 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.03.2024.pdf"
        },
        {
          date: "2023-24",
          title: "Financial Results for quarter ended 31st December 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.12.2023.pdf"
        },
        {
          date: "2023-24",
          title: "Financial Results for quarter ended 30th September 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_30.09.2023.pdf"
        },
        {
          date: "2023-24",
          title: "Financial Results for quarter ended 30th June 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_30.06.2023.pdf"
        },
        {
          date: "2022-23",
          title: "Financial Results for quarter ended 31st March 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.03.2023.pdf"
        },
        {
          date: "2022-23",
          title: "Financial Results for quarter ended 31st December 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.12.2022.pdf"
        },
        {
          date: "2022-23",
          title: "Financial Results for quarter ended 30th September 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_30.09.2022.pdf"
        },
        {
          date: "2022-23",
          title: "Financial Results for quarter ended 30th June 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result _30.06.2022.pdf"
        },
        {
          date: "2021-22",
          title: "Financial Results for quarter ended 31st March 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Financial Result_31.03.2022.pdf"
        },
        {
          date: "2021-22",
          title: "Unaudited Financial results for Q3 of 2021-22",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2021-22.pdf"
        },
        {
          date: "2021-22",
          title: "Unaudited Financial results for Q2 of 2021-22",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2021-22.pdf"
        },
        {
          date: "2021-22",
          title: "Unaudited Financial results for Q1 of 2021-22",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2021-22.pdf"
        },
        {
          date: "2020-21",
          title: "Audited Financial results for Q4 of 2020-21",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Audited Financial results for Q4 of 2020-21.pdf"
        },
        {
          date: "2020-21",
          title: "Unaudited Financial results for Q3 of 2020-21",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2020-21.PDF"
        },
        {
          date: "2020-21",
          title: "Unaudited Financial results for Q2 of 2020-21",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2020-21 .PDF"
        },
        {
          date: "2020-21",
          title: "Unaudited Financial results for Q1 of 2020-21",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2020-21 .pdf"
        },
        {
          date: "2019-20",
          title: "Unaudited Financial Results for Q3 of 2019-20",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial Results for Q3 of 2019-20.pdf"
        },
        {
          date: "2019-20",
          title: "Unaudited Financial Results for Q2 of 2019-20",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial Results for Q2 of 2019-20.pdf"
        },
        {
          date: "2019-20",
          title: "Unaudited Financial results for Q1 of 2019-20",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2019-20.pdf"
        },
        {
          date: "2018-19",
          title: "Unaudited Financial results for Q3 of 2018-19",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2018-19.pdf"
        },
        {
          date: "2018-19",
          title: "Unaudited Financial results for Q2 of 2018-19",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2018-19.pdf"
        },
        {
          date: "2018-19",
          title: "Unaudited Financial results for Q1 of 2018-19",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2018-19.pdf"
        },
        {
          date: "2017-18",
          title: "Unaudited Financial results for Q3 of 2017-18",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2017-18.pdf"
        },
        {
          date: "2017-18",
          title: "Unaudited Financial results for Q2 of 2017-18",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2017-18.pdf"
        },
        {
          date: "2016-17",
          title: "Unaudited Financial results for Q2 of 2016-17",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited financial results for Q2 of 2016-17.pdf"
        },
        {
          date: "2016-17",
          title: "Unaudited financial results for Q1 of 2016-17",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited financial results for Q1 of 2016-17.pdf"
        },
        {
          date: "2015-16",
          title: "Unaudited Financial Result for Q3 of 2015-16",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q3 of 2015-16.pdf"
        },
        {
          date: "2015-16",
          title: "Unaudited Financial Result for Q2 of 2015-16",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q2 of 2015-16.pdf"
        },
        {
          date: "2015-16",
          title: "Unaudited Financial Result for Q1 of 2015-16",
          size: "N/A",
          link: "/documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q1 of 2015-16.pdf"
        }
      ],
      newspaperAdvertisements: [
        {
          date: "30 Jun, 2025",
          title: "Newspaper Advertisement - June 2025",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_June 2025.pdf"
        },
        {
          date: "Notice 2024-25",
          title: "Newspaper Advertisement - Notice 2024-25 AGM",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Notice 2024-25 AGM.pdf"
        },
        {
          date: "31 Dec, 2024",
          title: "Newspaper Advertisement - Dec 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Dec 2024.pdf"
        },
        {
          date: "30 Sep, 2024",
          title: "Newspaper Advertisement - Sept 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_sept 2024.pdf"
        },
        {
          date: "31 Mar, 2024",
          title: "Newspaper Advertisement - March 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_March 2024.pdf"
        },
        {
          date: "30 Jun, 2024",
          title: "Newspaper Advertisement - June 2024",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_June 2024.pdf"
        },
        {
          date: "31 Dec, 2023",
          title: "Newspaper Advertisement - Dec 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Dec 2023.pdf"
        },
        {
          date: "30 Sep, 2023",
          title: "Newspaper Advertisement - Sept 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_sept 2023.pdf"
        },
        {
          date: "31 Mar, 2023",
          title: "Newspaper Advertisement - March 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_March 2023.pdf"
        },
        {
          date: "30 Jun, 2023",
          title: "Newspaper Advertisement - June 2023",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_June 2023.pdf"
        },
        {
          date: "Notice 2023-24",
          title: "Newspaper Advertisement - Notice 2023-24 AGM",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Notice 2023-24 AGM.pdf"
        },
        {
          date: "31 Dec, 2022",
          title: "Newspaper Advertisement - Dec 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Dec 2022.pdf"
        },
        {
          date: "30 Sep, 2022",
          title: "Newspaper Advertisement - Sept 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_sept 2022.pdf"
        },
        {
          date: "30 Jun, 2022",
          title: "Newspaper Advertisement - June 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_June 2022.pdf"
        },
        {
          date: "31 Mar, 2022",
          title: "Newspaper Advertisement - March 2022",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_March 2022.pdf"
        },
        {
          date: "Notice 2022-23",
          title: "Newspaper Advertisement - Notice 2022-23 AGM",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Notice 2022-23 AGM.pdf"
        },
        {
          date: "31 Mar, 2021",
          title: "Newspaper Advertisement - March 2021",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_March 2021.pdf"
        },
        {
          date: "Notice 2021-22",
          title: "Newspaper Advertisement - Notice 2021-22 AGM",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Notice 2021-22 AGM.pdf"
        },
        {
          date: "N/A",
          title: "Newspaper Advertisement - Physical Transfer",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Physical Transfer.pdf"
        },
        {
          date: "N/A",
          title: "Newspaper Advertisement - EGM",
          size: "N/A",
          link: "/documents/QuarterlyReports/NewsPaperAdvitisement/Newspaper Advertisement_Notice EGM.pdf"
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
          date: "2024",
          title: "Notice of EGM_ Munoth Capital",
          size: "1.19 MB",
          link: "/documents/Announcement/2024/Notice of EGM_ Munoth Capital .pdf"
        },
        {
          date: "2024",
          title: "Valuation Report",
          size: "1.67 MB",
          link: "/documents/Announcement/2024/Valuation Report.pdf"
        }
      ],
      2020: [
        {
          date: "2020",
          title: "Notice for AGM",
          size: "N/A",
          link: "/documents/Announcement/2020/Notice for AGM.pdf"
        }
      ],
      2019: [
        {
          date: "2019",
          title: "Public Notice_Physical Share transfer_English News paper",
          size: "N/A",
          link: "/documents/Announcement/2019/Public Notice_Physical Share transfer_English News paper.pdf"
        },
        {
          date: "2019",
          title: "Public Notice_Physical Share transfer_News paper",
          size: "N/A",
          link: "/documents/Announcement/2019/Public Notice_Physical Share transfer_News paper.pdf"
        }
      ],
      2018: [
        {
          date: "2018",
          title: "Board meeting intimation to consider audited results for year ending March 2018",
          size: "N/A",
          link: "/documents/Announcement/2018/Board meeting intimation to consider audited results for year ending March 2018.pdf"
        },
        {
          date: "2018",
          title: "Board meeting intimation to consider results of Q1 ending June 2018",
          size: "N/A",
          link: "/documents/Announcement/2018/Board meeting intimation to consider results of Q1 ending June 2018.pdf"
        },
        {
          date: "2018",
          title: "Board meeting intimation to consider results of Q2 ending September 2018",
          size: "N/A",
          link: "/documents/Announcement/2018/Board meeting intimation to consider results of Q2 ending September 2018.pdf"
        },
        {
          date: "2018",
          title: "Board meeting intimation to consider results of Q3 ending December 2017",
          size: "N/A",
          link: "/documents/Announcement/2018/Board meeting intimation to consider results of Q3 ending December 2017.pdf"
        },
        {
          date: "2018",
          title: "Outcome of AGM",
          size: "N/A",
          link: "/documents/Announcement/2018/Outcome of AGM.pdf"
        }
      ],
      2017: [
        {
          date: "2017",
          title: "Board meeting intimation to consider results of Q2 ending September 2017",
          size: "N/A",
          link: "/documents/Announcement/2017/Board meeting intimation to consider results of Q2 ending September 2017.pdf"
        },
        {
          date: "2017",
          title: "Intimation of EGM",
          size: "N/A",
          link: "/documents/Announcement/2017/Intimation of EGM.pdf"
        },
        {
          date: "2017",
          title: "Notice of AGM",
          size: "N/A",
          link: "/documents/Announcement/2017/Notice of AGM.pdf"
        },
        {
          date: "2017",
          title: "Outcome of AGM",
          size: "N/A",
          link: "/documents/Announcement/2017/Outcome of AGM.pdf"
        },
        {
          date: "2017",
          title: "Summary of the AGM",
          size: "N/A",
          link: "/documents/Announcement/2017/Summary of the AGM.PDF"
        }
      ],
      2016: [
        {
          date: "2016",
          title: "Board Meeting to consider audited Financial results for Q4 ending 31st March 2016",
          size: "N/A",
          link: "/documents/Announcement/2016/Board Meeting to consider audited Financial results for Q4 ending 31st March 2016 .pdf"
        },
        {
          date: "2016",
          title: "Board Meeting to consider unaudited Financial results for Q1 ending 30th June 2016",
          size: "N/A",
          link: "/documents/Announcement/2016/Board Meeting to consider unaudited Financial results for Q1 ending 30th June 2016.pdf .pdf"
        },
        {
          date: "2016",
          title: "Board Meeting to consider unaudited Financial results for Q2 ending 30th Sep 2016",
          size: "N/A",
          link: "/documents/Announcement/2016/Board Meeting to consider unaudited Financial results for Q2 ending 30th Sep 2016 .pdf"
        },
        {
          date: "2016",
          title: "Board meeting to consider unaudited financial results for Q3 ending 30th Dec 2015",
          size: "N/A",
          link: "/documents/Announcement/2016/Board meeting to consider unaudited financial results for Q3 ending 30th Dec 2015.docx .pdf"
        },
        {
          date: "2016",
          title: "Notice for Annual General Meeting",
          size: "N/A",
          link: "/documents/Announcement/2016/Notice for Annual General Meeting.pdf"
        },
        {
          date: "2016",
          title: "Proceedings of AGM",
          size: "N/A",
          link: "/documents/Announcement/2016/Proceedings of AGM.pdf"
        }
      ],
      2015: [
        {
          date: "2015",
          title: "Board meeting to consider unaudited financial results for Q1 ending 30th June 2015",
          size: "N/A",
          link: "/documents/Announcement/2015/Board meeting to consider unaudited financial results for Q1 ending 30th June 2015.pdf"
        },
        {
          date: "2015",
          title: "Board meeting to consider unaudited financial results for Q2 ending 30th Sep 2015",
          size: "N/A",
          link: "/documents/Announcement/2015/Board meeting to consider unaudited financial results for Q2 ending 30th Sep 2015.pdf"
        }
      ]
    },
    policies: [
      {
        date: "2025",
        title: "Dividend Distribution Policy (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/25. Dividend Distribution Policy_Act.docx"
      },
      {
        date: "2025",
        title: "Contact details for Investor Grievances (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/10. Contact details for Investor Grievances_Act.docx"
      },
      {
        date: "2025",
        title: "Related Party Policy (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/7. Related Party Policy_Act.doc"
      },
      {
        date: "2025",
        title: "Criteria for making payment to NEDs (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/6. Criteria for making payment to NEDs_ACT.docx"
      },
      {
        date: "2025",
        title: "Whistle Blower Policy (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/5. Whistle Blower Policy_ACT.docx"
      },
      {
        date: "2025",
        title: "Code of Conduct for Board of Directors and Senior Management (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/4. Code of Conduct for Board of Directors and Senior Management_Act.docx"
      },
      {
        date: "2025",
        title: "Composition of Committees (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/3. Composition of Committees_Act.docx"
      },
      {
        date: "2025",
        title: "Terms and Conditions of Appointment of Independent Directors (Act)",
        size: "N/A",
        link: "/documents/DocumentAndOthers/2. Terms and Conditions of Appointment of Independent Directors_Act.docx"
      },
      {
        date: "2024",
        title: "Vigil Mechanism Policy",
        size: "367 KB",
        link: "/documents/DocumentAndOthers/Vigil Mechanism Policy.pdf"
      },
      {
        date: "2024",
        title: "Related Party Policy",
        size: "658 KB",
        link: "/documents/DocumentAndOthers/Related Party Policy.pdf"
      },
      {
        date: "2024",
        title: "Policy on Remuneration",
        size: "351 KB",
        link: "/documents/DocumentAndOthers/Policy on Remuneration.pdf"
      },
      {
        date: "2024",
        title: "Policy on Familiarisation of Independent Directors",
        size: "311 KB",
        link: "/documents/DocumentAndOthers/Policy on Familiarisation of Independent Directors.pdf"
      },
      {
        date: "2024",
        title: "Nomination and Remuneration Policy",
        size: "318 KB",
        link: "/documents/DocumentAndOthers/Nomination and Remuneration Policy.pdf"
      },
      {
        date: "2024",
        title: "Materiality on Subsidiaries",
        size: "420 KB",
        link: "/documents/DocumentAndOthers/Materiality on Subsidiaries.pdf"
      },
      {
        date: "2024",
        title: "Investors Grievances",
        size: "408 KB",
        link: "/documents/DocumentAndOthers/Investors Grievances.pdf"
      },
      {
        date: "2024",
        title: "Dividend Distribution Policy",
        size: "320 KB",
        link: "/documents/DocumentAndOthers/Dividend Distribution Policy.pdf"
      },
      {
        date: "2024",
        title: "Director and Senior Personnel Appointment Policies",
        size: "320 KB",
        link: "/documents/DocumentAndOthers/Director and Senior Personnel Appointment Policies .pdf"
      },
      {
        date: "2024",
        title: "Code of Practices and Procedures for Fair Disclosure",
        size: "489 KB",
        link: "/documents/DocumentAndOthers/Code of Practices and Procedures for Fair Disclosure.pdf"
      },
      {
        date: "2024",
        title: "Code of Conduct for Board of Directors and Senior Management",
        size: "332 KB",
        link: "/documents/DocumentAndOthers/Code of Conduct for Board of Directors and Senior Management.pdf"
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

            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['newspaperAdvertisements'] ? 'active' : ''}`}
                id="accord13"
                onClick={() => toggleAccordion('newspaperAdvertisements')}
              >
                Newspaper Advertisement<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['newspaperAdvertisements'] ? 'block' : 'none' }}
              >
                {downloadData.quarterlyReports.newspaperAdvertisements.map((item, index) => (
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

            {/* 2024 Announcements */}
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

            {/* 2020 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2020'] ? 'active' : ''}`}
                id="accord32"
                onClick={() => toggleAccordion('announcements2020')}
              >
                2020<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2020'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2020].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 2019 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2019'] ? 'active' : ''}`}
                id="accord33"
                onClick={() => toggleAccordion('announcements2019')}
              >
                2019<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2019'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2019].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 2018 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2018'] ? 'active' : ''}`}
                id="accord34"
                onClick={() => toggleAccordion('announcements2018')}
              >
                2018<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2018'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2018].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 2017 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2017'] ? 'active' : ''}`}
                id="accord35"
                onClick={() => toggleAccordion('announcements2017')}
              >
                2017<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2017'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2017].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 2016 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2016'] ? 'active' : ''}`}
                id="accord36"
                onClick={() => toggleAccordion('announcements2016')}
              >
                2016<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2016'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2016].map((item, index) => (
                  <DownloadItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 2015 Announcements */}
            <div className="accordion-outer">
              <div
                className={`accordion ${openAccordions['announcements2015'] ? 'active' : ''}`}
                id="accord37"
                onClick={() => toggleAccordion('announcements2015')}
              >
                2015<span></span>
              </div>
              <div
                className="container"
                style={{ display: openAccordions['announcements2015'] ? 'block' : 'none' }}
              >
                {downloadData.announcements[2015].map((item, index) => (
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
