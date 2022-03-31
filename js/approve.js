// approve function
const { ethers } = require("ethers");
  const { ethereum } = window;

const yourContractAddress = "0x61b99Af6375deA52843c7BED296a4372d106c8Df"; 
const contractInterface = [
    "function approve(address spender, uint256 amount) external returns (bool)", // appprove contract function
  ];
const tokenAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"; //token to migrate

let provider;
  let signer;
  let signerAddress;
  let tokenContract;

  const startFunction = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }],
    });
    provider = await new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    signerAddress = await signer.getAddress();
    tokenContract = await new ethers.Contract(
      tokenAddress,
      contractInterface,
      signer,
    );
  };
  startFunction();
  async function approveSpender() {
    tokenContract.approve(yourContractAddress, '10000000000000000000000');
  }