import { About } from './ui/About';
import { HomeLayout } from './ui/HomeLayout';

export default function Home() {
  return (
    <HomeLayout
      hero={null}
      biosecurityIs={null}
      slider={null}
      producer={null}
      veterinarian={null}
      serviceProvider={null}
      aboutUs={<About />}
    />
  );
}
