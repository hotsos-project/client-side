interface Props {
  children: React.ReactNode;
}

const AfterLoginLayout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default AfterLoginLayout;
