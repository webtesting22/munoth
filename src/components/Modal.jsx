import BankAccountTable from './BankAccountTable';

const Modal = ({ type, onClose }) => {
  const derivativesContent = {
    title: "Risk Disclosures on Derivatives",
    content: [
      "9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.",
      "On an average, loss makers registered net trading loss close to ₹ 50,000.",
      "Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.",
      "Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost."
    ],
    footer: (
      <div>
        <span><em>Source:</em></span><br />
        <a
          href="https://www.sebi.gov.in/reports-and-statistics/research/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>SEBI study dated January 25, 2023 on "Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment", wherein Aggregate Level findings are based on annual Profit/Loss incurred by individual traders in equity F&O during FY 2021-22.</em>
        </a>
      </div>
    )
  }

  const attentionContent = {
    title: "Attention! Fraudulent Activity Notice",
    titleColor: "#ff0000",
    content: [
      "Certain unknown miscreants have formed a WhatsApp group misusing our name and infringing on our logo thereby inducing people to invest in stocks, falsely assuring them high profits and then duping them of their money.",
      "We have lodged a Complaint at the Sarkhej Police Station, Ahmedabad (Dated 22-July-2025) in relation to the aforesaid acts and also informed regulatory authorities about the same. We have also requested them to take the strictest possible action against the perpetrators.",
      "Munoth Capital Market Limited is a regulated entity. Neither we, nor any of our partners, directors or employees have created or subscribed to any such fake websites or groups on any third-party apps like WhatsApp, Telegram etc. that deal in stock market information or tips, nor do we endorse any such dubious activities that encourage people to part with their hard-earned money by assuring high returns.",
      <>
        We recommend that you only trust communication from authorised platforms - {' '}
        <a href="http://www.munoth.com/" target="_blank" rel="noopener noreferrer">Official website</a>, {' '}
        <a href="https://www.linkedin.com/company/munoth/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, {' '}
        <a href="https://x.com/MunothCapital" target="_blank" rel="noopener noreferrer">X</a>, {' '}
        <a href="https://www.instagram.com/munoth.capital/" target="_blank" rel="noopener noreferrer">Instagram</a>.
        We also urge clients to only trust communication with/from your respective Point-Of-Contact in this regard. Anyone dealing with unauthorised entities or disbursing money or acting on such tips without proper verification shall be doing so at their own risk and Munoth Capital Market Ltd shall neither be responsible in any manner, nor can it assist the victims in recovering their lost money. We strongly urge you to be vigilant and conduct thorough due diligence before acting on stock tips shared on such fraudulent groups impersonating Munoth Capital Market Ltd.
        <p style={{ color: "black" }}><b>We do not authorize any individual to collect money on behalf of our company through personal accounts, nor do we promise guaranteed returns.:</b></p>
        <p style={{ color: "black" }}><b>"Please note that we accept funds only in the bank accounts mentioned below. Additionally, we accept payments exclusively from our registered clients and only from their registered bank accounts."</b></p>
        <div className="CreateTableUpdate">
          <BankAccountTable />
        </div>
        <p style={{ marginBottom: "0px", color: "black" }}><b>For any clarification or official communication, email us at <a href="mailto:info@munoth.com">info@munoth.com</a> or contact us on our official number <a href="tel:9033003188">9033003188</a></b></p>
      </>
    ]
  }

  const currentContent = type === 'derivatives' ? derivativesContent : attentionContent
  const modalZIndex = type === 'derivatives' ? 1055 : 1060  // Attention modal should be on top

  return (
    <>
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 
                className={type === 'attention' ? 'blinking-title' : ''}
                style={{ 
                  margin: 0, 
                  color: currentContent.titleColor || 'inherit', 
                  fontSize: "30px" 
                }}
              >
                {currentContent.title}
              </h4>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <ul>
                {currentContent.content.map((item, index) => (
                  <li key={index}>
                    {typeof item === 'string' ? item : item}
                  </li>
                ))}
              </ul>
            </div>
            {currentContent.footer && (
              <div className="modal-footer">
                {currentContent.footer}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        style={{
          zIndex: modalZIndex - 1,
          opacity: type === 'derivatives' ? 0.3 : 0.5  // Lighter backdrop for lower modal
        }}
        onClick={onClose}
      ></div>

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          display: none;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          outline: 0;
          z-index: ${modalZIndex};
        }
        .modal.show {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .modal-dialog {
          position: relative;
          width: auto;
          margin: 0.5rem;
          pointer-events: none;
          max-width: 900px;
        }
        .modal-content {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          pointer-events: auto;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0,0,0,.2);
          border-radius: 0.3rem;
          outline: 0;
          margin: 50px auto;
          max-width: 800px;
          padding: 20px;
        }
        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1rem 1rem;
          border-bottom: 1px solid #dee2e6;
          border-top-left-radius: calc(0.3rem - 1px);
          border-top-right-radius: calc(0.3rem - 1px);
        }
        .modal-body {
          position: relative;
          flex: 1 1 auto;
          padding: 1rem;
        }
        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0.75rem;
          border-top: 1px solid #dee2e6;
          border-bottom-right-radius: calc(0.3rem - 1px);
          border-bottom-left-radius: calc(0.3rem - 1px);
        }
        .btn-close {
          box-sizing: content-box;
          width: 1.5em;
          height: 1.5em;
          padding: 0.25em 0.25em;
          color: #000;
          background: transparent;
          border: 0;
          border-radius: 0.25rem;
          opacity: 0.5;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: opacity 0.2s ease;
        }
        .btn-close:hover {
          opacity: 0.75;
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000;
          opacity: 0.5;
          cursor: pointer;
        }
        .modal-backdrop.show {
          opacity: 0.5;
        }
        
        /* Blinking animation: show for 2s, blink for 0.5s */
        .blinking-title {
          animation: showAndBlink 1.5s infinite;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.21);
        }
        
        @keyframes showAndBlink {
          0%, 80% {
            opacity: 1;
            transform: scale(1);
            text-shadow: 0 0 15px rgba(255, 0, 0, 0.62);
          }
          81%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
            text-shadow: 0 0 5px rgba(255, 0, 0, 0.55);
          }
        }
        
        @media (max-width: 780px) {
          .modal-content {
            margin-top: 0px !important;
          }
          
          /* First modal (derivatives) - margin-top: 700px */
          .modal.show:first-of-type .modal-content {
            margin-top: 700px !important;
          }
          
          /* Second modal (attention) - margin-top: 0px */
          .modal.show:nth-of-type(2) .modal-content {
            margin-top: 0px !important;
          }
        }
      `}</style>
    </>
  )
}

export default Modal
