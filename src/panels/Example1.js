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
import { platform, IOS, Separator, Footer } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';


import persik from '../img/persik.png';
import './Persik.css';

const Example1 = ({ id, go, fetchedUser }) => (
class Example extends React.Component {




	
		<PanelHeader>Что такое TS3?</PanelHeader>
		<Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28MarketOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28Game /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>
        
     
        <Group title="Основное понятие">
           <Div>
           TeamSpeak — компьютерная программа, предназначенная для голосового общения в сети Интернет посредством технологии VoIP.
           </Div>
        </Group>

        <Group title="Для кого эта программа?">
           <Div>
            Программы этого типа предназначены прежде всего для геймеров, но могут использоваться везде, где необходима голосовая связь и координация большой группы людей.
           </Div>
        </Group>

        <Group title="Ссылки на ресурсы">
        <div>
        <center>
            <br/>
            <Button size="xl" level="2" component="a" href="https://www.teamspeak.com">Оффициальный сайт</Button>
            <br/>
            <Button size="xl" level="2" component="a" href="http://yandex.ru/clck/jsredir?bu=hiup6s&from=yandex.ru%3Bsearch%2F%3Bweb%3B%3B&text=&etext=8760.u8vXQ0QlKbLDuHGXaMokD5UVS6uSJztsYoEOoqkDa_M.eb6d557e48813a30399b90d3f2fc319ca46a3d72&uuid=&state=jLT9ScZ_wbo,&&cst=AiuY0DBWFJ4CiF6OxvZkNPN0doJc_zen-b-FGgyyExoljCFmE_huMYyrylvueCQJXsv0cBTqQoUO3EXhgYrYQ9OeZlmcAy_TZ-7aC0zliep77DcTQYOI3Z3jYBSo7fuaKO4jN_DXmCugfIYUzjBZYD0IvCdh6L4CT2uZV6qEr-ngr3uWbpMwbjvR3L8D4YyF8ZlCsBi-3Tv2qbnRGLJDiAgUyBfG8nc9QMzlpsfBPLYRxOksi5AWvsA93SbzqqEmRlp7Fcpkl_eZar5sWlGVVG58YoBtNhGykqvr1kSF5I_bQgeEjMijA5RDiaZgJ3Eq3_LL8Zp-NExAPrUAQlQB5Oxa3L0lCt8gxDZSRI4jXYhqY0u08gE4ylTgkYvx0gQMf4NpLMKIcU711mAFvMqwZdHU0Z3xdi79xit0PdZSphmnTnEiYITgJlJ3m3frlCi32iYG-zOakbk,&data=UlNrNmk5WktYejY4cHFySjRXSWhXQzdLY3hSTVNzV2ZCVXgzZzFIWmJXemRtSl9GU3pqWkpWdmVCZXY4bjUybmhES3hDa19pNlQxMVItRElnTjFhVVdMbjhnQm5yRjZkVFZLR0tDXzB2ZHBjNTNDRldFMmFtZmdjWXNVMTl5U1Y,&sign=a495ed323df03378ad453c1c2f78ae06&keyno=0&b64e=2&ref=orjY4mGPRjk5boDnW0uvlrrd71vZw9kpBjcjw4i9ONmmvAMITn9118mwjd0mAmmrog0M3ZhZUW_8ldAbN9n7SQ,,&l10n=ru&rp=1&cts=1576946962454%40%40events%3D%5B%7B%22event%22%3A%22click%22%2C%22id%22%3A%22hiup6s%22%2C%22cts%22%3A1576946962454%2C%22fast%22%3A%7B%22organic%22%3A1%7D%2C%22service%22%3A%22web%22%2C%22event-id%22%3A%22k4fti7mekf%22%7D%5D&mc=3.0957952550009344&hdtime=6951.455">Статья в википедии</Button>
            <br/>
        </center>
        </div>
        </Group>
        
        <Group title="Ссылки на скачивание">
        <div>
        <center>
            <br/>
            <Button size="xl" level="2" component="a" href="https://www.teamspeak.com/ru/downloads/">Скачать TS3 для ПК</Button>
            <br/>
            <Button size="xl" level="2" component="a" href="https://play.google.com/store/apps/details?id=com.teamspeak.ts3client&hl=ru">Скачать TS3 для Android</Button>
            <br/>
            <Button size="xl" level="2" component="a" href="https://apps.apple.com/ru/app/teamspeak-3/id577628510">Скачать TS3 для IOS</Button>
            <br/>
            </center>
        </div>
        <br/>
        <br/>
        <br/>
        </Group>

        <Group title="Плагины">
        <Div>
        <i>На TS3 так же имеются плагины. Они встраиваются в клиент и расширяют его функционал, но приложение на Android и IOS пока что не поддерживает плагины</i><br/><br/>
        <Button size="xl" level="2" component="a" href="https://www.myteamspeak.com/?search=&type=PLUGIN">Перейти к плагинам</Button>
        </Div>
        </Group>

        <Group title="OwerWolf">
        <Div>
        <b>Чтобы упросить работу с TeamSpeak есть OwerWolf. Это сборник плагинов для игр. В OwerWolf можно установить так называемый "TeamSpesk OwerLay" и разговаривать с друзьями во время игры. Туда можно скачивать плагины и для других игр, например: Minecraft - Есть сборник крафтов и др.</b><br/><br/>
        <Button size="xl" level="2" component="a" href="https://www.overwolf.com/">Скачать OwerWolf</Button>
        <br/>
        <center>
        Так же есть и обычающее видео.<br/><br/>
        <iframe width="300" height="260" src="https://www.youtube.com/embed/Ks5po965K_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        </Div>
        </Group>

        <Group title="Полезные видеоролики">
        <Div>
        <center>
        <iframe width="300" height="260" src="https://www.youtube.com/embed/Del1IEHmJ5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <Separator style={{ margin: '12px 0' }} />
        <iframe width="300" height="260" src="https://www.youtube.com/embed/TTASrXvUqas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Separator style={{ margin: '12px 0' }} />
        <iframe width="300" height="260" src="https://www.youtube.com/embed/rvJrM88zgS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        </Div>
        
        
        </Group>
        <Footer>Источники: YouTube, Wikipedia, TeamSpeak, OwerWolf</Footer>
       <br/>
      <br/>
       <br/>
      <br/>

	 
  }
);


Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Example1;