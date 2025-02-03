import React from "react";
import "./Content2.css";

export default function Content2() {
  return (
    <div className="card-container">
      {/* İlk Kart */}
      <div className="card">
        <div className="card-image">
          <img
            src="./analiz.jpeg" // Buraya resminizi koyabilirsiniz
            alt="Liquidity Lockup Plan"
          />
        </div>
        <div className="card-content">
          <h2>Liquidity Lockup Plan</h2>
          <p>
            The total SCAI supply is 1 billion, and we are allocating 8.5% (85 million SCAI) to locked liquidity. This amount will be gradually burned and added to liquidity over three months as follows:
            <p>Month 1: 42,500,000 SCAI</p>
            <p>Month 2: 31,875,000 SCAI</p>
            <p>Month 3: 10,625,000 SCAI</p>
          </p>
          <p>
            By following this structured coin burn plan, we are ensuring a balanced liquidity strategy by maintaining stability while supporting the ecosystem.
          </p>
        </div>
      </div>

      {/* İkinci Kart */}
      <div className="card">
        <div className="card-image">
          <img
            src="./analiz2.jpeg" // Buraya resminizi koyabilirsiniz
            alt="Liquidity Lockup Plan"
          />
        </div>
        <div className="card-content">
          <h2><b>SPACE AI</b></h2>
          <p>
            This is the distribution map right now. 5% of the total supply will be allocated to the team and will be used for the development of SPACE AI.    <br /><br />
          <p>Distribution - 5% of total supply - 50 000 000 SCAI</p>
          <p>For developers - 55% - 27 500 000 SCAI</p>
          <p>Data & API Services - 14% - 7 000 000 SCAI</p>
          <p>Cloud GPU - 12% - 6 000 000 SCAI</p>
          <p>Storage & Database - 4% - 2 000 000 SCAI</p>
          <p>AI & Trading Libraries - 7% - 3 500 000 SCAI</p>
          <p>Security & Protection - 8% - 4 000 000 SCAI</p>
              </p>
        
        </div>
      </div>
    </div>
  );
}
