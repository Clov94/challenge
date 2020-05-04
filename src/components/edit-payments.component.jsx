import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

export const EditPaymentsComponent = ({
  id,
  toPay,
  onUpdatePayment,
  onDeletePayment,
}) => {
  const [switchButton, setSwitchButton] = React.useState(`Edit-${id}`);
  const [editPayment, setEditPayment] = React.useState("");

  const classes = useStyles();
  return (
    <div className={classes.alignBox}>
      <TextField
        disabled={switchButton === `Edit-${id}`}
        id={`${id}`}
        defaultValue={toPay}
        variant="outlined"
        onChange={(e) => setEditPayment(e.target.value)}
      />
      {switchButton === `Edit-${id}` ? (
        <Button
          id={`Edit-${id}`}
          variant="contained"
          color="primary"
          onClick={() => {
            setSwitchButton(`Save-${id}`);
          }}
        >
          <Typography>Edit</Typography>
        </Button>
      ) : (
        <Button
          id={`Save-${id}`}
          variant="contained"
          color="primary"
          onClick={() => {
            editPayment === ""
              ? onUpdatePayment(id, toPay)
              : onUpdatePayment(id, editPayment);
            setSwitchButton(`Edit-${id}`);
          }}
        >
          <Typography>Save</Typography>
        </Button>
      )}
      <Button
        id={`delete-${id}`}
        variant="contained"
        color="secondary"
        onClick={() => onDeletePayment(id)}
      >
        <Typography>X</Typography>
      </Button>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  alignBox: { float: "left" },
}));
