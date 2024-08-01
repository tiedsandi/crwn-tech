import Header from '@/components/header/Header';
import './Global.scss';
import Classes from './app.module.scss';

export default function Home() {
  return (
    <main className={Classes.container}>
      <Header />
    </main>
  );
}
