import type { NextPageWithLayout } from './_app'
import Head from 'next/head';
import {
    Layout,
    Form,
    Select,
    Input,
    DatePicker,
    Switch,
    Slider,
    Button,
} from 'antd';

import ULayout from '../components/ulayout'
import Sidebar from '../components/sidebar'

const { TextArea } = Input;

const {
    Header,
    Content,
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

const Index: NextPageWithLayout = () => {
    return (
        <section>
            <Head>
                <title>Agoric Blockchain Explorer</title>
            </Head>

            <Content style={{ padding: 48 }}>

            </Content>
        </section>
    )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <ULayout>
            <Sidebar />
            {page}
        </ULayout>
    )
}
