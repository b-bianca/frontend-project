import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = useState({
    AXÉ: false,
    BLUES: false,
    COUNTRY: false,
    DISCO: false,
    ELETRONICA: false,
    FORRO: false,
    FUNK: false,
    HEAVYMETAL: false,
    HIPHOP: false,
    INDIE: false,
    FOLK: false,
    JAZZ: false,
    MPB: false,
    NEWWAVE: false,
    POP: false,
    PUNK: false,
    REGGAE: false,
    ROCK: false,
    SAMBA: false,
    SOFTROCK: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { AXÉ, BLUES, BOSSANOVA, COUNTRY, DISCO, ELETRONICA, FORRO, FUNK, HEAVYMETAL,
    HIPHOP, INDIE, FOLK, JAZZ, MPB, NEWWAVE, POP, PUNK, REGGAE, ROCK, SAMBA, SOFTROCK } = state;
  const error = [AXÉ, BLUES, BOSSANOVA, COUNTRY, DISCO, ELETRONICA, FORRO, FUNK, HEAVYMETAL,
    HIPHOP, INDIE, FOLK, JAZZ, MPB, NEWWAVE, POP, PUNK, REGGAE, ROCK, SAMBA, SOFTROCK].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Qual gênero da música?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={AXÉ} onChange={handleChange} name="AXÉ" />}
            label="AXÉ"
          />
          <FormControlLabel
            control={<Checkbox checked={BLUES} onChange={handleChange} name="BLUES" />}
            label="BLUES"
          />
          <FormControlLabel
            control={<Checkbox checked={BOSSANOVA} onChange={handleChange} name="BOSSANOVA" />}
            label="BOSSA NOVA"
          />
             <FormControlLabel
            control={<Checkbox checked={COUNTRY} onChange={handleChange} name="COUNTRY" />}
            label="COUNTRY"
          />
          <FormControlLabel
            control={<Checkbox checked={DISCO} onChange={handleChange} name="DISCO" />}
            label="DISCO"
          />
          <FormControlLabel
            control={<Checkbox checked={ELETRONICA} onChange={handleChange} name="ELETRONICA" />}
            label="ELETRONICA"
          />
             <FormControlLabel
            control={<Checkbox checked={FORRO} onChange={handleChange} name="FORRO" />}
            label="FORRÓ"
          />
          <FormControlLabel
            control={<Checkbox checked={FUNK} onChange={handleChange} name="FUNK" />}
            label="FUNK"
          />
          <FormControlLabel
            control={<Checkbox checked={HEAVYMETAL} onChange={handleChange} name="HEAVYMETAL" />}
            label="HEAVY METAL"
          />
             <FormControlLabel
            control={<Checkbox checked={HIPHOP} onChange={handleChange} name="HIPHOP" />}
            label="HIP HOP"
          />
          <FormControlLabel
            control={<Checkbox checked={INDIE} onChange={handleChange} name="INDIE" />}
            label="INDIE"
          />
          <FormControlLabel
            control={<Checkbox checked={FOLK} onChange={handleChange} name="FOLK" />}
            label="FOLK"
          />
             <FormControlLabel
            control={<Checkbox checked={JAZZ} onChange={handleChange} name="JAZZ" />}
            label="JAZZ"
          />
          <FormControlLabel
            control={<Checkbox checked={MPB} onChange={handleChange} name="MPB" />}
            label="MPB"
          />
          <FormControlLabel
            control={<Checkbox checked={NEWWAVE} onChange={handleChange} name="NEWWAVE" />}
            label="NEW WAVE"
          />
             <FormControlLabel
            control={<Checkbox checked={POP} onChange={handleChange} name="POP" />}
            label="POP"
          />
          <FormControlLabel
            control={<Checkbox checked={PUNK} onChange={handleChange} name="PUNK" />}
            label="PUNK"
          />
          <FormControlLabel
            control={<Checkbox checked={REGGAE} onChange={handleChange} name="REGGAE" />}
            label="REGGAE"
          />
             <FormControlLabel
            control={<Checkbox checked={ROCK} onChange={handleChange} name="ROCK" />}
            label="ROCK"
          />
          <FormControlLabel
            control={<Checkbox checked={SAMBA} onChange={handleChange} name="SAMBA" />}
            label="SAMBA"
          />
          <FormControlLabel
            control={<Checkbox checked={SOFTROCK} onChange={handleChange} name="SOFTROCK" />}
            label="SOFT ROCK"
          />
        </FormGroup>
        <FormHelperText>Escolha até 03 gêneros</FormHelperText>
      </FormControl>
    </div>
  );
}