import React, {
    useEffect,
    useState,
    useRef
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    connect
} from "./redux/blockchain/blockchainActions";
import {
    fetchData
} from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import SocialFollow from "./SocialFollow"
import whitlistData from './whitelist.json';
import {
    config
} from "@fortawesome/fontawesome-svg-core";

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button `
  padding: 14px;
  border-radius: 30px;
  border: none;

  background:  var(--buttons);
  padding: 15px 15px 15px;
  font-weight: bold;
  font-size: 20px;
  font-family: 'PT Mono', monospace;
  color: var(--secondary-text);
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :hover {
    background-color: var(--buttons-hover);
    color: ;
  }
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button `
  padding: 2px;
  border-radius: 20px;
  border: none;
  background: var(--buttons);
  
  font-color:  ;
  font-weight: ;
  font-size: 25px;
  color: var(--secondary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :hover {
    background-color: var(--buttons-hover);
    color: #00f857;
  }

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div `
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 90%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img `
  border-radius: 0px; 
  padding-top: 0px;
  @media (min-width: 7px) {
    width: 80px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img `
  
border-radius: 20px;
width: 720px;
max-width:350px;

`;

export const StyledLink = styled.a `
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click Mint to mint your NFT`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
            NAME: "",
            SYMBOL: "",
            ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        MAX_MINT: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: "",
        SHOW_BACKGROUND: false,
        WHITELIST: false,
    });

    const isWhitList = () => {
        let $isWhite = false
        whitlistData.map((item) => {
            if (blockchain.account.toLowerCase() == item.wallet.toLowerCase()) {
                $isWhite = true
            }
        });

        return $isWhite;
    };

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                console.log(receipt);
                setFeedback(
                    `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 2) {
            newMintAmount = 2;
        }
        setMintAmount(newMintAmount);
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("./config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    return ( <
        s.Screen >
        <
        s.Container flex = {
            1
        }
        ai = {
            "center"
        }
        style = {
            {
                padding: 24,
                backgroundColor: "var(--primary)"
            }
        }
        image = {
            CONFIG.SHOW_BACKGROUND ? "/config/images/bg.jpeg" : null
        } >
        <
        StyledLogo alt = {
            "logo"
        }
        src = {
            "/config/images/logo.png"
        }
        /> <
        s.SpacerSmall / >

        <
        ResponsiveWrapper flex = {
            1
        } >
        <
        ResponsiveWrapper flex = {
            1
        }
        style = {
            {
                backgroundColor: "var(--sub-background)",
                padding: 50,
                borderRadius: 24,
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                maxWidth: "1140px",
                margin: "auto",
            }
        }
        test >
        <
        s.Container flex = {
            1
        }
        jc = {
            "center"
        }
        ai = {
            "center"
        } >
        <
        s.TextTitle style = {
            {
                color: "var(--sub-titels)",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
            }
        } >
        MINTING IS NOW LIVE <
        /s.TextTitle> {
            blockchain.account === "" ||
                blockchain.smartContract === null ? ( <
                    >
                    <
                    s.TextTitle style = {
                        {
                            textAlign: "center",
                            fontSize: 25,
                            fontWeight: "bold",
                            color: "#575f61",
                        }
                    } >
                    CONNECT YOUR WALLET TO MINT <
                    /s.TextTitle> <
                    />
                ) : ( <
                    >
                    <
                    s.TextTitle style = {
                        {
                            textAlign: "center",
                            fontSize: 25,
                            fontWeight: "bold",
                            color: "var(--titels)",
                        }
                    } >
                    MINT YOUR {
                        CONFIG.NFT_NAME
                    } <
                    /s.TextTitle>


                    <
                    s.TextTitle style = {
                        {
                            textAlign: "center",
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "var(--accent-text)",
                        }
                    } >
                    {
                        data.supply
                    }
                    / {CONFIG.MAX_SUPPLY} <
                    /s.TextTitle>


                    <
                    />
                )
        } <
        s.SpacerSmall / > {
            Number(data.supply) >= CONFIG.MAX_SUPPLY ? ( <
                >
                <
                s.TextTitle style = {
                    {
                        textAlign: "center",
                        color: "var(--accent-text)"
                    }
                } >
                The sale has ended. <
                /s.TextTitle> <
                s.TextDescription style = {
                    {
                        textAlign: "center",
                        color: "var(--accent-text)"
                    }
                } >
                You can still find {
                    CONFIG.NFT_NAME
                }
                on <
                /s.TextDescription> <
                s.SpacerSmall / >
                <
                StyledLink target = {
                    "_blank"
                }
                href = {
                    CONFIG.MARKETPLACE_LINK
                } > {
                    CONFIG.MARKETPLACE
                } <
                /StyledLink> <
                />
            ) : ( <
                    >
                    <
                    s.TextTitle style = {
                        {
                            textAlign: "center",
                            color: "var(--accent-text)",
                            fontWeight: 500
                        }
                    } >
                    Mint For {
                        CONFIG.DISPLAY_COST
                    } {
                        " "
                    } {
                        CONFIG.NETWORK.SYMBOL
                    } <
                    /s.TextTitle>

                    <
                    s.TextTitle style = {
                        {
                            textAlign: "center",
                            color: "var(--accent-text)",
                            fontWeight: 100,
                            fontSize: 18
                        }
                    } >
                    Max Mint {
                        CONFIG.MAX_MINT
                    } <
                    /s.TextTitle>

                    <
                    s.SpacerSmall / > {
                        blockchain.account === "" ||
                        blockchain.smartContract === null ? ( <
                            s.Container ai = {
                                "center"
                            }
                            jc = {
                                "center"
                            } >
                            <
                            s.TextDescription style = {
                                {
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                    fontWeight: 500,

                                }
                            } >
                            Connect to the {
                                CONFIG.NETWORK.NAME
                            }
                            network <
                            /s.TextDescription> <
                            s.SpacerSmall / >
                            <
                            StyledButton className = "btn-43"
                            onClick = {
                                (e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    getData();
                                }
                            } >
                            CONNECT <
                            /StyledButton> {
                                blockchain.errorMsg !== "" ? ( <
                                    >
                                    <
                                    s.SpacerSmall / >
                                    <
                                    s.TextDescription style = {
                                        {
                                            textAlign: "center",
                                            color: "var(--accent-text)",
                                        }
                                    } >
                                    {
                                        blockchain.errorMsg
                                    } <
                                    /s.TextDescription> <
                                    />
                                ) : null
                            } <
                            /s.Container>
                        ) : ( <
                                >
                                <
                                s.TextDescription style = {
                                    {
                                        textAlign: "center",
                                        color: "var(--accent-text)",
                                    }
                                } >
                                {
                                    feedback
                                } <
                                /s.TextDescription> <
                                s.SpacerMedium / >
                                <
                                s.Container ai = {
                                    "center"
                                }
                                jc = {
                                    "center"
                                }
                                fd = {
                                    "row"
                                } >
                                <
                                StyledRoundButton style = {
                                    {
                                        lineHeight: 0.4
                                    }
                                }
                                disabled = {
                                    claimingNft ? 1 : 0
                                }
                                onClick = {
                                    (e) => {
                                        e.preventDefault();
                                        decrementMintAmount();
                                    }
                                } >
                                -
                                <
                                /StyledRoundButton> <
                                s.SpacerMedium / >
                                <
                                s.TextDescription style = {
                                    {
                                        textAlign: "center",
                                        color: "var(--accent-text)",
                                        fontSize: "18px",
                                    }
                                } >
                                {
                                    mintAmount
                                } <
                                /s.TextDescription> <
                                s.SpacerMedium / >
                                <
                                StyledRoundButton disabled = {
                                    claimingNft ? 1 : 0
                                }
                                onClick = {
                                    (e) => {
                                        e.preventDefault();
                                        incrementMintAmount();
                                    }
                                } >
                                +
                                <
                                /StyledRoundButton> <
                                /s.Container> <
                                s.SpacerSmall / >
                                <
                                s.Container ai = {
                                    "center"
                                }
                                jc = {
                                    "center"
                                }
                                fd = {
                                    "row"
                                } > {
                                    (isWhitList() || CONFIG.WHITELIST == false ? ( <
                                            StyledButton className = "btn-43"
                                            disabled = {
                                                claimingNft ? 1 : 0
                                            }
                                            onClick = {
                                                (e) => {
                                                    e.preventDefault();
                                                    claimNFTs();
                                                    getData();
                                                }
                                            } >
                                            {
                                                claimingNft ? "Minting..." : "MINT"
                                            } <
                                            /StyledButton>
                                        ) : ( <
                                            s.TextDescription style = {
                                                {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)",
                                                    fontSize: "20px",
                                                }
                                            } >
                                            Sorry You are not whitelisted <
                                            /s.TextDescription>)
                                        )
                                    } <
                                    /s.Container> <
                                    />
                                )
                            } <
                            />
                    )
                } <
                s.SpacerMedium / >
                <
                /s.Container> <
                s.SpacerLarge / >
                <
                s.Container flex = {
                    1
                }
            jc = {
                "center"
            }
            ai = {
                "center"
            } >
            <
            StyledImg
            alt = {
                "example"
            }
            src = {
                "./config/images/nft.gif"
            }
            /> <
            /s.Container>

            <
            /ResponsiveWrapper> <
            s.SpacerMedium / >
            <
            /ResponsiveWrapper>

            <
            SocialFollow / >

            <
            s.TextDescription
            style = {
                {
                    textAlign: "center",
                    paddingTop: 30,
                    color: "var(--accent)",
                }
            } >


            СOPYRIGHT© 2022. ALL RIGHTS RESERVED. <
            /s.TextDescription>

            <
            /s.Container> <
            /s.Screen>
        );
    }

    export default App;