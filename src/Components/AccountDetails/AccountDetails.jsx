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
import passworddisable from "../../assets/Images/Component 3 (3).png";
import passwordcomp from "../../assets/Images/Component 3 (4).png";
import MapImg from "../../assets/Images/Component 4.png";
import company from "../../assets/Images/Component 3 (1).png";
import companyactive from "../../assets/Images/Component 3 (5).png";
import companycomp from "../../assets/Images/Frame 14.png";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import googleImg from "../../assets/Images/search 1.png";
import fbImg from "../../assets/Images/facebook (1) 1.png";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ArrowRight from "../../assets/Images/arrow-right.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { firebase, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import OtpInput from "otp-input-react";
import MapPreview from "./MapPreview";
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

function getSteps() {
  return ["Account Detail", "Create Password", "Company Details", "Choose Map"];
}
const BasicForm = ({
  setPhone,
  setEmail,
  email,
  phone,
  activeStep,
  setActiveStep,
  setAccessToken,
}) => {
  const { control } = useFormContext();
  const API = axios.create({ baseURL: "http://localhost:8090" });

  const navigate = useNavigate();
  const LoginGoogle = (accessToken) =>
    API.post("/users/signin", {
      googleAccessToken: accessToken,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("username", res.data.result.firstName);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status == 400)
          window.alert("User Already Exists.Please Login");
      });

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    console.log(accessToken);
    setActiveStep(2);
    setAccessToken(accessToken);
    console.log(activeStep, "hgjh");
    LoginGoogle(accessToken);
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const responseFacebook = (response) => {
    API.post("/users/signin", {
      facebookAccessToken: response.accessToken,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("username", res.data.result.firstName);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status == 400)
          window.alert("User Already Exists.Please Login");
      });
  };

  console.log(setPhone);
  return (
    <>
      <Grid container sx={{ height: "600px" }}>
        <Grid xs={6} sx={{ paddingLeft: "80px" }}>
          <Grid sx={{ padding: "20px" }}>
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
                name="email"
                render={({ field }) => (
                  <input
                    id="email"
                    label="email"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                name="phone"
                render={({ field }) => (
                  <input
                    id="phone"
                    label="phone"
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
            <div id="recaptcha-container"></div>
          </Grid>
        </Grid>
        <Grid xs={0.5}>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              height: "13%",
              marginTop: "40px",
              marginLeft: "8px",
              marginRight: "8px",
              border: "1px solid #99999D",
              width: "1px", // You can set the background color
              backgroundColor: "#99999D",
            }}
          />

          <Typography
            style={{
              width: "13px",
              height: "17px",
              //styleName: 14px/boyd-small;
              fontFamily: "Aileron",
              backgroundColor: "99999D",
              marginLeft: "5px",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "17px",
              letterspacing: "0em",
              textalign: "left",
            }}
          >
            or
          </Typography>

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
        <Grid xs={5}>
          <Box sx={{ paddingTop: "65px" }}>
            <Button
              onClick={() => login()}
              style={{
                width: "457px",
                height: "56px",
                padding: "12px",
                borderRadius: "12px",
                gap: "12px",
                background: "#F7F8F8",
                marginBottom: "10px",
              }}
            >
              <img src={googleImg} style={{ padding: "10px" }} alt="" />
              <Typography
                style={{
                  width: "139px",
                  height: "17px",
                  //styleName: 14px/bosy-small-semi;
                  fontFamily: "Aileron",
                  fontSize: "11px",
                  fontWeight: "600",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Login with Google
              </Typography>
            </Button>
            <Button
              style={{
                width: "457px",
                height: "56px",
                padding: "12px",
                borderRadius: "12px",
                gap: "12px",
                background: "#F7F8F8",
              }}
            >
              <img src={fbImg} style={{ padding: "10px" }} alt="" />
              <Typography
                style={{
                  width: "139px",
                  height: "17px",
                  //styleName: 14px/bosy-small-semi;
                  fontFamily: "Aileron",
                  fontSize: "11px",
                  fontWeight: "600",
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Login with Facebook
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
const ContactForm = ({
  setPassword,
  setCPassword,
  password,
  cpassword,
  email,
}) => {
  const { control } = useFormContext();
  console.log(password);
  return (
    <>
      <Grid container sx={{ height: "600px" }}>
        <Grid xs={12} sx={{ paddingLeft: "80px" }}>
          <Grid
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Box
                sx={{
                  marginBottom: "15px",
                }}
              >
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
                  Create Password
                </Typography>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <input
                      id="password"
                      label="password"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                />
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
                  Confirm new password
                </Typography>
                <Controller
                  control={control}
                  name="cpassword"
                  render={({ field }) => (
                    <input
                      id="cpassword"
                      label="cpassword"
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
                        color: "black",
                      }}
                      onChange={(e) => {
                        setCPassword(e.target.value);
                        console.log(e.target.value);
                      }}
                      value={cpassword}
                    />
                  )}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
const CompanyDetails = ({
  setCompanyName,
  setIndustry,
  setPosition,
  setCompanySize,
  industry,
  companySize,
}) => {
  const { control } = useFormContext();
  const buttons = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Construction",
    "Hopitality",
    "Transportation",
    "Energy",
    "Professional services",
  ];
  const companysizes = ["0-10", "10-50", "50-100", "100-200", "200-400"];
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (button) => {
    if (button === industry) {
      setIndustry(null);
    } else {
      setIndustry(button);
    }
  };
  const handleCompanySize = (size) => {
    if (size === companySize) {
      setCompanySize(null);
    } else {
      setCompanySize(size);
    }
  };

  return (
    <>
      <Grid container sx={{ height: "600px" }}>
        <Grid xs={12} sx={{ paddingLeft: "80px" }}>
          <Grid
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Box
                sx={{
                  marginBottom: "15px",
                }}
              >
                <Typography
                  style={{
                    width: "210px",
                    height: "17px", //styleName: 14px/boyd-small;
                    fontFamily: "Aileron",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#303039",
                    marginBottom: "8px",
                  }}
                >
                  Company Name
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
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  )}
                />
              </Box>
              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  style={{
                    height: "17px", //styleName: 14px/boyd-small;
                    fontFamily: "Aileron",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#303039",
                    marginBottom: "8px",
                  }}
                >
                  Your Position in Company
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
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  width: "457px",
                  marginBottom: "20px",
                  gap: "8px",
                }}
              >
                <Typography
                  style={{
                    width: "210px",
                    height: "17px", //styleName: 14px/boyd-small;
                    fontFamily: "Aileron",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#303039",
                    marginBottom: "8px",
                  }}
                >
                  Industry
                </Typography>
                {buttons.map((button) => (
                  <Button
                    key={button}
                    onClick={() => handleButtonClick(button)}
                    style={{
                      backgroundColor: button === industry ? "blue" : "white",
                      color: button === industry ? "white" : "blue",
                      //   padding: "10px 20px",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "10px",
                      //   width: "141px",
                      height: "49px",
                      padding: "12px, 24px, 12px, 24px",
                      borderRadius: "40px",
                      marginBottom: "10px",
                      background: "white",
                      border: "1px",
                      gap: "4px",
                      border: "1px solid #B4B4B480",
                      borderImageSource: "#B4B4B480",
                      animationTimingFunction: "ease-out",
                      animationDuration: "300ms",
                      transition: "opacity 0.3s ease-out",
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
                      {button}
                    </Typography>
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  width: "457px",

                  gap: "8px",
                }}
              >
                <Typography
                  style={{
                    width: "210px",
                    height: "17px", //styleName: 14px/boyd-small;
                    fontFamily: "Aileron",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#303039",
                    marginBottom: "8px",
                  }}
                >
                  Company Sizes
                </Typography>
                {companysizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => handleCompanySize(size)}
                    style={{
                      backgroundColor: size === companySize ? "blue" : "white",
                      color: size === companySize ? "white" : "blue",
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
                      animationTimingFunction: "ease-out",
                      animationDuration: "300ms",
                      transition: "opacity 0.3s ease-out",
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
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
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

const AccountDetails = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [final, setfinal] = useState("");
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      phone: "",
      password: "",
      cpassword: "",
      email: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [otpopen, setotpOpen] = React.useState(false);
  const [phoneopen, setPhoneopen] = React.useState(false);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [companySize, setCompanySize] = useState(0);
  const [industry, setIndustry] = useState("");
  const [accesstoken, setAccessToken] = useState("");
  const [connectorVisible, setConnectorVisible] = useState(false);
  const navigate = useNavigate();
  const stepImages = [
    { completed: account, active: accountlight, intermediate: account },
    {
      completed: passwordcomp,
      active: passworddisable,
      intermediate: passworddisable,
    },
    {
      completed: companycomp,
      active: companyactive,
      intermediate: company,
    },
    {
      completed: MapImg,
      active: MapImg,
      intermediate: MapImg,
    },
  ];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <BasicForm
            setPhone={setPhone}
            setEmail={setEmail}
            email={email}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            setAccessToken={setAccessToken}
          />
        );

      case 1:
        return (
          <ContactForm
            setPassword={setPassword}
            setCPassword={setCPassword}
            password={password}
            cpassword={cpassword}
            email={email}
          />
        );

      case 2:
        return (
          <CompanyDetails
            companyname={companyName}
            setCompanyName={setCompanyName}
            position={position}
            setPosition={setPosition}
            setIndustry={setIndustry}
            industry={industry}
            companySize={companySize}
            setCompanySize={setCompanySize}
          />
        );
      case 3:
        return <MapPreview />;
    }
  }

  const steps = getSteps();
  console.log(otp, "otp");

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        console.log(result, "result");
        alert("correct");
        setotpOpen(false);
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  const handleNext = (data) => {
    console.log(activeStep, "step");
    if (activeStep < steps.length - 1) {
      if (activeStep == 0) {
        console.log(phone?.length);
        if (phone != 0) {
          let verify = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container"
          );
          auth
            .signInWithPhoneNumber(phone, verify)
            .then((result) => {
              setfinal(result);
              console.log(result, "result");
              alert("code sent");
              setotpOpen(true);
              setActiveStep(activeStep + 1);
              console.log(activeStep, "stepps");
            })
            .catch((err) => {
              alert(err);
              window.location.reload();
            });
        } else {
          // window.alert("Please Enter email and phone number to proceed");
          setActiveStep(activeStep + 1);
        }
      } else if (activeStep == 1) {
        console.log(password, "password");
        if (password != cpassword) {
          alert("password doesnt match");
        } else {
          // const email = "thaslibanujas7@gmail.com";
          // const password = "password123";

          // firebase
          //   .auth()
          //   .createUserWithEmailAndPassword(email, password)
          //   .then((userCredential) => {
          //     // Send the verification email
          //     const user = userCredential.user;
          //     user
          //       .sendEmailVerification()
          //       .then(() => {
          //         // Verification email sent successfully
          //         console.log("Verification email sent.");
          //       })
          //       .catch((error) => {
          //         console.error("Error sending verification email:", error);
          //       });
          //   })
          //   .catch((error) => {
          //     console.error("Error creating user:", error);
          //   });

          axios
            .post("/verifyemail", { email: email })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          setActiveStep(activeStep + 1);
        }
      } else if (activeStep == 2) {
        console.log(methods);
        const newData = {
          phone: phone,
          email: email,
          password: password,
          companyName: companyName,
          industry: industry,
          position: position,
          companySize: companySize,
        };
        console.log("call api");
        if (accesstoken) {
          const API = axios.create({ baseURL: "http://localhost:8090" });

          API.post("/users/signup", {
            googleAccessToken: accesstoken,
            companyName: companyName,
            industry: industry,
            position: position,
            companySize: companySize,
          })
            .then((res) => {
              console.log(res);
              localStorage.setItem("username", res.data.result.firstName);
              setActiveStep(activeStep + 1);
            })
            .catch((err) => {
              if (err) window.alert("User Already Exists.Please Login");
            });
        } else {
          axios
            .post("http://localhost:8090/users/adduser", newData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          setActiveStep(activeStep + 1);
        }
      } else if (activeStep > 0 && activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
        console.log(activeStep, "step");
      }
    }
    console.log(activeStep, "step");
  };
  const handleOtpClose = () => {
    setotpOpen(false);
  };
  const handlePhoneClose = () => {
    setPhoneopen(false);
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
    if (completed) {
      return <img src={stepImages[stepIndex]?.completed} alt="" />;
    }

    if (active) {
      return <img src={stepImages[stepIndex]?.active} alt="" />;
    }

    if (intermediate) {
      return <img src={stepImages[stepIndex]?.intermediate} alt="" />;
    }

    return <img src={stepImages[stepIndex]?.intermediate} alt="" />;
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

  const styles = {
    input: {
      "&::before": {
        borderBottom: "none",
      },
      "&::after": {
        borderBottom: "none",
      },
    },
  };

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Grid container>
          <Grid
            xs={12}
            sx={{
              height: "190px",

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
              paddingTop: "50px",
              height: "700px",
            }}
          >
            <FormProvider {...methods}>
              <form>
                {getStepContent(activeStep)}
                {/* <div id="recaptcha-container"></div> */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    style={{
                      width: "85px",
                      height: "49px",
                      padding: "12px, 24px, 12px, 24px",
                      borderRadius: "40px",
                      gap: "4px",
                      boxShadow: "3px 4px 9px 0px #FFFFFF14 inset",
                    }}
                  >
                    <Typography
                      style={{ textTransform: "none", color: "#99999D" }}
                    >
                      {" "}
                    </Typography>
                    Back
                  </Button>

                  <Button
                    className={classes.button}
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
                    <Typography
                      style={{ color: "#0B0B16", textTransform: "none" }}
                    >
                      Continue
                    </Typography>
                    <img src={ArrowRight} alt="" />
                  </Button>
                </Box>
              </form>
            </FormProvider>
            <Dialog
              open={otpopen}
              onClose={handleOtpClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogContent>
                <DialogContentText>
                  <Typography
                    style={{
                      //styleName: body-big;
                      fontFamily: "Aileron",
                      fontSize: "22px",
                      fontWeight: "400",
                      lineHeight: "29px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0B0B16",
                    }}
                  >
                    Verify OTP
                  </Typography>
                  <Typography
                    style={{
                      //styleName: 14px/boyd-small;
                      fontFamily: "Aileron",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "17px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#9E9E9E",

                      backgroundBlendMode: "luminosity",
                    }}
                  >
                    Please enter the OTP code sent to your number.
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Aileron",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "17px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#9E9E9E",
                      backgroundBlendMode: "luminosity",
                    }}
                  >
                    +91 {phone}
                  </Typography>
                  <Box
                    style={{
                      width: "306px",
                      height: "85px",
                      marginTop: "12px",
                      gap: "12px",
                      display: "flex",
                    }}
                  >
                    <OtpInput
                      value={otp}
                      inputStyles={{
                        width: "45px",
                        height: "56px",
                        gap: "5px",
                      }}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className={classes.input}
                    ></OtpInput>
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.button}
                  onClick={handleOtpClose}
                  style={{
                    width: "85px",
                    height: "49px",
                    padding: "12px, 24px, 12px, 24px",
                    borderRadius: "40px",
                    gap: "4px",
                    boxShadow: "3px 4px 9px 0px #FFFFFF14 inset",
                  }}
                >
                  <Typography
                    style={{ textTransform: "none", color: "#99999D" }}
                  >
                    {" "}
                  </Typography>
                  cancel
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={ValidateOtp}
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
                  <Typography
                    style={{ color: "#0B0B16", textTransform: "none" }}
                  >
                    Continue
                  </Typography>
                  <img src={ArrowRight} alt="" />
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={phoneopen}
              onClose={handlePhoneClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogContent>
                <DialogContentText>
                  <Typography
                    style={{
                      //styleName: body-big;
                      fontFamily: "Aileron",
                      fontSize: "22px",
                      fontWeight: "400",
                      lineHeight: "29px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0B0B16",
                    }}
                  >
                    Enter Phone Number
                  </Typography>
                  <Typography
                    style={{
                      //styleName: 14px/boyd-small;
                      fontFamily: "Aileron",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "17px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#9E9E9E",

                      backgroundBlendMode: "luminosity",
                    }}
                  >
                    an otp will be sent to this number verification
                  </Typography>

                  <Box
                    style={{
                      width: "306px",
                      height: "85px",
                      marginTop: "12px",
                      gap: "12px",
                      display: "flex",
                    }}
                  >
                    <Controller
                      name="phone"
                      render={({ field }) => (
                        <input
                          id="phone"
                          label="phone"
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
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      )}
                    />
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.button}
                  onClick={handleOtpClose}
                  style={{
                    width: "85px",
                    height: "49px",
                    padding: "12px, 24px, 12px, 24px",
                    borderRadius: "40px",
                    gap: "4px",
                    boxShadow: "3px 4px 9px 0px #FFFFFF14 inset",
                  }}
                >
                  <Typography
                    style={{ textTransform: "none", color: "#99999D" }}
                  >
                    {" "}
                  </Typography>
                  Back
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={ValidateOtp}
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
                  <Typography
                    style={{ color: "#0B0B16", textTransform: "none" }}
                  >
                    Continue
                  </Typography>
                  <img src={ArrowRight} alt="" />
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountDetails;
