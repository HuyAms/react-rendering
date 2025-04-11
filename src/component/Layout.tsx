import {Link, Outlet, useLocation} from 'react-router-dom';
import routes from '../routes';
import {useState} from 'react';

export const slideTitles: Record<string, {title: string; hint?: string}> = {
  'slide-1': {
    title: 'Why rendering 1',
    hint: 'State changes',
  },
  'slide-2': {
    title: 'Why rendering 2',
    hint: '⚠️ Props changes',
  },
  'slide-3': {
    title: 'Pure component - re-render?',
    hint: 'The parent component re-renders',
  },
  'slide-4': {
    title: 'Slow render 🔁',
    hint: 'The component is re-creating every time. Can we create it only once?',
  },
  'slide-5': {
    title: 'Unnecessary re-renders 🔁',
    hint: '"Lift" the expensive component to a parent where it will be rendered less often',
  },
  'slide-6': {
    title: 'Unnecessary re-renders (Continue) 🔁',
    hint: 'React Memo',
  },
  'slide-7': {
    title: 'Problem with React.memo? 🔁',
    hint: 'props as array, object, function',
  },
  'slide-8': {
    title: 'React Context API 🔁',
    hint: 'Fix the props drilling',
  },
  'slide-9': {
    title: 'Optimize React Context - Problem? 🔁',
    hint: 'Provider Component',
  },
  'slide-10': {
    title: 'Optimize React Context (Continue) 🔁',
    hint: 'Memorize the value',
  },
};

export function Layout() {
  const path = useLocation();
  const [showHint, setShowHint] = useState(false);
  const slidePath = path.pathname.split('/').pop();

  const slideRoutes = routes.find(route => route.path === '/slides')?.children || [];
  const numberOfSlides = slideRoutes.length;
  const currentSlideNumber = Number(path.pathname.split('-').pop());

  function getSlideTitle() {
    const title = slideTitles[slidePath as string]?.title;

    if (!title) {
      return slidePath;
    }

    return `${slidePath} - ${title}`;
  }

  function getHint() {
    return slideTitles[slidePath as string]?.hint;
  }

  function hideHint() {
    setShowHint(false);
  }

  return (
    <div>
      <div className="flex flex-col gap-3 justify-center mb-6">
        <h1 className="text-2xl text-center">{getSlideTitle()}</h1>
        {!showHint ? (
          <button className="bold" onClick={() => setShowHint(true)}>
            Show hint
          </button>
        ) : (
          <p className="text-center">{getHint()}</p>
        )}
      </div>
      <Outlet />
      <div className="flex mt-2 justify-between">
        <Link
          onClick={hideHint}
          className={`link text-2xl ${currentSlideNumber <= 1 ? 'opacity-50 pointer-events-none' : ''}`}
          to={`/slides/slide-${currentSlideNumber - 1}`}
        >
          Previous
        </Link>
        <Link onClick={hideHint} className={`link text-2xl`} to={`/`}>
          Home
        </Link>
        <Link
          onClick={hideHint}
          className={`link text-2xl ${currentSlideNumber >= numberOfSlides ? 'opacity-50 pointer-events-none' : ''}`}
          to={`/slides/slide-${currentSlideNumber + 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
