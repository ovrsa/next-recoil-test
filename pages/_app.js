import "../styles/globals.css";
import { RecoilRoot } from "recoil"; //追加

// recoilでは値を共有したい範囲をRecoilRootで囲う
const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
