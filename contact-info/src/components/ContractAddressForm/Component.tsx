import style from './style.module.scss'
import {Button, Form, Input} from "antd";
import {IProps} from "./props";

export default function Component<T>({formProps, isLoading}: IProps<T>) {
    return (<div className={style.container}>
        <Form {...formProps} layout={"vertical"}>

            <Form.Item
                label={<div className={style.label}>Contact Address</div>}
                name={"address"}
                rules={[
                    {
                        required: true,
                        message: "this field this required!"
                    }
                ]}>
                <Input className={style.input} placeholder={"Enter Your Contact Address Here"}/>
            </Form.Item>
            <Button htmlType={"submit"}
                    shape={"round"}
                    loading={isLoading}
                    className={style.button}>Show Info</Button>
        </Form>
    </div>)
}