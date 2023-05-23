import React, {useState} from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";

const ColorButton = withStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient(to bottom, #34409A, #14AAE4)",
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "linear-gradient(to bottom, #34409A, #14AAE4)"
    }
  }
}))(Button);

const UploadButton = withStyles(theme => ({
  root: {
    // backgroundImage: "linear-gradient(to bottom, #34409A, #14AAE4)",
    backgroundImage: "linear-gradient(to bottom, orange, green)",
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "linear-gradient(to bottom, #34409A, #14AAE4)"
    }
  }
}))(Button);

const WB = withStyles(theme => ({
  root: {
    backgroundColor: "White",
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#478FCC"
    }
  }
}))(Button);

const FixedBUtton = withStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient(to bottom, #34409A, #14AAE4)",
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "linear-gradient(to bottom, #34409A, #14AAE4)"
    }
  }
}))(Button);

const uploadButton = React.forwardRef((props, ref) => (
  <Input type="file" ref={ref} {...props} style={{ display: "hidden" }} />
));
export function WhiteButton({
  label,
  type,
  onClick,
  className,
  children,
  width,
  position
}) {
  return (
    <Grid
      container
      justifyContent={
        position === "right"
          ? "flex-end"
          : position === "center"
            ? "center"
            : "flex-start"
      }
    >
      <Grid item xs={12} md={width}>
        <WB
          className={className}
          variant="contained"
          type={!!type ? type : undefined}
          onClick={onClick}
        >
          {children}
        </WB>
      </Grid>
    </Grid>
  );
}
export function CustomizedPrimaryButton({
  label,
  type,
  onClick,
  className,
  width,
  position,
  inlineButton,
  fixedBUtton
}) {
  return inlineButton === true ? (
    <Grid item xs={12} sm={width}>
      <FormControl margin="dense" fullWidth="true">
        <ColorButton
          variant="contained"
          color="primary"
          onClick={onClick}
          className={className}
          type={!!type ? type : undefined}
        >
          {label}
        </ColorButton>
      </FormControl>
    </Grid>
  ) : fixedBUtton === true ? (
    <Grid
      container
      justifyContent={
        position === "right"
          ? "flex-end"
          : position === "center"
            ? "center"
            : "flex-start"
      }
    >
      <Grid item xs={12} sm={width} md={width} style={{
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        // transform: 'translateX(10%)',
        width: '200px'
      }}>
        <FormControl margin="dense" fullWidth="true">
          <ColorButton
            variant="contained"
            color="primary"
            onClick={onClick}
            className={className}
            type={!!type ? type : undefined}
          >
            {label}
          </ColorButton>
        </FormControl>
      </Grid>
    </Grid>

  ) : (
        <Grid
          container
          justifyContent={
            position === "right"
              ? "flex-end"
              : position === "center"
                ? "center"
                : "flex-start"
          }
        >
          <Grid item xs={12} md={width}>
            <ColorButton
              variant="contained"
              color="primary"
              onClick={onClick}
              className={className}
              type={!!type ? type : undefined}
            >
              {label}
            </ColorButton>
          </Grid>
        </Grid>
      );
}


export function FileUploadButton({ label, type, onClick, className, value, setFieldValue, width }) {
  const [file, setFile] = useState(null);
  return (
    <Grid
      container
      justifyContent={"flex-end"}
    >
      {console.log("file upload butoon ================", label, value)}
      <Grid item xs={12} md={width}>
        <UploadButton
          variant="contained"
          color="primary"
          component="label"
          onClick={onClick}
          onChange={e => {
            console.log("sledctecddd================== ", e.target.files[0])
            setFieldValue(value, e.target.files[0])
            setFile(e.target.files[0].name)
          }}
          className={className}
          style={{height:'50px'}}
        >
          {file===null ? label : file}
          <Input type="file" name={value} style={{ display: "none", height:"50px" }} />
        </UploadButton>
      </Grid>
    </Grid>
  );
}
