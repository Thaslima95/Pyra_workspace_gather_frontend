import React from "react";
import arrow from "../../assets/Images/chevron-left.png";
import ArrowRight from "../../assets/Images/arrow-right.png";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import Minus from "../../assets/Images/Icon.png";
import Add from "../../assets/Images/Icon (1).png";
import axios from "axios";
export default function InvitePeople() {
  const [textboxes, setTextboxes] = useState([""]);
  const addTextbox = () => {
    setTextboxes([...textboxes, ""]);
  };

  // Function to remove a specific textbox by index
  const removeTextbox = (index) => {
    const updatedTextboxes = [...textboxes];
    updatedTextboxes.splice(index, 1);
    setTextboxes(updatedTextboxes);
  };

  // Function to handle textbox value changes
  const handleTextboxChange = (index, event) => {
    const updatedTextboxes = [...textboxes];
    updatedTextboxes[index] = event.target.value;
    setTextboxes(updatedTextboxes);
  };

  const handleNext = () => {
    console.log(textboxes);
    axios.post("http://localhost:8090/sendemails/invite", textboxes);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid
          container
          xs={6}
          sx={{
            marginTop: "150px",
            marginLeft: "170px",
          }}
        >
          <Grid item xs={12}>
            <Box
              style={{
                width: "32px",
                height: "32px",
                padding: "12px",
                borderRadius: "40px",
                border: "1px",
                border: "1px solid #99999D",
                position: "absolute",
              }}
            >
              <img
                src={arrow}
                alt=""
                style={{ position: "relative", top: "5px", left: "5px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "110px",
              marginBottom: "30px",
            }}
          >
            <Typography
              style={{
                fontFamily: "Aileron",
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Invite people
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Enter an email to invite people</Typography>
          </Grid>
          <Grid item xs={12}>
            {textboxes.map((textbox, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={textbox}
                  style={{
                    width: "297px",
                    height: "16px",
                    padding: "12px",
                    borderRadius: "12px",
                    border: "1px",
                    gap: "12px",
                    border: "1px solid #E6E6E7",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                  onChange={(e) => handleTextboxChange(index, e)}
                />
                <button
                  style={{
                    width: "42px",
                    height: "42px",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px",
                    marginLeft: "5px",
                  }}
                  onClick={() => removeTextbox(index)}
                >
                  <img src={Minus} alt="" />
                </button>
              </div>
            ))}
            <button
              onClick={addTextbox}
              style={{
                width: "166px",
                height: "49px",
                // top: 438px
                // left: 637px
                padding: "12px, 24px, 12px, 24px",
                borderRadius: "40px",
                gap: "4px",
                boxShadow: "3px 4px 9px 0px #FFFFFF14 inset",
                marginLeft: "100px",
                marginTop: "40px",
                boxShadow: "-2px -4px 10px 0px #FFFFFF0A inset",
                background: "white",
                border: "none",
              }}
            >
              {" "}
              <Typography>
                {" "}
                <img src={Add} alt="" style={{ marginRight: "5px" }} />
                Add Another
              </Typography>
            </button>

            {/* <input
              id="email"
              label="email"
              variant="outlined"
              fullWidth
              margin="normal"
              style={{
                width: "457px",
                height: "36px",
                padding: "12px",
                borderRadius: "12px",
                border: "1px",
                gap: "12px",
                border: "1px solid #E6E6E7",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            /> */}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item sx={{ marginTop: "200px", marginLeft: "390px" }}>
          <Button
            // className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
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

              boxShadow: "-2px -4px 10px 0px #FFFFFF0A inset",
              animationTimingFunction: "ease-out",
              animationDuration: "300ms",
              transition: "opacity 0.3s ease-out",
            }}
          >
            <Typography style={{ color: "#0B0B16", textTransform: "none" }}>
              Continue
            </Typography>
            <img src={ArrowRight} alt="" />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
