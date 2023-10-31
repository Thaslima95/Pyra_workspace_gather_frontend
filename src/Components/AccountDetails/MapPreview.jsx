import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ArrowRight from "../../assets/Images/arrow-right.png";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Office from "../../assets/Images/Desktop - 21.png";
import { Grid } from "@mui/material";
import Frame from "../../assets/Images/Frame 25.png";
import { Box } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    width: "80%",
  },
}));

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  input: {
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& input": {
      padding: "12px",
      borderRadius: "10px",
      border: "1px",
      gap: "5px",
      border: "1px solid #99999D",
      color: "#99999D",
    },
  },
}));
export default function MapPreview() {
  const [preview, setPreviewOpen] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const companysizes = ["0-10", "10-50", "50-100"];
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (button) => {
    if (button === selectedButton) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };
  const handleCompanySize = (size) => {
    if (size === selectedSize) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const handleClickOpen = () => {
    setPreviewOpen(true);
  };
  const handleClose = () => {
    setPreviewOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <button onClick={handleClickOpen}>Preview</button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="md"
        open={preview}
        // onClose={handleClose}
      >
        <DialogContent fullWidth>
          <DialogContentText sx={{ fontWeight: 800 }}></DialogContentText>
          <IconButton
            aria-label="close"
            // onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Grid container xs={12}>
            <Grid item xs={9}>
              <img
                src={Office}
                alt=""
                style={{ width: "600px", borderRadius: "12px" }}
              />
            </Grid>
            <Grid container xs={2} sx={{ height: "100px" }}>
              <Box
                sx={{
                  height: "100px",
                  width: "400px",
                  marginBottom: "20px",
                }}
              >
                <img src={Frame} alt="" />
              </Box>
              <Box
                sx={{
                  height: "100px",
                  width: "400px",
                  marginBottom: "20px",
                }}
              >
                <img src={Frame} alt="" />
              </Box>
              <Box
                sx={{
                  height: "100px",
                  width: "400px",
                  marginBottom: "0px",
                }}
              >
                <img src={Frame} alt="" />
              </Box>
            </Grid>
          </Grid>

          <DialogContentText sx={{ fontWeight: 800 }}>
            Green Office
          </DialogContentText>
          <Typography>Suitable for big office.</Typography>
          <DialogContentText sx={{ fontWeight: 800 }}>
            Company Size Suitable for
          </DialogContentText>
          {companysizes.map((size) => (
            <Button
              key={size}
              onClick={() => handleButtonClick(size)}
              style={{
                backgroundColor: size === selectedSize ? "blue" : "gray",
                color: "white",

                border: "none",
                cursor: "pointer",
                marginRight: "10px",

                height: "49px",
                padding: "12px, 24px, 12px, 24px",
                borderRadius: "40px",
                marginBottom: "10px",

                background: "white",
                border: "1px",
                gap: "4px",
                border: "1px solid #B4B4B480",
                borderImageSource: "#B4B4B480",
              }}
            >
              <Typography
                style={{
                  //styleName: 14px/boyd-small;
                  fontFamily: "Aileron",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#6E6E75",
                  textTransform: "none",
                }}
              >
                {size}
              </Typography>
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            // onClick={handleNext}
            style={{
              width: "141px",
              height: "49px",
              padding: "12px, 24px, 12px, 24px",
              borderRadius: "40px",
              border: "1px",
              gap: "4px",
              background:
                "linear-gradient(327.64deg, rgba(180, 180, 180, 0.5) -5.42%, rgba(201, 201, 201, 0.185) 127.13%)",
              border: "1px solid",

              borderImageSource:
                "linear-gradient(327.64deg, rgba(180, 180, 180, 0.5) -5.42%, rgba(201, 201, 201, 0.185) 127.13%)",
              boxShadow: "3px 4px 9px 0px #FFFFFF14 inset",
            }}
          >
            <Typography style={{ color: "#0B0B16", textTransform: "none" }}>
              Continue
            </Typography>
            <img src={ArrowRight} alt="" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
