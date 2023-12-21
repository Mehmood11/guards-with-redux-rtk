import Box from "@mui/material/Box";
import { styles } from "./splash-screen.styles";

export function SplashScreen({ children }: any): JSX.Element {
  return <Box sx={styles.mainContainer}>{children}</Box>;
}
