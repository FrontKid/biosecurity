import { About } from './ui/About';
import { BiosecurityIs } from './ui/BiosecurityIs';
import { HomeLayout } from './ui/HomeLayout';

export default function Home() {
  return (
    <HomeLayout
      hero={null}
      biosecurityIs={<BiosecurityIs />}
      slider={null}
      producer={null}
      veterinarian={null}
      serviceProvider={null}
      aboutUs={<About />}
    />
  );
}
