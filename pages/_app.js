// pages/_app.js
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <main className="mt-16 p-6">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;