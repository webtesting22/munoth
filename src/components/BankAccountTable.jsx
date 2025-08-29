import React from 'react';
import './BankAccountTable.css';

const BankAccountTable = () => {
  const bankAccounts = [
    {
      id: 1,
      name: "Munoth Capital Market Ltd - USCNBA",
      accountNumber: "XXXXXXXXX11280",
      ifsc: "HDFC0000006",
    //   segment: "NSE FNO"
    },
    // {
    //   id: 2,
    //   name: "Airan Finstocks Private Limited - USCNBA",
    //   accountNumber: "XXXXXXXXX14115",
    //   ifsc: "HDFC0000006",
    // //   segment: "NSE CASH"
    // }
  ];

  return (
    <div className="bank-account-table-container">
      <div className="table-header">
        <h2>Bank Account Details</h2>
      </div>
      
      <div className="table-wrapper">
        <table className="bank-account-table">
          <thead>
            <tr>
              <th>NAME OF BANK ACCOUNT</th>
              <th>BANK ACCOUNT NUMBER</th>
              <th>IFSC</th>
              {/* <th>SEGMENT</th> */}
            </tr>
          </thead>
          <tbody>
            {bankAccounts.map((account) => (
              <tr key={account.id}>
                <td className="account-name">{account.name}</td>
                <td className="account-number">{account.accountNumber}</td>
                <td className="ifsc-code">{account.ifsc}</td>
                {/* <td className="segment">
                  <span className={`segment-badge ${account.segment.toLowerCase().replace(' ', '-')}`}>
                    {account.segment}
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankAccountTable;
