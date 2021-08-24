import './App.css';
import { Result, Button, Radio, Modal } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { createContext, useState } from 'react';

function App() {
  const [value, setValue] = useState(1);
  const [visibled, setVisibled] = useState(false);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleNext = () => {
    console.log(value);
    if (value === 2) {
      setVisibled(true)
    }
  }

  const handleClose = () => {
    setVisibled(false)
  }

  return (
    <div className="App">
      <div className="step">
        <h3>Ước gì hết dịch được đi đâu đó với Nguyên :D</h3>
        <Radio.Group onChange={onChange} value={value} className="column">
          <Radio value={1}>Oke tui sẽ đi</Radio>
          <Radio value={2} className="mt-10">Thôi tui không đi đâu</Radio>
        </Radio.Group>
        <div className="left">
          <Button type="primary" className="mt-20" onClick={handleNext}>Tiếp theo</Button>
        </div>
      </div>
      <Modal
        centered
        visible={visibled}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <div>
          <p>Sao vậy</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
