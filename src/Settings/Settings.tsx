import Grid from '@mui/system/Unstable_Grid';
import React from 'react';
import PageHeader from '../common/PageHeader';
import { taxTableCallback } from '../common/constants';
import './Settings.scss';
import { taxBracket } from './types';
import AccordionPanel from './AccordionPanel/AccordionPanel';
import TaxTable from './TaxTable/TaxTable';

const getTaxTable = (taxTable: taxBracket[]) => (<TaxTable taxTable={taxTable} />);

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