import React from 'react';
import { taxBracket } from '../types';
import { getPayPeriodValue } from '../helper';
import Grid from '@mui/system/Unstable_Grid';
import './TaxTable.scss';

interface TaxTableProps {
  taxTable: taxBracket[];
}

const TaxTable = (props: TaxTableProps) => {
  const { taxTable } = props;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="grid-taxtable">
      <Grid container spacing={2} columns={17}>
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
                  <div>{formatter.format(getPayPeriodValue(bracket.over))}</div>
                </Grid>
                <Grid xs={5}>
                  <div>{formatter.format(getPayPeriodValue(bracket.under))}</div>
                </Grid>
                <Grid xs={5}>
                  <div>{formatter.format(getPayPeriodValue(bracket.plus))}</div>
                </Grid>
              </React.Fragment>
            );
          })
        }
      </Grid>
    </div>
  );
};

export default TaxTable;