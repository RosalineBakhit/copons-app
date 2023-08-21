import { useState } from "react";

const Dashboard = () => {

  const [copySuccess, setCopySuccess] = useState('please click button To copy!')

  const coponText = 'COPON400';


  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(coponText);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }

  }

  return (
    <div>

    

      <div class="coupon">
        <div class="container">
          <h3> New Copon Hurry Up! </h3>
          <img src="https://logos-world.net/wp-content/uploads/2020/12/Carrefour-Logo-700x394.png" alt="React Image" />
        </div>
        <div class="container" styleName="background-color:white">
          <h2><b>20% OFF YOUR PURCHASE</b></h2>
          <p> expire on 31 Aug 2023 </p>
        </div>
        <div class="container">
          <p>Use Promo Code: <span class="promo"> {coponText} </span>
          <button  onClick={copyCode}>Copy Code</button>
          </p> 
          <p class="expire"> {copySuccess} </p>
        </div>
      </div>

    </div>)

}

export default Dashboard;