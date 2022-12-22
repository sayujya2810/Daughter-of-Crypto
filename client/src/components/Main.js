
import React, { useEffect, useState } from 'react'
import "./styles/Main.css"
import Moralis from 'moralis'
import AOS from 'aos';
import ModalComp from "./ModalComp"
import "aos/dist/aos.css"
import {MerkleTree} from 'merkletreejs'
import keccak256 from 'keccak256';
import { Alert, Button, Snackbar } from '@mui/material'



// import 'bootstrap/dist/css/bootstrap.min.css';



const Main = (props) => {

  const flag = props.child2;
  const userAddress = props.userAddress_



  // const [show, setShow] = useState(false);
  

      useEffect(() => {
      AOS.init({
        duration : 1000
      });
    }, []);

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseError = () => setOpenError(false);

  const [errorMessage, setErrorMessage] = useState("")

const handleErrorClick = () => {
      setOpenError(true);
    }

const [fetchedAddresses, setFetchedAddresses] = useState([{
  address:'',
  email:''
}])

useEffect(() => {
  fetch('/read').then(res=>{
    if(res.ok){
      return res.json();
    }
  }).then(resJson => setFetchedAddresses(resJson))
})



  function mint(){


  if(userAddress === ""){

    setErrorMessage("Please connect your Wallet first!")
    handleErrorClick()
  }

  let addressList=[]


  fetchedAddresses.map(obj => {
    addressList.push(obj['address'].toLowerCase())
    console.log(obj)
  })

  console.log(addressList)

  console.log("userAddress : ", userAddress)

  let userAddressLower = userAddress.toLowerCase()
    for(let i=0;i<addressList.length;i++){
      if(addressList[i] === userAddressLower){
        
        try{

          let leafNodes = []
        addressList.map(addr => {
          console.log("addr:" , addr)
          leafNodes.push(keccak256(addr))
        });
  
        console.log("leafNodes",leafNodes)
        const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
        const rootHash = merkleTree.getRoot();
        
        console.log('Whitelist Merkle Tree\n', merkleTree.toString());
        console.log("Root Hash: ", rootHash);
        const claimingAddress = keccak256(userAddress);

        const hexProof = merkleTree.getHexProof(claimingAddress);
        console.log(hexProof);

        console.log('\n');
        console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));

        let options = {
          contractAddress:"0x02FC9Bf7D97200DFe2Dc789047B6fa5320Ae9bBF",
          functionName:"mintNFTs", 
          abi:[{"inputs": [	{"internalType": "uint256","name": "_count","type": "uint256"}],"name": "mintNFTs","outputs": [],"stateMutability": "payable","type": "function"}],
          // params:{_count: 1 },
          params:{_count: 1, _merkleProof: hexProof},
          msgValue: Moralis.Units.ETH(0.00001)
        }
  
        Moralis.executeFunction(options);
        }

        catch{

        }

      }

      else{
        return 0;
      }



    }

  console.log(addressList)

  



      
}


  return (
    <section id='main'>
        {/* <div className='triangle1' /> */}
        {/* <img src='./images/Main.jpg' /> */}
        <div data-aos="zoom-in" id='main-content'>
            <img src='./images/small-logo-02.png' />
            <div className='btns' style={{display:"flex"}}>
              {/* <button id="mint-btn" onClick={mint} >MINT</button> */}
              {/* <ModalComp   /> */}

              {/* {flag === true ? <ModalComp userAddress_inner={userAddress} /> : <></>} */}
              <ModalComp userAddress_inner={userAddress} />
              <button style={{backgroundColor:"#ab203d", color:"white", border:"none", padding:"1.5rem 3rem", fontSize:"35px", borderRadius:"4px"}} onClick={mint}>Mint</button>
            </div>
            


            {/* <Button variant="primary" onClick={() => setShow(true)} >Verify</Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{backgroundColor:"rgba(0,0,0,0.3)", backdropFilter:"blur(7px)"}}
      >
        <Modal.Header closeButton  >
          <Modal.Title style={{color:"black"}} id="example-custom-modal-styling-title" >
             Get yourself Whitelisted! 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal> */}
            
              {/* <OverlayTrigger overlay={<Tooltip style={{backgroundColor:"#ab203d"}} id="tooltip-disabled">Minting Not Started</Tooltip>}>
                <span className="d-inline-block">
                  <Button disabled style={{ pointerEvents: 'none' }}>
                    Disabled button
                  </Button>
                </span>
              </OverlayTrigger>
              <Button className='primary'>Whitelist me</Button> */}
            {/* <Button variant="dark" >Mint here</Button> */}
            {/* <button>Click</button> */}
            {/* <input type="text"></input> */}
            {/* <p>Tempor ut culpa eu proident esse non est cillum tempor do.  Mollit aliquip voluptate proident dolore veniam non commodo irure proident labore fugiat dolor. Esse tempor commodo commodo sit incididunt elit quis minim tempor ullamco adipisicing esse exercitation.</p> */}
        </div>
        {/* <ModalComp /> */}


        <div>

          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:"green" }}>
              Voila! Successfully minted
            </Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={4000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', backgroundColor:"red" }}>
              {errorMessage}
            </Alert>
          </Snackbar>


        </div>
    </section>
  )
}

export default Main