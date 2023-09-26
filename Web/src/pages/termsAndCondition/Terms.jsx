import React from 'react'
import './Term.css'
import { useNavigate } from 'react-router-dom'
function Terms() {
  const handleBackClick = () => {
    window.history.back();
  };
    const navigate=useNavigate()
  return (
    <div style={{background:" #001C3E", color:"#fff", padding:"3rem"}} className='terms'>
      <h3 className='text-center'>CosmoTrade.live - Terms and Conditions</h3>

<h4>1. Acceptance of Terms</h4>

<p>1.1 By accessing or using CosmoTrade.live (the "Website"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please refrain from using the Website.</p>

<p>1.2 CosmoTrade.live reserves the right to modify or update these Terms at any time. Continued use of the Website after any changes constitutes your acceptance of the revised Terms.</p>

<h4>2. Eligibility</h4>

<p>2.1 Users must be of legal gambling age in their jurisdiction to participate in any betting activities on CosmoTrade.live.</p>


<p>2.2 Users are solely responsible for ensuring their eligibility and compliance with local laws regarding online betting.</p>

<h4>3. Account Registration</h4>

<p>3.1 Users must create an account to participate in betting activities on CosmoTrade.live.</p>

<p>3.2 Users are responsible for providing accurate and up-to-date information during registration and maintaining the confidentiality of their account credentials.</p>

<h4>4. Betting Rules</h4>

<p>4.1 Users agree to abide by all rules, terms, and conditions associated with each betting activity offered on the Website.</p>
<p>4.2 CosmoTrade.live reserves the right to void any bets or disqualify users who violate these rules.</p>



<h4>5. Payments and Withdrawals</h4>

<p>5.1 Users must deposit funds into their account to place bets.</p>
<p>5.2 CosmoTrade.live offers various payment methods, and users are responsible for any associated fees.</p>
<p>5.3 Withdrawal requests are subject to processing times and may require identity verification.</p>

<h4>6. Responsible Gaming</h4>
<p>6.1 CosmoTrade.live is committed to promoting responsible gaming. Users can set limits or self-exclude from betting activities if needed.</p>
<p>6.2 Users are encouraged to seek help from organizations dedicated to assisting individuals with gambling-related problems.</p>


<h4>7. Privacy and Data Security</h4>

<p>7.1 CosmoTrade.live collects and uses personal information in accordance with its Privacy Policy.</p>
<p>
7.2 Users are responsible for keeping their account information secure and reporting any unauthorized access.</p>

<h4>8. Intellectual Property</h4>
<p>8.1 All content and intellectual property on the Website are the property of CosmoTrade.live and may not be used without permission.</p>
<h4>9. Termination of Account</h4>
<p>9.1 CosmoTrade.live reserves the right to suspend or terminate user accounts for violation of these Terms or any other reason at its discretion.</p>
<h4>10. Disclaimers and Limitation of Liability</h4>
<p>10.1 CosmoTrade.live does not guarantee the accuracy, completeness, or availability of the Website or its services.</p>

<p>10.2 Users engage in betting activities at their own risk, and CosmoTrade.live shall not be liable for any losses incurred.</p>

<button className='terms-back-btn' onClick={handleBackClick}>Back</button>
    </div>
)
}

export default Terms
