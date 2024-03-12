import style from './style.module.scss'
import {IProps} from "./props";
import {useEffect, useState} from "react";
import {Flex, Spin} from "antd";
import {ReloadOutlined} from "@ant-design/icons";
import {getLastBlockNumber} from "blockchain-smart-contract-reader"

export default function Component({}: IProps) {
    const [blockNumber, setBlockNumber] = useState<number>(0)
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function fetchHHandler() {
        setIsLoading(true)
        getLastBlockNumber().then((res) => {
            setBlockNumber(res)
        }).catch((err) => {
            setError(err.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    useEffect(() => {
        fetchHHandler()
    }, [])

    return (
        <Spin spinning={isLoading}>
            <div className={style.container}>

                <Flex gap={20} justify={"center"}>
                    <div>Last Block Number</div>
                    <div><ReloadOutlined onClick={() => {
                        fetchHHandler()
                    }}/></div>

                </Flex>
                <div>{blockNumber}</div>
                <div className={style.errorMessage}>{error}</div>
            </div>
        </Spin>
    )
}