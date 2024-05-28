import './App.css';
import Advertisement from './components/Advertisement';
import Hero from './components/Hero';
import Product from './components/Product';

function App() {
  return (
    <main className='max-w-5xl m-auto space-y-2'>
      <Hero />
      <Advertisement />
      <Product />
    </main>
  );
}

export default App;
