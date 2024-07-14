import Typography from '@/components/Typography';

type ErrorPageProps = {
  message: string;
};
const ErrorPage = (props: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Typography as="p" size="md" className="text-center text-[#999]">
        {props.message}
      </Typography>
    </div>
  );
};
export default ErrorPage;
