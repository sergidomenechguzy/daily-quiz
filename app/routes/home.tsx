import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Daily Quiz' },
    { name: 'description', content: 'Get a daily quiz question' },
  ];
}

export default function Home() {
  return <Welcome />;
}
