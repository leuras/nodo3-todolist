import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'

import { 
  ContactsOutlined, 
  FireOutlined,
  SearchOutlined, 
  SoundOutlined,
  TeamOutlined , 
  TrophyOutlined, 
  UnorderedListOutlined
} from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu

const AppMenu = () => {

  const [openedKeys, setOpenedKeys] = useState(['subMenuTasks', 'subMenuPeople'])
  const onOpenChangeHandler = keys => setOpenedKeys(keys)

  return (
    <Sider width={ 200 }>
      <Menu mode="inline" openKeys={ openedKeys } onOpenChange={ onOpenChangeHandler } style={{ height: '100%', borderRight: 0 }}>
        <SubMenu key="subMenuTasks" icon={ <UnorderedListOutlined /> } title="Tasks">
          <Menu.Item key="menuItemAllTasks" icon={ <FireOutlined /> }>
            All Tasks
            <Link to="/home" />
          </Menu.Item>
          <Menu.Item key="menuItemCompletedTaks" icon={ <TrophyOutlined /> }>
            Completed
            <Link to="/tasks/completed" />
          </Menu.Item>
          <Menu.Item key="menuItemPendingTasks" icon={ <SoundOutlined /> }>
            Pending
            <Link to="/tasks/pending" />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="subMenuPeople" icon={ <TeamOutlined /> } title="People">
          <Menu.Item key="menuItemContacts" icon={ <ContactsOutlined /> }>
            Contacts
            <Link to="/people/contacts"/>
          </Menu.Item>
          <Menu.Item key="menuItemSearchContacts" icon={ <SearchOutlined /> }>Search</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default AppMenu