import { Avatar, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Form } from 'formik';
import React, {useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import translate from "../../../../src/i18n/translate"

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
  function StyledDropzone(props) {
    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject
    } = useDropzone({accept: {'image/*': []}});
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isFocused,
      isDragAccept,
      isDragReject
    ]);
  
    return (
      <div className="container">
        <div {...getRootProps({style})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    );
}

const ProfileEdit = () => {
    return(
        <React.Fragment>
            {/* <Grid container direction="row" spacing={1}>
                    <Grid container justifyContent="center" spacing={1}>
                        <Grid md={4}>
                            <TextField name="requestor" />
                        </Grid>
                        <Grid md={4}>
                            <TextField name="status" />
                        </Grid>
                    </Grid>
            </Grid> */}




            <Box
                sx={{
                    marginLeft: "15%",
                    maxWidth: "75%",
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    {translate("editProfile")}
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                                autoComplete="userName"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Home Address"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Work Address"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <StyledDropzone />
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        {translate("confirm")}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                </Box>



                {/* <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                    </Grid>
                </Grid> */}


                {/* <Grid container justifyContent="center">
                    <Grid direction="row" sx={{
                        backgroundColor: "red"
                    }} spacing={1} >
                        <Grid xs={12} sm={6} md={6}>
                            <TextField 
                                required
                                id='firstName'
                                name='firstName'
                                label='First Name'
                                variant='standard'
                                />
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <TextField 
                                required
                                id='lastName'
                                name='lastName'
                                label='Last Name'
                                variant='standard'
                                />
                        </Grid>
                    </Grid>
                    <Grid direction="row" spacing={1}>
                        <Grid xs={12} sm={6} md={6}>
                            <TextField 
                                required
                                id='userName'
                                name='userName'
                                label='User Name'
                                variant='standard'
                                />
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <TextField 
                                required
                                id='email'
                                name='email'
                                label='Email'
                                variant='standard'
                                />
                        </Grid>
                    </Grid>
                </Grid> */}






                    {/* <Grid xs={12} sm={6} md={6}>
                        <TextField 
                            required
                            id='userName'
                            name='userName'
                            label='User Name'
                            autoComplete='given-name'
                            variant='standard'
                            />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                        <TextField 
                            required
                            id='email'
                            name='email'
                            label='Email'
                            autoComplete='given-name'
                            variant='standard'
                            />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                        <TextField 
                            required
                            id='userName'
                            name='userName'
                            label='User Name'
                            autoComplete='given-name'
                            variant='standard'
                            />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                        <TextField 
                            required
                            id='email'
                            name='email'
                            label='Email'
                            autoComplete='given-name'
                            variant='standard'
                            />
                    </Grid>
                </Grid> */}
        </React.Fragment>
    )
}

export default ProfileEdit;