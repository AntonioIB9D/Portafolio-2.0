import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex flex-1 justify-center items-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
