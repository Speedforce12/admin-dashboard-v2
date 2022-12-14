import { Backdrop, CircularProgress } from "@mui/material";
import { useValue } from "../context/AuthContext";

const Loading = () => {
  const {
    state: { loading },
  } = useValue();
  return (
    <Backdrop
      open={loading}
      sx={{ zIndex: (theme) => theme.zIndex.modal + 999 }}
    >
      <CircularProgress sx={{ color: "white" }} />
    </Backdrop>
  );
};

export default Loading;
