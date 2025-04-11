import {slideTitles} from '../component/Layout';
import routes from '../routes';
import {Link} from 'react-router-dom';

export function Home() {
  const slideRoutes = routes.find(route => route.path === '/slides')?.children || [];

  function getSlideTitle(item: (typeof slideRoutes)[number]) {
    const title = slideTitles[item.path]?.title;

    if (!title) {
      return item.path;
    }

    return `${item.path} - ${title}`;
  }

  return (
    <>
      <h1 className="text-5xl mb-5">TechTalk</h1>
      <ul className="flex flex-col gap-2">
        {slideRoutes.map(item => (
          <li className="text-2xl">
            <Link
              className="text-blue-600 hover:text-blue-800 hover:underline"
              to={`/slides/${item.path}`}
            >
              {getSlideTitle(item)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
