import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Spinner from '@vkontakte/vkui/dist/components/Spinner/Spinner'
import { Separator, platform } from '@vkontakte/vkui';
import { PanelHeaderBack, Epic, View, Switch } from '@vkontakte/vkui';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

import persik from '../img/persik.png';
import './Persik.css';



class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activeTab1: 'recomendations',
        activeTab2: 'all',
        activeTab3: 'all',
        activeTab4: 'dial',
        activeTab5: 'events',
        activeTab6: 'all',

      };

      
    }

    render () {

      return (
        <Group >
      <Tabs type="buttons">
        <HorizontalScroll>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'all' })}
                    selected={this.state.activeTab6 === 'all'}
                  >
                    IT
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'users' })}
                    selected={this.state.activeTab6 === 'users'}
                  >
                    VR/AR
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'groups' })}
                    selected={this.state.activeTab6 === 'groups'}
                  >
                    Аэро
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'diz' })}
                    selected={this.state.activeTab6 === 'diz'}
                  >
                    Дизайн
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'rob' })}
                    selected={this.state.activeTab6 === 'rob'}
                  >
                    Робототехника
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'hai' })}
                    selected={this.state.activeTab6 === 'hai'}
                  >
                    Хайтек
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'sta' })}
                    selected={this.state.activeTab6 === 'sta'}
                  >
                    КвантумСтарт
                  </TabsItem>
           </HorizontalScroll>
          </Tabs>
          {this.state.activeTab6 === 'all' ? <Div><center>
          Тут будут задания IT</center></Div> : null }

          {this.state.activeTab6 === 'users' ?
          <Div>
          <center>
          Тут будут задания AR/VR<br/>
          <Separator style={{ margin: '12px 0' }} />
          
          <h3>Тестовое задание</h3>
          <b>Задача: Сделать что то, чтоб было как то.</b><br/>
          <i>Дополнительно: тут будут доп. данные</i><br/>
          <u/>Цена выполнения: 3 балла<u/><br/>
          <Separator style={{ margin: '12px 0' }} />
          </center>
          </Div> : null }

          {this.state.activeTab6 === 'groups' ? <Div><center>
          Тут будут задания Аэро</center></Div> : null }

          {this.state.activeTab6 === 'diz' ? <Div><center>
          Тут будут задания Дизайн</center></Div> : null }

          {this.state.activeTab6 === 'rob' ? <Div><center>
          Тут будут задания Робототехника</center></Div> : null }

          {this.state.activeTab6 === 'hai' ? <Div><center>
           Тут будут задания Хайтек</center></Div> : null }

          {this.state.activeTab6 === 'sta' ? <Div><center>
           Тут будут задания КвантумСтарт</center></Div> : null }
          </Group>

          
      )
    }
  }

export default Example;