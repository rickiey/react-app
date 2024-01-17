import  { useState } from 'react';
import axios from 'axios';
// import { render } from 'react-dom';
import { Button } from 'antd';
import { Space } from 'antd';



const MinerInfo = () => {
  const [minfo, setMinfo] = useState({});
  const fetchMinerInfo = async () => {
    try {
      const response = await axios.get('https://filfox.info/api/v1/address/f01713789');
      console.log('Error fetching minfo:', response);

      setMinfo(response.data);
    } catch (error) {
      console.error('Error fetching minfo:', error);
    }
  };

  return (
    <div className="app">
    <Space>
        <Button type="primary" onClick={fetchMinerInfo}>获取信息</Button> 
    </Space>
    <br></br>
    <Space>
       <pre>{ JSON.stringify(minfo, null,'\t')}</pre> 
       </Space>
    </div>
  );
};

export default MinerInfo;
