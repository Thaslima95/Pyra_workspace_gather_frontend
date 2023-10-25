import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import account from "../../assets/Images/Component 1.png";
import accountlight from "../../assets/Images/Component 1 Light.png";
import password from "../../assets/Images/Component 3 (2).png";
import passworddisable from "../../assets/Images/Component 3.png";
import MapImg from "../../assets/Images/Component 4.png";
import company from "../../assets/Images/Component 3 (1).png";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Account Detail", "Create Password", "Company Details", "Choose Map"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  console.log("control", control);
  return (
    <>
      <Grid container sx={{ border: "5px solid black", height: "600px" }}>
        <Grid xs={6} sx={{ paddingLeft: "80px" }}>
          <Grid sx={{ padding: "20px", border: "2px solid red" }}>
            <Box sx={{ marginBottom: "15px" }}>
              <Typography
                style={{
                  width: "210px",
                  height: "17px", //styleName: 14px/boyd-small;
                  fontFamily: "Aileron",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#303039",
                }}
              >
                Email
              </Typography>
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <input
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...field}
                    style={{
                      width: "457px",
                      height: "56px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: "1px",
                      gap: "12px",
                      border: "1px solid #E6E6E7",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                )}
              />
              <Typography
                style={{
                  width: "269px",
                  height: "17px", //styleName: 14px/boyd-small;
                  fontFamily: "Aileron",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "italic",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#99999D",
                }}
              >
                *a verification mail will be sent to this mail id
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                style={{
                  width: "210px",
                  height: "17px", //styleName: 14px/boyd-small;
                  fontFamily: "Aileron",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#303039",
                }}
              >
                Phone Number
              </Typography>
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <input
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...field}
                    style={{
                      width: "457px",
                      height: "56px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: "1px",
                      gap: "12px",
                      border: "1px solid #E6E6E7",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                )}
              />
              <Typography
                style={{
                  width: "288px",
                  height: "17px", //styleName: 14px/boyd-small;
                  fontFamily: "Aileron",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "italic",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#99999D",
                }}
              >
                *an OTP will be sent to this number verification
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={1}>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              height: "15%",
              marginTop: "40px",
              marginLeft: "8px",
              marginRight: "8px",
              border: "1px solid #99999D",
              width: "1px", // You can set the background color
              backgroundColor: "#99999D",
            }}
          />
          or
          {/* <Typography style={{width: "13px",
height: "17px",
//styleName: 14px/boyd-small;
fontFamily: "Aileron",
fontSize: "14px",
fontWeight: "400",
lineHeight: 17px;
letter-spacing: 0em;
text-align: left;

}}>or</Typography> */}
          <Divider
            orientation="vertical"
            flexItem
            style={{
              height: "12%",

              marginLeft: "8px",
              marginRight: "8px",
              border: "1px solid #99999D",
              width: "1px", // You can set the background color
              backgroundColor: "#99999D",
            }}
          />
        </Grid>
        <Grid xs={5}>G</Grid>
      </Grid>
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const AccountDetails = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);

  const [connectorVisible, setConnectorVisible] = useState(false);
  const stepImages = [
    { completed: account, active: accountlight, intermediate: account },
    {
      completed: password,
      active: passworddisable,
      intermediate: passworddisable,
    },
    {
      completed: company,
      active: company,
      intermediate: company,
    },
    {
      completed: MapImg,
      active: MapImg,
      intermediate: MapImg,
    },
  ];
  const steps = getSteps();

  const handleNext = (data) => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      setConnectorVisible(true);
      alert("Hello otp");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function CustomStepIcon({
    active,
    completed,
    intermediate,
    stepIndex,
    stepImages,
  }) {
    console.log(stepIndex);
    console.log(stepImages[stepIndex]?.completed);
    if (completed) {
      console.log(stepIndex, "index");
      console.log(stepImages[stepIndex]?.completed);
      return <img src={stepImages[stepIndex]?.completed} alt="" />;
    }

    if (active) {
      console.log(stepImages[stepIndex]?.active);
      return <img src={stepImages[stepIndex]?.active} alt="" />;
    }

    if (intermediate) {
      return <img src={stepImages[stepIndex]?.intermediate} alt="" />;
    }

    return <img src={stepImages[stepIndex]?.active} alt="" />;
  }

  const ColorlibConnector = styled(StepConnector)(({ theme, isActive }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(95deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(95deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      width: "0%",
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
      width: isActive ? "100%" : "0%",
      transition: "width 1s, opacity 1s",
      opacity: isActive ? 1 : 0,
    },
    "&.connector-visible .MuiStepConnector-line": {
      width: "100%",
      opacity: 1,
    },
  }));

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Grid container>
          <Grid
            xs={12}
            sx={{
              height: "190px",
              border: "3px solid red",
              paddingTop: "50px",
            }}
          >
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<ColorlibConnector isActive={connectorVisible} />}
            >
              {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                stepProps.active = index === activeStep;

                stepProps.completed = index < activeStep;

                //   stepProps.intermediate = index > activeStep;

                return (
                  <Step key={index} {...stepProps}>
                    <StepLabel
                      {...labelProps}
                      StepIconComponent={() => (
                        <CustomStepIcon
                          stepIndex={index}
                          stepImages={stepImages}
                          active={stepProps.active}
                          completed={stepProps.completed}
                        />
                      )}
                    >
                      {step}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Grid
            xs={12}
            sx={{
              border: "3px solid red",
              paddingTop: "50px",
              height: "700px",
            }}
          >
            <FormProvider {...methods}>
              <form>
                {getStepContent(activeStep)}
                <Box sx={{ border: "3px solid green" }}>
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </Box>
              </form>
            </FormProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountDetails;
