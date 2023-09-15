import React, { useState } from 'react';
import type { NextPageWithLayout } from './_app'
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import ULayout from '../components/ulayout'
import Sidebar from '../components/sidebar'

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

const Contract: NextPageWithLayout = () => {

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
        </section>
    )
}

export default Contract

Contract.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <ULayout>
            <Sidebar />
            {page}
        </ULayout>
    )
}
