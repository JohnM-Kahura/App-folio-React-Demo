import { IPhoneX } from 'react-device-frames';

function App({screenshots}) {

  return (
    <div className="App">
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

     {/* {screenshots.map((screens)=> {
      return (
        <div class="p-4 md:w-1/4 h-96">
        <IPhoneX screenshot={screens}/>
      </div>
      )
     } )} */}
      <div class="p-4 md:w-1/4 h-96">
        <IPhoneX screenshot={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
      </div>
      
      
     
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
