import './App.css';
//Flux/Redux
import { Counter } from './Counter';
import { Bank } from './HW/bank';

//import SimpleForm from "./form/asimpleform";
//import FormikForm from "./form/fromikForm";
import FormikFormWithValidate from "./form/formikFormWithValidate";

//translation language
import { Translanguage } from './Language/translanguage';

//QRcode
import Style1 from './Qrcode/style1';
import { Player } from 'video-react';

//Video
import Player1 from './Video/player1';

function App() {

  return (
    <div className='App'>

      {/* Flux/Redux */}
      <Counter />
      <hr></hr>
      <Bank />
      <hr></hr>
      {/* translation language */}
      <Translanguage />
      <hr></hr>
      {/* Formik/Yup */}
      <FormikFormWithValidate />
      <hr></hr>
      {/* QRcode */}
      <Style1 />
      <hr></hr>
      {/* Video */}
      <Player1 />
    </div >
  );
}

export default App;
