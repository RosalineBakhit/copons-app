import { useState } from "react";

const Dashboard = () => {

  const [copySuccess, setCopySuccess] = useState('Copy Code')

  const coponText = 'ABANOUB_400';


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
          <p class="expire"> expire on 31 Aug 2023 </p>
        </div>
        <div class="container">
          <p>Use Promo Code: <span class="promo"> {coponText} </span>
          <button  onClick={copyCode}>{copySuccess}</button>
          </p> 
          <h3>
          <a href="https://www.carrefouregypt.com/mafegy/en/" target="_blank"> Open Carrefour Website </a>
          </h3>
        </div>
      </div>

    </div>)

}

export default Dashboard;