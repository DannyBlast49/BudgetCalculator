import React, { useState } from 'react';
import { taxBracket } from '../types';
import { getPayPeriodValue } from '../helper';
import Grid from '@mui/system/Unstable_Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './TaxTable.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RestartAlt, SaveAlt } from '@mui/icons-material';

interface TaxTableProps {
  taxTable: taxBracket[];
}

const TaxTable = (props: TaxTableProps) => {
  const { taxTable } = props;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [isEdit, setEdit] = useState(false);

  const getCell = (cellId: string, isEdit: boolean, amount: number) => {
    return( isEdit
      ? <TextField id={cellId} type="number" variant="standard" defaultValue={amount} /> 
      : formatter.format(getPayPeriodValue(amount))
    )
  }

  return (
    <div className="grid-taxtable">
      <Grid container spacing={2} columns={17}>
        <Grid xs={17} className="edit-table">
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked={false} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEdit(event.target.checked);
              }}/>}
              label="Edit"
            />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <div className="column-header"></div>
        </Grid>
        <Grid xs={5}>
          <div className="column-header">Over</div>
        </Grid>
        <Grid xs={5}>
          <div className="column-header">But not over</div>
        </Grid>
        <Grid xs={5}>
          <div className="column-header">Plus amount over</div>
        </Grid>
        { 
          taxTable.map((bracket: taxBracket) => {
            return (
              <React.Fragment key={bracket.rate}>
                <Grid xs={2}>
                  <div>{bracket.rate}</div>
                </Grid>
                <Grid xs={5}>
                  <div>{getCell("over", isEdit, bracket.over)}</div>
                </Grid>
                <Grid xs={5}>
                  <div>{getCell("under", isEdit, bracket.under)}</div>
                </Grid>
                <Grid xs={5}>
                  <div>{getCell("plus", isEdit, bracket.plus)}</div>
                </Grid>
              </React.Fragment>
            );
          })
        }
        {
          isEdit && <>
            <Grid xs={11}>
              <div className="footer-message">Amounts are shown in annual amount in accordance to Tax reports</div>
            </Grid>
            <Grid xs={3}>
              <Button variant="outlined" className="edit-action-btn" startIcon={<RestartAlt />}>Reset</Button>
            </Grid>
            <Grid xs={3}>
              <Button variant="contained" startIcon={<SaveAlt />}>Save</Button>
            </Grid>
          </>
        }
      </Grid>
    </div>
  );
};

export default TaxTable;