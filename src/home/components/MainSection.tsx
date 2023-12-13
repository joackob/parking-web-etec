import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react"
import { ButtonGroup } from '@mui/material';
import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

const markers = [
  [-34.66862144106868, -58.44470682452406],
  [-34.674458865941574, -58.45956389327844]
]

const MainSection = () => {
  const title = "Vos queres crecer.\n Nosotros te queremos ayudar";
  const subtitle =
    "Crea una web con plantillas impecables, fácil edición y sin codificación.";
  const sm = useMediaQuery("min-width(600px)");

  useEffect(() => {
    var map = L.map('map').setView([-34.67993187278591, -58.450775099059996], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    markers.forEach(marca => {

      L.marker(marca).addTo(map)
        .bindPopup('Estacionamiento')
        .openPopup();

    })

  }, [])



  return (


    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'map'  'ButtonGroup' 'btn'  ",
          sm: "'. map' 'title map' 'subtitle map' 'btn map' '. map'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "100vh",
          md: "92vh",
        }}

      >


        <Box
          gridArea={"title"}
          display={{
            xs: "none",
            sm: "block"
          }}
          alignSelf={{
            xs: "end",
            sm: "end",
          }}
          textAlign={{
            xs: "center",
            sm: "left",
          }}
        >
          <Typography variant={sm ? "h2" : "h3"} fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box
          display={{
            xs: "none",
            sm: "block"
          }}
          textAlign={{
            xs: "center",
            sm: "left",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box

          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >

          <Box gridArea={"ButtonGroup"}  
            marginTop={{
              xs: "0",
              sm:"0",
            }}>
            <ButtonGroup variant="contained" size="large" aria-label="large button group" >
              <Button>Estacion</Button>
              <Button>Calles</Button>
              <Button>Reservas</Button>
            </ButtonGroup>
          </Box>

        </Box>

        <Box
          gridArea={"map"}

          marginTop={{
            xs: "4rem",
            sm: "0",
          }}
          height={{
            xs: "80vh",
            sm: "100%"
          }}
          marginBottom={{
            xs: "0",
            sm: "0",
          }}

          id="map"
        ><Fab variant="extended" sx={{ position: "absolute",   bottom: "16px", right: "16px" }}>
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab></Box>
      </Box>
    </Container>
  );
};

export default MainSection;
