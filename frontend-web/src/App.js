import './App.css';
import { Button, Radio, Modal, Card, Result } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SmileOutlined } from '@ant-design/icons';
import audio from './assets/audios/kiss_the_rain.mp3';

function App() {

  const [status, setStatus] = useState(-1);
  const [value, setValue] = useState(0);
  const [visibled, setVisibled] = useState(false);
  const [resultMessage, setResultMessage] = useState('Nguyên muốn đi ');
  const totalStep = [0, 1, 2, 3];
  const [stepNumber, setStepNumber] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [stepOneStep, setStepOneStep] = useState([
    {
      text: 'Đồng ý',
      type: 'primary',
      // handle: () => handleNextStepOne(),
    },
    {
      text: 'Không đồng ý',
      type: 'danger',
      // handle: () => handleNextStepOneDeny(),
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
  ];

  const loveMessages = [
    {
      id: 0,
      message: <p>Nói chuyện với tui làm Nguyên tự ti lắm hả</p>
    },
    {
      id: 1,
      message: <div>
        <p>Tại sao Nguyên nghĩ nhưng câu chuyện của Nguyên</p>
        <p>làm phiền người khác? Thật ra những câu chuyện đó cũng</p>
        <p>có người rất muốn nghe lắm đó</p>
      </div>
    },
    {
      id: 2,
      message: <div>
        <p>Nguyên cứ mạnh dạng chia sẽ đi, thật ra không phải họ</p>
        <p>hiểu theo ý họ mà là họ không biết làm cách nào để chia</p>
        <p>sẽ điều họ hiểu ra bởi vì họ cũng có rất nhiều nỗi sợ.</p>
      </div>
    },
    {
      id: 3,
      message: <div>
        <p>Nguyên có biết là có người rất thích được nghe giọng của</p>
        <p>Nguyên không? Nhiều khi họ thích đến mức mà chỉ muốn</p>
        <p>tập trung nghe thôi mà không cần tập trung đến nội dung</p>
        <p>câu chuyện nữa.</p>
      </div>
    },
    {
      id: 4,
      message: <div>
        <p>Thật ra lần đầu tiên gặp Nguyên, Tùng có 1 cảm giác lạ lắm,</p>
        <p>Cảm giác vừa thân thuộc lại vừa lạ lạ không giống như những</p>
        <p>người con gái khác mà Tùng đã từng gặp.</p>
      </div>
    },
    {
      id: 5,
      message: <div>
        <p>Tùng cũng không hiểu tại sao, nhưng Tùng nghĩ đó là một cái</p>
        <p>duyên mà ông trời muốn Tùng gặp Nguyên.</p>
      </div>
    },
    {
      id: 6,
      message: <div>
        <p>Trong lúc đi chơi của hai đứa và trong những cuộc gọi thoại</p>
        <p>mấy ngày qua, được thấy Nguyên cười không hiểu tại sao</p>
        <p>lòng Tùng vui lắm.</p>
      </div>
    },
    {
      id: 7,
      message: <div>
        <p>Tùng biết Nguyên rất độc lập và rất hiểu chuyện, đôi lúc lạnh lùng</p>
        <p>đôi lúc tình cảm, nhiều lúc muôn tâm sự với người khác để họ</p>
        <p>hiểu mình hơn, nhưng cũng không muốn chia sẽ quá nhiều điều</p>
        <p>của bản thân của mình cho người khác.</p>
        <p>Nguyên là người có nội tâm rất sâu sắc, nhiều</p>
        <p>lúc Tùng tự hỏi không hiểu tại sao lại có người giống Tùng đến như vậy.</p>
      </div>
    },
    {
      id: 8,
      message: <div>
        <p>Nguyên độc lập, cá tính, một người con gái không biết quá nhiều</p>
        <p>về làm đẹp, ăn diện đó cũng là điều Tùng thích ở Nguyên.</p>
      </div>
    },
    {
      id: 9,
      message: <div>
        <p>Nhưng mà Nguyên nè, ở trên đời này ai cũng cần 1 người để</p>
        <p>dựa dẫm, để tâm sự, để chở che,.. Dù mình có mạnh mẽ đến đâu</p>
        <p>cũng không thể lúc nào cũng đối mặt với những khó khăn, thử </p>
        <p>thách của cuộc sống được.</p>
      </div>
    },
    {
      id: 10,
      message: <div>
        <p>Xin lỗi Nguyên vì mấy ngày nay Tùng chia sẽ quá nhiều về sự thành</p>
        <p>công trong công việc của mình. Tùng rất ít khi chia sẽ điều này với</p>
        <p>người khác, nhưng Nguyên là người con gái đầu tiên mà Tùng chia</p>
        <p>sẽ những điều này. Không phải vì Tùng muốn khoe khoang hay</p>
        <p>là gì cả, mà là vì Tùng muốn chứng minh rằng mình có thể bảo vệ,</p>
        <p>chăm sóc hay che chở cho người mình yêu thương được.</p>
      </div>
    },
    {
      id: 11,
      message: <div>
        <p>Và hôm nay Tùng cũng tìm được người Tùng muốn bảo vệ, chăm</p>
        <p>sóc và chở che rồi. Nguyên cho Tùng cơ hội để được che chở,</p>
        <p>chăm sóc, và bảo vệ Nguyên nha.</p>
        <p>Có Tùng ở đây rồi, nên Nguyên đừng sợ gì hết nữa nha.</p>
      </div>
    },
    {
      id: 12,
      message: <div>
        <p>nhà triết học Aristoteles có nói một câu rằng: "Hãy luôn luôn tự đặt</p>
        <p>câu hỏi tại sao, vì mọi việc trên thế gian này đều có căn nguyên của</p>
        <p>nó.", nhưng mà .... thích Nguyên, thì Tùng không cần đặt câu hỏi tại sao</p>
        <p>..........</p>
        <p>vì trái tim Tùng có logic riêng của nó.</p>
      </div>
    },
    {
      id: 13,
      message: <div>
        <p>Đây là những lời tận sau đấy lòng của Tùng. Tùng muốn nói điều</p>
        <p>này lâu rồi nhưng Tùng sợ nói ra thì Nguyên sẽ tránh mặt Tùng.</p>
        <p>Hôm nay Tùng quyết định nói là vì Tùng sợ nếu Tùng không nói</p>
        <p>thì sẽ có những người khác nói trước Tùng.</p>
      </div>
    },
    {
      id: 14,
      message: <div>
        <p>Nguyên làm bạn gái Tùng nha (Nguyên không cần phải trả lời Tùng</p>
        <p>liền đâu, vì Tùng cũng hơi lo sợ. Dù kết quả như thế nào thì vẫn</p>
        <p>giữ cái kèo hết dịch đi chơi nha 😁)</p>
      </div>,
      answer: ['Đồng ý', 'Cho nguyên suy nghĩ thêm', 'Không đồng ý'],
    },
  ]

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
    
    if(!isPlay) {
      setIsPlay(true);
      new Audio(audio).play();
    }
    
    
    if (stepNumber === loveMessages.length - 1) return;
    setStepNumber(stepNumber + 1);

    // setResultMessage(resultMessage + ' ' + messages[value]);

    // if (stepNumber < totalStep.length - 1) {
    //   setStepNumber(stepNumber + 1);
    // }
  }

  const handleBack = () => {
    if (stepNumber === 0) return;
    setStepNumber(stepNumber - 1);
  }

  const callApi = async (message) => {
    await axios.post('http://api.reviewduthu.vn/api/sendMessage', {
      message,
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

  const handleOk = () => {
    callApi('Đồng ý');
    setIsEnd(true);
  }

  const handlePending = () => {
    callApi('Để Nguyên suy nghĩ thêm');
    setIsEnd(true);
  }

  return (
    <div className="App">
      {
        loveMessages.map((item) => (
          <>
            {
              (stepNumber === item.id && stepNumber !== loveMessages.length - 1 && !isEnd) && <Card
                className="card"
                bordered
                key={item.id}
              >
                {item.message}
                <div class="row-space">
                  <Button type="default" className="mt-20" onClick={handleBack}>Quay lại</Button>
                  <Button type="primary" className="mt-20" onClick={handleNext}>Tiếp theo</Button>
                </div>
              </Card>
            }
            {
              (stepNumber === item.id && stepNumber === loveMessages.length - 1 && !isEnd) && <Card
                className="card"
                bordered
                key={item.id}
              >
                {item.message}
                <div class="row-space">
                  <Button type={stepOneStep[0].type} className="mt-20" onClick={handleOk}>{stepOneStep[0].text}</Button>
                  <Button type="warning" className="mt-20" onClick={handlePending}>Để Nguyên suy nghĩ thêm</Button>
                  <Button
                    type={stepOneStep[1].type}
                    onMouseEnter={hover}
                    onMouseLeave={hover}
                    className="mt-20"
                    onClick={handleOk}
                  >{stepOneStep[1].text}</Button>
                </div>
              </Card>
            }
          </>
        ))
      }

      {
        isEnd && <Card
          className="card"
          bordered
        >
          <Result
            icon={<SmileOutlined />}
            title="Cám ơn Nguyên vì đã xem tới đây 😁"
          />
        </Card>
      }

    </div>
  );
}

export default App;
