import { SideBar, useAppContext } from '@portal/components';

export function App() {
  const {theme} = useAppContext()

  return (
    <div>
      <SideBar />
      {JSON.stringify(theme)}
    </div>
  );
}

export default App;
