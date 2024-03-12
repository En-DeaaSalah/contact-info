import {FormProps} from "antd";

export interface IProps<T> {
    formProps: FormProps<T>
    isLoading: boolean
}