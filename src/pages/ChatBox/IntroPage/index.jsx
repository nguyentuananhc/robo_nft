import React, { useState, useRef, useEffect } from "react";
import { InputBase, ThemeProvider, createTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar, Clock, Setting, Exit } from "../icons";
import { request } from "utils/request";
import { useParams } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: "#F4F7FA",
          padding: "12px",
          borderRadius: "4px",
        },
        root: {
          width: "100%",
        },
      },
    },
  },
});

const CHAT_LOG = [];

const MyBubble = ({ text, time }) => {
  const date = new Date(time);
  const localized = date.toLocaleDateString();
  return (
    <div className="flex gap-2 self-end">
      <div
        className="bg-[#3C76F5] p-[6px] text-xs text-white lg:text-sm xl:p-3"
        style={{
          borderRadius: "4px 0px 4px 4px",
          boxShadow: "0px 0px 10px 0px rgba(143, 174, 203, 0.40)",
        }}
      >
        <div className="flex gap-[6px] lg:flex-col lg:gap-1">
          <b className="font-bold">Me</b>
          <b className="font-light">{localized}</b>
        </div>
        <div className="mt-3 font-light">{text}</div>
      </div>
      <div
        className="flex h-6 w-6 items-center justify-center rounded-3xl text-3xs font-bold text-white lg:h-9 lg:w-9 lg:text-xs"
        style={{
          background: "linear-gradient(90deg, #FF0F7B 0%, #F89B29 100%)",
        }}
      >
        Me
      </div>
    </div>
  );
};

const BotBubble = ({ text, time }) => {
  console.log("timetimetimetime", time);
  const date = new Date(time);
  const localized = date.toLocaleDateString();
  return (
    <div className="flex gap-2 self-start">
      <Avatar />
      <div
        className="bg-white p-[6px] text-xs lg:text-sm xl:p-3"
        style={{
          borderRadius: " 0px 4px 4px 4px",
          boxShadow: "0px 0px 10px 0px rgba(143, 174, 203, 0.40)",
        }}
      >
        <div className="flex gap-[6px] lg:flex-col lg:gap-1">
          <b className="font-bold">Astronauto</b>
          <b className="font-light">{localized}</b>
        </div>
        <div className="mt-3 font-light">{text}</div>
      </div>
    </div>
  );
};

let localKey = 0;

const increaseLocalId = () => {
  localKey = localKey + 1;
  return localKey;
};

const Loading = ({ loading }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: loading ? "flex" : "none",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.5',
        background: 'white'
      }}
    >
      <CircularProgress />
    </div>
  );
};

function IntroPage({ openModal, history, setHistory, loading, setLoading }) {
  const [typeInput, setTypeInput] = useState("");
  const containerRef = useRef(null);
  const params = useParams();
  const handleTypeInput = (e) => {
    const value = e.target.value;
    setTypeInput(value);
  };

  const handleSubmit = async () => {
    try {
      const value = typeInput.trim();
      setTypeInput("");
      if (value.length > 0) {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_CHAT_GPT_SERVER;
        const res = await request(
          `${baseUrl}/chat/message`,
          {},
          {
            id: params?.id,
            prompt: value,
          }
        );
        setHistory((old) => {
          return [
            ...old,
            {
              id: increaseLocalId(),
              message: typeInput,
              role: "user",
              timeAt: Date.now(),
            },
            {
              id: increaseLocalId(),
              message: res?.message,
              role: res?.items?.[0]?.message?.role,
              timeAt: Date.now(),
            },
          ];
        });
        setTimeout(() => {}, 200);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const handleKeyEnter = (e) => {
    console.log("eeeeee", e?.key);
    if (e?.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (containerRef?.current) {
      const lastItem = containerRef.current.lastElementChild;
      console.log("useEffect=====", lastItem);
      if (lastItem) {
        lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [history]);

  console.log("history", history, typeInput);
  return (
    <ThemeProvider theme={theme}>
      <div
        className="flex flex-col lg:pb-[100px]"
        style={{
          height: "100%",
          background: "linear-gradient(180deg, #FFF 0%, #B3CADD 100%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="flex w-full justify-between border-b-[1px] border-solid border-aliceblue-200 p-4">
          <div className="flex gap-3">
            <div className="flex items-center justify-center">
              <Avatar />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xs font-bold lg:text-sm">#019024</p>
              <p className="text-3xs font-normal lg:text-xs">Astronauto</p>
            </div>
          </div>
          <div className="flex gap-2 lg:hidden">
            <div
              className="rounded-md bg-[#EFF5FF] p-2 text-xs"
              onClick={openModal}
            >
              New Chat
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Clock />
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Setting />
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Exit />
            </div>
          </div>
          <div className="hidden gap-2 lg:flex">
            <div
              className="rounded-md bg-[#EFF5FF] p-2 text-sm"
              onClick={openModal}
            >
              New Chat
            </div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">History</div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">Settings</div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">
              Disconnect
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex flex-col gap-5 p-3"
          style={{ overflow: "auto", flexShrink: 1, flexGrow: 1 }}
        >
          {history &&
            history.map((item) => {
              if (item?.role === "user") {
                return (
                  <MyBubble
                    key={item?.id}
                    text={item?.message}
                    time={item?.timeAt}
                  />
                );
              }
              return (
                <BotBubble
                  key={item?.id}
                  text={item?.message}
                  time={item?.timeAt}
                />
              );
            })}
        </div>

        <div
          style={{ flexShrink: 0 }}
          className="lg:absolute bottom-1 lg:bottom-[12px] left-0 flex w-full flex-row items-center justify-between gap-4 self-stretch overflow-hidden border-t-[1px] border-solid border-aliceblue-200 bg-white py-2 px-4 text-steelblue-100 [backdrop-filter:blur(40px)] lg:left-2/4 lg:w-[calc(100vw-299px)] lg:translate-x-[-50%] lg:rounded-[12px]"
        >
          <InputBase
            className="relative"
            placeholder="Send me prompt and request Bot-GPT"
            value={typeInput}
            onChange={handleTypeInput}
            disabled={loading}
            onKeyUp={handleKeyEnter}
          ></InputBase>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex flex-row items-start justify-start rounded-md bg-[#3C76F5] py-2 px-4 text-[14px] text-white"
          >
            <b className="relative">Send</b>
          </button>
        </div>
        <Loading loading={loading}></Loading>
      </div>
    </ThemeProvider>
  );
}

export default IntroPage;
