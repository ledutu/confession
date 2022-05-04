import { SmileOutlined } from "@ant-design/icons";
import { Button, Card, Result } from "antd";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import audio from "./assets/audios/kiss_the_rain.mp3";

function App() {
  const [stepNumber, setStepNumber] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [stepOneStep, setStepOneStep] = useState([
    {
      text: "Đồng ý",
      type: "primary",
      // handle: () => handleNextStepOne(),
    },
    {
      text: "Không đồng ý",
      type: "danger",
      // handle: () => handleNextStepOneDeny(),
    },
  ]);

  const loveMessages = [
    {
      id: 0,
      message: <p>Hôm nay thi tốt không em? Giận anh nhiều lắm hả! 😅</p>,
    },
    {
      id: 1,
      message: (
        <div>
          <p>
            Hôm nay dự án triển khai feature mới nên anh họp cả ngày, nên anh
            không cầm vô được cái điện thoại.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      message: (
        <div>
          <p>
            Hôm qua anh nghe em nói là sẽ nhắn anh khi thi xong nên anh tưởng em
            nhắn, thế là giờ nghỉ trưa 12h a vội check đt để xem thử em có nhắn
            hay không? Ai ngờ không thấy tin nhắn em 😅, anh định nhắn hỏi thăm
            em lúc đó rồi mà sợ em chưa thi xong lại phiền em nên thôi 😅.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      message: (
        <div>
          <p>Đừng giận anh nữa nha. Hôm nay chỉ là sự cố ngoài ý muốn. </p>
          <p>
            Ngày mai em thi gì nè? Anh biết em đang giận anh hong rep tin nhắn
            anh nữa{" "}
          </p>
          <p>
            Hy vọng em đọc được những dòng này và tâm trạng vui lên nha. Đừng
            nghĩ ngợi lung tung nha.
          </p>
          <p>Không phải anh vô tâm hay gì đâu.</p>
          <p>
            Con bé này. Hôm qua call em giọng em đáng iu lắm đó. Biết không?
          </p>
        </div>
      ),
    },
    {
      id: 4,
      message: (
        <div>
          <p>
            Biết em đang giận nên anh hiện tại là 21:45 rồi anh vội làm web này
            để xin lỗi em, chưa kịp ăn uống gì nữa{" "}
          </p>
          <p>Chắc xong cái web này anh đi ăn đây </p>
          <p>Đói ghê!!!!</p>
        </div>
      ),
    },
    // {
    //   id: 5,
    //   message: (
    //     <div>
    //       <p>
    //         Thật ra những ngày đi chơi với chị, nó làm em rất vui, đem lại cảm
    //         xúc{" "}
    //       </p>
    //       <p>
    //         cho em rất nhiều. Vì em là một người rất dỡ trong việc thể hiện cảm
    //         xúc{" "}
    //       </p>
    //       <p>
    //         nên em hoàn toàn ít thể hiện nó ra bên ngoài, cứ đơ như một con
    //         robot vậy 😁{" "}
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 6,
    //   message: (
    //     <div>
    //       <p>
    //         Mấy hôm nay không được đi chơi với chị, không được gặp chị, không{" "}
    //       </p>
    //       <p>
    //         được nghe giọng cười của chị một cách trực tiếp, điều này làm em
    //         thấy rất buồn.{" "}
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 7,
    //   message: (
    //     <div>
    //       <p>
    //         Em biết chị rất độc lập, hiểu chuyện, đôi lúc lạnh lùng, đôi lúc
    //         tình cảm,
    //       </p>
    //       <p>
    //         nhiều lúc muốn tâm sự với người khác để họ hiểu mình hơn, nhưng cũng{" "}
    //       </p>
    //       <p>
    //         không muốn người khác biết quá nhiều điều về bản thân mình. Chị là
    //         một{" "}
    //       </p>
    //       <p>
    //         người có nội tâm sâu sắc, đôi lúc ngang bướng không chịu thua ai.
    //         Nhiều{" "}
    //       </p>
    //       <p>lúc em tự hỏi sao lại có người giống mình đến như vậy.</p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 8,
    //   message: (
    //     <div>
    //       <p>
    //         Chị độc lập, sâu sắc, một người con gái không biết quá nhiều về làm
    //       </p>
    //       <p>đẹp, ăn diện đó cũng là điều mà em thích ở chị.</p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 9,
    //   message: (
    //     <div>
    //       <p>
    //         Nhưng mà chị nè, trên đời này ai cũng cần 1 người để dựa dẫm, để tâm{" "}
    //       </p>
    //       <p>
    //         sự, để chở che…. Dù mình có mạnh mẽ đến đâu cũng không thể lúc nào{" "}
    //       </p>
    //       <p>
    //         cũng đối mặt với những khó khăn, thử thách trong cuộc sống được.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 10,
    //   message: (
    //     <div>
    //       <p>
    //         Xin lỗi chị vì mấy lần trước em chia sẽ quá nhiều về sự thành công
    //         trong
    //       </p>
    //       <p>
    //         việc của mình. Em rất ít khi chia sẽ điều này với người khác, nhưng
    //         chị là
    //       </p>
    //       <p>
    //         người con gái đầu tiên mà em chia sẽ những điều này. Không phải vì
    //         em{" "}
    //       </p>
    //       <p>
    //         muốn khoe khoang hay là gì cả, mà là vì em muốn chứng minh rằng mình{" "}
    //       </p>
    //       <p>
    //         có thể bảo vệ, chăm sóc hay che chở cho người mình yêu thương được.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 11,
    //   message: (
    //     <div>
    //       <p>
    //         Và e cũng tìm được người em muốn bảo vệ, chăm sóc và chở che rồi.
    //         Chị{" "}
    //       </p>
    //       <p>
    //         cho em một cơ hội để tìm hiểu chị lại nhé. E hứa cơ hội lần này e sẽ{" "}
    //       </p>
    //       <p>
    //         không để vụt mất nữa đâu. Có em ở đây rồi chị đừng sợ gì nữa nhé.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 12,
    //   message: (
    //     <div>
    //       <p>
    //         Mấy ngày gần đây em đã bị bệnh vì không biết lo cho sức khỏe của
    //         mình mà cứ mãi mê công việc.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 13,
    //   message: (
    //     <div>
    //       <p>
    //         Nếu có một điều ước, e chỉ ước là chị đang giận em thôi, một chút
    //         giận{" "}
    //       </p>
    //       <p>
    //         hờn nho nhỏ mà thôi…. Để rồi chị khẽ run lên khi cơn gió lạnh lướt
    //         qua, e{" "}
    //       </p>
    //       <p>
    //         sẽ ôm chị, và chị lại mỉm cười, nắm chặt tay e, đừng giận e nữa chị
    //         nhé.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 14,
    //   message: (
    //     <div>
    //       <p>
    //         nhà triết học mà em rất thích Aristoteles có nói một câu rằng: “Hãy
    //         luôn
    //       </p>
    //       <p>
    //         luôn tự đặt câu hỏi tại sao, vì mọi việc trên thế gian này đều có
    //         căn
    //       </p>
    //       <p>
    //         nguyên của nó”, nhưng mà ….. thích chị, thì em không cần đặt câu hỏi
    //         tại
    //       </p>
    //       <p>sao……. Vì trái tim em có logic riêng của nó.</p>
    //     </div>
    //   ),
    // },
    // {
    //   id: 15,
    //   message: (
    //     <div>
    //       <p>
    //         Đây là những lời tận sau đấy lòng của e. E mong chị có thể mỉm cười
    //         khi
    //       </p>
    //       <p>đọc nó, mấy ngày nay mặc dù bệnh nhưng em vẫn hoàn thành xong</p>
    //       <p>
    //         trang web và bài văn này (mặc dù nó hơi lũng củng, nhưng mong chị bỏ
    //       </p>
    //       <p>qua cho 😁) ====={">"}</p>
    //     </div>
    //   ),
    // },
    {
      id: 5,
      message: (
        <div>
          <p>Tha lỗi cho anh nha!!!!!!!</p>
        </div>
      ),
      answer: ["Đồng ý", "Không đồng ý"],
    },
  ];

  const handleNext = () => {
    if (!isPlay) {
      setIsPlay(true);
      new Audio(audio).play();
    }

    if (stepNumber === loveMessages.length - 1) return;
    setStepNumber(stepNumber + 1);
  };

  const handleBack = () => {
    if (stepNumber === 0) return;
    setStepNumber(stepNumber - 1);
  };

  const callApi = async (message) => {
    const base_url = "https://api.reviewduthu.vn/api";
    const res = await axios.post(`${base_url}/sendMessage`, {
      message,
    });
  };

  const hover = () => {
    let temp = [stepOneStep[1], stepOneStep[0]];
    setStepOneStep(temp);
  };

  const handleOk = () => {
    callApi("Đồng ý");
    setIsEnd(true);
  };

  const handlePending = () => {
    callApi("Để Chị suy nghĩ thêm");
    setIsEnd(true);
  };

  return (
    <div className="App">
      {loveMessages.map((item) => (
        <>
          {stepNumber === item.id &&
            stepNumber !== loveMessages.length - 1 &&
            !isEnd && (
              <Card className="card" bordered key={item.id}>
                {item.message}
                <div className="row-space">
                  <Button type="default" className="mt-20" onClick={handleBack}>
                    Quay lại
                  </Button>
                  <Button type="primary" className="mt-20" onClick={handleNext}>
                    Tiếp theo
                  </Button>
                </div>
              </Card>
            )}
          {stepNumber === item.id &&
            stepNumber === loveMessages.length - 1 &&
            !isEnd && (
              <Card className="card" bordered key={item.id}>
                {item.message}
                <div className="row-space">
                  <Button
                    type={stepOneStep[0].type}
                    className="mt-20"
                    onClick={handleOk}
                  >
                    {stepOneStep[0].text}
                  </Button>
                  {/* <Button
                    type="warning"
                    className="mt-20"
                    onClick={handlePending}
                  >
                    Để Chị suy nghĩ thêm
                  </Button> */}
                  <Button
                    type={stepOneStep[1].type}
                    onMouseEnter={hover}
                    onMouseLeave={hover}
                    className="mt-20"
                    onClick={handleOk}
                  >
                    {stepOneStep[1].text}
                  </Button>
                </div>
              </Card>
            )}
        </>
      ))}

      {isEnd && (
        <Card className="card" bordered>
          <Result
            icon={<SmileOutlined />}
            title="Cám ơn em vì đã xem tới đây 😁"
          />
        </Card>
      )}
    </div>
  );
}

export default App;
