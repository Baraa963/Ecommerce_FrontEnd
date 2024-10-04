import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@emotion/react";

export default function IconSection() {
    const theme =useTheme();
  return (
    <Container sx={{mt:3,bgcolor:theme.palette.mode ==="dark" ?"#000":"#fff"}}>
      <Stack
        divider={ useMediaQuery('(min-width:600px)')?<Divider orientation="vertical" flexItem />:null}
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Boxx
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <Boxx
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <Boxx
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <Boxx
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
const Boxx = ({ icon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
    
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent:useMediaQuery('(min-width:600px)')?"center":"left",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
