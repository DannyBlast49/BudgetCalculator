import Grid from '@mui/system/Unstable_Grid';
import React from 'react';
import PageHeader from '../common/PageHeader';
import { taxTableCallback } from '../common/constants';
import './Settings.scss';
import { getPayPeriodValue } from './helper';
import { taxBracket } from './types';
import AccordionPanel from './AccordionPanel';

/* Material UI */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

const getTaxTable = (taxTable: taxBracket[]) => {
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
  )
}

const Settings = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="page-settings">
      <PageHeader title="Settings" />
      <AccordionPanel
        name="single"
        title="Single"
        expanded={expanded === `singlePanel`}
        handleChange={handleChange}
        contents={getTaxTable(taxTableCallback.brackets.single)}
      />
      <AccordionPanel
        name="marriedFilingJointly"
        title="Married, Filing Jointly"
        expanded={expanded === `marriedFilingJointlyPanel`}
        handleChange={handleChange}
        contents={getTaxTable(taxTableCallback.brackets.marriedFilingJointly)}
      />
      <AccordionPanel
        name="marriedFilingSeparately"
        title="Married, Filing Separately"
        expanded={expanded === `marriedFilingSeparatelyPanel`}
        handleChange={handleChange}
        contents={getTaxTable(taxTableCallback.brackets.marriedFilingSeparately)}
      />
      <AccordionPanel
        name="headOfHousehold"
        title="Head of Household"
        handleChange={handleChange}
        expanded={expanded === `headOfHouseholdPanel`}
        contents={getTaxTable(taxTableCallback.brackets.headOfHousehold)}
      />
    </div>
  )
};

export default Settings;