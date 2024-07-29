import { titleStyle } from './title.css';

type TitleProps = {
  content: string;
};

export const Title: React.FC<TitleProps> = ({ content = '긴급 신고' }) => {
  const titleClass = titleStyle;
  return <div className={titleClass}>{content}</div>;
};
