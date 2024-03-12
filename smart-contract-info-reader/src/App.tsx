import './App.css'
import {useState} from "react";
import {ContractAddressForm} from "./components/ContractAddressForm/index";
import {Col, Divider, Flex, Row} from "antd";
import {ShowLastBlockNumber} from "./components/ShowLastBlockNumber/index";
import {getUSDTBalance} from 'blockchain-smart-contract-reader'

function App() {
    const [balance, setBalance] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    return (
        <div className={'container'}>
            <div className={'main-title'}>Welcome with Smart Contract Info Reader</div>
            <Row style={{
                marginTop: 75
            }}>
                <Col span={24}
                     style={{
                         display: "flex",
                         justifyContent: "start"
                     }}>
                    <ShowLastBlockNumber/>
                </Col>
                <Divider/>
                <Col span={24}>
                    <Flex vertical gap={50}>

                        <ContractAddressForm<{
                            address: string
                        }>
                            isLoading={isLoading}
                            formProps={{
                                onChange: () => {
                                    setError("")
                                },
                                onFinish: ({address}) => {
                                    setIsLoading(true)
                                    getUSDTBalance({
                                        address: address,
                                        contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                                        contractABI: ['function balanceOf(address) view returns (uint256)']
                                    }).then((res) => {
                                        console.log(res)
                                        setBalance(res)
                                    }).catch((err) => {
                                        setError(err.message)
                                    }).finally(() => {
                                        setIsLoading(false)
                                    })
                                }
                            }}/>
                        {balance &&
                        <div> {`${balance} USDT`}</div>
                        }

                    </Flex>
                    <div className={'error-message'}>{error}</div>
                </Col>

            </Row>

        </div>
    )
}

export default App
