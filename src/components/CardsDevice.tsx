import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import CardDevice from "./CardDevice";

import { devices } from "../data/dataIPTV";
import './cards.scss';

function CardsDevice() {
  const {t} = useTranslation();
  return (
    <>
      <Box
        component='h3'
        sx={{
          mt: 12,
          mx: 'auto',
          width: '100%',
          fontSize: '2rem',
          fontWeight: '400',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headDevice')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
        {
          devices.map((device: string) =>
            <NavLink key={device} to={`/${device}`} className='nav-cards'>
              <CardDevice device={device}/>
            </NavLink>
          )
        }
      </Box>
    </>
  )
}

export default CardsDevice;