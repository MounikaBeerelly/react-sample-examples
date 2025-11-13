import React, { useState } from "react";
import '../index.css';

const TabsComponent = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Tabs Component...</h2>
            <div className="button-group">
                {tabs.map((tab,index) => (
                    <button 
                        key = {index}
                        className={index === activeTab ? "active" : ''}
                        onClick={() => setActiveTab(index)}
                    >{tab.label}</button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}


const TabsList = () => {

    const tabs = [
        { 
            label: 'Home',
            content : <div>Home tab</div>
        },
        { 
            label: 'Contact',
            content : <div>Contact tab</div>
        },
        { 
            label: 'Settings',
            content : <div>Settings tab</div>
        }
    ]
    return (
        <TabsComponent tabs = {tabs}/>
    );
}

export default TabsList;