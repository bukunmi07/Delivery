import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

function App() {
  // const [count, setCount] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <body>
      <nav className='navbar'>
        <img src="realmdg.PNG" alt="react logo" style={{ width: '200px',height:'80px', paddingTop:'10px',paddingLeft:'50px'}}/>

        <div className="offcanvas">
            <ul className="navbarnav ">
              <li className="navlist">
                <a href="index" className="navlink ">
                  <h5> Home </h5>
                </a>
              </li>
              <li className="navlist">
                <a href="#resources" className="navlink ">
                  <h5> About </h5>
                </a>
              </li>
              <li className="navlist">
                <a href="#services" className="navlink ">
                  <h5> Services </h5>
                </a>
              </li>
              <li className="navlist">
                <a href="#articles" className="navlink ">
                  <h5> Contact </h5>
                </a>
              </li>
              </ul>
        </div>

      <div className='logsign'>
      <button class="log1" onClick={onOpen} >Login</button>
      <button class="ask"  ref={finalRef} onClick={onOpen}  >Sign up</button>
      {/* <Button className='log1' onClick={onOpen}>Login</Button> */}
      {/* <Button ml={4} ref={finalRef}>Sign up</Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent maxWidth={470} height={510}>
          <ModalHeader className='MH'>
          <nav className="navheader">
            <div className="logsign-btn2">
              <a href="" className="logger">LOG IN</a>
          </div> 

          <div className="logsign-btn3">
            <a href="" className="logger">SIGN UP</a>
          </div> 
          </nav>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6} pl={4}>
          <div className="b5">
            <label className="ER">EMAIL ADDRESS</label>
            <input className="b2" type="text" id="" name="email" placeholder="Email" />
          </div>
          <div className="b6">
            <label className="ER">PASSWORD</label>
            <input className="b2" type="password" name="password" id="" placeholder="Password"/>
          </div>
          <div id="passwordHelpBlock" className="b7">
            <a href="#" className="password">Forgot Password ?</a>
          </div>
          <div className="b8">
            <input type="checkbox" required="" className=""/>
            <span className="black">Remember Me</span>
          </div>
          
          <div className="b9">
          <button className="sing" >LOG IN</button>
          </div>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent maxWidth={470} height={510}>
          <ModalHeader className='MH'>
          <nav className="navheader">
            <div className="logsign-btn2">
              <a href="" className="logger">LOG IN</a>
          </div> 

          <div className="logsign-btn3">
            <a href="" className="logger">SIGN UP</a>
          </div> 
          </nav>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6} pl={4}>
          <div className="b5">
            <label className="ER">EMAIL ADDRESS</label>
            <input className="b2" type="text" id="" name="email" placeholder="Email" />
          </div>
          <div className="b6">
            <label className="ER">PASSWORD</label>
            <input className="b2" type="password" name="password" id="" placeholder="Password"/>
          </div>
          <div id="passwordHelpBlock" className="b7">
            <a href="#" className="password">Forgot Password ?</a>
          </div>
          <div className="b8">
            <input type="checkbox" required="" className=""/>
            <span className="black">Remember Me</span>
          </div>
          
          <div className="b9">
          <button className="sing" >LOGs IN</button>
          </div>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
    </nav>

    <div className='innerbody'>
        <div className='offer'>
           <p>We offer a wide <br/> range of logistics <br/>  solutions.</p>
        </div>
        <div className='egc'>
           <h4>1 &nbsp; Easy booking</h4>
           <h4>2 &nbsp; Global Coverage</h4>
           <h4>3 &nbsp; Customer Support</h4>
        </div>
      
      <div>
      <img className='dbike' src="delivery guy ng1.png" alt="react logo" style={{ width: '550px',height:'550px',marginTop:'-390px',marginLeft:'800px',position:'absolute'}}/>
      </div>

      <div className='getstarted'>
      <a href="#getstarted" className="gs"> Get Started </a>
      </div>

      </div>
    </body>
    </>
  );
}

export default App;
