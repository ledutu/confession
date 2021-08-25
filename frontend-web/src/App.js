import './App.css';
import { Button, Radio, Modal, Card, Result } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [value, setValue] = useState(0);
  const [visibled, setVisibled] = useState(false);
  const [resultMessage, setResultMessage] = useState('Nguyên muốn đi ');
  const totalStep = [0, 1, 2, 3];
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

  const messages = [
    'Dookki',
    'Do Nguyên chọn',
    'Do Tùng chọn',
    'Đi hóng gió',
    'Đi uống nước',
    'Uống nước + hóng gió',
    'Đi về 😢'
  ]

  const onChange = e => {
    setValue(e.target.value);
  };

  // const bot = new Telegraf('1717239698:AAHWFUGxuTckQX8o2ybftYGD4pln2bhOyns');

  const handleNext = async () => {

    // bot.telegram.sendMessage(
    //   -581108899,
    //   'Le Duc Tung Oi',
    //   { parse_mode: 'HTML' }
    // );

    setResultMessage(resultMessage + ' ' + messages[value]);

    if (stepNumber < totalStep.length - 1) {
      setStepNumber(stepNumber + 1);
    }
  }

  useEffect(() => {
    if (stepNumber === 3) {
      callApi();
    }
  }, [stepNumber]);

  const callApi = async () => {
    await axios.post('http://localhost:4000/api/sendMessage', {
      message: resultMessage,
    });
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
  console.log(resultMessage)
  return (
    <div className="App">
      {totalStep[stepNumber] === 0 &&
        <div className="step">
          <Card
            title={'Hết dịch, Nguyên đi chơi chung với tui nha 😅'}
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
              <Radio value={0}>Dookki</Radio>
              <Radio value={1} className="mt-10">Do Nguyên chọn</Radio>
              <Radio value={2} className="mt-10">Do Tùng chọn</Radio>
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
              <Radio value={3}>Đi hóng gió</Radio>
              <Radio value={4} className="mt-10">Đi uống nước</Radio>
              <Radio value={5} className="mt-10">Hóng gió + uống nước</Radio>
              <Radio value={6} className="mt-10">Đi về 😢</Radio>
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

      {totalStep[stepNumber] === 3 &&
        <div className="step">
          <Card
            bordered
            className="card"
          >
            <Result
              status="success"
              title="Thành công 😁"
              subTitle={<div>
                <p>Chúc mừng Nguyên đã hoàn thành xong các bước của mình.</p>
                <p>Không biết là kết quả như thế nào, nhưng Tùng vẫn hy vọng kết quả đúng như mình kỳ vọng</p>
              </div>}
            />
          </Card>
        </div>
      }
    </div>
  );
}

export default App;
