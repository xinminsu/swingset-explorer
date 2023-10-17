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
    Button, Table,
} from 'antd';

import ULayout from '../components/ulayout'
import Sidebar from '../components/sidebar'
import React, {useState} from "react";
import {ColumnsType} from "antd/es/table";

const { TextArea } = Input;

const {
    Header,
    Content,
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

interface DataType {
    hash: React.Key;
    from: string;
    total_amount: number;
    when: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Hash',
        dataIndex: 'hash',
    },
    {
        title: 'Type',
        dataIndex: 'type',
    },
    {
        title: 'From',
        dataIndex: 'from',
    },
    {
        title: 'To',
        dataIndex: 'to',
    },{
        title: 'Total Amount',
        dataIndex: 'total_amount',
    },{
        title: 'When',
        dataIndex: 'when',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        hash: i,
        from: `BBAACC${i}${i}`,
        total_amount: 32,
        when: `${i} minutes ago`,
    });
}

const Index: NextPageWithLayout = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <section>
            <Head>
                <title>Agoric Blockchain Explorer</title>
            </Head>

            <Content style={{ padding: 48 }}>
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                            Reload
                        </Button>
                        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                        </span>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
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
