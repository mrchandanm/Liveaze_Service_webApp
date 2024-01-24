import React from 'react';
import { AppstoreOutlined, SettingOutlined,BulbTwoTone  } from '@ant-design/icons';
import {MdElectricalServices} from 'react-icons/md'
import {GiTap,GiWoodAxe} from 'react-icons/gi'
import {FaPaintRoller} from 'react-icons/fa'
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Electrician', 'sub1', <MdElectricalServices style={{fontSize:"30px", color:"green"}} />, [
    getItem('Fan Repair', 'fan-repair'),
    getItem('Refrigerator Repair', 'refrigerator-repair'),
    getItem('Ac Repairer', 'ac-repaire'),
    getItem('Cooler Repairer', 'cooler-repairer'),
  ]),
  getItem('Plumber', 'sub2', <GiTap style={{fontSize:"30px", color:"green"}} />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Carpenter', 'sub4', <GiWoodAxe style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Painter', 'sub5', <FaPaintRoller style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
    getItem('Option 15', '15'),
    getItem('Option 16', '16'),
  ]),
  getItem('House Services', 'sub6', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 17', '17'),
    getItem('Option 18', '18'),
    getItem('Option 19', '19'),
    getItem('Option 20', '20'),
  ]),
  getItem('Appliances Repair', 'sub7', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 21', '21'),
    getItem('Option 22', '22'),
    getItem('Option 23', '23'),
    getItem('Option 24', '24'),
  ]),
  getItem("abc repair", 'sub8', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 25', '25'),
    getItem('Option 26', '26'),
    getItem('Option 27', '27'),
    getItem('Option 28', '28'),
  ]),
  getItem('xyz Repair', 'sub9', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 29', '29'),
    getItem('Option 30', '30'),
    getItem('Option 31', '31'),
    getItem('Option 32', '32'),
  ]),
  getItem('pqr Repair', 'sub10', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 331', '321'),
    getItem('Option 33', '33'),
    getItem('Option 34', '34'),
    getItem('Option 35', '35'),
  ]),
  getItem('stuvw Repair', 'sub11', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 36', '36'),
    getItem('Option 37', '37'),
    getItem('Option 38', '38'),
    getItem('Option 39', '39'),
  ]),
  getItem('xyzpqr Repair', 'sub12', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 40', '40'),
    getItem('Option 41', '41'),
    getItem('Option 42', '42'),
    getItem('Option 43', '43'),
  ]),
  getItem('abcde Repair', 'sub13', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 44', '44'),
    getItem('Option 45', '45'),
    getItem('Option 46', '46'),
    getItem('Option 47', '47'),
  ]),
  getItem('fghi Repair', 'sub14', <SettingOutlined style={{fontSize:"30px", color:"green"}}/>, [
    getItem('Option 48', '48'),
    getItem('Option 49', '49'),
    getItem('Option 50', '50'),
    getItem('Option 51', '51'),
  ]),
];

// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const HomePageMenu = ({setSelect}) => {

  return (
    <>
    <h4 className='text-center bg-success' style={{color:"white"}}>Services</h4>
    <Menu
    onClick={(e)=>{
        setSelect(e.key)
    }}
      mode="inline"
    //   openKeys={openKeys}
    //   onOpenChange={onOpenChange}
      style={{
        width: 200,
      }}
      items={items}
    />
    </>
  );
};
export default HomePageMenu;