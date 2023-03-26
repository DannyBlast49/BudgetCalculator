import './common.scss';

interface PageHeaderProps {
  title: string;
}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <h2 className="page-header">{props.title}</h2>
  );
};

export default PageHeader;