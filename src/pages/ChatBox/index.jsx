import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from "@mui/material";
import IntroPage from "./IntroPage";
import ChoseBotModal from "./ChoseBotModal";
import { request } from "utils/request";
import { useLocation, useParams } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "100%",
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: "none",
          },
          [`& .${outlinedInputClasses.root}`]: {
            background: "#EFF5FF",
            height: "100%",
          },
          [`& .${selectClasses.outlined}`]: {
            paddingLeft: 16,
            paddingRight: "42px !important",
          },
        },
      },
    },
  },
});

const ChatBox = () => {
  const [openChoseModal, setOpenChoseModal] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log("params", params);
  const getHistory = async () => {
    setLoading(true);
    const baseUrl = process.env.REACT_APP_CHAT_GPT_SERVER;
    try {
      const res = await request(
        `${baseUrl}/chat/history`,
        {},
        {
          id: params?.id,
        }
      );
      console.log("ressss", res);
      setHistory(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        flexGrow="1"
        sx={{
          flexShrink: 1,
          minHeight: 0,
        }}
      >
        <IntroPage
          loading={loading}
          openModal={() => setOpenChoseModal(true)}
          history={history}
          setHistory={setHistory}
          setLoading={setLoading}
        />

        {openChoseModal && (
          <ChoseBotModal
            open={openChoseModal}
            handleClose={() => {
              setOpenChoseModal(false);
            }}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ChatBox;
