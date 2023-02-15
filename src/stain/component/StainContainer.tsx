import { useStains } from '../hook/useStains';

const StainContainer = ({ labId }: Props) => {
  const { stains } = useStains(labId);

  return <div>{stains?.length}</div>;
};

type Props = {
  labId: string;
};

export { StainContainer };
