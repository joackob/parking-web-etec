import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react"

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
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
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
          xs: "'map' 'map' 'map' 'title map' 'subtitle map' 'btn map' '. map' 'title' 'subtitle' 'btn'",
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
          <Button variant="contained">Comienza a crear</Button>
        </Box>

        <Box
          gridArea={"map"}
          sx={{
            height: "100%"
          }}
          id="map"
        ></Box>
      </Box>
    </Container>
  );
};

export default MainSection;
