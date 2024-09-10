import React, {useState} from "react";

interface Tabs {
    title: string;
    content: React.ReactNode
}

interface TabsComponentProps {
    tabs: Tabs[];
}

export function Tabs({tabs}: TabsComponentProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="lg:text-lg">
            <div className="flex">
                { tabs &&
                    tabs.map((tab, index) => {
                    let Tab = <div key={index} className={`text-secondary-10 cursor-pointer ${index === activeTab ? 'text-secondary-400 font-bold' : ''}`} onClick={() => handleTabClick(index)}>
                        {tab.title}
                    </div>
                    if (index < tabs.length - 1) {
                        return (
                            <>{Tab}<span className={'text-secondary-10 px-2'}>|</span></>
                        )
                    } else {
                        return (
                            <>{Tab}</>
                        )
                    }
                })}
            </div>
            <div className=" pt-2 lg:pt-10 mb-7">
                {tabs[activeTab] && (
                    <p>{tabs[activeTab].content}</p>
                )}
            </div>
        </div>
    );
}

