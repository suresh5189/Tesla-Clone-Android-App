import { faChevronRight, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import items from '../../../asset/items';

import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from "react-native";
import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.menuItems}>
        {items.map(item=>(
        <TouchableOpacity key={item.id}>
        <View style={styles.menuRow}>
            <FontAwesomeIcon style={styles.icon} size={24} icon={item.icon}/>
            <View style={styles.menuTextBox}>
                <Text style={styles.menuText}>{item.title}</Text>
                {item.subTitle && (
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                )}
            </View>
            <FontAwesomeIcon style={styles.arrowIcon} size={24} icon={faChevronRight}/>
        </View>
        </TouchableOpacity>
        ))}
    </View>
  )
}

export default Menu;
