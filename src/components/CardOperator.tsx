import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";


type Props = {
  operator: string
}
export default function CardOperator({operator}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <Card sx={{
      width: 345,
      height: 180,
      margin: "1.5em",
      display: 'flex',
      backgroundColor: appColors.light1,
      transition: '1s',
      ':hover': {
        transform: 'scale(1.05)',
        transition: '0.4s'
      },
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={`/img/${operator.toLowerCase()}.png`}
          // image="/img/android.png"
          alt="green iguana"
          sx={{margin: "1em 0", objectFit: "contain"}}
        />
        <CardContent sx={{textAlign: 'center', color: `${appColors.mid1}`}}>
          <Typography gutterBottom variant="h6" component="div"
                      sx={{fontSize: '1.45em', lineHeight: '1.25em'}}
          >
            {t(operator)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}