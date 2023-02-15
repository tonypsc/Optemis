const ErrorMessage = ({ message }: Props) => (
  <div className="p-error content-center">
    <div>Opps something went wrong!!</div>
    <div>{message}</div>
  </div>
);

type Props = {
  message: string;
};

export { ErrorMessage };
