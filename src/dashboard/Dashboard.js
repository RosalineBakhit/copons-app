import { useState } from "react";

const Dashboard = () => {

   const [copySuccess,setCopySuccess] = useState('please click button To copy!')

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
    <div> {coponText} </div>

    <button onClick={copyCode}>Copy Code</button>

    <div> {copySuccess} </div>
    
     </div>)

}

export default Dashboard;