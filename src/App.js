import './App.css';
import { Pixel3XL } from 'react-device-frames';

function App() {
  return (
    <div className="App">
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <Pixel3XL screenshot={''}/>
      </div>
      <div class="p-4 md:w-1/3">
        <Pixel3XL screenshot={''}/>
      </div>
      <div class="p-4 md:w-1/3">
        <Pixel3XL screenshot={''}/>
      </div>
      
     
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
