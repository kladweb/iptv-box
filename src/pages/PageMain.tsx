import { Container, Toolbar } from "@mui/material";
import CardsDevices from "../components/CardsDevices";
import MainInfo from "../components/MainInfo";


function PageMain() {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{flexWrap: 'wrap'}}>
        <MainInfo/>
      </Toolbar>
    </Container>
  )
}

export default PageMain;