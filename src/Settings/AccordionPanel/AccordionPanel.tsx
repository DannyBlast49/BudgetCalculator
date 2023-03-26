import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

interface accordionPanelProps {
  name: string;
  title: string;
  expanded: boolean;
  handleChange: Function;
  contents: React.ReactNode;
}

const AccordionPanel = (props: accordionPanelProps) => {
  const { name, title, expanded, handleChange, contents } = props;
  return (
    <Accordion expanded={expanded} onChange={handleChange(`${name}Panel`)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}Panel-content`}
        id={`${name}Panel-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {contents}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionPanel;