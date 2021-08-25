import './App.css';
import { Button, Radio, Modal, Card } from 'antd';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(1);
  const [visibled, setVisibled] = useState(false);
  const totalStep = [0, 1, 2];
  const [stepNumber, setStepNumber] = useState(0);
  const [stepOneStep, setStepOneStep] = useState([
    {
      text: 'Đi đâu?',
      type: 'primary',
      handle: () => handleNextStepOne(),
    },
    {
      text: 'Bận rồi nha ông',
      type: 'danger',
      handle: () => handleNextStepOneDeny(),
    }
  ]);

  const onChange = e => {
    setValue(e.target.value);
  };

  // const bot = new Telegraf('1717239698:AAHWFUGxuTckQX8o2ybftYGD4pln2bhOyns');

  const handleNext = () => {

    // bot.telegram.sendMessage(
    //   -581108899,
    //   'Le Duc Tung Oi',
    //   { parse_mode: 'HTML' }
    // );

    if (stepNumber < totalStep.length - 1) {
      setStepNumber(stepNumber + 1);
    }

    // if (value === 2) {
    //   setVisibled(true)
    // }
  }

  const handleClose = () => {
    setVisibled(false)
  }

  const hover = () => {
    let temp = [stepOneStep[1], stepOneStep[0]];
    setStepOneStep(temp);
  }

  const handleNextStepOne = () => {
    if (stepNumber < totalStep.length - 1) {
      setStepNumber(stepNumber + 1);
    }
  }

  const handleNextStepOneDeny = () => {
    setVisibled(true)
  }

  return (
    <div className="App">
      {totalStep[stepNumber] === 0 &&
        <div className="step">
          <Card
            title={'Ước gì hết dịch được đi đâu đó với Nguyên 😅 '}
            bordered
            className="card"
            headStyle={{ fontSize: 25, whiteSpace: 'normal' }}
            // style={{ width: 300 }}
          >
            <div className="row-space">
              <Button
                type={stepOneStep[0].type}
                className="mt-20"
                onClick={stepOneStep[0].handle}
              >{stepOneStep[0].text}</Button>
              <Button
                onMouseEnter={hover}
                onMouseLeave={hover}
                type={stepOneStep[1].type}
                className="mt-20"
                onClick={stepOneStep[1].handle}
              >{stepOneStep[1].text}</Button>
            </div>
          </Card>
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
      }

      {totalStep[stepNumber] === 1 &&
        <div className="step">
          <Card
            title={'Nguyên muốn đi đâu 😅 '}
            bordered
            className="card"
            headStyle={{ fontSize: 25 }}
          >
            <Radio.Group onChange={onChange} value={value} className="column">
              <Radio value={1}>Dookki</Radio>
              <Radio value={2} className="mt-10">Do Nguyên chọn</Radio>
              <Radio value={3} className="mt-10">Do Tùng chọn</Radio>
            </Radio.Group>
            <div className="left">
              <Button type="primary" className="mt-20" onClick={handleNext}>Tiếp theo</Button>
            </div>
          </Card>
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
      }

      {totalStep[stepNumber] === 2 &&
        <div className="step">
          <Card
            title={'Đi ăn xong có muốn Tùng chở đi đâu nữa không 😅 '}
            bordered
            className="card"
            headStyle={{ fontSize: 25 }}
          >
            <Radio.Group onChange={onChange} value={value} className="column">
              <Radio value={1}>Đi hóng gió</Radio>
              <Radio value={2} className="mt-10">Đi uống nước</Radio>
              <Radio value={3} className="mt-10">Hóng gió + uống nước</Radio>
              <Radio value={4} className="mt-10">Đi về </Radio>
            </Radio.Group>
            {/* <p>{'\u1f518'}</p> */}
            <div className="left">
              <Button type="primary" className="mt-20" onClick={handleNext}>Tiếp theo</Button>
            </div>
          </Card>
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
      }
    </div>
  );
}

export default App;
