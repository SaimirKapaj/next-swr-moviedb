import React from 'react';
import { useRouter } from 'next/router';

import { useLocalStorage } from 'hooks';
import Icon from 'components/Icon';

interface SearchModalProps {
  children: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SearchModal = ({ children, onClose }: SearchModalProps) => {
  return (
    <div className="fixed w-screen h-screen flex justify-center left-0 top-0 z-50 overscroll-auto">
      <div className="absolute w-screen h-screen bg-black opacity-75 left-0 top-0 z-30" onClick={onClose}></div>
      <div className="absolute md:rounded-lg p-4 md:max-w-screen-sm w-full md:h-auto h-screen bg-white transform md:translate-y-16 z-50 ">
        {children}
      </div>
    </div>
  );
};

const SearchBar = () => {
  const router = useRouter();
  const [historyStorage, setHistoryStorage] = useLocalStorage<string[]>('searchHistory', []);
  const [history, setHistory] = React.useState<string[]>(historyStorage);
  const [term, setTerm] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isModalOpen) {
      document.querySelector('body')!.classList.add('unscrollable');
      return;
    }
    document.querySelector('body')!.classList.remove('unscrollable');
  }, [isModalOpen]);

  const trimTerm = (searchTerm: string): string => {
    return searchTerm.toLowerCase().trim();
  };

  const redirect = (searchTerm: string): void => {
    if (trimTerm(searchTerm)) {
      if (!history.includes(trimTerm(searchTerm))) {
        setHistory([...history, trimTerm(searchTerm)]);
        setHistoryStorage([...history, trimTerm(searchTerm)]);
      }
      setIsModalOpen(false);
      setTerm('');
      router.push(`/search?q=${trimTerm(searchTerm)}`);
    }
  };

  const deleteHistoryItem = (itemIndex: number): void => {
    const newHistory = history.filter((_, index) => index !== itemIndex);

    setHistory(newHistory);
    setHistoryStorage(newHistory);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    redirect(term);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative cursor-pointer flex items-center p-3 sm:p-2 px-4 sm:px-3  bg-gray-100 border border-gray-300 rounded focus:outline-none sm:w-48 w-full"
      >
        <Icon name="search" className="w-6 sm:w-5 sm:ml-0 mr-2 -ml-px" />
        <span className="text-gray-600 text-lg">Search</span>
      </button>
      {isModalOpen ? (
        <SearchModal onClose={() => setIsModalOpen(false)}>
          <div className="flex items-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <label className="flex items-center w-full relative text-lg">
                <input
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  autoFocus
                  className="p-3 pl-12 text-lg border border-teal-500 focus:outline-none w-full rounded"
                />
                <Icon name="search" className="w-6 absolute ml-4" />
                {term ? (
                  <span
                    onClick={() => setTerm('')}
                    className="absolute cursor-pointer right-0 mr-3 text-white bg-teal-500 hover:bg-teal-600 p-1 rounded-full focus:outline-none"
                  >
                    <Icon name="cross" className="w-4" />
                  </span>
                ) : null}
              </label>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="ml-3 rounded-full text-teal-600 md:hidden focus:outline-none"
            >
              Close
            </button>
          </div>
          {!!history.length ? (
            <div className="mt-3">
              <span className="ml-1">Recent</span>
              <div className="flex flex-wrap w-full">
                {history.map((term, index) => (
                  <label key={index} className="flex items-center relative mr-2 mt-2">
                    <button
                      onClick={() => redirect(term)}
                      className="flex items-center justify-between pl-3 py-2 pr-6  text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none"
                    >
                      <span className="mr-2">{term}</span>
                    </button>
                    <button
                      onClick={() => deleteHistoryItem(index)}
                      className="absolute right-0 mr-2 cursor-pointer bg-gray-100 hover:bg-gray-300 p-1 rounded-full focus:outline-none"
                    >
                      <Icon name="cross" className="w-3" />
                    </button>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </SearchModal>
      ) : null}
    </>
  );
};

export default SearchBar;
