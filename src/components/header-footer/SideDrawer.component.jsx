import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({open, onClose}) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -80
        });
        onClose(false);
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={()=> onClose(false)}
        >
            <List component="nav">
                {
                    ["520 快乐", "我们", "去年的今天", "7月 生日", "蛋黄 & 泡芙", "3月 至今", "毕业 展望"].map((text, index) => (
                        <ListItem key={index} button onClick={()=> scrollToElement(text)}>
                            {text}
                        </ListItem>    
                    ))
                }
            </List> 
        </Drawer>
    );
};

export default SideDrawer;