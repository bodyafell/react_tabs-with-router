import { Link, Outlet, useParams } from 'react-router-dom';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  // tabId береться з вкладеного маршруту :tabId
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              // Додаємо is-active тільки якщо tab.id збігається з параметром з URL
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Сюди підставляється або заглушка index-роута, або TabContent */}
      <Outlet />
    </>
  );
};
