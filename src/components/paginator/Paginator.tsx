import React from "react";
import { Pagination, Button } from "antd";
import { LeftOutlined, RightOutlined, EllipsisOutlined } from "@ant-design/icons";

interface PaginatorProps {
    totalItemCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
                                                        totalItemCount,
                                                        pageSize,
                                                        currentPage,
                                                        onPageChange,
                                                    }) => {
    const itemRender = (
        page: number,
        type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
        originalElement: React.ReactNode
    ) => {
        if (type === "prev") {
            return <Button type="primary" shape="circle" icon={<LeftOutlined />} />;
        }
        if (type === "next") {
            return <Button type="primary" shape="circle" icon={<RightOutlined />} />;
        }
        if (type === "jump-prev" || type === "jump-next") {
            return <Button type="default" shape="circle" icon={<EllipsisOutlined />} />;
        }
        return (
            <Button
                type={page === currentPage ? "primary" : "default"}
                onClick={() => onPageChange(page)}
            >
                {page}
            </Button>
        );
    };

    return (
        <Pagination
            current={currentPage}
            total={totalItemCount}
            pageSize={pageSize}
            onChange={onPageChange}
            showSizeChanger={false}
            itemRender={itemRender}
        />
    );
};
