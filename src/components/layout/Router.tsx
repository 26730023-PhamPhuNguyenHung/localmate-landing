import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {}
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) {
        const headerHeight = 84;
        const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
      return;
    }

    if (to.includes('#')) {
      const [pathPart, hashPart] = to.split('#');
      const targetPath = pathPart || '/';
      const isDifferentPath = window.location.pathname !== targetPath;

      window.history.pushState({}, '', to);
      if (isDifferentPath) {
        setCurrentPath(targetPath);
      }

      setTimeout(() => {
        const el = document.getElementById(hashPart) || document.querySelector(`[name="${hashPart}"]`);
        if (el) {
          const headerHeight = 84;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }, isDifferentPath ? 150 : 20);
      return;
    }

    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export const Link: React.FC<LinkProps> = ({ to, className, style, children, onClick, title, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style} title={title} {...props}>
      {children}
    </a>
  );
};
