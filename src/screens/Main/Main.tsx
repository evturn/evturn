import data from '@/data.json';
import { BlastWave, Logo } from '@/Logo';
import { Player } from '@/Player';

type Props = {
  children?: React.ReactNode;
};

export const Main = (props: Props) => {
  return (
    <>
      <Player urls={data.video}>
        <Logo>
          <BlastWave />
        </Logo>
      </Player>
    </>
  );
};